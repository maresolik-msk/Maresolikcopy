import React, { useEffect, useRef } from 'react';

export const Blackhole = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Create Canvas
    const canvas = document.createElement('canvas');
    canvas.className = "w-full h-full absolute inset-0 block";
    mount.appendChild(canvas);

    const gl = canvas.getContext('webgl2');
    if (!gl) {
      console.error("WebGL2 not supported");
      return;
    }

    const vsSource = `#version 300 es
      in vec4 position;
      void main() {
        gl_Position = position;
      }
    `;

    // REFINED: Ultra-High Fidelity Material & Animation
    // - Improved Differential Rotation (Keplerian)
    // - High-Frequency "Dust" Texture
    // - Spiral Infall Simulation
    // - Richer Color Grading

    const fsSource = `#version 300 es
      precision highp float;
      
      uniform vec2 iResolution;
      uniform float iTime;
      
      out vec4 fragColor;

      // --- CONFIG ---
      #define STEPS 300
      #define BH_RADIUS 1.0
      #define DISK_INNER 2.6
      #define DISK_OUTER 14.0
      
      // --- NOISE ---
      // Precision-safe hash for high time values
      float hash(float n) { 
          return fract(sin(mod(n, 65536.0)) * 43758.5453123); 
      }
      
      float noise(vec3 x) {
          vec3 p = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          float n = p.x + p.y * 57.0 + 113.0 * p.z;
          return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
                         mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
                     mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                         mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
      }
      
      // High-Quality FBM with rotation to prevent grid artifacts
      float fbm(vec3 p) {
          float f = 0.0;
          float a = 0.5;
          mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
          for (int i=0; i<6; i++) { // Increased octaves for detail
              f += a * noise(p);
              p.xy *= rot;
              p *= 2.05; // Irrational scale
              a *= 0.45; // Sharper falloff
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
          float totDist = 0.0;
          
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
                  // High-Res Starfield
                  float s = hash(dot(dir, vec3(12.0, 56.0, 91.0)));
                  float stars = pow(s, 400.0) * 2.5;
                  col = vec3(stars);
                  // Subtle nebula
                  col += vec3(0.02, 0.03, 0.05) * fbm(dir * 4.0);
                  break;
              }
              
              // GRAVITY
              vec3 acc = -1.5 * p / (r2 * r);
              v += acc * dt;
              v = normalize(v);
              
              vec3 prevP = p;
              p += v * dt;
              totDist += dt;
              
              // DISK INTERSECTION
              if(prevP.y * p.y < 0.0) {
                  float frac = -prevP.y / (p.y - prevP.y);
                  vec3 hitP = mix(prevP, p, frac);
                  float hitR = length(hitP);
                  
                  if(hitR > DISK_INNER && hitR < DISK_OUTER) {
                      // --- REFINED DISK TEXTURE ---
                      
                      float angle = atan(hitP.z, hitP.x);
                      
                      // Differential Rotation (Keplerian: v ~ 1/sqrt(r), omega ~ 1/r^1.5)
                      // "Ultra-Realistic" means MASSIVE shear. Inner rings spin crazy fast relative to outer.
                      float omega = 30.0 * pow(hitR, -1.5); // Increased base speed factor
                      
                      // TIME DELAY / ANIMATION: Slower, more majestic (Gargantua scale)
                      float flowTime = iTime * 0.05; 
                      
                      float rotAngle = angle + flowTime * omega;
                      
                      // --- SEAMLESS POLAR MAPPING (Fix for Seams & Repetition) ---
                      // We map (r, theta) to a cylindrical domain in noise space.
                      // X = Radial, Y/Z = Angular (Circle).
                      // This ensures perfect continuity at +/- PI.
                      
                      // 1. Base Structure (Large rings)
                      // Radius 3.0 in YZ plane = ~18 unit circumference (Low-Med angular frequency)
                      vec3 coord1 = vec3(hitR * 1.5, 3.0 * cos(rotAngle), 3.0 * sin(rotAngle));
                      float structure = fbm(coord1);
                      
                      // 2. Fine Detail (Dust/Streaks)
                      // To get "Streaks", we need High Radial Freq vs Medium Angular Freq.
                      // We avoid 'mod' or raw angle mult to prevent repetition artifacts.
                      // Instead we increase the Sampling Radius for higher angular detail.
                      
                      float phase = rotAngle + structure * 0.2; // Domain warping for organic shape
                      
                      // Radius 12.0 = ~75 unit circumference. Enough for many unique streaks.
                      // Radial freq 15.0 = Sharp rings.
                      // We add flowTime to X (Radial) to simulate matter falling IN or flowing THROUGH.
                      vec3 coord2 = vec3(hitR * 15.0 + flowTime * 2.0, 12.0 * cos(phase), 12.0 * sin(phase));
                      
                      float detail = fbm(coord2);
                      
                      // 3. Turbulent Evolution (Boiling plasma)
                      // Rotated Cartesian coordinates for isotropic boiling texture
                      vec3 turbCoord = vec3(hitP.x * 2.5, hitP.z * 2.5, flowTime * 3.0);
                      float s = sin(rotAngle); float c = cos(rotAngle);
                      // Rotate texture with the disk
                      vec3 rotTurb = vec3(c*turbCoord.x - s*turbCoord.y, s*turbCoord.x + c*turbCoord.y, turbCoord.z);
                      
                      float turbulence = fbm(rotTurb);
                      
                      // Mix textures
                      float density = structure * 0.4 + detail * 0.5 + turbulence * 0.2;
                      
                      // Sharp Ridges (Fluid dynamics look)
                      density = smoothstep(0.1, 0.9, density); 
                      density = pow(density, 0.6); // Keep it wispy but sharp
                      
                      // --- COLOR GRADING ---
                      float temp = 1.0 - (hitR - DISK_INNER) / (DISK_OUTER - DISK_INNER);
                      
                      // Richer Palette (MARESOLIK Brand: Sky Blue / Clean Sci-Fi)
                      vec3 cInner = vec3(0.95, 0.98, 1.0);  // White-Hot Core
                      vec3 cMid   = vec3(0.3, 0.7, 1.0);    // Bright Sky Blue
                      vec3 cOuter = vec3(0.05, 0.2, 0.6);   // Deep Indigo/Ocean
                      vec3 cDark  = vec3(0.0, 0.02, 0.05);  // Dark Navy Gaps
                      
                      vec3 materialCol = mix(cOuter, cMid, smoothstep(0.0, 0.5, temp));
                      materialCol = mix(materialCol, cInner, smoothstep(0.5, 1.0, temp));
                      
                      // Apply Density to Color (Darker gaps)
                      materialCol = mix(cDark, materialCol, smoothstep(0.3, 0.7, density));
                      
                      // --- DOPPLER BEAMING ---
                      vec3 vel = normalize(vec3(-hitP.z, 0.0, hitP.x));
                      float doppler = dot(vel, v);
                      // Tuned for dramatic contrast but preserving detail in dark side
                      float beam = pow(1.0 - doppler * 0.5, 3.5); 
                      
                      // Final Intensity
                      diskCol = materialCol * beam * 1.5; // Boost brightness
                      
                      // Soft Edges
                      float alpha = smoothstep(DISK_INNER, DISK_INNER + 0.1, hitR) * 
                                    smoothstep(DISK_OUTER, DISK_OUTER - 3.0, hitR);
                      
                      col = diskCol * alpha;
                      hitDisk = true;
                      break; 
                  }
              }
              
              // VOLUMETRIC GLOW
              if(r > DISK_INNER && r < DISK_OUTER) {
                  float distToPlane = abs(p.y);
                  // Add Cool Blue glow near disk
                  glow += vec3(0.1, 0.4, 1.0) * (0.001 / (distToPlane * distToPlane + 0.02));
              }
              // Photon Ring (The thin sharp ring)
              if(abs(r - 1.5) < 0.1) {
                   glow += vec3(0.6, 0.8, 1.0) * 0.01;
              }
              
              dt = max(0.04, r * 0.06);
          }
          
          if(!hitDisk) {
             col += glow * 0.4;
          }
          
          // --- CINEMATIC POST PROCESS ---
          
          // Tone Mapping (ACES Approx)
          col *= 0.8; // Exposure
          const float a = 2.51;
          const float b = 0.03;
          const float c = 2.43;
          const float d = 0.59;
          const float e = 0.14;
          col = clamp((col * (a * col + b)) / (col * (c * col + d) + e), 0.0, 1.0);
          
          // Grain
          float grain = hash(dot(uv, vec2(12.9898, 78.233)) + iTime);
          col += (grain - 0.5) * 0.04;

          fragColor = vec4(col, 1.0);
      }
    `;

    const createShader = (gl: WebGL2RenderingContext, type: number, source: string) => {
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

    const program = gl.createProgram();
    if (!program) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    
    if (!vs || !fs) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positions = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]);
    const posLoc = gl.getAttribLocation(program, "position");
    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "iResolution");
    const timeLoc = gl.getUniformLocation(program, "iTime");

    let afId: number;

    const render = (time: number) => {
      time *= 0.001;
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0); // Cap at 2.0 for performance
      const displayWidth = Math.floor(canvas.clientWidth * dpr);
      const displayHeight = Math.floor(canvas.clientHeight * dpr);
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, time);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      afId = requestAnimationFrame(render);
    };

    afId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(afId);
      mount.removeChild(canvas);
      gl.deleteProgram(program);
      gl.deleteBuffer(posBuf);
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 bg-black z-0">
      {/* Deep Navy Integration Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#021020_100%)] pointer-events-none" />
    </div>
  );
};
