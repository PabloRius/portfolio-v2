import type { Lang } from "../types";

export const actions = {
  en: {
    "action.downloadCv": "Download CV",
    "action.contactMe": "Get in Touch",
    "action.viewLive": "View Live",
  },
  es: {
    "action.downloadCv": "Descargar CV",
    "action.contactMe": "Contactar",
    "action.viewLive": "Ver Proyecto",
  },
  fr: {
    "action.downloadCv": "Télécharger le CV",
    "action.contactMe": "Me Contacter",
    "action.viewLive": "Voir le Projet",
  },
} as const satisfies Record<Lang, Record<string, string>>;
