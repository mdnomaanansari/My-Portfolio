import { useCallback, useRef } from "react";

// 3D tilt on hover. Skipped on touch screens and for people who prefer reduced motion.
export function useTilt(max = 7) {
  const ref = useRef(null);
  const enabled = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el || !enabled()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${x * max}deg`);
    el.style.setProperty("--rx", `${-y * max}deg`);
  }, [max]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
