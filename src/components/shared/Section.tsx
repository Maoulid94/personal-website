import "../../styles/components/section.css";

import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  title?: string;
  className?: string;
}>;

const Section = ({ id, title, className, children }: SectionProps) => {
  return (
    <section id={id} className={`section ${className ?? ""}`}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
