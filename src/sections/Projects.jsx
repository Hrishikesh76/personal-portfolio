import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '../components/Button.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { projects } from '../data/portfolio.js';
import { fadeInUp, staggerContainer } from '../utils/animation.js';

export function Projects() {
  const filters = useMemo(
    () => ['All', ...Array.from(new Set(projects.flatMap((project) => project.technologies))).sort()],
    [],
  );
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work with production shape."
        description="A mix of AI applications, cloud automation, and backend systems designed for real teams."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${
              activeFilter === filter
                ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                : 'border border-slate-300 bg-white/70 text-slate-700 hover:border-brand-500 dark:border-white/15 dark:bg-white/10 dark:text-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {filteredProjects.map((project) => (
          <motion.article key={project.title} layout className="glass overflow-hidden rounded-3xl transition hover:-translate-y-1" variants={fadeInUp}>
            <div className={`flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${project.accent}`}>
              <div className="rounded-2xl border border-white/30 bg-white/18 px-5 py-4 text-center text-white backdrop-blur-lg">
                <p className="font-display text-2xl font-bold">{project.title}</p>
                <p className="mt-1 text-sm opacity-90">Project preview</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold text-brand-700 dark:text-brand-100">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={project.github} variant="secondary" className="w-full sm:w-auto">
                  <Github size={17} /> GitHub
                </Button>
                <Button href={project.demo} className="w-full sm:w-auto">
                  <ExternalLink size={17} /> Live Demo
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
