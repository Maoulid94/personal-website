import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DetailProjects, { slugify } from "../data/Project";
import type { Project } from "../data/Project";
import "../styles/components/projectCard.css";
import "../styles/components/section.css";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = useMemo<Project | undefined>(() => {
    if (!slug) return undefined;
    return DetailProjects.find((p) => slugify(p.title) === slug);
  }, [slug]);

  if (!project) {
    return (
      <main className="section">
        <h2>Project not found</h2>
        <p>The project you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn">
          Back to Projects
        </Link>
      </main>
    );
  }

  const { title, description, images = [], tags = [] } = project;

  const [index, setIndex] = useState<number>(0);
  const pausedRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const hasImages = images.length > 0;
  const safeIndex = hasImages ? index % images.length : 0;

  const next = () => setIndex((i) => (i + 1) % Math.max(images.length, 1));
  const prev = () =>
    setIndex(
      (i) => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1)
    );
  const goTo = (i: number) => setIndex(i);

  const autoPlay = true;
  const intervalMs = 3000;

  useEffect(() => {
    setIndex(0);
  }, [slug]);

  useEffect(() => {
    if (!autoPlay || !hasImages) return;
    if (pausedRef.current) return;
    timerRef.current = window.setInterval(() => next(), intervalMs);
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, [autoPlay, intervalMs, hasImages, index]);

  const pause = () => {
    pausedRef.current = true;
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <main className="section">
      <div className="card" style={{ maxWidth: 980, margin: "0 auto" }}>
        {/* gallery */}
        <div
          className="card-media"
          onMouseEnter={pause}
          onMouseLeave={resume}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={`${title} gallery`}
        >
          {hasImages ? (
            images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${title} – image ${i + 1} of ${images.length}`}
                className={`slide ${i === safeIndex ? "active" : ""}`}
                loading="lazy"
                aria-hidden={i === safeIndex ? "false" : "true"}
              />
            ))
          ) : (
            <div className="card-media__placeholder" aria-hidden="true" />
          )}

          {hasImages && images.length > 1 && (
            <>
              <button
                className="carousel-arrow left"
                onClick={prev}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="carousel-arrow right"
                onClick={next}
                aria-label="Next image"
              >
                ›
              </button>

              <div
                className="carousel-dots"
                role="tablist"
                aria-label="Choose slide"
              >
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === safeIndex}
                    aria-label={`Go to image ${i + 1}`}
                    className={`dot ${i === safeIndex ? "active" : ""}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* details */}
        <h3>{title}</h3>
        <p>{description}</p>

        {tags.length > 0 && (
          <ul className="tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div
          className="actions"
          style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}
        >
          <Link to="/" className="btn-ghost">
            ← Back
          </Link>
        </div>
      </div>
    </main>
  );
}
