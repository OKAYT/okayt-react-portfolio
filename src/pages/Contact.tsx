import { useTilt } from "../hooks/useTilt";

const rows = [
  { label: "Name", value: "Alfred Tumagna" },
  { label: "Email", value: "tumagnaalfred@gmail.com", href: "mailto:tumagnaalfred@gmail.com" },
  { label: "Phone", value: "0963 230 3659", href: "tel:+639632303659" },
  {
    label: "Facebook",
    value: "facebook.com/itsalfredmaderpaker",
    href: "https://www.facebook.com/itsalfredmaderpaker",
    external: true,
  },
  { label: "GitHub", value: "github.com/OKAYT", href: "https://github.com/OKAYT", external: true },
];

export default function Contact() {
  const tilt = useTilt<HTMLDivElement>("soft");

  return (
    <>
      <div className="page-header page-header--dark">
        <div className="section-inner">
          <p className="page-eyebrow hud-label">Get In Touch</p>
          <h1 className="page-title">Contact</h1>
          <p className="page-lead">Open to opportunities, collaborations, and a good conversation about tech.</p>
        </div>
      </div>

      <main>
        <section className="contact contact--dark section-dark">
          <div className="section-inner">
            <div className="contact-card" {...tilt}>
              {rows.map((row) => (
                <div className="contact-row" key={row.label}>
                  <span className="contact-label">{row.label}</span>
                  {row.href ? (
                    <a
                      className="contact-value contact-link"
                      href={row.href}
                      {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {row.value}
                      <span className="link-arrow" aria-hidden="true">&rarr;</span>
                    </a>
                  ) : (
                    <span className="contact-value">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}