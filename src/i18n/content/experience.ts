import { SHARED } from "./shared";

export const experience = {
  en: [
    {
      ...SHARED.experience.comexsoft,
      title: "Python Data & Automation Engineer",
      dateRange: "January 2026 - Present",
      description:
        "At ComexSoft I specialize in building the data infrastructure that powers market intelligence. My work spans the full data lifecycle: from writing resilient, scalable scrapers that extract raw information from the web, to orchestrating the pipelines that transform and load that data into usable formats, to provisioning the cloud infrastructure that hosts it all.",
      bullets: [
        "Architected robust scrapers using Python and Crawlee, utilizing browser emulation to navigate highly dynamic e-commerce platforms.",
        "Designed and managed end-to-end data pipelines using Prefect, ensuring high reliability, monitoring, and efficient data processing.",
        "Deployed scalable cloud architectures on AWS via Infrastructure as Code using Pulumi, significantly optimizing environment provisioning.",
        "Configured and managed server environments and development setups using NixOS, improving system reproducibility.",
      ],
    },
    {
      ...SHARED.experience.tk,
      title: "Business Intelligence Analyst Intern",
      dateRange: "June 2024 - December 2024",
      description:
        "During my internship at TK Elevator I worked within the Occupational Safety & Health (OSH) department, transforming raw incident data into actionable insights. I built automation tools that eliminated manual reporting bottlenecks and created dashboards that gave leadership clear visibility into safety trends across multiple sites.",
      bullets: [
        "Automated data integration for incident reporting using Node.js and APIs, reducing data processing time for managers.",
        "Created performance indicators for the OSH department, using large datasets for better analysis and decision-making.",
        "Developed Power BI dashboards to visualize incident trends, helping prioritize preventive measures in high-risk zones.",
      ],
    },
    {
      ...SHARED.experience.ntt,
      title: "Software Engineer Intern",
      dateRange: "September 2023 - May 2024",
      description:
        "At NTT DATA I contributed to enterprise-grade software projects for major clients in the transport and infrastructure sectors. I worked across the full stack, from building CI/CD pipelines that improved team velocity, to developing real-time IoT dashboards for Renfe, Spain's national rail operator.",
      bullets: [
        "Built and maintained CI/CD pipelines with GitHub Actions, automating deployments and reducing manual effort by 50%.",
        "Developed a full-stack project to streamline sensor data using Azure IoT, Node.js, and React, enhancing real-time interaction.",
        "Created the frontend for Renfe's real-time data visualization app with React and TypeScript, improving safety and risk management.",
      ],
    },
  ],
  es: [
    {
      ...SHARED.experience.comexsoft,
      title: "Ingeniero de Datos y Automatización Python",
      dateRange: "Enero 2026 - Presente",
      description:
        "En ComexSoft me especializo en construir la infraestructura de datos que impulsa la inteligencia de mercado. Mi trabajo abarca todo el ciclo de vida del dato: desde scrapers resilientes que extraen información de la web, hasta la orquestación de pipelines que transforman esos datos, y el aprovisionamiento de la infraestructura cloud que lo aloja todo.",
      bullets: [
        "Arquitectura de scrapers robustos con Python y Crawlee, usando emulación de navegador para navegar plataformas de e-commerce.",
        "Diseño y gestión de pipelines de datos end-to-end con Prefect, garantizando alta fiabilidad, monitorización y procesamiento.",
        "Despliegue de arquitecturas cloud escalables en AWS mediante Infraestructura como Código con Pulumi.",
        "Configuración y gestión de entornos de servidor y desarrollo con NixOS, mejorando la reproducibilidad del sistema.",
      ],
    },
    {
      ...SHARED.experience.tk,
      title: "Analista de Business Intelligence (Prácticas)",
      dateRange: "Junio 2024 - Diciembre 2024",
      description:
        "Durante mis prácticas en TK Elevator trabajé en el departamento de Seguridad y Salud en el Trabajo (SST), transformando datos brutos de incidentes en información accionable. Construí herramientas de automatización que eliminaron cuellos de botella y creé dashboards que dieron a la dirección visibilidad clara sobre las tendencias de seguridad.",
      bullets: [
        "Automatización de la integración de datos para informes de incidentes con Node.js y APIs, reduciendo tiempos de procesamiento.",
        "Creación de indicadores de rendimiento para el departamento SST, usando grandes volúmenes de datos.",
        "Desarrollo de dashboards en Power BI para visualizar tendencias de incidentes y priorizar medidas preventivas.",
      ],
    },
    {
      ...SHARED.experience.ntt,
      title: "Ingeniero de Software (Prácticas)",
      dateRange: "Septiembre 2023 - Mayo 2024",
      description:
        "En NTT DATA contribuí a proyectos de software empresarial para grandes clientes del sector transporte. Trabajé en toda la pila, desde la construcción de pipelines CI/CD que mejoraron la velocidad del equipo, hasta el desarrollo de dashboards IoT en tiempo real para Renfe.",
      bullets: [
        "Construcción y mantenimiento de pipelines CI/CD con GitHub Actions, reduciendo el esfuerzo manual en un 50%.",
        "Desarrollo de un proyecto full-stack para gestionar datos de sensores con Azure IoT, Node.js y React.",
        "Creación del frontend para la aplicación de visualización de datos en tiempo real de Renfe con React y TypeScript.",
      ],
    },
  ],
  fr: [
    {
      ...SHARED.experience.comexsoft,
      title: "Ingénieur Données & Automatisation Python",
      dateRange: "Janvier 2026 - Présent",
      description:
        "Chez ComexSoft, je me spécialise dans la construction de l'infrastructure de données. Mon travail couvre l'écriture de scrapers résilients, l'orchestration des pipelines de données et le provisionnement de l'infrastructure cloud.",
      bullets: [
        "Conception de scrapers robustes avec Python et Crawlee, utilisant l'émulation de navigateur.",
        "Gestion de pipelines de données de bout en bout avec Prefect, garantissant une haute fiabilité.",
        "Déploiement d'architectures cloud évolutives sur AWS via l'Infrastructure as Code avec Pulumi.",
        "Configuration des environnements serveur avec NixOS.",
      ],
    },
    {
      ...SHARED.experience.tk,
      title: "Analyste Business Intelligence (Stage)",
      dateRange: "Juin 2024 - Décembre 2024",
      description:
        "Durant mon stage chez TK Elevator, j'ai travaillé au département Santé et Sécurité, transformant des données brutes d'incidents en informations exploitables. J'ai construit des outils d'automatisation pour les rapports et créé des tableaux de bord pour la direction.",
      bullets: [
        "Automatisation de l'intégration des données avec Node.js et des APIs.",
        "Création d'indicateurs de performance pour le département SST.",
        "Développement de tableaux de bord Power BI pour visualiser les tendances des incidents.",
      ],
    },
    {
      ...SHARED.experience.ntt,
      title: "Ingénieur Logiciel (Stage)",
      dateRange: "Septembre 2023 - Mai 2024",
      description:
        "Chez NTT DATA, j'ai contribué à des projets logiciels pour de grands clients. J'ai travaillé sur la construction de pipelines CI/CD et le développement de tableaux de bord IoT en temps réel pour Renfe.",
      bullets: [
        "Construction et maintenance de pipelines CI/CD avec GitHub Actions.",
        "Développement d'un projet full-stack avec Azure IoT, Node.js et React.",
        "Création du frontend pour l'application de visualisation de données de Renfe avec React et TypeScript.",
      ],
    },
  ],
} as const;
