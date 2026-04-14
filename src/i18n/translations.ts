export type Lang = "en" | "es" | "fr";

export const DEFAULT_LANG: Lang = "en";

// ---------------------------------------------------------------------------
// UI strings (section headings, nav labels, button text, etc.)
// ---------------------------------------------------------------------------
export const ui = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",

    // Hero
    "hero.greeting": "Hello! 👋",
    "hero.iam": "I'm",

    // About
    "about.heading": "About Me",
    "about.bio":
      "I am a Software Engineer specializing in the Python ecosystem, highly focused on Data Engineering, web automation, and building cloud infrastructure. My goal isn't to build statistical models, but rather to construct the robust, scalable 'highways' that a company's data travels on. Currently, I design and manage end-to-end data extraction ecosystems, transforming unstructured web data into strategic assets. I hold an MSc in Software Engineering and Management from Kingston University (London) and a BSc in Computer Science Engineering from Universidad Carlos III de Madrid.",

    // Sections
    "section.projects": "Projects",
    "section.experience": "Experience",
    "section.education": "Education",

    // Footer
    "footer.rights": "All rights reserved.",

    // Detail pages
    "detail.back": "Back",
    "detail.project.label": "Project",
    "detail.experience.label": "Experience",
    "detail.education.label": "Education",
    "detail.viewOnGithub": "View on GitHub",
    "detail.keyContributions": "Key Contributions",
    "detail.achievements": "Achievements & Highlights",
  },
  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",

    // Hero
    "hero.greeting": "¡Hola! 👋",
    "hero.iam": "Soy",

    // About
    "about.heading": "Sobre mí",
    "about.bio":
      "Soy un Ingeniero de Software especializado en el ecosistema Python, con un fuerte enfoque en Ingeniería de Datos, automatización web e infraestructura cloud. Mi objetivo no es construir modelos estadísticos, sino las 'autopistas' robustas y escalables por las que viajan los datos de una empresa. Actualmente diseño y gestiono ecosistemas de extracción de datos end-to-end, transformando datos web no estructurados en activos estratégicos. Tengo un Máster en Ingeniería del Software y Gestión por Kingston University (Londres) y un Grado en Ingeniería Informática por la Universidad Carlos III de Madrid.",

    // Sections
    "section.projects": "Proyectos",
    "section.experience": "Experiencia",
    "section.education": "Formación",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Detail pages
    "detail.back": "Volver",
    "detail.project.label": "Proyecto",
    "detail.experience.label": "Experiencia",
    "detail.education.label": "Formación",
    "detail.viewOnGithub": "Ver en GitHub",
    "detail.keyContributions": "Contribuciones clave",
    "detail.achievements": "Logros y destacados",
  },
  fr: {
    // Nav
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.education": "Formation",

    // Hero
    "hero.greeting": "Bonjour ! 👋",
    "hero.iam": "Je suis",

    // About
    "about.heading": "À propos de moi",
    "about.bio":
      "Je suis Ingénieur Logiciel spécialisé dans l'écosystème Python, avec un fort accent sur l'Ingénierie des Données, l'automatisation web et la construction d'infrastructures cloud. Mon objectif n'est pas de créer des modèles statistiques, mais de construire les 'autoroutes' robustes et évolutives sur lesquelles transitent les données d'une entreprise. Actuellement, je conçois et gère des écosystèmes d'extraction de données de bout en bout, transformant des données web non structurées en actifs stratégiques. Je suis titulaire d'un Master en Ingénierie Logicielle et Management de Kingston University (Londres) et d'une Licence en Informatique de l'Universidad Carlos III de Madrid.",

    // Sections
    "section.projects": "Projets",
    "section.experience": "Expérience",
    "section.education": "Formation",

    // Footer
    "footer.rights": "Tous droits réservés.",

    // Detail pages
    "detail.back": "Retour",
    "detail.project.label": "Projet",
    "detail.experience.label": "Expérience",
    "detail.education.label": "Formation",
    "detail.viewOnGithub": "Voir sur GitHub",
    "detail.keyContributions": "Contributions clés",
    "detail.achievements": "Réalisations & Points forts",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof (typeof ui)["en"];

// ---------------------------------------------------------------------------
// Per-item translated content (projects, experience, education)
// ---------------------------------------------------------------------------
export const content = {
  en: {
    projects: [
      {
        slug: "ecommerce-market-intelligence-scraper",
        name: "E-Commerce Market Intelligence Scraper",
        description:
          "Architected robust scrapers using Python and Crawlee, utilizing browser/navigator emulation to navigate highly dynamic e-commerce platforms.",
        longDescription:
          "This project involved building a full-scale web intelligence platform capable of extracting structured market data from highly dynamic e-commerce websites. The scrapers use browser fingerprint emulation to avoid bot detection, and the data is processed through a pipeline that normalizes and stores it for downstream analytics. The system is designed for reliability, with automatic retries, error reporting, and Prefect-based orchestration to handle large-scale scheduled runs.",
      },
      {
        slug: "automated-incident-reporting-pipeline",
        name: "Automated Incident Reporting Pipeline",
        description:
          "Automated data integration for incident reporting using Node.js and APIs, reducing data processing time for managers.",
        longDescription:
          "Designed and implemented an end-to-end data integration pipeline that connects multiple internal APIs to consolidate incident data into a unified reporting system. The automation reduced hours of manual work per week for operations managers, and introduced scheduled data syncs with real-time dashboards in Power BI. The system also includes automated alerting for critical incidents.",
      },
      {
        slug: "real-time-sensor-data-platform",
        name: "Real-time Sensor Data Platform",
        description:
          "Developed a full-stack project to streamline sensor data using Azure IoT, Node.js, and React, enhancing real-time interaction and visualization.",
        longDescription:
          "Built a complete IoT data platform integrating Azure IoT Hub with a Node.js backend and a React frontend. Sensor data is ingested in real time, processed, and visualized through interactive dashboards. The platform supports multiple device streams simultaneously and includes historical data playback, threshold alerts, and role-based access control for different teams.",
      },
    ],
    experience: [
      {
        slug: "comexsoft-python-engineer",
        title: "Python Data & Automation Engineer",
        description:
          "At ComexSoft I specialize in building the data infrastructure that powers market intelligence. My work spans the full data lifecycle: from writing resilient, scalable scrapers that extract raw information from the web, to orchestrating the pipelines that transform and load that data into usable formats, to provisioning the cloud infrastructure that hosts it all.",
        bullets: [
          "Architected robust scrapers using Python and Crawlee, utilizing browser/navigator emulation to navigate highly dynamic e-commerce platforms.",
          "Designed and managed end-to-end data pipelines using Prefect, ensuring high reliability, monitoring, and efficient data processing.",
          "Deployed scalable cloud architectures on AWS via Infrastructure as Code using Pulumi, significantly optimizing environment provisioning.",
          "Configured and managed server environments and development setups using NixOS, improving system reproducibility.",
        ],
      },
      {
        slug: "tk-elevator-bi-analyst",
        title: "Business Intelligence Analyst Intern",
        description:
          "During my internship at TK Elevator I worked within the Occupational Safety & Health (OSH) department, transforming raw incident data into actionable insights. I built automation tools that eliminated manual reporting bottlenecks and created dashboards that gave leadership clear visibility into safety trends across multiple sites.",
        bullets: [
          "Automated data integration for incident reporting using Node.js and APIs, reducing data processing time for managers.",
          "Created performance indicators for the OSH department, using large datasets for better analysis and decision-making.",
          "Developed Power BI dashboards to visualize incident trends, helping prioritize preventive measures in high-risk zones.",
        ],
      },
      {
        slug: "ntt-data-software-engineer",
        title: "Software Engineer Intern",
        description:
          "At NTT DATA I contributed to enterprise-grade software projects for major clients in the transport and infrastructure sectors. I worked across the full stack, from building CI/CD pipelines that improved team velocity, to developing real-time IoT dashboards for Renfe, Spain's national rail operator.",
        bullets: [
          "Built and maintained CI/CD pipelines with GitHub Actions, automating deployments and reducing manual effort by 50%.",
          "Developed a full-stack project to streamline sensor data using Azure IoT, Node.js, and React, enhancing real-time interaction and visualization.",
          "Created the frontend for Renfe's real-time data visualization app with React and TypeScript, improving safety and risk management.",
        ],
      },
    ],
    education: [
      {
        slug: "kingston-university-meng",
        degree:
          "Master of Engineering - MEng, Software Engineering and Management",
        description:
          "This postgraduate program at Kingston University (London) focuses on the intersection of advanced software engineering practices and technology management. The curriculum covers Agile and Scrum leadership, enterprise architecture, scalable system design, and the business side of delivering software products in complex organizations.",
        achievements: [
          "Specializing in Agile methodologies, project leadership, and scalable tech solutions.",
        ],
      },
      {
        slug: "uc3m-bsc-computer-science",
        degree: "Bachelor's degree, Computer Science Engineering",
        description:
          "A comprehensive four-year degree covering the core pillars of computer science: algorithms and data structures, operating systems, computer networks, databases, software engineering, and mathematics. This program provided the rigorous technical foundation that underpins all my subsequent professional work.",
        achievements: [
          "Gained a strong foundation in computer science and engineering principles.",
        ],
      },
      {
        slug: "unsw-exchange-computer-science",
        degree: "Exchange Program - Computer Science Engineering",
        description:
          "A semester-long international exchange at the University of New South Wales (Sydney), one of Australia's leading research universities. This experience broadened my academic and cultural perspective, exposing me to different teaching methodologies and collaborating with students from across the Asia-Pacific region.",
        achievements: [
          "International academic exchange expanding global perspective and technical adaptability.",
        ],
      },
    ],
  },
  es: {
    projects: [
      {
        slug: "ecommerce-market-intelligence-scraper",
        name: "Scraper de Inteligencia de Mercado para E-Commerce",
        description:
          "Arquitectura de scrapers robustos con Python y Crawlee, usando emulación de navegador para acceder a plataformas de e-commerce altamente dinámicas.",
        longDescription:
          "Este proyecto consistió en construir una plataforma de inteligencia web capaz de extraer datos estructurados de mercado desde sitios de e-commerce muy dinámicos. Los scrapers usan emulación de huella digital del navegador para evitar la detección de bots, y los datos se procesan a través de un pipeline que los normaliza y almacena para análisis posteriores. El sistema está diseñado para ser confiable, con reintentos automáticos, reporte de errores y orquestación basada en Prefect.",
      },
      {
        slug: "automated-incident-reporting-pipeline",
        name: "Pipeline Automatizado de Informes de Incidentes",
        description:
          "Integración automatizada de datos para informes de incidentes con Node.js y APIs, reduciendo el tiempo de procesamiento para los gestores.",
        longDescription:
          "Diseñé e implementé un pipeline de integración de datos end-to-end que conecta múltiples APIs internas para consolidar datos de incidentes en un sistema de informes unificado. La automatización redujo horas de trabajo manual semanal para los gestores de operaciones, e introdujo sincronizaciones programadas con dashboards en tiempo real en Power BI. El sistema también incluye alertas automáticas para incidentes críticos.",
      },
      {
        slug: "real-time-sensor-data-platform",
        name: "Plataforma de Datos de Sensores en Tiempo Real",
        description:
          "Desarrollo de un proyecto full-stack para gestionar datos de sensores con Azure IoT, Node.js y React, mejorando la interacción y visualización en tiempo real.",
        longDescription:
          "Construí una plataforma IoT completa integrando Azure IoT Hub con un backend en Node.js y un frontend en React. Los datos de los sensores se ingieren en tiempo real, se procesan y visualizan en dashboards interactivos. La plataforma soporta múltiples flujos de dispositivos simultáneos e incluye reproducción de datos históricos, alertas por umbral y control de acceso basado en roles para distintos equipos.",
      },
    ],
    experience: [
      {
        slug: "comexsoft-python-engineer",
        title: "Ingeniero de Datos y Automatización Python",
        description:
          "En ComexSoft me especializo en construir la infraestructura de datos que impulsa la inteligencia de mercado. Mi trabajo abarca todo el ciclo de vida del dato: desde scrapers resilientes y escalables que extraen información bruta de la web, hasta la orquestación de pipelines que transforman y cargan esos datos en formatos utilizables, y el aprovisionamiento de la infraestructura cloud que lo aloja todo.",
        bullets: [
          "Arquitectura de scrapers robustos con Python y Crawlee, usando emulación de navegador para navegar plataformas de e-commerce altamente dinámicas.",
          "Diseño y gestión de pipelines de datos end-to-end con Prefect, garantizando alta fiabilidad, monitorización y procesamiento eficiente.",
          "Despliegue de arquitecturas cloud escalables en AWS mediante Infraestructura como Código con Pulumi, optimizando significativamente el aprovisionamiento de entornos.",
          "Configuración y gestión de entornos de servidor y desarrollo con NixOS, mejorando la reproducibilidad del sistema.",
        ],
      },
      {
        slug: "tk-elevator-bi-analyst",
        title: "Analista de Business Intelligence (Prácticas)",
        description:
          "Durante mis prácticas en TK Elevator trabajé en el departamento de Seguridad y Salud en el Trabajo (SST), transformando datos brutos de incidentes en información accionable. Construí herramientas de automatización que eliminaron cuellos de botella en la generación de informes y creé dashboards que dieron a la dirección una visibilidad clara de las tendencias de seguridad en múltiples centros.",
        bullets: [
          "Automatización de la integración de datos para informes de incidentes con Node.js y APIs, reduciendo el tiempo de procesamiento para los gestores.",
          "Creación de indicadores de rendimiento para el departamento SST, usando grandes volúmenes de datos para mejorar el análisis y la toma de decisiones.",
          "Desarrollo de dashboards en Power BI para visualizar tendencias de incidentes, ayudando a priorizar medidas preventivas en zonas de alto riesgo.",
        ],
      },
      {
        slug: "ntt-data-software-engineer",
        title: "Ingeniero de Software (Prácticas)",
        description:
          "En NTT DATA contribuí a proyectos de software empresarial para grandes clientes de los sectores del transporte y la infraestructura. Trabajé en toda la pila, desde la construcción de pipelines CI/CD que mejoraron la velocidad del equipo, hasta el desarrollo de dashboards IoT en tiempo real para Renfe, el operador ferroviario nacional de España.",
        bullets: [
          "Construcción y mantenimiento de pipelines CI/CD con GitHub Actions, automatizando despliegues y reduciendo el esfuerzo manual en un 50%.",
          "Desarrollo de un proyecto full-stack para gestionar datos de sensores con Azure IoT, Node.js y React, mejorando la interacción y visualización en tiempo real.",
          "Creación del frontend para la aplicación de visualización de datos en tiempo real de Renfe con React y TypeScript, mejorando la seguridad y la gestión de riesgos.",
        ],
      },
    ],
    education: [
      {
        slug: "kingston-university-meng",
        degree:
          "Máster en Ingeniería - MEng, Ingeniería del Software y Gestión",
        description:
          "Este programa de posgrado en Kingston University (Londres) se centra en la intersección de las prácticas avanzadas de ingeniería del software y la gestión tecnológica. El plan de estudios abarca el liderazgo Agile y Scrum, la arquitectura empresarial, el diseño de sistemas escalables y el aspecto de negocio de la entrega de productos de software en organizaciones complejas.",
        achievements: [
          "Especialización en metodologías Agile, liderazgo de proyectos y soluciones tecnológicas escalables.",
        ],
      },
      {
        slug: "uc3m-bsc-computer-science",
        degree: "Grado en Ingeniería Informática",
        description:
          "Un título de cuatro años que cubre los pilares fundamentales de la informática: algoritmos y estructuras de datos, sistemas operativos, redes, bases de datos, ingeniería del software y matemáticas. Este programa proporcionó la sólida base técnica que sustenta todo mi trabajo profesional posterior.",
        achievements: [
          "Sólida base en los principios de la informática y la ingeniería.",
        ],
      },
      {
        slug: "unsw-exchange-computer-science",
        degree: "Programa de Intercambio - Ingeniería Informática",
        description:
          "Un semestre de intercambio internacional en la Universidad de Nueva Gales del Sur (Sídney), una de las principales universidades de investigación de Australia. Esta experiencia amplió mi perspectiva académica y cultural, exponiéndome a diferentes metodologías de enseñanza y colaborando con estudiantes de toda la región Asia-Pacífico.",
        achievements: [
          "Intercambio académico internacional que amplió la perspectiva global y la adaptabilidad técnica.",
        ],
      },
    ],
  },
  fr: {
    projects: [
      {
        slug: "ecommerce-market-intelligence-scraper",
        name: "Scraper d'Intelligence de Marché pour l'E-Commerce",
        description:
          "Conception de scrapers robustes avec Python et Crawlee, utilisant l'émulation de navigateur pour accéder à des plateformes e-commerce très dynamiques.",
        longDescription:
          "Ce projet a consisté à construire une plateforme d'intelligence web capable d'extraire des données de marché structurées depuis des sites e-commerce très dynamiques. Les scrapers utilisent l'émulation d'empreinte digitale du navigateur pour éviter la détection de bots, et les données sont traitées via un pipeline qui les normalise et les stocke pour des analyses ultérieures. Le système est conçu pour être fiable, avec des tentatives automatiques, des rapports d'erreurs et une orchestration basée sur Prefect.",
      },
      {
        slug: "automated-incident-reporting-pipeline",
        name: "Pipeline Automatisé de Rapports d'Incidents",
        description:
          "Intégration automatisée de données pour les rapports d'incidents avec Node.js et des APIs, réduisant le temps de traitement pour les gestionnaires.",
        longDescription:
          "Conception et implémentation d'un pipeline d'intégration de données de bout en bout connectant plusieurs APIs internes pour consolider les données d'incidents dans un système de rapports unifié. L'automatisation a réduit les heures de travail manuel hebdomadaire pour les responsables opérationnels, et a introduit des synchronisations planifiées avec des tableaux de bord en temps réel dans Power BI. Le système inclut également des alertes automatiques pour les incidents critiques.",
      },
      {
        slug: "real-time-sensor-data-platform",
        name: "Plateforme de Données de Capteurs en Temps Réel",
        description:
          "Développement d'un projet full-stack pour gérer les données de capteurs avec Azure IoT, Node.js et React, améliorant l'interaction et la visualisation en temps réel.",
        longDescription:
          "Construction d'une plateforme IoT complète intégrant Azure IoT Hub avec un backend Node.js et un frontend React. Les données des capteurs sont ingérées en temps réel, traitées et visualisées dans des tableaux de bord interactifs. La plateforme supporte plusieurs flux d'appareils simultanément et inclut la relecture des données historiques, des alertes par seuil et un contrôle d'accès basé sur les rôles pour différentes équipes.",
      },
    ],
    experience: [
      {
        slug: "comexsoft-python-engineer",
        title: "Ingénieur Données & Automatisation Python",
        description:
          "Chez ComexSoft, je me spécialise dans la construction de l'infrastructure de données qui alimente l'intelligence de marché. Mon travail couvre l'intégralité du cycle de vie des données : de l'écriture de scrapers résilients et évolutifs qui extraient des informations brutes du web, à l'orchestration des pipelines qui transforment et chargent ces données dans des formats utilisables, jusqu'au provisionnement de l'infrastructure cloud qui héberge le tout.",
        bullets: [
          "Conception de scrapers robustes avec Python et Crawlee, utilisant l'émulation de navigateur pour naviguer sur des plateformes e-commerce très dynamiques.",
          "Conception et gestion de pipelines de données de bout en bout avec Prefect, garantissant une haute fiabilité, une surveillance et un traitement efficace des données.",
          "Déploiement d'architectures cloud évolutives sur AWS via l'Infrastructure as Code avec Pulumi, optimisant significativement le provisionnement des environnements.",
          "Configuration et gestion des environnements serveur et de développement avec NixOS, améliorant la reproductibilité du système.",
        ],
      },
      {
        slug: "tk-elevator-bi-analyst",
        title: "Analyste Business Intelligence (Stage)",
        description:
          "Durant mon stage chez TK Elevator, j'ai travaillé au sein du département Santé et Sécurité au Travail (SST), transformant des données brutes d'incidents en informations exploitables. J'ai construit des outils d'automatisation qui ont éliminé les goulots d'étranglement dans la génération de rapports et créé des tableaux de bord offrant à la direction une visibilité claire sur les tendances de sécurité dans plusieurs sites.",
        bullets: [
          "Automatisation de l'intégration des données pour les rapports d'incidents avec Node.js et des APIs, réduisant le temps de traitement pour les gestionnaires.",
          "Création d'indicateurs de performance pour le département SST, utilisant de grands volumes de données pour améliorer l'analyse et la prise de décision.",
          "Développement de tableaux de bord Power BI pour visualiser les tendances des incidents, aidant à prioriser les mesures préventives dans les zones à risque.",
        ],
      },
      {
        slug: "ntt-data-software-engineer",
        title: "Ingénieur Logiciel (Stage)",
        description:
          "Chez NTT DATA, j'ai contribué à des projets logiciels d'envergure pour de grands clients des secteurs du transport et des infrastructures. J'ai travaillé sur toute la pile, de la construction de pipelines CI/CD qui ont amélioré la vélocité de l'équipe, au développement de tableaux de bord IoT en temps réel pour Renfe, l'opérateur ferroviaire national espagnol.",
        bullets: [
          "Construction et maintenance de pipelines CI/CD avec GitHub Actions, automatisant les déploiements et réduisant l'effort manuel de 50%.",
          "Développement d'un projet full-stack pour gérer les données de capteurs avec Azure IoT, Node.js et React, améliorant l'interaction et la visualisation en temps réel.",
          "Création du frontend pour l'application de visualisation de données en temps réel de Renfe avec React et TypeScript, améliorant la sécurité et la gestion des risques.",
        ],
      },
    ],
    education: [
      {
        slug: "kingston-university-meng",
        degree:
          "Master en Ingénierie - MEng, Ingénierie Logicielle et Management",
        description:
          "Ce programme de troisième cycle à Kingston University (Londres) se concentre sur l'intersection des pratiques avancées d'ingénierie logicielle et du management technologique. Le programme couvre le leadership Agile et Scrum, l'architecture d'entreprise, la conception de systèmes évolutifs et les aspects business de la livraison de produits logiciels dans des organisations complexes.",
        achievements: [
          "Spécialisation en méthodologies Agile, leadership de projet et solutions technologiques évolutives.",
        ],
      },
      {
        slug: "uc3m-bsc-computer-science",
        degree: "Licence en Informatique",
        description:
          "Un diplôme de quatre ans couvrant les piliers fondamentaux de l'informatique : algorithmes et structures de données, systèmes d'exploitation, réseaux, bases de données, génie logiciel et mathématiques. Ce programme a fourni la base technique rigoureuse qui sous-tend tout mon travail professionnel ultérieur.",
        achievements: ["Solides bases en informatique et en génie logiciel."],
      },
      {
        slug: "unsw-exchange-computer-science",
        degree: "Programme d'Échange - Informatique",
        description:
          "Un semestre d'échange international à l'Université de Nouvelle-Galles du Sud (Sydney), l'une des principales universités de recherche d'Australie. Cette expérience a élargi ma perspective académique et culturelle, m'exposant à différentes méthodologies d'enseignement et à la collaboration avec des étudiants de toute la région Asie-Pacifique.",
        achievements: [
          "Échange académique international élargissant la perspective mondiale et l'adaptabilité technique.",
        ],
      },
    ],
  },
} as const;

// ---------------------------------------------------------------------------
// Helper: get a UI string (falls back to English if key missing in lang)
// ---------------------------------------------------------------------------
export function t(lang: Lang, key: TranslationKey): string {
  return (ui[lang] as Record<string, string>)[key] ?? ui["en"][key];
}

// ---------------------------------------------------------------------------
// Helper: get translated item content by slug
// ---------------------------------------------------------------------------
type Section = "projects" | "experience" | "education";

export function getItemContent<S extends Section>(
  lang: Lang,
  section: S,
  slug: string,
) {
  const items = content[lang][section] as unknown as Array<
    { slug: string } & Record<string, unknown>
  >;
  return (
    items.find((i) => i.slug === slug) ??
    (
      content["en"][section] as unknown as Array<
        { slug: string } & Record<string, unknown>
      >
    ).find((i) => i.slug === slug)
  );
}
