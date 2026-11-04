import { useReveal } from "../hooks/useReveal";

// Wrapper used by every section: gives it an id (for the nav), a heading and a reveal animation.
export default function Section({ id, title, intro, children }) {
  const [ref, shown] = useReveal();
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div ref={ref} className={`container reveal ${shown ? "is-shown" : ""}`}>
        <header className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
