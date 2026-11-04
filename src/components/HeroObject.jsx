import { useEffect, useRef } from "react";

// A lightweight 3D object made only with CSS (no Three.js needed):
// two nested wireframe cubes that spin slowly and lean towards the mouse.
// On touch devices or with "reduce motion" it stays still, so it is also the static fallback.
export default function HeroObject() {
  const stage = useRef(null);

  useEffect(() => {
    const el = stage.current;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || !fine || reduce) return;
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty("--px", `${x * 24}deg`);
      el.style.setProperty("--py", `${-y * 24}deg`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const faces = ["front", "back", "right", "left", "top", "bottom"];
  return (
    <div className="hero-object" aria-hidden="true" ref={stage}>
      <div className="object-tilt">
        <div className="cube cube-outer">
          {faces.map((f) => <span key={f} className={`face ${f}`} />)}
        </div>
        <div className="cube cube-inner">
          {faces.map((f) => <span key={f} className={`face ${f}`} />)}
        </div>
      </div>
    </div>
  );
}
