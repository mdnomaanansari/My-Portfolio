import Section from "./Section";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="What I already use, what I'm learning, and where I'm headed.">
      <div className="grid grid-3">
        {skills.map((group) => (
          <article key={group.id} className={`card skill-card skill-${group.id}`}>
            <h3>{group.title}</h3>
            <p className="muted small">{group.note}</p>
            <ul className="chips">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
