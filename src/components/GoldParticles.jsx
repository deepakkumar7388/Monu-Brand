import React, { useEffect, useRef } from 'react';

/**
 * High-performance ambient gold dust particles canvas.
 * Creates a soft, luxury cinematic atmosphere with floating golden motes.
 */
export default function GoldParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particleCount = Math.min(width < 768 ? 35 : 70, 80);
    const particles = [];

    const goldColors = [
      'rgba(245, 215, 127, ',
      'rgba(201, 166, 75, ',
      'rgba(230, 203, 130, ',
      'rgba(255, 238, 179, '
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        colorPrefix: goldColors[Math.floor(Math.random() * goldColors.length)],
        baseAlpha: Math.random() * 0.5 + 0.2,
        alpha: 0.3,
        alphaSpeed: Math.random() * 0.015 + 0.005,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.15, // float upward
        pulse: Math.random() * Math.PI * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += p.alphaSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulse) * 0.2;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle with subtle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.colorPrefix + Math.max(0.05, Math.min(1, p.alpha)) + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(201, 166, 75, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
}
