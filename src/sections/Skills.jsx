import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { skillGroups } from '../data/portfolio.js';
import { fadeInUp, staggerContainer } from '../utils/animation.js';

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="A balanced toolkit for modern software."
        description="Backend depth, cloud delivery, pragmatic data modeling, and AI engineering for production teams."
      />

      <motion.div
        className="grid gap-5 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillGroups.map(({ category, icon: Icon, skills }) => (
          <motion.article key={category} className="glass rounded-3xl p-6 transition hover:-translate-y-1" variants={fadeInUp}>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <Icon size={21} />
              </span>
              <h3 className="font-display text-xl font-bold">{category}</h3>
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between text-sm font-bold">
                    <span>{skill.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-brand-600 to-accent-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
