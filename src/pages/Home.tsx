import Section from "../components/shared/Section";
import ProjectsGrid from "../components/shared/ProjectsGrid";
import CVBlock from "../components/shared/CVBlock";
import Contact from "../components/shared/Contact";
import Hero from "../components/shared/Hero";
import DetailProjects from "../data/Project";

export default function Home() {
  const projects = DetailProjects;
  return (
    <>
      <Hero />
      <Section id="about" title="À propos">
        <p>
          Développeur React Native et React, avec une solide base technique en
          JavaScript/TypeScript, API REST et bases de données. J’ai conçu et
          réalisé des applications mobiles et web intégrant des fonctionnalités
          avancées (authentification sécurisée, gestion multimédia, tableaux de
          bord interactifs, paiements et QR codes). Mon parcours inclut
          également des projets d’Intelligence Artificielle, tels que
          l’extraction d’informations à partir d’images et l’intégration de
          modèles IA dans des solutions mobiles. Curieux, rigoureux et motivé,
          je mets mon énergie et mes compétences au service d’entreprises
          innovantes pour créer des applications performantes, fiables et
          utiles.
        </p>
      </Section>
      <Section id="projects" title="Projects">
        <ProjectsGrid projects={projects} />
      </Section>
      <Section id="cv">
        <CVBlock />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}
