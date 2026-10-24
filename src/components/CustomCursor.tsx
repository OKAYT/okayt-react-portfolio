import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [data-tilt], .skill-chip, .project-card";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (reduceMotion || touchDevice) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const body = document.body;
    body.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    // The ring trails behind the dot for a smooth feel
    const loop = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    // Grow the ring when hovering links, buttons, and cards
    const onOver = (e: PointerEvent) => {
      const target = e.target;
      const hit = target instanceof Element && target.closest(INTERACTIVE);
      body.classList.toggle("cursor-hover", !!hit);
    };

    const hide = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("pointerleave", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", hide);
      body.classList.remove("has-custom-cursor", "cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}