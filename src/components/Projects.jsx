import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="One finished project so far, with more on the way.">
      <div className="grid grid-projects">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Section>
  );
}
