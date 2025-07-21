"use client";
import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.5 + 0.5,
    }));

    let time = 0;

    function drawStars() {
      ctx.clearRect(0, 0, w, h);
      time += 0.02;
      for (const star of stars) {
        ctx.save();
        ctx.globalAlpha = star.o + Math.sin(time + star.x) * 0.3;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#a0b8ff";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(drawStars);
    }

    drawStars();

    function onResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    }
    window.addEventListener("resize", onResize);

    return () => {
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
