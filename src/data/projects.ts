export interface Project {
  id: string;
  num: string;
  tag: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  features?: string[];
  github: string;
  ongoing?: boolean;
}

export const projects: Project[] = [
  {
    id: "community-service",
    num: "P.01",
    tag: "Flutter · Mobile App",
    title: "Community Service Mobile Application",
   image: `${import.meta.env.BASE_URL}community-service.jpg`,
    description:
      "A Flutter-based mobile application that allows citizens to submit complaints, request community services, and receive updates from local government units.",
    tech: ["Flutter", "Dart", "Mobile App", "UI/UX Design"],
    github: "https://github.com/OKAYT",
  },
  {
    id: "tcgc-navigation",
    num: "P.02",
    tag: "Ongoing Thesis",
    title: "TCGC Navigation System",
    image: `${import.meta.env.BASE_URL}nav.jpg`,
    description:
      "An ongoing thesis project that helps students and visitors navigate the Tangub City Global College campus using an interactive mobile navigation system.",
    tech: ["Flutter", "Dart", "Campus Navigation", "UI/UX Design"],
    github: "https://github.com/OKAYT",
    ongoing: true,
  },
  {
    id: "boarding-house",
    num: "P.03",
    tag: "Flutter · SaaS",
    title: "Mobile Boarding House Management System",
    image: `${import.meta.env.BASE_URL}boarding-house.jpg`,
    description:
      "A mobile application designed for boarding house management, covering parent monitoring, tenant tracking, billing, and security in one system.",
    tech: ["Flutter", "Dart", "Firebase", "SaaS"],
    features: [
      "Parent Monitoring",
      "Tenant Tracking",
      "Visitor Monitoring",
      "Billing Management",
      "Notifications",
      "Security Monitoring",
    ],
    github: "https://github.com/OKAYT",
  },
];