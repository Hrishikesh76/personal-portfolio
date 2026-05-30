import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { experiences } from '../data/portfolio.js';
import { fadeInUp } from '../utils/animation.js';

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of shipped systems and team impact."
        description="Roles focused on dependable backend platforms, cloud operations, and AI-enabled product delivery."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-brand-500 via-accent-400 to-transparent sm:left-1/2" />
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 === 0 ? '' : 'sm:[&>div]:col-start-2'}`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="ml-10 sm:ml-0">
                <span className="absolute left-[9px] top-6 h-4 w-4 rounded-full border-4 border-white bg-brand-600 shadow dark:border-slate-950 sm:left-[calc(50%-8px)]" />
                <div className="glass rounded-3xl p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700 dark:text-accent-400">{item.duration}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{item.role}</h3>
                  <p className="mt-1 font-semibold text-slate-600 dark:text-slate-300">{item.company}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
