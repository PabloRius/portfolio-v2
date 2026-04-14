import type { Lang } from "../types";

export const hero = {
  en: {
    "hero.greeting": "Hello! 👋",
    "hero.iam": "I'm",
    "hero.role": "Python Data & Automation Engineer",
  },
  es: {
    "hero.greeting": "¡Hola! 👋",
    "hero.iam": "Soy",
    "hero.role": "Python Data & Automation Engineer",
  },
  fr: {
    "hero.greeting": "Bonjour ! 👋",
    "hero.iam": "Je suis",
    "hero.role": "Ingénieur Données & Automatisation Python",
  },
} as const satisfies Record<Lang, Record<string, string>>;
