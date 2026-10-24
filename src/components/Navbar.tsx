import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle-checkbox"
        checked={open}
        onChange={(e) => setOpen(e.target.checked)}
      />

      <header className={`navbar navbar--on-dark ${scrolled ? "is-elevated" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">Alfred Tumagna</Link>

          <label htmlFor="nav-toggle" className="nav-burger" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </label>

          <nav className="nav-links">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}