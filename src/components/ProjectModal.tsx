import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.classList.add("modal-lock");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-lock");
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="project-modal is-open"
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-backdrop" />
      <div className="modal-panel">
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          aria-label="Close project details"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="modal-media">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-body">
          <span className="modal-tag">{project.tag}</span>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">{project.description}</p>

          <p className="modal-section-label">Technologies</p>
          <div className="modal-pills">
            {project.tech.map((t) => (
              <span key={t} className="modal-pill">{t}</span>
            ))}
          </div>

          {project.features && (
            <div className="modal-features">
              <p className="modal-section-label">Key Features</p>
              <ul>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions">
            <a
              className="modal-btn"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}