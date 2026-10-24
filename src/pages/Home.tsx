import { Link } from "react-router-dom";
import Constellation from "../components/Constellation";
import { useTilt } from "../hooks/useTilt";

export default function Home() {
  const tilt = useTilt<HTMLDivElement>("strong");

  return (
    <main>
      <section className="hero hero--dark">
        <Constellation />
        <div className="hero-glow" aria-hidden="true" />

        <div className="section-inner hero-inner hero-inner--dark">
          <div className="hero-text hero-text--dark">
            <p className="hero-eyebrow hero-eyebrow--dark hud-label">
              Computer Science Student &mdash; Tangub City Global College
            </p>
            <h1 className="hero-name hero-name--dark">
              Building Ideas Into<br />
              <span className="accent-clay">Real Mobile Products.</span>
            </h1>
            <p className="hero-role hero-role--dark">
              Flutter Developer <span className="slash">/</span> UI&#8202;&amp;&#8202;UX Designer{" "}
              <span className="slash">/</span> Problem Solver
            </p>
            <p className="hero-intro hero-intro--dark">
              I build mobile applications that solve real problems for real communities —
              from campus navigation to boarding-house management — with a focus on
              clean interfaces and dependable engineering. Currently growing my craft
              one project at a time.
            </p>

            <div className="hero-links">
              <Link to="/work" className="text-link text-link--dark">
                View my work <span className="arrow">&rarr;</span>
              </Link>
              <Link to="/about" className="text-link text-link--muted text-link--dark-muted">
                More about me
              </Link>
            </div>

            <Link to="/work" className="orbit-badge" aria-label="View my projects">
              <svg viewBox="0 0 160 160" className="orbit-badge__ring" aria-hidden="true">
                <defs>
                  <path id="orbitPath" d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0" />
                </defs>
                <text>
                  <textPath href="#orbitPath" startOffset="0%">
                    MY&#8201;PROJECTS&#8201;&bull;&#8201;MY&#8201;PROJECTS&#8201;&bull;&#8201;
                  </textPath>
                </text>
              </svg>
              <span className="orbit-badge__arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="profile-frame profile-frame--dark" {...tilt}>
            <span className="corner corner-tl" aria-hidden="true" />
            <span className="corner corner-tr" aria-hidden="true" />
            <span className="corner corner-bl" aria-hidden="true" />
            <span className="corner corner-br" aria-hidden="true" />
           <img className="profile-photo" src={`${import.meta.env.BASE_URL}profile.png`} alt="Portrait of Alfred Tumagna" />
            <span className="profile-chip profile-chip--dark">Available for opportunities</span>
          </div>
        </div>
      </section>
    </main>
  );
}