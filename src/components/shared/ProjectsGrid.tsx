import type { Project } from "../../data/Project";
import ProjectCard from "./ProjectCard";
import "../../styles/components/projectsGrid.css";

type ProjectsGridProps = {
  projects: Project[];
};

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
