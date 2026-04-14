import { SHARED } from "./shared";

export const education = {
  en: [
    {
      ...SHARED.education.kingston,
      degree:
        "Master of Engineering - MEng, Software Engineering and Management",
      dateRange: "January 2025 - January 2026",
      description:
        "This postgraduate program at Kingston University (London) focuses on the intersection of advanced software engineering practices and technology management. The curriculum covers Agile and Scrum leadership, enterprise architecture, scalable system design, and the business side of delivering software products in complex organizations.",
      achievements: [
        "Specializing in Agile methodologies, project leadership, and scalable tech solutions.",
      ],
    },
    {
      ...SHARED.education.uc3m,
      degree: "Bachelor's degree, Computer Science Engineering",
      dateRange: "September 2019 - July 2024",
      description:
        "A comprehensive four-year degree covering the core pillars of computer science: algorithms and data structures, operating systems, computer networks, databases, software engineering, and mathematics. This program provided the rigorous technical foundation that underpins all my subsequent professional work.",
      achievements: [
        "Gained a strong foundation in computer science and engineering principles.",
      ],
    },
    {
      ...SHARED.education.unsw,
      degree: "Exchange Program - Computer Science Engineering",
      dateRange: "January 2023 - June 2023",
      description:
        "A semester-long international exchange at the University of New South Wales (Sydney), one of Australia's leading research universities. This experience broadened my academic and cultural perspective, exposing me to different teaching methodologies and collaborating with students from across the Asia-Pacific region.",
      achievements: [
        "International academic exchange expanding global perspective and technical adaptability.",
      ],
    },
  ],
  es: [
    {
      ...SHARED.education.kingston,
      degree: "Máster en Ingeniería - MEng, Ingeniería del Software y Gestión",
      dateRange: "Enero 2025 - Enero 2026",
      description:
        "Este programa de posgrado en Londres se centra en la intersección de las prácticas avanzadas de ingeniería del software y la gestión tecnológica. Abarca el liderazgo Agile, la arquitectura empresarial y el diseño de sistemas escalables.",
      achievements: [
        "Especialización en metodologías Agile, liderazgo de proyectos y soluciones tecnológicas escalables.",
      ],
    },
    {
      ...SHARED.education.uc3m,
      degree: "Grado en Ingeniería Informática",
      dateRange: "Septiembre 2019 - Julio 2024",
      description:
        "Título de cuatro años que cubre los pilares de la informática: algoritmos, sistemas operativos, redes, bases de datos e ingeniería del software. Proporcionó la sólida base técnica que sustenta mi trabajo profesional.",
      achievements: [
        "Sólida base en los principios de la informática y la ingeniería.",
      ],
    },
    {
      ...SHARED.education.unsw,
      degree: "Programa de Intercambio - Ingeniería Informática",
      dateRange: "Enero 2023 - Junio 2023",
      description:
        "Semestre de intercambio internacional en la Universidad de Nueva Gales del Sur (Sídney). Esta experiencia amplió mi perspectiva académica y cultural, exponiéndome a diferentes metodologías de enseñanza.",
      achievements: [
        "Intercambio académico internacional que amplió la perspectiva global y la adaptabilidad técnica.",
      ],
    },
  ],
  fr: [
    {
      ...SHARED.education.kingston,
      degree:
        "Master en Ingénierie - MEng, Ingénierie Logicielle et Management",
      dateRange: "Janvier 2025 - Janvier 2026",
      description:
        "Ce programme se concentre sur l'intersection des pratiques avancées d'ingénierie logicielle et du management technologique. Le programme couvre le leadership Agile, l'architecture d'entreprise et la conception de systèmes évolutifs.",
      achievements: [
        "Spécialisation en méthodologies Agile et solutions technologiques évolutives.",
      ],
    },
    {
      ...SHARED.education.uc3m,
      degree: "Licence en Informatique",
      dateRange: "Septembre 2019 - Juillet 2024",
      description:
        "Diplôme couvrant les piliers de l'informatique : algorithmes, systèmes d'exploitation, réseaux et bases de données. Ce programme a fourni la base technique rigoureuse de mon travail professionnel.",
      achievements: ["Solides bases en informatique et en génie logiciel."],
    },
    {
      ...SHARED.education.unsw,
      degree: "Programme d'Échange - Informatique",
      dateRange: "Janvier 2023 - Juin 2023",
      description:
        "Semestre d'échange à l'Université de Nouvelle-Galles du Sud. Cette expérience a élargi ma perspective académique et culturelle.",
      achievements: [
        "Échange académique international élargissant la perspective mondiale.",
      ],
    },
  ],
} as const;
