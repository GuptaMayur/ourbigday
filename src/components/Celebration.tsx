import React, { useEffect, useRef } from "react";

type Confetti = { x: number; y: number; vx: number; vy: number; size: number; color: string; life: number };

const Celebration: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<Confetti[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(800, window.innerWidth) * dpr;
      canvas.height = Math.max(600, window.innerHeight) * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnConfetti = (x: number, y: number, count = 36) => {
      for (let i = 0; i < count; i++) {
        confettiRef.current.push({
          x: x + (Math.random() - 0.5) * 120,
          y: y + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 6,
          vy: Math.random() * -6 - 1,
          size: Math.random() * 8 + 4,
          color: `hsl(${28 + Math.random() * 30} 85% ${45 + Math.random() * 25}%)`,
          life: 900 + Math.random() * 700,
        });
      }
    };

    const onCelebrate = (e: Event) => {
      const d = (e as CustomEvent).detail || {};
      const burst = !!d.burst;
      const x = d.x ?? window.innerWidth / 2;
      const y = d.y ?? window.innerHeight / 3;
      spawnConfetti(x, y, burst ? 80 : 28);
    };

    const onPlayBell = () => playBellTone();

    window.addEventListener("celebrate", onCelebrate as EventListener);
    window.addEventListener("playBell", onPlayBell as EventListener);

    let last = performance.now();

    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // subtle floating gold particles
      const particleCount = Math.max(4, Math.floor((window.innerWidth * window.innerHeight) / 300000));
      ctx.fillStyle = "rgba(255,215,0,0.04)";
      for (let i = 0; i < particleCount; i++) {
        const px = ((i * 9973) % window.innerWidth) + Math.sin((t + i * 37) / 120) * 18;
        const py = Math.sin((t + i * 59) / 100) * 30 + (i % 7) * 10;
        ctx.beginPath();
        ctx.ellipse(px, py, 7, 3.5, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // animate confetti
      for (let i = confettiRef.current.length - 1; i >= 0; i--) {
        const c = confettiRef.current[i];
        c.vy += 0.12 * (dt / 16);
        c.x += c.vx * (dt / 16);
        c.y += c.vy * (dt / 16);
        c.life -= dt;

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(((c.x + c.y) * 0.01) % Math.PI);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, c.life / 1000));
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
        ctx.restore();

        if (c.life <= 0 || c.y > window.innerHeight + 80) confettiRef.current.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("celebrate", onCelebrate as EventListener);
      window.removeEventListener("playBell", onPlayBell as EventListener);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-40" />;
};

function playBellTone() {
  try {
    const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContext();
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    const g = ctx.createGain();
    o1.type = "sine";
    o2.type = "sine";
    o1.frequency.value = 880;
    o2.frequency.value = 660;
    g.gain.value = 0.0001;
    o1.connect(g);
    o2.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.5, now + 0.02);
    o1.frequency.exponentialRampToValueAtTime(440, now + 1);
    o2.frequency.exponentialRampToValueAtTime(330, now + 1);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    o1.start(now);
    o2.start(now);
    o1.stop(now + 2.2);
    o2.stop(now + 2.2);
  } catch (e) {
    // ignore audio errors
  }
}

export default Celebration;
