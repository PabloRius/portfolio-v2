import { SHARED } from "./shared";

export const projects = {
  en: [
    {
      ...SHARED.projects.ecommerce,
      name: "E-Commerce Market Intelligence Scraper",
      description:
        "Architected robust scrapers using Python and Crawlee, utilizing browser emulation to navigate dynamic e-commerce platforms.",
      longDescription:
        "This project involved building a full-scale web intelligence platform capable of extracting structured market data from highly dynamic e-commerce websites. The scrapers use browser fingerprint emulation to avoid bot detection, and the data is processed through a pipeline that normalizes and stores it for downstream analytics. The system is designed for reliability, with automatic retries, error reporting, and Prefect-based orchestration to handle large-scale scheduled runs.",
    },
    {
      ...SHARED.projects.incident,
      name: "Automated Incident Reporting Pipeline",
      description:
        "Automated data integration for incident reporting using Node.js and APIs, reducing data processing time for managers.",
      longDescription:
        "Designed and implemented an end-to-end data integration pipeline that connects multiple internal APIs to consolidate incident data into a unified reporting system. The automation reduced hours of manual work per week for operations managers, and introduced scheduled data syncs with real-time dashboards in Power BI. The system also includes automated alerting for critical incidents.",
    },
    {
      ...SHARED.projects.sensor,
      name: "Real-time Sensor Data Platform",
      description:
        "Developed a full-stack project to streamline sensor data using Azure IoT, Node.js, and React, enhancing real-time visualization.",
      longDescription:
        "Built a complete IoT data platform integrating Azure IoT Hub with a Node.js backend and a React frontend. Sensor data is ingested in real time, processed, and visualized through interactive dashboards. The platform supports multiple device streams simultaneously and includes historical data playback, threshold alerts, and role-based access control for different teams.",
    },
  ],
  es: [
    {
      ...SHARED.projects.ecommerce,
      name: "Scraper de Inteligencia de Mercado para E-Commerce",
      description:
        "Arquitectura de scrapers robustos con Python y Crawlee, usando emulación de navegador para acceder a plataformas dinámicas.",
      longDescription:
        "Este proyecto consistió en construir una plataforma de inteligencia web capaz de extraer datos estructurados de mercado desde sitios de e-commerce muy dinámicos. Los scrapers usan emulación de huella digital del navegador para evitar la detección de bots, y los datos se procesan a través de un pipeline que los normaliza y almacena para análisis posteriores. El sistema está diseñado para ser confiable, con reintentos automáticos, reporte de errores y orquestación basada en Prefect.",
    },
    {
      ...SHARED.projects.incident,
      name: "Pipeline Automatizado de Informes de Incidentes",
      description:
        "Integración automatizada de datos para informes de incidentes con Node.js y APIs, reduciendo el tiempo de procesamiento.",
      longDescription:
        "Diseñé e implementé un pipeline de integración de datos end-to-end que conecta múltiples APIs internas para consolidar datos de incidentes en un sistema de informes unificado. La automatización redujo horas de trabajo manual semanal para los gestores de operaciones, e introdujo sincronizaciones programadas con dashboards en tiempo real en Power BI.",
    },
    {
      ...SHARED.projects.sensor,
      name: "Plataforma de Datos de Sensores en Tiempo Real",
      description:
        "Desarrollo de un proyecto full-stack para gestionar datos de sensores con Azure IoT, Node.js y React, mejorando la visualización en tiempo real.",
      longDescription:
        "Construí una plataforma IoT completa integrando Azure IoT Hub con un backend en Node.js y un frontend en React. Los datos de los sensores se ingieren en tiempo real, se procesan y visualizan en dashboards interactivos. La plataforma soporta múltiples flujos de dispositivos simultáneos e incluye reproducción de datos históricos y alertas por umbral.",
    },
  ],
  fr: [
    {
      ...SHARED.projects.ecommerce,
      name: "Scraper d'Intelligence de Marché pour l'E-Commerce",
      description:
        "Conception de scrapers robustes avec Python et Crawlee, utilisant l'émulation de navigateur pour accéder aux plateformes dynamiques.",
      longDescription:
        "Ce projet a consisté à construire une plateforme d'intelligence web capable d'extraire des données de marché structurées. Les scrapers utilisent l'émulation d'empreinte digitale pour éviter la détection, et les données sont traitées via un pipeline qui les normalise. Le système est conçu pour être fiable, avec une orchestration basée sur Prefect.",
    },
    {
      ...SHARED.projects.incident,
      name: "Pipeline Automatisé de Rapports d'Incidents",
      description:
        "Intégration automatisée de données pour les rapports d'incidents avec Node.js et des APIs.",
      longDescription:
        "Conception et implémentation d'un pipeline d'intégration de données connectant plusieurs APIs internes pour consolider les données d'incidents. L'automatisation a réduit les heures de travail manuel pour les responsables opérationnels, et a introduit des synchronisations planifiées avec des tableaux de bord Power BI.",
    },
    {
      ...SHARED.projects.sensor,
      name: "Plateforme de Données de Capteurs en Temps Réel",
      description:
        "Développement d'un projet full-stack pour gérer les données de capteurs avec Azure IoT, Node.js et React.",
      longDescription:
        "Construction d'une plateforme IoT intégrant Azure IoT Hub avec un backend Node.js et un frontend React. Les données des capteurs sont ingérées en temps réel et visualisées dans des tableaux de bord interactifs. La plateforme supporte plusieurs flux d'appareils simultanément.",
    },
  ],
} as const;
