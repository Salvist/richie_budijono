export const site = {
  email: "richiebudijono@gmail.com",
  linkedin: "https://www.linkedin.com/in/richie-budijono",
  location: "New York · Available remotely",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  status: string;
  tagline: string;
  audience: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  stack: string[];
  result: string;
  tone: "blue" | "ink" | "sage" | "sand" | "coral";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "church-notes",
    name: "Church Notes",
    category: "Mobile product",
    year: "2024",
    status: "Shipped",
    tagline: "A calmer way to capture notes and connect them with scripture.",
    audience: "People who take notes during sermons, study, or personal reflection.",
    problem: "Moving between a notes app and a Bible breaks concentration and makes it difficult to keep ideas and references together.",
    solution: "A focused rich-text notebook that recognizes Bible references and brings relevant verses directly into the writing experience.",
    role: "Product design, mobile engineering, local data architecture, and release delivery.",
    features: ["Rich-text note editing", "Bible reference assistance", "Local-first note storage", "Focused reading experience"],
    stack: ["Flutter", "Dart", "SQLite", "Quill"],
    result: "Shipped as a complete mobile product and established a reusable foundation for thoughtful, content-led app experiences.",
    tone: "blue",
    featured: true,
  },
  {
    slug: "snap-ai",
    name: "Snap AI",
    category: "AI mobile app",
    year: "2024",
    status: "Built",
    tagline: "Generative image tools packaged into an approachable mobile workflow.",
    audience: "Creators and curious users who want to experiment with generative media from a phone.",
    problem: "Powerful image models often expose complicated controls and infrastructure that are difficult to use on mobile.",
    solution: "A guided prompt-to-image experience with configurable generation controls and the supporting cloud workflow behind it.",
    role: "Full-stack mobile development, AI service integration, product flow, and account infrastructure.",
    features: ["Prompt-based generation", "Configurable image parameters", "Account management", "Generation history"],
    stack: ["Flutter", "Firebase", "Stable Diffusion", "Cloud Functions"],
    result: "Turned a technically complex generation pipeline into a cohesive end-user product across mobile and cloud surfaces.",
    tone: "ink",
    featured: true,
  },
  {
    slug: "expense-archive",
    name: "Expense Archive",
    category: "Full-stack mobile app",
    year: "2023",
    status: "Built",
    tagline: "Everyday expense tracking designed around clarity, not accounting jargon.",
    audience: "Individuals who want a lightweight record of spending without the overhead of complex finance software.",
    problem: "Many personal finance tools ask for too much setup before they become useful.",
    solution: "A direct capture-and-review workflow that keeps expense history organized and easy to understand.",
    role: "End-to-end product implementation across the mobile interface, data model, and backend.",
    features: ["Fast expense capture", "Organized transaction history", "Category summaries", "Cloud-backed data"],
    stack: ["Flutter", "Firebase", "Cloud Firestore", "Dart"],
    result: "Explored how a focused data model and restrained interface can make a routine workflow feel much lighter.",
    tone: "sage",
    featured: true,
  },
  {
    slug: "doer",
    name: "Doer",
    category: "Web application",
    year: "2024",
    status: "Built",
    tagline: "A flexible Kanban workspace for keeping projects visibly on track.",
    audience: "Individuals and small teams managing work through visual stages.",
    problem: "Project status becomes difficult to read when tasks, stages, and ownership live in disconnected places.",
    solution: "A configurable board that brings workflows and tasks into one clear, visual workspace.",
    role: "Application architecture, interaction design, front-end development, and API integration.",
    features: ["Configurable workflows", "Kanban task management", "Project organization", "Responsive interface"],
    stack: ["TypeScript", "GraphQL", "Flutter", "Dart"],
    result: "Built a complete product-management workflow while testing a cross-platform approach to structured, interactive software.",
    tone: "sand",
  },
  {
    slug: "snap-ai-web",
    name: "Snap AI Web",
    category: "Companion web app",
    year: "2024",
    status: "Built",
    tagline: "A web companion that extends an AI mobile product beyond the app store.",
    audience: "Snap AI users who need access to account and product support workflows on the web.",
    problem: "A mobile product still needs trustworthy web touchpoints for account management and platform compliance.",
    solution: "A focused companion site for essential product information and account deletion requests.",
    role: "Web design, implementation, product integration, and compliance workflow planning.",
    features: ["Account support flow", "Responsive web interface", "Product information", "Platform-compliance support"],
    stack: ["Next.js", "TypeScript", "Firebase", "React"],
    result: "Closed an important gap between the mobile product, its users, and app-store operational requirements.",
    tone: "coral",
  },
];

export const services = [
  {
    number: "01",
    title: "Mobile product development",
    description: "Cross-platform apps shaped around real user workflows—from first prototype through a release-ready build.",
    deliverables: ["Flutter applications", "Firebase services", "Store release preparation"],
  },
  {
    number: "02",
    title: "Web apps & MVPs",
    description: "Clear, responsive products that help you validate an idea, improve an operation, or launch a useful first version.",
    deliverables: ["Product prototypes", "Full-stack web apps", "Marketing websites"],
  },
  {
    number: "03",
    title: "Product integrations",
    description: "Practical infrastructure that connects your product to AI models, APIs, authentication, and reliable data.",
    deliverables: ["AI features", "Firebase architecture", "API & workflow integration"],
  },
];

export const process = [
  ["Discover", "Clarify the users, problem, constraints, and what success should look like."],
  ["Define", "Shape the right-sized scope, product flow, technical approach, and delivery plan."],
  ["Build", "Work in visible increments with clear decisions, regular updates, and practical testing."],
  ["Launch", "Polish the experience, prepare the release, and leave the product ready for what comes next."],
];
