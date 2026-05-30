import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Code2, Database, Mail, Newspaper, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero } from '../sections/Hero.jsx';
import { fadeInUp, staggerContainer } from '../utils/animation.js';

const pagePreviews = [
  {
    title: 'About',
    href: '/about',
    description: 'Professional summary, career overview, education, interests, and impact stats.',
    icon: Sparkles,
  },
  {
    title: 'Skills',
    href: '/skills',
    description: 'Backend, cloud, database, and GenAI capabilities with progress indicators.',
    icon: Code2,
  },
  {
    title: 'Projects',
    href: '/projects',
    description: 'Selected technical work with filtering, stacks, source links, and live demos.',
    icon: Database,
  },
  {
    title: 'Experience',
    href: '/experience',
    description: 'A vertical timeline of roles, responsibilities, and engineering achievements.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Sample writing on systems, AI engineering, backend patterns, and cloud craft.',
    icon: Newspaper,
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'A validated contact form plus email, LinkedIn, GitHub, and location details.',
    icon: Mail,
  },
];

export function HomePage() {
  return (
    <>
      <Hero />
      <section className="section-shell pt-0">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">Explore</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Navigate the portfolio by focus area.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            Each page gives the section room to breathe while keeping the homepage fast and focused.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {pagePreviews.map(({ title, href, description, icon: Icon }) => (
            <motion.div key={href} variants={fadeInUp}>
              <Link
                to={href}
                className="focus-ring glass group flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-brand-600 dark:bg-white dark:text-slate-950">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 dark:text-accent-400">
                  View page <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
