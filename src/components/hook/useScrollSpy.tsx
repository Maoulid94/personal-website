import { useEffect, useState } from "react";

type UseScrollSpyOptions = {
  selector?: string;
  threshold?: number;
};

export default function useScrollSpy({
  selector = "section",
  threshold = 0.5,
}: UseScrollSpyOptions = {}) {
  const [activeId, setActiveId] = useState<string>("about");
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, [selector, threshold]);

  return { activeId, showTopBtn };
}
