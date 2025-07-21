import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Chayan Nath",
  initials: "CN",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about: "Full Stack Developer focused on building scalable, real-time systems and owning product delivery end to end.",
  summary: (
    <>
      Full Stack Developer with 4+ years of experience owning UI architecture and contributing backend features.
      Currently leading development of a Materials Management system at Dassault Systèmes while building distributed
      systems in Rust, Redis, and PostgreSQL on the side.
    </>
  ),
  avatarUrl: "https://raw.githubusercontent.com/ChayanNath/my-cv/refs/heads/main/public/unnamed.jpg",
  personalWebsiteUrl: "https://chayannath.xyz",
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
      degree: "Bachelor of Engineering in Computer Science (CGPA: 8.6 / 10.0)",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Dassault Systèmes",
      link: "https://www.3ds.com",
      badges: ["Full Stack", "Angular", "Java", "RDF", "Jasmine", "CI/CD"],
      title: "Software Engineering Specialist",
      start: "2023",
      end: null,
      description: (
        <>
          Own the complete UI lifecycle of a Materials Management application — from requirements to delivery.
          <ul className="list-inside list-disc">
            <li>Led sprint planning, reviews, and demos with product, QA, and design teams</li>
            <li>Built reusable Angular components that cut development effort by 60%</li>
            <li>Contributed backend logic using Java and RDF-based data modeling</li>
            <li>Raised test coverage from 60% to 95% with Jasmine + Karma</li>
            <li>Resolved critical P0 production bugs and mentored peers in UI architecture</li>
          </ul>
        </>
      ),
    },
    {
      company: "Knowledge Lens",
      link: "https://www.knowledgelens.com/",
      badges: ["Angular", "PWA", "IoT", "ECharts"],
      title: "Software Engineer",
      start: "2021",
      end: "2023",
      description: (
        <>
          Delivered robust UI solutions and real-time dashboards for industrial IoT platforms.
          <ul className="list-inside list-disc">
            <li>Developed Angular UIs, increasing user satisfaction by 15%</li>
            <li>Integrated real-time ECharts dashboards leading to a 70% profit increase</li>
            <li>Upgraded the web app to a PWA, improving productivity in low-connectivity areas by 40%</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "ReactJs",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Rust",
    "Prisma",
    "Redis Streams",
    "PostgreSQL",
    "Node.js",
    "Java",
    "Docker",
    "Github Actions",
    "Gitlab CI/CD",
    "Turborepo",
    "AWS",
    "Jasmine",
    "RDF",
    "CI/CD",
  ],
  projects: [
    {
      title: "Collab-Draw",
      techStack: ["Next.js", "WebSocket", "Canvas", "AWS", "Turborepo"],
      description:
        "A collaborative whiteboard tool with real-time sync, pan/zoom, and shared session support for 50+ users.",
      link: {
        label: "GitHub",
        href: "https://github.com/ChayanNath/collab-draw",
      },
    },
    {
      title: "BetterUptime",
      techStack: ["Rust", "Redis Streams", "PostgreSQL", "Docker", "Next.js"],
      description:
        "A scalable uptime monitoring system with a distributed architecture, workers, queues, and stateless services — capable of supporting millions of websites.",
      link: {
        label: "GitHub",
        href: "https://github.com/ChayanNath/betterstack",
      },
    },
  ],
};
