export type Project = {
  title: string;
  description: string;
  url?: string; // external site (optional)
  tags?: string[];
  images?: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export const Projects: Project[] = [
  {
    title: "Développement IA : Analyse Intelligente des Réseaux (Marketing)",
    tags: ["React", "FastAPI", "Power BI", "Model IA", "PostgreSQL"],
    description:
      "Analyse intelligente des réseaux marketing grâce à des modèles d’IA capables d’extraire des insights, de détecter des tendances, et d’optimiser les stratégies de communication à partir de données multi-sources.",
    url: "https://example.com/live",
    demoUrl: "https://textanalysiscountdown.pages.dev/",
    repoUrl: "https://github.com/Maoulid94/TextAnalysisCountdown",
    images: ["/QA-1.png", "/QA-2.png", "/QA-3.png"],
  },
  {
    title: "Développement IA : ChatBox API (Gestion de Messagerie interne)",
    tags: ["Python", "Litestar", "Ollama", "Google Gemini", "Docker"],
    description:
      "Développement d’une API Python unifiant Ollama et Google Gemini, avec support du streaming, découverte dynamique des modèles et déploiement entièrement containerisé.",
    url: "",
    demoUrl: "https://ollaix-chatbox.pages.dev/",
    repoUrl: "https://github.com/Maoulid94/ollaix-chatBox",
    images: ["/chatBox-1.png", "/chatBox-2.png", "/chatBox-3.png"],
  },
  {
    title: "Développement Mobile : Gestion Intelligente des Données",
    tags: ["React Native", "React", "API REST", "PostgreSQL"],
    description:
      "Application mobile intégrant un tableau de bord multi-années, l’upload de factures d’eau, l’estimation automatique des montants, ainsi qu’un profil utilisateur avec paramètres (changement de mot de passe et mode clair/sombre).",
    url: "",
    repoUrl: "https://github.com/Maoulid94/onead_app",
    images: ["/O-1.png", "/O-2.png", "/O-3.png", "/O-4.png", "/O-5.png"],
  },
  {
    title: "Développement Mobile : Gestion de Cartes de Crédit",
    tags: ["React Native", "Model AI", "API REST", "PostgreSQL"],
    description:
      "Application de gestion de cartes de crédit avec IA : authentification sécurisée, extraction automatique des numéros de cartes, tableaux de bord statistiques et personnalisation visuelle (mode clair/sombre).",
    url: "",
    repoUrl: "https://github.com/Maoulid94/DjbEasyCard",
    images: ["/card-1.jpeg", "/card-2.jpeg", "/card-3.jpeg"],
  },
  {
    title:
      "Développement IA : Vision par Ordinateur (Surveillance, Prévention)",
    tags: ["React Native", "FastAPI", "Model IA", "PostgreSQL"],
    description:
      "Application mobile connectée à des modèles d’IA pour la surveillance du trafic, avec intégration de fonctionnalités dédiées à la gestion police/assurance.",
    url: "",
    repoUrl: "https://github.com/Maoulid94/vehicles_detection",
    images: ["/SR-1.png", "/SR-2.png", "/SR-3.png"],
  },
  {
    title: "Développement IA : Vision par Ordinateur (Sécurité, RH)",
    tags: ["Python", "OpenCV", "InsightFace"],
    description:
      "Détection automatique de visages en temps réel à partir de flux vidéo ou d’images, avec estimation de l’âge et du genre, permettant l’analyse de présence et l’optimisation des processus en sécurité et ressources humaines.",
    url: "",
    repoUrl: "https://github.com/Maoulid94/Reconnaissance-Faciale",
    images: ["/RF-1.png", "/RF-2.png", "/RF-3.png"],
  },
];

export default Projects;
