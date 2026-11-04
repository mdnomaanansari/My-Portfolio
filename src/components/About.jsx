import Section from "./Section";
import { profile } from "../data/profile";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="prose">
        {profile.about.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </Section>
  );
}
