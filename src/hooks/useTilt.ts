import { useRef, type PointerEvent } from "react";

type Intensity = "strong" | "soft";
const STRENGTH: Record<Intensity, number> = { strong: 6, soft: 2.5 };

const shouldTilt = () =>
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
  !window.matchMedia("(hover: none), (pointer: coarse)").matches;

export function useTilt<T extends HTMLElement = HTMLDivElement>(intensity: Intensity = "soft") {
  const ref = useRef<T>(null);
  const frame = useRef<number | null>(null);

  const onPointerMove = (e: PointerEvent<T>) => {
    if (!shouldTilt() || !ref.current || frame.current !== null) return;
    const el = ref.current;
    const { clientX, clientY } = e;

    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const relX = (clientX - rect.left) / rect.width - 0.5;
      const relY = (clientY - rect.top) / rect.height - 0.5;
      const s = STRENGTH[intensity];
      el.style.setProperty("--tilt-x", `${(relY * s * -2).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${(relX * s * 2).toFixed(2)}deg`);
      frame.current = null;
    });
  };

  const onPointerEnter = () => ref.current?.classList.add("is-tilting");

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-tilting");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return { ref, onPointerMove, onPointerEnter, onPointerLeave };
}