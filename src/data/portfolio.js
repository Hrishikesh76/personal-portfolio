import {
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  WandSparkles,
} from 'lucide-react';

export const profile = {
  name: 'Hrishikesh',
  title: 'Backend, Cloud & AI Software Engineer',
  intro:
    'I build reliable backend systems, cloud-native platforms, and GenAI products that turn complex workflows into elegant software.',
  typingPhrases: ['FastAPI specialist', 'Cloud-native builder', 'GenAI product engineer', 'RAG and agent systems'],
  location: 'India',
  email: 'hello@example.com',
  resumeUrl: '/resume.pdf',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: Linkedin },
  { label: 'X/Twitter', href: 'https://x.com/', icon: Twitter },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Projects Completed', value: '32+' },
  { label: 'Technologies Worked With', value: '24+' },
];

export const aboutCards = [
  {
    title: 'Professional Summary',
    body: 'Software engineer focused on scalable APIs, platform reliability, and AI-assisted products with clear business outcomes.',
    icon: Code2,
  },
  {
    title: 'Career Overview',
    body: 'Experience across backend architecture, cloud deployments, automation, and product-facing GenAI workflows.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Education',
    body: 'Computer science foundation with continuous learning in distributed systems, AI engineering, and developer experience.',
    icon: Database,
  },
  {
    title: 'Interests',
    body: 'System design, thoughtful tooling, technical writing, fitness, and building small products that feel quietly excellent.',
    icon: WandSparkles,
  },
];

export const skillGroups = [
  {
    category: 'Backend',
    icon: Code2,
    skills: [
      { name: 'Python', level: 94 },
      { name: 'FastAPI', level: 91 },
      { name: 'Django', level: 84 },
      { name: 'Flask', level: 80 },
    ],
  },
  {
    category: 'Cloud',
    icon: Cloud,
    skills: [
      { name: 'Azure', level: 88 },
      { name: 'AWS', level: 84 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 78 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 79 },
      { name: 'Redis', level: 86 },
    ],
  },
  {
    category: 'AI / GenAI',
    icon: WandSparkles,
    skills: [
      { name: 'OpenAI', level: 90 },
      { name: 'LangChain', level: 84 },
      { name: 'Vector Databases', level: 83 },
      { name: 'RAG', level: 88 },
      { name: 'AI Agents', level: 80 },
    ],
  },
];

export const projects = [
  {
    title: 'AI Knowledge Copilot',
    description: 'A RAG assistant with document ingestion, semantic search, citations, and role-aware enterprise access.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'RAG', 'PostgreSQL'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    accent: 'from-brand-500 to-accent-400',
  },
  {
    title: 'Cloud Cost Intelligence',
    description: 'Analytics platform that detects cloud spend anomalies and recommends workload-level optimizations.',
    technologies: ['AWS', 'Docker', 'Redis', 'Python'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    accent: 'from-slate-800 to-brand-500',
  },
  {
    title: 'Developer Workflow API',
    description: 'High-throughput FastAPI service with async jobs, observability, auth, and resilient deployment pipelines.',
    technologies: ['FastAPI', 'Kubernetes', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    accent: 'from-accent-500 to-emerald-400',
  },
  {
    title: 'Agentic Support Triage',
    description: 'AI agent workflow for classifying tickets, drafting responses, and routing complex cases to specialists.',
    technologies: ['OpenAI', 'LangChain', 'AI Agents', 'MongoDB'],
    github: 'https://github.com/',
    demo: 'https://example.com',
    accent: 'from-indigo-500 to-cyan-400',
  },
];

export const experiences = [
  {
    company: 'Nexora Systems',
    role: 'Senior Software Engineer',
    duration: '2024 - Present',
    responsibilities: [
      'Lead backend architecture for AI-enabled SaaS workflows.',
      'Designed resilient FastAPI services with async workers and observability.',
      'Reduced high-volume API latency by 38% through caching and query tuning.',
    ],
  },
  {
    company: 'CloudForge Labs',
    role: 'Backend Engineer',
    duration: '2021 - 2024',
    responsibilities: [
      'Built cloud-native services on Azure and AWS with Dockerized delivery.',
      'Created internal automation that saved engineering teams 12 hours weekly.',
      'Improved deployment reliability with CI/CD, health checks, and rollback paths.',
    ],
  },
  {
    company: 'BrightStack',
    role: 'Software Engineer',
    duration: '2019 - 2021',
    responsibilities: [
      'Delivered Django and Flask APIs for customer-facing applications.',
      'Modeled relational data and optimized reporting queries in PostgreSQL.',
      'Partnered with product teams to ship clean, accessible user experiences.',
    ],
  },
];

export const blogPosts = [
  {
    title: 'Designing RAG Systems That Users Can Trust',
    summary: 'A practical look at retrieval quality, citations, evaluation loops, and failure modes in production AI apps.',
    tag: 'AI Engineering',
  },
  {
    title: 'FastAPI Patterns for Durable Product Teams',
    summary: 'Project structure, dependency injection, testing strategy, and observability choices that scale calmly.',
    tag: 'Backend',
  },
  {
    title: 'Cloud Cost Signals Every Engineer Should Watch',
    summary: 'A concise guide to spotting inefficient workloads before invoices become incidents.',
    tag: 'Cloud',
  },
];

export const contactDetails = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/hrishikesh', href: 'https://linkedin.com/', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/hrishikesh', href: 'https://github.com/', icon: Github },
  { label: 'Location', value: profile.location, href: null, icon: MapPin },
];
