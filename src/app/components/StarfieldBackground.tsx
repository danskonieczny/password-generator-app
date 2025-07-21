"use client";
import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let stopped = false;
    let w = window.innerWidth;
    let h = window.innerHeight;
    let ctx: CanvasRenderingContext2D | null = null;
    let stars: { x: number; y: number; r: number; o: number }[] = [];
    let time = 0;

    function setup() {
      const canvas = ref.current;
      if (!canvas) return;
      ctx = canvas.getContext("2d");
      if (!ctx) return;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.5 + 0.5,
      }));
    }

    function drawStars() {
      const canvas = ref.current;
      if (stopped || !canvas) return;
      const localCtx = canvas.getContext("2d");
      if (!localCtx) return;
      localCtx.clearRect(0, 0, w, h);
      time += 0.02;
      for (const star of stars) {
        localCtx.save();
        localCtx.globalAlpha = star.o + Math.sin(time + star.x) * 0.3;
        localCtx.beginPath();
        localCtx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        localCtx.fillStyle = "#fff";
        localCtx.shadowColor = "#a0b8ff";
        localCtx.shadowBlur = 6;
        localCtx.fill();
        localCtx.restore();
      }
      requestAnimationFrame(drawStars);
    }

    setup();
    drawStars();

    function onResize() {
      setup();
    }
    window.addEventListener("resize", onResize);

    return () => {
      stopped = true;
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0"
      aria-hidden
    />
  );
}
