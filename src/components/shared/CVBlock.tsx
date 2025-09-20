import "../../styles/components/cvBlock.css";

type CVItem = {
  lang: "EN" | "FR";
  title: string;
  file: string; // PDF path (e.g., /cv_en.pdf)
  image: string; // Preview image path (e.g., /cv_en.jpg or .png)
};

const cvs: CVItem[] = [
  {
    lang: "EN",
    title: "My CV (English)",
    file: "/maoulid_en_cv.pdf",
    image: "/maoulid_en_cv.jpg",
  },
  {
    lang: "FR",
    title: "Mon CV (Français)",
    file: "/maoulid_fr_cv.pdf",
    image: "/maoulid_fr_cv.jpg",
  },
];

export default function CVBlock() {
  return (
    <section className="cv cv--image-preview">
      <h2 className="cv-heading">Mon CV</h2>
      <div className="cv-grid">
        {cvs.map(({ lang, title, file, image }) => (
          <article key={lang} className="cv-card">
            <header className="cv-card__header">
              <span className="cv-badge">{lang}</span>
              <h3 className="cv-title">{title}</h3>
            </header>

            {/* Image preview (A4 ratio box, image contained) */}
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-thumb-link"
              aria-label={`Open ${title}`}
              title="Open PDF"
            >
              <div className="cv-thumb-wrap">
                <img
                  src={image}
                  alt={`${title} – preview`}
                  className="cv-thumb"
                  loading="lazy"
                />
              </div>
            </a>

            <div className="cv-actions">
              <a
                href={file}
                download
                className="btn-ghost"
                aria-label={`Download ${title}`}
                title="Download"
              >
                ⬇️ Download
              </a>
              <a
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                aria-label={`View ${title} in a new tab`}
                title="View"
              >
                🔗 View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
