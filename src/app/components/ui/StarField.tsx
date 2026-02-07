import React, { useEffect, useRef } from 'react';

export const StarField = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let time = 0;

    // Configuration
    const stars: { x: number; y: number; size: number; alpha: number; speed: number; baseAlpha: number }[] = [];
    const starCount = 200; // Reduced count slightly for footer to be subtle

    // Initialize stars
    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        const baseAlpha = Math.random() * 0.5 + 0.1;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5,
          alpha: baseAlpha,
          baseAlpha: baseAlpha,
          speed: Math.random() * 0.05
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        // Set canvas size to parent size
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        
        // Scale context to match dpr
        ctx.scale(dpr, dpr);
        
        // Logical width/height for calculations
        width = parent.clientWidth;
        height = parent.clientHeight;
        
        initStars();
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const drawStars = () => {
      ctx.fillStyle = '#FFFFFF';
      stars.forEach(star => {
        // Twinkle
        star.alpha = star.baseAlpha + Math.sin(time * 2 + star.x) * 0.1;
        ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Parallax drift (very slow)
        star.x -= star.speed;
        if (star.x < 0) star.x = width;
      });
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);
      drawStars();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`block w-full h-full pointer-events-none ${className}`}
      style={{ background: 'transparent' }} 
    />
  );
};
