// import DetailProjects from "../pages/DetailPage";
import { Projects, type Project } from "../data/Project";
import ProjectCard from "../components/shared/ProjectCard";
import "../styles/section.css";
import "../styles/components/projectCard.css";

export default function ProjectGrid() {
  return (
    <main className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {Projects.map((p: Project) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </main>
  );
}
