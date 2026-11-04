import { GraduationCap } from "lucide-react";
import Section from "./Section";
import { education } from "../data/profile";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid">
        {education.map((e) => (
          <article key={e.degree} className="card edu-card">
            <GraduationCap size={28} aria-hidden="true" className="accent" />
            <div>
              <h3>{e.degree}</h3>
              <p>{e.institution}, {e.location}</p>
              {e.status && <p className="muted small">{e.status}</p>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
