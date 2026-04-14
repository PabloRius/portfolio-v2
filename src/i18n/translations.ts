export type Lang = "en" | "es";

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
