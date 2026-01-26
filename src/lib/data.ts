export const personalInfo = {
  name: "Rachit Pednekar",
  location: "Montreal, Canada",
  phone: "+1 (438) 680-2562",
  email: "rachitpednekar7@gmail.com",
  linkedin: "https://linkedin.com/in/rachitrajeshpednekar",
  github: "https://github.com/racCC",
  twitter: "https://x.com/PednekarRachit",
  headline: "Building AI tools that solve real-world problems.",
  subheadline: "Hello There, I'm Rachit. I craft high-performance systems for the web, from backend to AI. Master's in Software Engineering @ Concordia. Experienced in Java & Spring Boot microservices, cloud-native systems, and AI tooling using modern LLM APIs.",
  summary: "Software Engineer with hands-on experience building backend-heavy, cloud-native, and AI-powered applications, backed by a Master's in Software Engineering from Concordia University. Strong foundation in Java & Spring Boot microservices, RESTful API design, distributed systems, and modern frontend frameworks. Experienced in applying machine learning, LLM APIs, and automation to solve real-world problems, with a strong focus on performance, scalability, and clean architecture.",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const stackHighlights = [
  "Java & Spring Boot",
  "Node.js & TypeScript",
  "React & Next.js",
  "AWS & Docker",
  "LLM APIs & AI Tooling",
];

export const focusAreas = [
  "Backend Systems",
  "Cloud-Native Apps",
  "AI Integration",
];

export const projects = [
  {
    title: "CloudShare",
    tagline: "Secure File Management Platform",
    problem: "Businesses need secure, role-based file sharing with seamless payment integration.",
    solution: "Built a secure file-sharing system with JWT authentication and Stripe-powered credit system.",
    impact: [
      "Increased authenticated uploads/downloads by 30%",
      "Reduced user onboarding time by 50%",
      "Implemented webhook verification for payment security",
    ],
    stack: ["React", "Spring Boot 3", "MongoDB", "Stripe", "Clerk"],
    github: "https://github.com/racCC/cloudshareapi",
    demo: "https://getcloudshare.vercel.app/",
    featured: true,
  },
  {
    title: "Splitr",
    tagline: "AI-Powered Expense Sharing Platform",
    problem: "Manual expense tracking leads to delayed settlements and reconciliation errors.",
    solution: "AI-powered platform with automated reminders and smart expense categorization.",
    impact: [
      "Reduced settlement time by 40%",
      "Improved reconciliation accuracy by 30%",
      "Automated reminders via Inngest + Resend + Gemini",
    ],
    stack: ["Next.js", "Convex", "Gemini API", "Tailwind", "Shadcn UI"],
    github: "https://github.com/racCC/splitr",
    demo: "https://gosplitr.vercel.app/",
    featured: true,
  },
  {
    title: "CursorCLI",
    tagline: "AI Project Generation CLI",
    problem: "Project setup is repetitive and time-consuming for developers.",
    solution: "CLI tool that automates project initialization across multiple technology stacks.",
    impact: [
      "Reduced setup time by up to 70%",
      "Enabled 5× faster prototyping",
      "LLM-driven validation with CI/CD-ready scripts",
    ],
    stack: ["Node.js", "TypeScript", "Gemini API"],
    github: "https://github.com/racCC/CURSORCLI",
    demo: null,
    featured: true,
  },
  {
    title: "IShowSpeedAI",
    tagline: "AI Personality Chatbot",
    problem: "Standard chatbots lack personality and engagement for entertainment use cases.",
    solution: "High-energy chatbot with memory-based conversations and animated UI.",
    impact: [
      "Memory-based contextual conversations",
      "Animated UI for real-time interaction",
      "Designed for viral shareability",
    ],
    stack: ["Python", "Streamlit", "OpenAI GPT-4o"],
    github: "https://github.com/racCC/IShowSpeedAI",
    demo: "https://ishowspeedai.streamlit.app/",
    featured: true,
  },
];
// ...existing code...

export const skills = {
  backend: {
    label: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "Node.js",
      "Express.js",
      "Flask",
      "RESTful APIs",
      "Microservices",
    ],
  },
  frontend: {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Recoil",
      "Prisma",
      "Zod",
      "HTML/CSS",
    ],
  },
  cloud: {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Firebase",
      "Cloudflare Workers",
      "Nginx",
      "Prometheus",
      "Grafana",
      "CI/CD",
    ],
  },
  ai: {
    label: "AI & Data",
    items: [
      "LangChain",
      "LangGraph",
      "Streamlit",
      "pandas",
      "NumPy",
      "scikit-learn",
      "PyTorch",
    ],
  },
  languages: {
    label: "Programming Languages",
    items: [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "NoSQL",
    ],
  },
  databases: {
    label: "Databases & Messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Kafka",
    ],
  },
  methodologies: {
    label: "Methodologies",
    items: [
      "RESTful API Design",
      "Microservices",
      "MVC Architecture",
      "OOP",
      "TDD",
      "CI/CD",
      "Agile/Scrum",
    ],
  },
  versionControl: {
    label: "Version Control",
    items: [
      "Git",
      "GitHub",
    ],
  },
};

// ...existing code...

export const experience = [
  {
    title: "Software Development Engineer",
    company: "ITJOBSXS",
    location: "Remote",
    period: "Nov 2022 – Dec 2023",
    bullets: [
      "Designed and developed a responsive Q&A web platform, increasing user engagement and reducing bounce rate by 30%",
      "Implemented advanced bot-detection mechanisms (domain filtering, Google reCAPTCHA), reducing spam entries by 95% and improving backend efficiency",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CodeWind Technologies",
    location: "Remote",
    period: "Jun 2022 – Sep 2022",
    bullets: [
      "Built a crime rate prediction system using K-means clustering on 10,000+ datasets for India & the USA",
      "Improved hotspot detection accuracy by 41% and clustering coherence by 22%",
      "Reduced analysis time by 40% through optimized preprocessing and geospatial visualization",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Laxmi Industries Pvt. Ltd.",
    location: "On-site",
    period: "Jan 2021 – Apr 2021",
    bullets: [
      "Developed a real-time inventory management system, reducing stock discrepancies by 35%",
      "Led migration from PHP to React + Node.js + MongoDB, improving performance and page load speed by 50%",
      "Designed REST APIs, optimized NoSQL schemas, and containerized services using Docker",
    ],
  },
];

export const education = [
  {
    degree: "Master of Engineering,Software Engineering",
    institution: "Concordia University, Montreal",
    period: "Sep 2023 – May 2025",
  },
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Vasantdada Patil Pratishthan's College of Engineering, Mumbai",
    period: "Aug 2019 – May 2023",
  },
];

export const aboutContent = {
  intro: "I'm a Software Engineer passionate about building systems that scale and solve real problems.",
  paragraphs: [
    "My journey in software engineering started with a curiosity for how things work under the hood. This led me to specialize in backend development, where I've built microservices architectures, designed distributed systems, and optimized applications for performance at scale.",
    "Recently, I've been deeply involved in the AI space,building tools that leverage LLM APIs to automate workflows, enhance developer productivity, and create intelligent applications. I believe the intersection of robust backend systems and AI capabilities is where the most impactful software is being built today.",
    "I hold a Master's in Software Engineering from Concordia University, Montreal, and I'm actively seeking New Grad, Software Engineer, Backend, or Full-Stack roles in Canada. I thrive in environments where I can tackle complex technical challenges while contributing to products that users love.",
  ],
  interests: [
    "System Design",
    "Distributed Computing",
    "AI/ML Integration",
    "Open Source",
  ],
};
