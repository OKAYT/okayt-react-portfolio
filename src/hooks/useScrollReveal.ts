import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Elements that slide up as they enter the screen
const SLIDE = ".section-block-head, .about-grid, .skill-row";
// Elements that only fade in. They have their own tilt transform,
// so a slide would overwrite it.
const FADE = ".project-card, .skill-chip, .contact-card";

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const elements = document.querySelectorAll<HTMLElement>(`${SLIDE}, ${FADE}`);
    if (elements.length === 0) return;

    elements.forEach((el) => {
      el.classList.add(el.matches(FADE) ? "reveal-fade" : "reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]); // run again on every page change
}