import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects, type Project } from "../data/projects";

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="page-header page-header--dark">
        <div className="section-inner">
          <p className="page-eyebrow hud-label">Selected Work</p>
          <h1 className="page-title">My Work</h1>
          <p className="page-lead">Projects built to solve real problems for real communities.</p>
        </div>
      </div>

      <main>
        <section className="work work--dark section-dark">
          <div className="section-inner">
            <div className="projects-grid">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} onOpen={setSelected} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}