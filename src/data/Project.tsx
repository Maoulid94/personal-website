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
    title: "Questionnaire Intelligent",
    tags: ["React", "FastAPI", "Power BI", "Model IA", "PostgreSQL"],
    description:
      "Collecte de données via QR code et analyse prédictive pour anticiper les résultats.",
    url: "https://example.com/live",
    demoUrl: "https://textanalysiscountdown.pages.dev/",
    repoUrl: "https://github.com/Maoulid94/TextAnalysisCountdown",
    images: ["/QA-1.png", "/QA-2.png", "/QA-3.png"],
  },
  {
    title: "ChatBox API",
    tags: ["Python", "Litestar", "Ollama", "Google Gemini", "Docker"],
    description:
      "Développement d’une API Python unifiant Ollama et Google Gemini avec support streaming, découverte dynamique des modèles et déploiement containerisé.",
    url: "",
    demoUrl: "https://ollaix-chatbox.pages.dev/",
    repoUrl: "https://github.com/Maoulid94/ollaix-chatBox",
    images: ["/chatBox-1.png", "/chatBox-2.png", "/chatBox-3.png"],
  },
  {
    title: "ONEAD",
    tags: ["React Native", "React", "API REST", "PostgreSQL"],
    description:
      "App mobile avec tableau de bord multi-années, upload de factures d’eau, estimation des montants et profil utilisateur avec paramètres (changement de mot de passe, mode clair/sombre).",
    url: "",
    repoUrl: "https://github.com/Maoulid94/onead_app",
    images: ["/card-1.jpeg", "/card-2.jpeg", "/card-3.jpeg"],
  },
  {
    title: "Gestion des Cartes Crédit avec IA",
    tags: ["React Native", "Model AI", "API REST", "PostgreSQL"],
    description:
      "Application de gestion des cartes bancaires avec IA : authentification sécurisée, extraction automatique des numéros de cartes, tableaux de bord statistiques et personnalisation visuelle (mode clair/sombre).",
    url: "",
    repoUrl: "https://github.com/Maoulid94/DjbEasyCard",
    images: ["/card-1.jpeg", "/card-2.jpeg", "/card-3.jpeg"],
  },
  {
    title: "Sécurité Routière & IA",
    tags: ["React Native", "FastAPI", "Model IA", "PostgreSQL"],
    description:
      "Application mobile connectée à des modèles IA pour la surveillance du trafic et la gestion police/assurance.",
    url: "",
    repoUrl: "https://github.com/youruser/yourrepo",
    images: ["/SR-1.png", "/SR-2.png", "/SR-3.png"],
  },
  {
    title: "Détection de visages",
    tags: ["Python", "OpenCV", "InsightFace"],
    description:
      "Estimation en temps réel de l’âge et du genre à partir de visages détectés.",
    url: "",
    repoUrl: "https://github.com/Maoulid94/Reconnaissance-Faciale",
    images: ["/RF-1.png", "/RF-2.png", "/RF-3.png"],
  },
];

export default Projects;
