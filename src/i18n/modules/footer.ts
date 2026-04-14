import type { Lang } from "../types";

export const footer = {
  en: {
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with precision and minimal JS.",
  },
  es: {
    "footer.rights": "Todos los derechos reservados.",
    "footer.builtWith": "Construido con precisión y mínimo JS.",
  },
  fr: {
    "footer.rights": "Tous droits réservés.",
    "footer.builtWith": "Construit avec précision et un minimum de JS.",
  },
} as const satisfies Record<Lang, Record<string, string>>;
