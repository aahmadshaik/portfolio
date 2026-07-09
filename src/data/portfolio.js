// Single source of truth for portfolio content. Update this file to refresh the site.

export const profile = {
  name: "Aslam Shaik",
  role: "Frontend Engineer",
  focus: "React.js & TypeScript",
  location: "Hyderabad, India",
  currentCompany: "Deccan AI",
  available: true,
  summary:
    "Frontend Engineer specializing in React.js and TypeScript, with hands-on experience owning and shipping production features in a fast-paced startup environment. I drive modules end to end — from architecture and state management to API integration, performance optimization, and observability — with a product-minded, ownership-driven approach to scalable, user-focused interfaces.",
  email: "shaikahmadaslam@gmail.com",
  phoneDisplay: "+91 97019 24456",
  whatsapp: "919701924456",
  resume: "/Aslam-Shaik-Resume.pdf",
  links: {
    portfolio: "https://aslam-portfolio.vercel.app/",
    linkedin: "https://www.linkedin.com/in/ahmad-shaik-web-developer/",
    github: "https://github.com/aahmadshaik",
  },
};

export const stats = [
  { value: "1.5+", label: "Years shipping production UI" },
  { value: "6+", label: "Products shipped end to end" },
  { value: "5", label: "Platforms with observability" },
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "styling",
    title: "Styling & UI",
    items: ["Tailwind CSS", "Material UI", "Bootstrap", "Responsive Design"],
  },
  {
    id: "state",
    title: "State Management",
    items: ["Redux", "Context API"],
  },
  {
    id: "data",
    title: "Data & Integration",
    items: ["REST APIs", "Axios", "LiveKit (Real-Time)", "Data Visualization"],
  },
  {
    id: "ops",
    title: "Observability & Deploy",
    items: ["HyperDX", "Vercel (CI/CD)", "Netlify"],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    items: [
      "Git",
      "GitHub",
      "Jira",
      "Figma",
      "Agile / SDLC",
      "AI-Assisted Dev",
    ],
  },
];

export const experience = [
  {
    id: "deccan-ai",
    company: "Deccan AI",
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Hyderabad",
    period: "Nov 2025 — Present",
    current: true,
    award: {
      name: "Deccan Dynamite",
      detail:
        "Company-wide performance award for outstanding impact within months of joining.",
      certificate: "/deccan-dynamite-award.pdf",
    },
    stack: ["React", "TypeScript", "LiveKit", "HyperDX"],
    highlights: [
      "Own the AI Interview module end to end across admin and candidate surfaces — architected the frontend and integrated real-time agent communication (LiveKit) for live interviews, then scaled it for growing volume.",
      "Built Referral Campaigns (admin side): on the freelancer platform, users can refer people for a specific project and role they're working on — including upcoming roles — expanding trusted sourcing.",
      "Refactored the Assessments platform (client-side), improving performance, maintainability, and code quality.",
      "Built multiple uploaders for internal admin tooling to streamline bulk data ingestion for operations teams.",
      "Refactored the Campaign Manager, push notifications, and email sending, and integrated an open-source email builder into internal tooling.",
      "Shipped HyperDX frontend observability across five platforms company-wide and built multiple dashboards for individual scenarios — enabling real-time monitoring and faster production debugging.",
    ],
  },
  {
    id: "digidxdoc",
    company: "DigiDxDoc",
    title: "Frontend Engineer",
    type: "Internship",
    location: "Koramangala, Bengaluru",
    period: "Apr 2025 — Oct 2025",
    current: false,
    stack: ["React", "REST APIs", "RBAC"],
    highlights: [
      "Delivered features across the Pathology, Radiology, and Alertr platforms, building dynamic, permission-driven UI for multiple user roles.",
      "Shipped multi-level filtering (priority, gender, date range, text search) to make large clinical datasets navigable.",
      "Built organization and facility management with full CRUD, bulk operations (multi user/facility delete), and organization-assignment workflows.",
      "Integrated role-management and case-monitoring APIs and ensured backend payload consistency (FormData → JSON) with correct default-value handling.",
      "Optimized responsiveness and cross-device compatibility, and implemented role-based rendering to secure sensitive workflows.",
      "Debugged critical production issues (upload failures, TAT mismatches, notification errors) and authored detailed test-case sheets while supporting client demos.",
    ],
  },
];

export const projects = [
  {
    id: "ai-interview",
    title: "AI Interview Platform",
    company: "Deccan AI",
    year: "2025",
    desc: "Real-time, agent-driven interview experience across admin and candidate surfaces. Architected the frontend on LiveKit for live interaction and scaled it for growing interview volume.",
    tags: ["React", "TypeScript", "LiveKit", "HyperDX"],
  },
  {
    id: "referral-campaigns",
    title: "Referral Campaigns",
    company: "Deccan AI",
    year: "2025",
    desc: "On the freelancer platform, users can refer people for a specific project and role they're working on — including upcoming roles — expanding trusted sourcing across the org. Built the admin experience.",
    tags: ["React", "TypeScript", "Admin"],
  },
  {
    id: "hyperdx-observability",
    title: "HyperDX Frontend Observability",
    company: "Deccan AI",
    year: "2025",
    desc: "Rolled out HyperDX frontend observability across five platforms company-wide and built multiple dashboards for individual scenarios — real-time monitoring and faster production debugging.",
    tags: ["HyperDX", "Observability", "Dashboards"],
  },
  {
    id: "campaign-manager",
    title: "Campaign Manager & Email Builder",
    company: "Deccan AI",
    year: "2025",
    desc: "Refactored the Campaign Manager, push notifications, and email sending, and integrated an open-source drag-and-drop email builder into internal tooling.",
    tags: ["React", "Email Builder", "Refactor"],
  },
  {
    id: "alertr",
    title: "Alertr",
    company: "DigiDxDoc",
    year: "2025",
    desc: "Alert & complaint platform with role-based dashboards, multi-tenant modules, media uploads, and a fully responsive interface.",
    tags: ["React", "RBAC", "Multi-tenant"],
  },
  {
    id: "image-flow",
    title: "Image Flow Radiology",
    company: "DigiDxDoc",
    year: "2025",
    desc: "Multi-tenant radiology image management with role-based access and organization-specific workflows for clinical teams.",
    tags: ["React", "Radiology", "RBAC"],
  },
];

export const education = [
  {
    id: "aknu",
    institution: "Adi Kavi Nannaya University",
    degree: "B.Sc. in Computer Science",
    period: "Jun 2021 — May 2024",
    coursework: [
      "Data Structures & Algorithms",
      "Web Technologies (HTML, CSS, JS)",
      "Database Management Systems",
      "Object-Oriented Programming (Java)",
    ],
  },
];

export const certifications = [
  { id: "scrimba-frontend", title: "Frontend Career Path", issuer: "Scrimba" },
  { id: "scrimba-react19", title: "React 19", issuer: "Scrimba" },
  { id: "scrimba-js", title: "JavaScript Essentials", issuer: "Scrimba" },
  { id: "scrimba-a11y", title: "Web Accessibility", issuer: "Scrimba" },
  {
    id: "claude-networking",
    title: "Claude Networking Partner",
    issuer: "Claude",
  },
];

export const navLinks = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "work", label: "Work", href: "#work" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];
