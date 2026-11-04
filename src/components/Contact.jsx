import { Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import { social } from "../data/social";

const icons = { email: Mail, linkedin: Linkedin, github: Github };

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="The best way to reach me will be listed here.">
      <ul className="grid grid-3 contact-list">
        {social.map((s) => {
          const Icon = icons[s.id] || Mail;
          const ready = Boolean(s.url);
          const inner = (
            <>
              <Icon size={22} aria-hidden="true" className="accent" />
              <span>
                <strong>{s.label}</strong>
                <span className="muted small">{ready ? s.value || s.url : "Not added yet"}</span>
              </span>
            </>
          );
          return (
            <li key={s.id}>
              {ready ? (
                <a className="card contact-card" href={s.url} target={s.url.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div className="card contact-card is-disabled" aria-disabled="true">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
