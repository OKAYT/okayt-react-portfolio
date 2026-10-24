import { useTilt } from "../hooks/useTilt";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const tilt = useTilt<HTMLElement>("soft");

  return (
    <article
      className="project-card"
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} details`}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
      {...tilt}
    >
      <div className="project-card__media">
        <img src={project.image} alt={`${project.title} screenshot`} />
        <span className="project-card__num">{project.num}</span>
      </div>
      <div className="project-card__body">
        <span className={`project-tag ${project.ongoing ? "project-tag--ongoing" : ""}`}>
          {project.tag}
        </span>
        <h3>
          {project.title} <span className="project-arrow" aria-hidden="true">&nearr;</span>
        </h3>
        <p>{project.description}</p>
        <span className="project-card__cta">
          View Project <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </article>
  );
}