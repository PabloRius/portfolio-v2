export const siteConfig = {
  name: "Pablo García Rius",
  salute: "I'm",
  title: "Python Data & Automation Engineer",
  description: "Portfolio website of Pablo García Rius",
  accentColor: "#2563eb",
  social: {
    email: "pablogrius@gmail.com",
    linkedin: "https://www.linkedin.com/in/pablo-rius",
    github: "https://github.com/PabloRius",
  },
  aboutMe:
    "I am a Software Engineer specializing in the Python ecosystem, highly focused on Data Engineering, web automation, and building cloud infrastructure. My goal isn't to build statistical models, but rather to construct the robust, scalable 'highways' that a company's data travels on. Currently, I design and manage end-to-end data extraction ecosystems, transforming unstructured web data into strategic assets. I hold an MSc in Software Engineering and Management from Kingston University (London) and a BSc in Computer Science Engineering from Universidad Carlos III de Madrid.",
  skills: [
    "Python",
    "AWS",
    "Crawlee",
    "Prefect",
    "Pulumi",
    "NixOS",
    "Node.js",
    "TypeScript",
    "CI/CD",
  ],
  projects: [
    {
      slug: "ecommerce-market-intelligence-scraper",
      name: "E-Commerce Market Intelligence Scraper",
      description:
        "Architected robust scrapers using Python and Crawlee, utilizing browser/navigator emulation to navigate highly dynamic e-commerce platforms.",
      longDescription:
        "This project involved building a full-scale web intelligence platform capable of extracting structured market data from highly dynamic e-commerce websites. The scrapers use browser fingerprint emulation to avoid bot detection, and the data is processed through a pipeline that normalizes and stores it for downstream analytics. The system is designed for reliability, with automatic retries, error reporting, and Prefect-based orchestration to handle large-scale scheduled runs.",
      link: "https://github.com/tu-usuario/proyecto1",
      skills: ["Python", "Crawlee", "Web Automation", "Prefect", "AWS"],
    },
    {
      slug: "automated-incident-reporting-pipeline",
      name: "Automated Incident Reporting Pipeline",
      description:
        "Automated data integration for incident reporting using Node.js and APIs, reducing data processing time for managers.",
      longDescription:
        "Designed and implemented an end-to-end data integration pipeline that connects multiple internal APIs to consolidate incident data into a unified reporting system. The automation reduced hours of manual work per week for operations managers, and introduced scheduled data syncs with real-time dashboards in Power BI. The system also includes automated alerting for critical incidents.",
      link: "https://github.com/tu-usuario/proyecto2",
      skills: ["Node.js", "REST APIs", "Data Pipelines", "Power BI"],
    },
    {
      slug: "real-time-sensor-data-platform",
      name: "Real-time Sensor Data Platform",
      description:
        "Developed a full-stack project to streamline sensor data using Azure IoT, Node.js, and React, enhancing real-time interaction and visualization.",
      longDescription:
        "Built a complete IoT data platform integrating Azure IoT Hub with a Node.js backend and a React frontend. Sensor data is ingested in real time, processed, and visualized through interactive dashboards. The platform supports multiple device streams simultaneously and includes historical data playback, threshold alerts, and role-based access control for different teams.",
      link: "https://github.com/tu-usuario/proyecto3",
      skills: ["Azure IoT", "Node.js", "React", "TypeScript", "Real-time Data"],
    },
  ],
  experience: [
    {
      slug: "comexsoft-python-engineer",
      company: "ComexSoft",
      title: "Python Data & Automation Engineer",
      dateRange: "January 2026 - Present",
      location: "Remote",
      bullets: [
        "Architected robust scrapers using Python and Crawlee, utilizing browser/navigator emulation to navigate highly dynamic e-commerce platforms.",
        "Designed and managed end-to-end data pipelines using Prefect, ensuring high reliability, monitoring, and efficient data processing.",
        "Deployed scalable cloud architectures on AWS via Infrastructure as Code using Pulumi, significantly optimizing environment provisioning.",
        "Configured and managed server environments and development setups using NixOS, improving system reproducibility.",
      ],
      description:
        "At ComexSoft I specialize in building the data infrastructure that powers market intelligence. My work spans the full data lifecycle: from writing resilient, scalable scrapers that extract raw information from the web, to orchestrating the pipelines that transform and load that data into usable formats, to provisioning the cloud infrastructure that hosts it all.",
    },
    {
      slug: "tk-elevator-bi-analyst",
      company: "TK Elevator",
      title: "Business Intelligence Analyst Intern",
      dateRange: "June 2024 - December 2024",
      location: "Madrid, Spain",
      bullets: [
        "Automated data integration for incident reporting using Node.js and APIs, reducing data processing time for managers.",
        "Created performance indicators for the OSH department, using large datasets for better analysis and decision-making.",
        "Developed Power BI dashboards to visualize incident trends, helping prioritize preventive measures in high-risk zones.",
      ],
      description:
        "During my internship at TK Elevator I worked within the Occupational Safety & Health (OSH) department, transforming raw incident data into actionable insights. I built automation tools that eliminated manual reporting bottlenecks and created dashboards that gave leadership clear visibility into safety trends across multiple sites.",
    },
    {
      slug: "ntt-data-software-engineer",
      company: "NTT DATA",
      title: "Software Engineer Intern",
      dateRange: "September 2023 - May 2024",
      location: "Madrid, Spain",
      bullets: [
        "Built and maintained CI/CD pipelines with GitHub Actions, automating deployments and reducing manual effort by 50%.",
        "Developed a full-stack project to streamline sensor data using Azure IoT, Node.js, and React, enhancing real-time interaction and visualization.",
        "Created the frontend for Renfe's real-time data visualization app with React and TypeScript, improving safety and risk management.",
      ],
      description:
        "At NTT DATA I contributed to enterprise-grade software projects for major clients in the transport and infrastructure sectors. I worked across the full stack, from building CI/CD pipelines that improved team velocity, to developing real-time IoT dashboards for Renfe, Spain's national rail operator.",
    },
  ],
  education: [
    {
      slug: "kingston-university-meng",
      school: "Kingston University",
      degree:
        "Master of Engineering - MEng, Software Engineering and Management",
      dateRange: "January 2025 - January 2026",
      location: "London, United Kingdom",
      achievements: [
        "Specializing in Agile methodologies, project leadership, and scalable tech solutions.",
      ],
      description:
        "This postgraduate program at Kingston University (London) focuses on the intersection of advanced software engineering practices and technology management. The curriculum covers Agile and Scrum leadership, enterprise architecture, scalable system design, and the business side of delivering software products in complex organizations.",
    },
    {
      slug: "uc3m-bsc-computer-science",
      school: "Universidad Carlos III de Madrid",
      degree: "Bachelor's degree, Computer Science Engineering",
      dateRange: "September 2019 - July 2024",
      location: "Madrid, Spain",
      achievements: [
        "Gained a strong foundation in computer science and engineering principles.",
      ],
      description:
        "A comprehensive four-year degree covering the core pillars of computer science: algorithms and data structures, operating systems, computer networks, databases, software engineering, and mathematics. This program provided the rigorous technical foundation that underpins all my subsequent professional work.",
    },
    {
      slug: "unsw-exchange-computer-science",
      school: "UNSW",
      degree: "Exchange Program - Computer Science Engineering",
      dateRange: "January 2023 - June 2023",
      location: "Sydney, Australia",
      achievements: [
        "International academic exchange expanding global perspective and technical adaptability.",
      ],
      description:
        "A semester-long international exchange at the University of New South Wales (Sydney), one of Australia's leading research universities. This experience broadened my academic and cultural perspective, exposing me to different teaching methodologies and collaborating with students from across the Asia-Pacific region.",
    },
  ],
};
