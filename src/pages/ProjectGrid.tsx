import DetailProjects from "../pages/DetailPage";
import ProjectCard from "../components/shared/ProjectCard";
import "../styles/section.css";
import "../styles/components/projectCard.css";

export default function ProjectGrid() {
  return (
    <main className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {DetailProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </main>
  );
}
