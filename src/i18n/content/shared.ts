// Structural, non-translated data shared across all language content modules.
export const SHARED = {
  projects: {
    ecommerce: {
      slug: "ecommerce-market-intelligence-scraper",
      link: "", // Private enterprise project
      skills: ["Python", "Crawlee", "Web Automation", "Prefect", "AWS"],
      tags: ["Data Engineering", "Web Scraping", "Cloud"],
      year: 2026,
    },
    incident: {
      slug: "automated-incident-reporting-pipeline",
      link: "",
      skills: ["Node.js", "REST APIs", "Data Pipelines", "Power BI"],
      tags: ["Data Engineering", "Automation", "Business Intelligence"],
      year: 2024,
    },
    sensor: {
      slug: "real-time-sensor-data-platform",
      link: "",
      skills: ["Azure IoT", "Node.js", "TypeScript", "React", "Real-time Data"],
      tags: ["IoT", "Full-Stack", "Real-time"],
      year: 2024,
    },
  },
  experience: {
    comexsoft: {
      slug: "comexsoft-python-engineer",
      company: "ComexSoft",
      location: "Biarritz, France & Santiago de Chile, Chile",
      skills: ["Python", "Prefect", "AWS", "Pulumi", "NixOS"],
    },
    tk: {
      slug: "tk-elevator-bi-analyst",
      company: "TK Elevator",
      location: "Madrid, Spain",
      skills: ["Node.js", "APIs", "Power BI", "Data Integration"],
    },
    ntt: {
      slug: "ntt-data-software-engineer",
      company: "NTT DATA",
      location: "Madrid, Spain",
      skills: ["GitHub Actions", "Azure IoT", "Node.js", "React"],
    },
  },
  education: {
    kingston: {
      slug: "kingston-university-meng",
      school: "Kingston University",
      location: "London, UK",
    },
    uc3m: {
      slug: "uc3m-bsc-computer-science",
      school: "Universidad Carlos III de Madrid",
      location: "Madrid, Spain",
    },
    unsw: {
      slug: "unsw-exchange-computer-science",
      school: "UNSW",
      location: "Sydney, Australia",
    },
  },
} as const;
