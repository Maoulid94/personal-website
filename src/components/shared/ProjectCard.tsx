import { useEffect, useRef, useState } from "react";
import type { Project } from "../../data/Project";
import { slugify } from "../../data/Project";
import "../../styles/components/projectCard.css";
import { Link } from "react-router-dom";

type ProjectCardProps = Project & {
  autoPlay?: boolean;
  intervalMs?: number;
  demoUrl?: string;
  repoUrl?: string;
  showArrows?: boolean;
  showDots?: boolean;
};

export default function ProjectCard({
  title,
  demoUrl, // NEW: external live demo
  repoUrl,
  tags = [],
  images = [],
  autoPlay = true,
  intervalMs = 3000,
  showArrows = true,
  showDots = true,
}: ProjectCardProps) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const hasImages = images.length > 0;
  const safeIndex = images.length ? index % images.length : 0;

  const next = () => setIndex((i) => (i + 1) % Math.max(images.length, 1));
  const prev = () =>
    setIndex(
      (i) => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1)
    );
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    if (!autoPlay || !hasImages) return;
    if (pausedRef.current) return;
    timerRef.current = window.setInterval(
      () => next(),
      intervalMs
    ) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [autoPlay, intervalMs, hasImages, index]);

  const pause = () => {
    pausedRef.current = true;
    if (timerRef.current) window.clearInterval(timerRef.current);
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") {
      pause();
      next();
    } else if (e.key === "ArrowLeft") {
      pause();
      prev();
    }
  };

  const slug = slugify(title);

  return (
    <article className="card">
      <div
        className="card-media"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        tabIndex={0}
        onKeyDown={onKeyDown}
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
              onLoad={(e) => {
                const img = e.currentTarget;
                const isPortrait = img.naturalHeight > img.naturalWidth;
                if (isPortrait) img.classList.add("portrait");
              }}
              aria-hidden={i === safeIndex ? "false" : "true"}
            />
          ))
        ) : (
          <div className="card-media__placeholder" aria-hidden="true" />
        )}

        {showArrows && hasImages && images.length > 1 && (
          <>
            <button
              className="carousel-arrow left"
              aria-label="Previous image"
              onClick={() => {
                pause();
                prev();
              }}
            >
              ‹
            </button>
            <button
              className="carousel-arrow right"
              aria-label="Next image"
              onClick={() => {
                pause();
                next();
              }}
            >
              ›
            </button>
          </>
        )}

        {showDots && hasImages && images.length > 1 && (
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
                onClick={() => {
                  pause();
                  goTo(i);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <h3>{title}</h3>
      {tags.length > 0 && (
        <ul className="tags">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      <div className="actions">
        <Link to={`/projects/${slug}`} className="btn-ghost">
          View Project
        </Link>
        {demoUrl && (
          <a
            href={demoUrl}
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live demo of ${title}`}
            title="Open live demo"
          >
            {/* External link icon */}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="btn-icon"
            >
              <path
                fill="currentColor"
                d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
              />
            </svg>
            Demo
          </a>
        )}

        {repoUrl && (
          <a
            href={repoUrl}
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open GitHub repository of ${title}`}
            title="Open GitHub"
          >
            {/* GitHub icon */}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              className="btn-icon"
            >
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05 .9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.12 2.5.36 1.9-1.29 2.74-1.02 2.74-1.02 .55 1.37.2 2.39.1 2.64.64.7 1.02 1.59 1.02 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.67.92.67 1.86 0 1.34-.01 2.41-.01 2.74 0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
              />
            </svg>
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
