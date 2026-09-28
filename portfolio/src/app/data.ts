// All portfolio content lives here. Edit this file to update the site.
export interface Project { title: string; stack: string[]; points: string[]; links: { label: string; url: string }[]; }

export const PROFILE = {
  name: 'Subavarshini J',
  role: 'Java & Spring Boot backend developer',
  tagline: 'B.Tech IT, 2026. I build REST APIs and backend systems that stay correct under load.',
  summary: 'Aspiring software developer passionate about building scalable applications and intelligent solutions that solve real-world problems. Eager to contribute to collaborative teams while continuously learning and applying modern software engineering practices.',
  location: 'Theni, Tamil Nadu, India',
};

export const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/SubavarshiniJothirajan' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/subavarshini-j/' },
  { label: 'Email', url: 'mailto:subavarshini454@gmail.com' },
];

export const SKILLS = [
  { group: 'Languages', items: ['Java 8+', 'Python', 'JavaScript', 'C', 'SQL'] },
  { group: 'Core Java', items: ['OOP', 'Collections', 'Exception Handling', 'Streams & Lambdas', 'Multithreading', 'Concurrency'] },
  { group: 'Backend & APIs', items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA/Hibernate', 'REST API design', 'Microservices-oriented architecture', 'JWT'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { group: 'DevOps & Tools', items: ['Docker', 'Git & GitHub', 'Maven', 'Jenkins', 'CI/CD', 'Swagger/OpenAPI', 'Linux'] },
  { group: 'Engineering practice', items: ['SOLID', 'Strategy & Builder patterns', 'Unit & integration testing', 'Agile/Scrum'] },
  { group: 'AI/ML', items: ['NLP', 'LLMs', 'Generative AI', 'YOLOv8', 'OpenCV'] },
];

export const PROJECTS: Project[] = [
  {
    title: 'Multi-Tenant SaaS Task Management System',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'JPA/Hibernate', 'Docker', 'Swagger'],
    points: [
      'Architected and deployed a multi-tenant, microservice-oriented SaaS platform with 8+ Spring Boot modules, JWT authentication, RBAC, tenant-isolated data and 10+ REST endpoints.',
      'Containerized with Docker, backed by PostgreSQL, and publicly available 24/7 with Swagger/OpenAPI-documented endpoints.',
    ],
    links: [{ label: 'Live API docs', url: 'https://taskmanagersaas.development.catalystappsail.com/swagger-ui/index.html' }],
  },
  {
    title: 'API Rate Limiting System',
    stack: ['Java', 'Spring Boot', 'Redis', 'Lua', 'REST'],
    points: [
      'Designed a pluggable rate limiter using the Strategy pattern (Fixed Window, Sliding Window, Token Bucket).',
      'Used atomic Lua scripts in Redis so request counting stays race-condition-free under concurrent, multithreaded load.',
      'Built a metrics dashboard for request counts, rate-limit hits and API usage patterns.',
    ],
    links: [{ label: 'GitHub', url: 'https://github.com/SubavarshiniJothirajan/API-Rate-Limiter' }],
  },
  {
    title: 'AI-Powered Wireless Surveillance Robot',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'Raspberry Pi 5', 'Linux'],
    points: [
      'Developed a wireless robot with real-time video monitoring and object detection, running live inference on a Raspberry Pi 5.',
      'Fine-tuned YOLOv8n on a custom 3,600+ image dataset to tell soldiers from civilians across varied terrain.',
    ],
    links: [],
  },
];

export const ACHIEVEMENTS = [
  'Solved 300+ data structure and algorithm problems on LeetCode across arrays, trees, graphs, dynamic programming and more.',
  '1st place in the Bug Bash coding competition (100+ participants), delivering a complete solution in a 24-hour hackathon.',
];

export const EDUCATION = { school: 'Mepco Schlenk Engineering College, Sivakasi', degree: 'B.Tech, Information Technology', cgpa: '7.89', years: '2022 to 2026' };

export const CERTIFICATIONS = [
  'Google Skills Boost: Gen AI, Beyond the Chatbot (2026)',
  'IBM SkillsBuild: Getting Started with Generative AI (2026)',
  'Infosys Springboard: IT Foundation Skills in Java, Software Engineering (2025)',
];
