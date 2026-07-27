"use client";

import { useEffect, useRef, useMemo } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

interface EnergyLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  opacity: number;
  glowIntensity: number;
  speed: number;
  progress: number;
  color: string;
}

interface OrbitalRing {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  dashOffset: number;
  dashSpeed: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const COLORS = {
  deepViolet: "75, 42, 120",
  darkerViolet: "42, 21, 72",
  midViolet: "61, 33, 99",
  coldWhite: "220, 220, 220",
  charcoal: "40, 40, 40",
  silver: "160, 160, 160",
};

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function pickColor() {
  const keys = Object.keys(COLORS) as (keyof typeof COLORS)[];
  return COLORS[keys[Math.floor(Math.random() * keys.length)]];
}

// ─── Component ────────────────────────────────────────────────────────────────

interface FuturisteBackgroundProps {
  /** Additional className for the root element */
  className?: string;
  /** Children overlaid on top of the background */
  children?: React.ReactNode;
}

export default function FuturisteBackground({
  className = "",
  children,
}: FuturisteBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // ── Geometry data (stable across renders) ───────────────────────────────
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 120 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: randomBetween(-0.00008, 0.00008),
      vy: randomBetween(-0.00008, 0.00008),
      radius: randomBetween(0.5, 2.2),
      opacity: randomBetween(0.15, 0.7),
      pulseSpeed: randomBetween(0.4, 1.6),
      pulseOffset: Math.random() * Math.PI * 2,
    }));
  }, []);

  const energyLines = useMemo<EnergyLine[]>(() => {
    return Array.from({ length: 18 }, () => ({
      x1: Math.random(),
      y1: Math.random(),
      x2: Math.random(),
      y2: Math.random(),
      width: randomBetween(0.3, 1.2),
      opacity: randomBetween(0.08, 0.35),
      glowIntensity: randomBetween(4, 18),
      speed: randomBetween(0.0003, 0.001),
      progress: Math.random(),
      color: pickColor(),
    }));
  }, []);

  const orbitalRings = useMemo<OrbitalRing[]>(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      cx: randomBetween(0.2, 0.8),
      cy: randomBetween(0.1, 0.7),
      rx: randomBetween(0.15, 0.42) * (1 + i * 0.12),
      ry: randomBetween(0.06, 0.18) * (1 + i * 0.08),
      rotation: randomBetween(-30, 30),
      rotationSpeed: randomBetween(-0.003, 0.003),
      opacity: randomBetween(0.06, 0.22),
      color: pickColor(),
      dashOffset: 0,
      dashSpeed: randomBetween(0.4, 1.2),
    }));
  }, []);

  // ── Canvas draw loop ─────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Draw one frame ─────────────────────────────────────────────────
    function draw(timestamp: number) {
      const dt = timestamp - timeRef.current;
      timeRef.current = timestamp;

      const W = canvas!.offsetWidth;
      const H = canvas!.offsetHeight;

      // ── 1. Deep space background ───────────────────────────────────
      ctx!.clearRect(0, 0, W, H);

      // Base gradient — pure charcoal
      const bg = ctx!.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.5, W * 0.85);
      bg.addColorStop(0, "rgba(12, 12, 12, 1)");
      bg.addColorStop(0.45, "rgba(8, 8, 8, 1)");
      bg.addColorStop(1, "rgba(5, 5, 5, 1)");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, W, H);

      // Secondary atmospheric glow — bottom center
      const atmos = ctx!.createRadialGradient(W * 0.5, H * 1.1, 0, W * 0.5, H * 0.8, W * 0.7);
      atmos.addColorStop(0, `rgba(${COLORS.deepViolet}, 0.07)`);
      atmos.addColorStop(0.5, `rgba(${COLORS.darkerViolet}, 0.03)`);
      atmos.addColorStop(1, "transparent");
      ctx!.fillStyle = atmos;
      ctx!.fillRect(0, 0, W, H);

      // Left edge glow
      const leftGlow = ctx!.createRadialGradient(0, H * 0.4, 0, 0, H * 0.4, W * 0.55);
      leftGlow.addColorStop(0, `rgba(${COLORS.midViolet}, 0.06)`);
      leftGlow.addColorStop(1, "transparent");
      ctx!.fillStyle = leftGlow;
      ctx!.fillRect(0, 0, W, H);

      // Right edge glow
      const rightGlow = ctx!.createRadialGradient(W, H * 0.6, 0, W, H * 0.6, W * 0.5);
      rightGlow.addColorStop(0, `rgba(${COLORS.charcoal}, 0.12)`);
      rightGlow.addColorStop(1, "transparent");
      ctx!.fillStyle = rightGlow;
      ctx!.fillRect(0, 0, W, H);

      const t = timestamp * 0.001; // seconds

      // ── 2. Orbital rings ──────────────────────────────────────────
      for (const ring of orbitalRings) {
        ring.rotation += ring.rotationSpeed;
        ring.dashOffset += ring.dashSpeed;

        ctx!.save();
        ctx!.translate(ring.cx * W, ring.cy * H);
        ctx!.rotate((ring.rotation * Math.PI) / 180);

        const pulsedOpacity = ring.opacity * (0.7 + 0.3 * Math.sin(t * 0.5 + ring.cx));

        // Outer glow pass
        ctx!.shadowColor = `rgba(${ring.color}, 0.6)`;
        ctx!.shadowBlur = 18;
        ctx!.strokeStyle = `rgba(${ring.color}, ${pulsedOpacity})`;
        ctx!.lineWidth = 1;
        ctx!.setLineDash([12, 28]);
        ctx!.lineDashOffset = -ring.dashOffset;

        ctx!.beginPath();
        ctx!.ellipse(0, 0, ring.rx * W, ring.ry * H, 0, 0, Math.PI * 2);
        ctx!.stroke();

        // Inner bright pass
        ctx!.shadowBlur = 6;
        ctx!.globalAlpha = pulsedOpacity * 0.6;
        ctx!.lineWidth = 0.5;
        ctx!.setLineDash([4, 40]);
        ctx!.lineDashOffset = ring.dashOffset * 0.5;
        ctx!.strokeStyle = `rgba(${COLORS.coldWhite}, ${pulsedOpacity * 0.4})`;
        ctx!.stroke();

        ctx!.restore();
        ctx!.globalAlpha = 1;
      }
      ctx!.setLineDash([]);
      ctx!.shadowBlur = 0;

      // ── 3. Energy lines / fibre-optic traces ──────────────────────
      for (const line of energyLines) {
        line.progress += line.speed * dt;
        if (line.progress > 1) {
          line.progress = 0;
          line.x1 = Math.random();
          line.y1 = Math.random();
          line.x2 = Math.random();
          line.y2 = Math.random();
          line.color = pickColor();
        }

        const p = line.progress;
        // Fade in / fade out at tips
        const fade = p < 0.15 ? p / 0.15 : p > 0.85 ? (1 - p) / 0.15 : 1;

        const grad = ctx!.createLinearGradient(
          line.x1 * W, line.y1 * H,
          line.x2 * W, line.y2 * H
        );
        grad.addColorStop(0, "transparent");
        grad.addColorStop(Math.max(0, p - 0.12), "transparent");
        grad.addColorStop(p, `rgba(${line.color}, ${line.opacity * fade})`);
        grad.addColorStop(Math.min(1, p + 0.12), "transparent");
        grad.addColorStop(1, "transparent");

        ctx!.save();
        ctx!.shadowColor = `rgba(${line.color}, 0.8)`;
        ctx!.shadowBlur = line.glowIntensity;
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = line.width;
        ctx!.beginPath();
        ctx!.moveTo(line.x1 * W, line.y1 * H);
        ctx!.lineTo(line.x2 * W, line.y2 * H);
        ctx!.stroke();
        ctx!.restore();
      }
      ctx!.shadowBlur = 0;

      // ── 4. Layered mesh — diagonal dynamic grid ───────────────────
      const gridOpacity = 0.025 + 0.008 * Math.sin(t * 0.3);
      ctx!.strokeStyle = `rgba(${COLORS.deepViolet}, ${gridOpacity})`;
      ctx!.lineWidth = 0.5;
      const step = 60;
      const offset = (t * 8) % step;
      for (let x = -step + offset; x < W + step; x += step) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x + H * 0.3, H);
        ctx!.stroke();
      }
      for (let y = -step + offset; y < H + step; y += step) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(W, y + W * 0.05);
        ctx!.stroke();
      }

      // ── 5. Particles ─────────────────────────────────────────────
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;

        const pulse = 0.5 + 0.5 * Math.sin(t * p.pulseSpeed + p.pulseOffset);
        const finalOpacity = p.opacity * (0.4 + 0.6 * pulse);

        const px = p.x * W;
        const py = p.y * H;

        // Soft glow
        const gGrad = ctx!.createRadialGradient(px, py, 0, px, py, p.radius * 6);
        gGrad.addColorStop(0, `rgba(${COLORS.coldWhite}, ${finalOpacity * 0.25})`);
        gGrad.addColorStop(1, "transparent");
        ctx!.fillStyle = gGrad;
        ctx!.beginPath();
        ctx!.arc(px, py, p.radius * 6, 0, Math.PI * 2);
        ctx!.fill();

        // Core dot
        ctx!.fillStyle = `rgba(${COLORS.coldWhite}, ${finalOpacity})`;
        ctx!.beginPath();
        ctx!.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      // ── 6. Chromatic aberration vignette ──────────────────────────
      const vignette = ctx!.createRadialGradient(W * 0.5, H * 0.5, H * 0.2, W * 0.5, H * 0.5, W * 0.75);
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(0.7, "transparent");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.65)");
      ctx!.fillStyle = vignette;
      ctx!.fillRect(0, 0, W, H);

      // ── 7. Central energy core ────────────────────────────────────
      const coreX = W * 0.5;
      const coreY = H * 0.52;
      const coreSize = Math.min(W, H) * (0.22 + 0.02 * Math.sin(t * 0.7));

      const core = ctx!.createRadialGradient(coreX, coreY, 0, coreX, coreY, coreSize);
      core.addColorStop(0, `rgba(${COLORS.midViolet}, 0.06)`);
      core.addColorStop(0.4, `rgba(${COLORS.deepViolet}, 0.04)`);
      core.addColorStop(1, "transparent");
      ctx!.fillStyle = core;
      ctx!.beginPath();
      ctx!.arc(coreX, coreY, coreSize, 0, Math.PI * 2);
      ctx!.fill();

      // Scanline effect — ultra subtle
      for (let sy = 0; sy < H; sy += 4) {
        ctx!.fillStyle = "rgba(0,0,0,0.025)";
        ctx!.fillRect(0, sy, W, 1);
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [particles, energyLines, orbitalRings]);

  return (
    <div
      className={`relative w-full overflow-hidden bg-black ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Canvas layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
        aria-hidden="true"
      />

      {/* Noise grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.025,
          mixBlendMode: "overlay",
        }}
        aria-hidden="true"
      />

      {/* Children on top */}
      {children && (
        <div className="relative z-10 w-full">{children}</div>
      )}
    </div>
  );
}