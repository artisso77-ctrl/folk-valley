import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      maxOpacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 22), 70);

    const colors = [
      'rgba(220, 38, 38, ',   // Red ember
      'rgba(127, 29, 29, ',   // Deep dark crimson
      'rgba(185, 28, 28, ',   // Blood red
      'rgba(100, 100, 100, '  // Pale ash
    ];

    for (let i = 0; i < particleCount; i++) {
      const maxOp = Math.random() * 0.4 + 0.1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * maxOp,
        color: colors[Math.floor(Math.random() * colors.length)],
        maxOpacity: maxOp
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint dark red radial vignette around cursor
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        10,
        mouseX,
        mouseY,
        350
      );
      gradient.addColorStop(0, 'rgba(153, 27, 27, 0.08)');
      gradient.addColorStop(0.5, 'rgba(20, 8, 12, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render drifting embers & ash
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX;

        // Twinkle opacity
        p.opacity += (Math.random() - 0.5) * 0.02;
        if (p.opacity < 0.05) p.opacity = 0.05;
        if (p.opacity > p.maxOpacity) p.opacity = p.maxOpacity;

        // Reset particle if out of screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity.toFixed(2)})`;
        ctx.fill();

        // Subtle glow around red embers
        if (p.size > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 38, 38, ${(p.opacity * 0.25).toFixed(2)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot Grid Pattern Layer */}
      <div className="absolute inset-0 bg-elegant-grid opacity-20 pointer-events-none" />

      {/* Canvas particle layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Atmospheric Fog Drift Layers */}
      <div 
        className="absolute -inset-1/2 w-[200%] h-[200%] opacity-20 pointer-events-none bg-radial from-red-950/20 via-transparent to-transparent animate-fog-1"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(127,29,29,0.18) 0%, rgba(8,7,9,0) 70%)'
        }}
      />
      <div 
        className="absolute -inset-1/2 w-[200%] h-[200%] opacity-15 pointer-events-none animate-fog-2"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(185,28,28,0.15) 0%, rgba(8,7,9,0) 65%)'
        }}
      />

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
    </div>
  );
};
