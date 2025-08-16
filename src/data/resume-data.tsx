import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Chayan Nath",
  initials: "CN",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Software Engineer Specialist with 4+ years of experience in full-stack development, specializing in Angular, React, Node.js, and distributed systems. Proven track record of delivering enterprise-scale applications. Expert in building scalable real-time systems, and driving technical excellence across frontend, backend, and DevOps practices.",
  avatarUrl:
    "https://raw.githubusercontent.com/ChayanNath/my-cv/refs/heads/main/public/unnamed.jpg",
  personalWebsiteUrl: "",
  contact: {
    email: "chayannath19@gmail.com",
    tel: "+91 7975700887",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ChayanNath",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chayan-nath/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Cambridge Institute of Technology",
      degree:
        "Bachelor of Engineering in Computer Science (CGPA: 8.6 / 10.0)",
      start: "2017",
      end: "2021",
      description: "Relevant coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering, Computer Networks, Operating Systems, Web Technologies, Machine Learning Fundamentals",
    },
  ],
  work: [
    {
      company: "Dassault Systèmes",
      link: "https://www.3ds.com",
      badges: ["Angular", "Java", "RDF", "Jasmine", "CI/CD"],
      title: "Software Engineering Specialist",
      start: "Sep 2023",
      end: "Present",
      description: (
        <>
          Lead frontend development for enterprise Materials Management application serving Fortune 500 clients, managing complete software development lifecycle from requirements to production deployment.
          <ul className="list-inside list-disc">
            <li>
              Architected and implemented reusable Angular component library, reducing feature development time by 60% and improving UI consistency across 15+ modules
            </li>
            <li>
              Established agile development practices, leading sprint planning, code reviews, and stakeholder demos with cross-functional teams of 8+ developers
            </li>
            <li>
              Developed backend microservices using Java and RDF-based semantic modeling, developing multiple new features and fixing bugs.
            </li>
            <li>
              Implemented comprehensive testing strategy, increasing automated test coverage from 60% to 95% and reducing production bugs by 80%
            </li>
            <li>
              Resolved critical P0 production issues within SLA, maintaining 99.9% system uptime and strengthening customer trust
            </li>
            <li>
              Mentored 3 junior developers on Angular architecture, testing best practices, and enterprise software development methodologies
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Knowledge Lens",
      link: "https://www.knowledgelens.com/",
      badges: ["Angular", "PWA", "IoT", "ECharts"],
      title: "Software Engineer",
      start: "Aug 2021",
      end: "Aug 2023",
      description: (
        <>
          Developed full-stack IoT analytics platform serving 50+ industrial clients, delivering real-time dashboards and responsive web applications for enterprise manufacturing environments.
          <ul className="list-inside list-disc">
            <li>
              Engineered real-time data processing pipeline integrating IoT sensors with ECharts visualization, providing 70% faster operational insights and driving 25% increase in client profitability
            </li>
            <li>
              Architected and deployed Progressive Web App (PWA) with offline-first capabilities, improving field productivity by 40% in low-connectivity industrial environments
            </li>
            <li>
              Collaborated with product managers and data scientists to design scalable analytics solutions, processing 1M+ data points daily across multiple manufacturing verticals
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    // Frontend Technologies
    "React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    // Backend & APIs
    "Node.js", "Java", "Rust", "REST APIs", "GraphQL", "WebSocket", "Microservices",
    // Databases & ORMs
    "PostgreSQL", "Redis", "Redis Streams", "Prisma", "Supabase", "RDF", "Vector Databases",
    // Cloud & DevOps
    "AWS", "Docker", "CI/CD", "GitHub Actions", "GitLab CI/CD", "Kubernetes", "Terraform",
    // Testing & Quality
    "Jasmine", "Karma", "Jest", "Unit Testing", "Integration Testing", "Test Coverage",
    // Tools & Frameworks
    "Turborepo", "Monorepo", "PWA", "AI/ML", "Machine Learning", "Embeddings",
  ],
  projects: [
    {
      title: "Recall.ai",
      techStack: ["Next.js", "AI Embeddings", "Vector DB", "Supabase", "OAuth", "Slack/Gmail APIs"],
      description:
        "Built enterprise-grade AI-powered personal search engine processing 10K+ documents with semantic search capabilities. Implemented secure OAuth integration with 4+ platforms, vector embeddings for 1M+ data points, and real-time synchronization across Gmail, Google Docs, Slack, and Notion APIs. Achieved 95% search accuracy and 200ms response time for complex queries.",
      link: {
        label: "Live",
        href: "https://recallai.chayannath.online",
      },
    },
    {
      title: "Collab-Draw",
      techStack: ["Next.js", "WebSocket", "Canvas", "AWS", "Turborepo"],
      description:
        "Developed real-time collaborative whiteboard platform supporting 50+ concurrent users with sub-100ms latency. Implemented advanced Canvas rendering, WebSocket synchronization, and AWS infrastructure scaling. Built with Turborepo monorepo architecture achieving 40% faster build times and 60% reduced bundle size.",
      link: {
        label: "GitHub",
        href: "https://github.com/ChayanNath/collab-draw",
      },
    },
    {
      title: "BetterUptime",
      techStack: ["Rust", "Redis Streams", "PostgreSQL", "Docker", "Next.js"],
      description:
        "Architected distributed uptime monitoring system processing 1M+ website checks daily with 99.99% reliability. Built high-performance Rust workers handling 10K+ concurrent requests, Redis Streams for real-time event processing, and horizontally scalable microservices architecture. Achieved 50ms average response time and 99.9% uptime SLA.",
      link: {
        label: "GitHub",
        href: "https://github.com/ChayanNath/betterstack",
      },
    },
  ],
};
