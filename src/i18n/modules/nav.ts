import type { Lang } from "../types";

export const nav = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
  },
  es: {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
  },
  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.contact": "Contact",
  },
} as const satisfies Record<Lang, Record<string, string>>;
