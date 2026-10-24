import { useTilt } from "../hooks/useTilt";
import { skills } from "../data/skills";

function SkillChip({ index, name }: { index: number; name: string }) {
  const tilt = useTilt<HTMLDivElement>("soft");
  return (
    <div className="skill-chip" {...tilt}>
      <span className="skill-chip__index">{String(index + 1).padStart(2, "0")}</span>
      <span className="skill-chip__name">{name}</span>
    </div>
  );
}

export default function About() {
  const photoTilt = useTilt<HTMLDivElement>("soft");

  return (
    <>
      <div className="page-header page-header--dark">
        <div className="section-inner">
          <p className="page-eyebrow hud-label">About</p>
          <h1 className="page-title">A bit about me, and the tools I build with.</h1>
          <p className="page-lead">
            BSCS student, Flutter developer, and UI/UX designer based in Tangub City, Philippines.
          </p>
        </div>
      </div>

      <main>
        <section className="about about--dark section-dark">
          <div className="section-inner">
            <div className="about-grid">
              <div className="about-photo" {...photoTilt}>
            <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Portrait of Alfred Tumagna" />
              </div>
              <div className="about-bio">
                {/* Paste your original bio paragraphs here. */}
              </div>
            </div>

            <div className="section-block-head">
              <h2 className="section-block-title">Skills &amp; Tools</h2>
            </div>

            <div className="skills-chip-grid">
              {skills.map((name, i) => (
                <SkillChip key={name} index={i} name={name} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}