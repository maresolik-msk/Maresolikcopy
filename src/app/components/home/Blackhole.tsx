import React, { useEffect, useRef } from 'react';

export const Blackhole = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Create Canvas — use inline styles (not Tailwind classes) to avoid layout thrashing
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    mount.appendChild(canvas);

    const gl = canvas.getContext('webgl2', {
      antialias: false,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: false,
    });
    if (!gl) {
      console.error("WebGL2 not supported");
      return;
    }

    // Handle WebGL context loss gracefully
    let contextLost = false;
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      contextLost = true;
    };
    const handleContextRestored = () => {
      contextLost = false;
      init();
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    const vsSource = `#version 300 es
      in vec4 position;
      void main() {
        gl_Position = position;
      }
    `;

    const fsSource = `#version 300 es
      precision highp float;
      
      uniform vec2 iResolution;
      uniform float iTime;
      
      out vec4 fragColor;

      // --- CONFIG ---
      #define STEPS 120
      #define BH_RADIUS 1.0
      #define DISK_INNER 2.6
      #define DISK_OUTER 14.0
      
      // --- NOISE ---
      float hash(float n) { 
          return fract(sin(mod(n, 65536.0)) * 43758.5453123); 
      }

      // Gradient noise with quintic interpolation
      float gnoise(vec3 x) {
          vec3 p = floor(x);
          vec3 f = fract(x);
          vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

          float n = p.x + p.y * 157.0 + 113.0 * p.z;
          float a = hash(n + 0.0);
          float b = hash(n + 1.0);
          float c = hash(n + 157.0);
          float d = hash(n + 158.0);
          float e = hash(n + 113.0);
          float ff = hash(n + 114.0);
          float g = hash(n + 270.0);
          float h = hash(n + 271.0);

          return mix(mix(mix(a, b, u.x), mix(c, d, u.x), u.y),
                     mix(mix(e, ff, u.x), mix(g, h, u.x), u.y), u.z);
      }
      
      // FBM — 5 octaves (balanced quality vs performance)
      float fbm(vec3 p) {
          float f = 0.0;
          float a = 0.5;
          mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
          for (int i = 0; i < 5; i++) {
              f += a * gnoise(p);
              p.xy *= rot;
              p.yz *= mat2(0.7, 0.71, -0.71, 0.7);
              p *= 2.03;
              a *= 0.48;
          }
          return f;
      }

      // High-frequency detail layer — 5 octaves
      float fbmDetail(vec3 p) {
          float f = 0.0;
          float a = 0.5;
          mat2 rot = mat2(0.6, -0.8, 0.8, 0.6);
          for (int i = 0; i < 5; i++) {
              f += a * gnoise(p);
              p.xy *= rot;
              p *= 2.07;
              a *= 0.44;
          }
          return f;
      }

      void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
          
          // CAMERA: Telephoto cinematic view
          vec3 ro = vec3(0.0, 5.0, -38.0); 
          vec3 ta = vec3(0.0, 0.0, 0.0);
          
          vec3 fwd = normalize(ta - ro);
          vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
          vec3 up = cross(fwd, right);
          
          vec3 rd = normalize(fwd * 2.5 + uv.x * right + uv.y * up);

          vec3 col = vec3(0.0);
          
          vec3 p = ro;
          vec3 v = rd;
          
          float dt = 0.05;
          
          bool hitDisk = false;
          vec3 diskCol = vec3(0.0);
          
          vec3 glow = vec3(0.0);

          for(int i=0; i<STEPS; i++) {
              float r2 = dot(p, p);
              float r = sqrt(r2);
              
              // EVENT HORIZON
              if(r < BH_RADIUS) {
                  col = vec3(0.0); 
                  break;
              }
              
              // ESCAPE
              if(r > 70.0) {
                  vec3 dir = normalize(v);
                  // High-Res Starfield with varied sizes
                  float s1 = hash(dot(dir, vec3(12.0, 56.0, 91.0)));
                  float s2 = hash(dot(dir, vec3(93.0, 17.5, 42.8)));
                  float stars = pow(s1, 450.0) * 3.0 + pow(s2, 600.0) * 1.5;
                  col = vec3(stars);
                  // Subtle nebula
                  float neb = fbm(dir * 5.0);
                  col += vec3(0.015, 0.025, 0.06) * neb;
                  col += vec3(0.01, 0.005, 0.02) * fbm(dir * 8.0 + 100.0);
                  break;
              }
              
              // GRAVITY
              vec3 acc = -1.5 * p / (r2 * r);
              v += acc * dt;
              v = normalize(v);
              
              vec3 prevP = p;
              p += v * dt;
              
              // DISK INTERSECTION
              if(prevP.y * p.y < 0.0) {
                  float frac = -prevP.y / (p.y - prevP.y);
                  vec3 hitP = mix(prevP, p, frac);
                  float hitR = length(hitP);
                  
                  if(hitR > DISK_INNER && hitR < DISK_OUTER) {
                      // --- ULTRA-DETAILED DISK TEXTURE ---
                      
                      float angle = atan(hitP.z, hitP.x);
                      
                      // Differential Rotation (Keplerian: omega ~ 1/r^1.5)
                      float omega = 30.0 * pow(hitR, -1.5);
                      
                      // TIME DELAY / ANIMATION
                      float flowTime = iTime * 0.05; 
                      
                      float rotAngle = angle + flowTime * omega;
                      
                      // --- SEAMLESS POLAR MAPPING ---
                      
                      // 1. Base Structure (Large swirling rings)
                      vec3 coord1 = vec3(hitR * 1.8, 4.0 * cos(rotAngle), 4.0 * sin(rotAngle));
                      float structure = fbm(coord1);
                      
                      // 2. Medium Detail (Filaments and arms)
                      float phase1 = rotAngle + structure * 0.3;
                      vec3 coord2 = vec3(hitR * 8.0 + flowTime * 1.5, 8.0 * cos(phase1), 8.0 * sin(phase1));
                      float filaments = fbm(coord2);
                      
                      // 3. Fine Detail (Dust streaks - high frequency)
                      float phase2 = rotAngle + filaments * 0.15;
                      vec3 coord3 = vec3(hitR * 20.0 + flowTime * 3.0, 16.0 * cos(phase2), 16.0 * sin(phase2));
                      float dust = fbmDetail(coord3);
                      
                      // 4. Micro Turbulence (Boiling plasma)
                      vec3 turbCoord = vec3(hitP.x * 3.0, hitP.z * 3.0, flowTime * 4.0);
                      float sR = sin(rotAngle); float cR = cos(rotAngle);
                      vec3 rotTurb = vec3(cR*turbCoord.x - sR*turbCoord.y, sR*turbCoord.x + cR*turbCoord.y, turbCoord.z);
                      float turbulence = fbm(rotTurb);

                      // 5. Hot spots / Bright knots
                      vec3 knotCoord = vec3(hitR * 5.0, 6.0 * cos(rotAngle * 1.3 + 2.0), 6.0 * sin(rotAngle * 1.3 + 2.0));
                      float knots = pow(max(0.0, gnoise(knotCoord + flowTime * 0.5)), 2.0);
                      
                      // Composite density with layered detail
                      float density = structure * 0.3 + filaments * 0.3 + dust * 0.2 + turbulence * 0.15 + knots * 0.1;
                      
                      // Sharp Ridges (Fluid dynamics look)
                      density = smoothstep(0.08, 0.85, density); 
                      
                      // Create sharp filamentary structures
                      float ridges = abs(sin(density * 8.0 + filaments * 6.0));
                      ridges = pow(ridges, 0.5);
                      density = mix(density, density * ridges, 0.25);
                      
                      density = pow(density, 0.55);
                      
                      // --- COLOR GRADING ---
                      float temp = 1.0 - (hitR - DISK_INNER) / (DISK_OUTER - DISK_INNER);
                      
                      // Richer Palette (MARESOLIK Brand: Sky Blue / Clean Sci-Fi)
                      vec3 cInner = vec3(0.97, 0.99, 1.0);  // White-Hot Core
                      vec3 cHot   = vec3(0.7, 0.9, 1.0);    // Hot Blue-White
                      vec3 cMid   = vec3(0.3, 0.7, 1.0);    // Bright Sky Blue
                      vec3 cCool  = vec3(0.1, 0.4, 0.85);   // Medium Blue
                      vec3 cOuter = vec3(0.04, 0.15, 0.5);  // Deep Indigo/Ocean
                      vec3 cDark  = vec3(0.0, 0.01, 0.03);  // Dark Navy Gaps
                      
                      vec3 materialCol;
                      if(temp > 0.75) {
                          materialCol = mix(cHot, cInner, smoothstep(0.75, 1.0, temp));
                      } else if(temp > 0.5) {
                          materialCol = mix(cMid, cHot, smoothstep(0.5, 0.75, temp));
                      } else if(temp > 0.25) {
                          materialCol = mix(cCool, cMid, smoothstep(0.25, 0.5, temp));
                      } else {
                          materialCol = mix(cOuter, cCool, smoothstep(0.0, 0.25, temp));
                      }
                      
                      // Apply Density to Color (Darker gaps with more contrast)
                      materialCol = mix(cDark, materialCol, smoothstep(0.15, 0.65, density));
                      
                      // Add hot knot highlights
                      materialCol += vec3(0.3, 0.4, 0.5) * knots * temp * 0.5;
                      
                      // --- DOPPLER BEAMING ---
                      vec3 vel = normalize(vec3(-hitP.z, 0.0, hitP.x));
                      float doppler = dot(vel, v);
                      float beam = pow(1.0 - doppler * 0.5, 3.5); 
                      
                      // Final Intensity
                      diskCol = materialCol * beam * 1.6;
                      
                      // Soft Edges
                      float alpha = smoothstep(DISK_INNER, DISK_INNER + 0.15, hitR) * 
                                    smoothstep(DISK_OUTER, DISK_OUTER - 3.0, hitR);
                      
                      col = diskCol * alpha;
                      hitDisk = true;
                      break; 
                  }
              }
              
              // VOLUMETRIC GLOW
              float distToPlane = abs(p.y);
              if(r > DISK_INNER && r < DISK_OUTER) {
                  // Cool Blue glow near disk
                  glow += vec3(0.1, 0.4, 1.0) * (0.001 / (distToPlane * distToPlane + 0.02));
              }
              // Photon Ring (The thin sharp ring)
              if(abs(r - 1.5) < 0.08) {
                   glow += vec3(0.7, 0.85, 1.0) * 0.015;
              }
              
              // Adaptive stepping — use step() float math to avoid bool branching GPU stalls
              float nearDisk = step(distToPlane, 1.0) * step(r, DISK_OUTER + 2.0);
              float proximity = mix(1.0, 0.5, nearDisk);
              dt = max(0.04, r * 0.08 * proximity);
          }
          
          if(!hitDisk) {
             col += glow * 0.4;
          }
          
          // --- CINEMATIC POST PROCESS ---
          
          // Tone Mapping (ACES Approx)
          col *= 0.85; // Exposure
          const float tmA = 2.51;
          const float tmB = 0.03;
          const float tmC = 2.43;
          const float tmD = 0.59;
          const float tmE = 0.14;
          col = clamp((col * (tmA * col + tmB)) / (col * (tmC * col + tmD) + tmE), 0.0, 1.0);
          
          // Subtle Film Grain
          float grain = hash(dot(uv, vec2(12.9898, 78.233)) + iTime);
          col += (grain - 0.5) * 0.02;

          fragColor = vec4(col, 1.0);
      }
    `;

    let program: WebGLProgram | null = null;
    let posBuf: WebGLBuffer | null = null;
    let resLoc: WebGLUniformLocation | null = null;
    let timeLoc: WebGLUniformLocation | null = null;
    let afId = 0;

    // DPR capped at 1.5 — still sharp on retina but ~44% less pixels than DPR 2.0
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    let curW = 0;
    let curH = 0;

    function resizeCanvas() {
      const w = Math.floor(canvas.clientWidth * DPR);
      const h = Math.floor(canvas.clientHeight * DPR);
      if (w > 0 && h > 0 && (w !== curW || h !== curH)) {
        curW = w;
        curH = h;
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    function init() {
      const createShader = (type: number, source: string) => {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      };

      program = gl.createProgram();
      if (!program) return;

      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;

      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return;
      }

      gl.useProgram(program);

      // Free shader objects after linking
      gl.deleteShader(vs);
      gl.deleteShader(fs);

      const positions = new Float32Array([
        -1, -1, 1, -1, -1, 1,
        -1, 1, 1, -1, 1, 1,
      ]);
      const posLoc = gl.getAttribLocation(program, "position");
      posBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      resLoc = gl.getUniformLocation(program, "iResolution");
      timeLoc = gl.getUniformLocation(program, "iTime");

      // Size canvas BEFORE first draw
      resizeCanvas();

      afId = requestAnimationFrame(render);
    }

    // ResizeObserver — handles resize cleanly without per-frame checks
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);

    const render = (time: number) => {
      if (contextLost) {
        afId = requestAnimationFrame(render);
        return;
      }
      time *= 0.001;
      gl.uniform2f(resLoc, curW, curH);
      gl.uniform1f(timeLoc, time);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      afId = requestAnimationFrame(render);
    };

    init();

    return () => {
      cancelAnimationFrame(afId);
      resizeObserver.disconnect();
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (program) gl.deleteProgram(program);
      if (posBuf) gl.deleteBuffer(posBuf);
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 bg-black z-0">
      {/* Deep Navy Integration Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#021020_100%)] pointer-events-none" />
    </div>
  );
};
