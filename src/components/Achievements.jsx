import { Award, BookOpen, Users } from "lucide-react";
import Section from "./Section";
import { achievements } from "../data/achievements";

const icons = { award: Award, book: BookOpen, users: Users };

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid grid-3">
        {achievements.map((a) => {
          const Icon = icons[a.icon] || Award;
          return (
            <article key={a.id} className="card ach-card">
              <Icon size={24} aria-hidden="true" className="accent" />
              <h3>{a.title}</h3>
              <p>{a.detail}</p>
              <p className="muted small">{a.issuer}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
