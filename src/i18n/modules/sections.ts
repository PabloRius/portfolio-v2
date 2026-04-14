import type { Lang } from "../types";

export const sections = {
  en: {
    "section.skills": "Tech Stack & Tools",
    "section.projects": "Featured Projects",
    "section.experience": "Work Experience",
    "section.education": "Education",
  },
  es: {
    "section.skills": "Stack Tecnológico",
    "section.projects": "Proyectos Destacados",
    "section.experience": "Experiencia Profesional",
    "section.education": "Formación Académica",
  },
  fr: {
    "section.skills": "Technologies & Outils",
    "section.projects": "Projets Sélectionnés",
    "section.experience": "Expérience Professionnelle",
    "section.education": "Formation Académique",
  },
} as const satisfies Record<Lang, Record<string, string>>;
