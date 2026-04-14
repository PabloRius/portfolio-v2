import type { Lang } from "../types";

export const about = {
  en: {
    "about.heading": "About Me",
    "about.bio":
      "I am a Software Engineer specializing in the Python ecosystem, highly focused on Data Engineering, web automation, and building cloud infrastructure. My goal isn't to build statistical models, but rather to construct the robust, scalable 'highways' that a company's data travels on. Currently, I design and manage end-to-end data extraction ecosystems, transforming unstructured web data into strategic assets. I hold an MSc in Software Engineering and Management from Kingston University (London) and a BSc in Computer Science Engineering from Universidad Carlos III de Madrid.",
  },
  es: {
    "about.heading": "Sobre mí",
    "about.bio":
      "Soy un Ingeniero de Software especializado en el ecosistema Python, con un fuerte enfoque en Ingeniería de Datos, automatización web e infraestructura cloud. Mi objetivo no es construir modelos estadísticos, sino las 'autopistas' robustas y escalables por las que viajan los datos de una empresa. Actualmente diseño y gestiono ecosistemas de extracción de datos end-to-end, transformando datos web no estructurados en activos estratégicos. Tengo un Máster en Ingeniería del Software y Gestión por Kingston University (Londres) y un Grado en Ingeniería Informática por la Universidad Carlos III de Madrid.",
  },
  fr: {
    "about.heading": "À propos de moi",
    "about.bio":
      "Je suis Ingénieur Logiciel spécialisé dans l'écosystème Python, avec un fort accent sur l'Ingénierie des Données, l'automatisation web et la construction d'infrastructures cloud. Mon objectif n'est pas de créer des modèles statistiques, mais de construire les 'autoroutes' robustes et évolutives sur lesquelles transitent les données d'une entreprise. Actuellement, je conçois et gère des écosystèmes d'extraction de données de bout en bout, transformant des données web non structurées en actifs stratégiques. Je suis titulaire d'un Master en Ingénierie Logicielle et Management de Kingston University (Londres) et d'une Licence en Informatique de l'Universidad Carlos III de Madrid.",
  },
} as const satisfies Record<Lang, Record<string, string>>;
