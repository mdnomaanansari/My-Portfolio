import { ExternalLink, Github } from "lucide-react";
import { useTilt } from "../hooks/useTilt";
import { statusLabels } from "../data/projects";

export default function ProjectCard({ project }) {
  const tilt = useTilt(5);
  const { title, status, description, tech, features, limitations, github, demo } = project;
  const showRepo = status === "completed" || github;

  return (
    <article
      className={`card project-card status-${status}`}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className="project-top">
        <h3>{title}</h3>
        <span className="badge">{statusLabels[status]}</span>
      </div>
      <p className="muted">{description}</p>

      {tech.length > 0 && (
        <>
          <h4>Technologies</h4>
          <ul className="chips">{tech.map((t) => <li key={t}>{t}</li>)}</ul>
        </>
      )}
      {features.length > 0 && (
        <>
          <h4>Key features</h4>
          <ul className="list">{features.map((f) => <li key={f}>{f}</li>)}</ul>
        </>
      )}
      {limitations.length > 0 && (
        <>
          <h4>Current limitations</h4>
          <ul className="list list-muted">{limitations.map((l) => <li key={l}>{l}</li>)}</ul>
        </>
      )}

      {(showRepo || demo) && (
        <div className="project-actions">
          {showRepo &&
            (github ? (
              <a className="btn btn-ghost btn-sm" href={github} target="_blank" rel="noopener noreferrer">
                <Github size={16} aria-hidden="true" /> GitHub
              </a>
            ) : (
              <span className="btn btn-ghost btn-sm is-disabled" aria-disabled="true" title="GitHub link not added yet">
                <Github size={16} aria-hidden="true" /> GitHub link coming soon
              </span>
            ))}
          {demo && (
            <a className="btn btn-primary btn-sm" href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
