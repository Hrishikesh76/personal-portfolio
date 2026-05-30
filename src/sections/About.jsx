import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { aboutCards, stats } from '../data/portfolio.js';
import { fadeInUp, staggerContainer } from '../utils/animation.js';

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About"
        title="A product-minded engineer for complex systems."
        description="I care about the full path from architecture to deployment, with a bias for dependable software that people enjoy using."
      />

      <motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {aboutCards.map(({ title, body, icon: Icon }) => (
          <motion.article key={title} className="glass rounded-3xl p-6 transition hover:-translate-y-1" variants={fadeInUp}>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-xl font-bold">{title}</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{body}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 grid gap-4 sm:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} className="rounded-3xl border border-slate-200 bg-white/70 p-6 text-center shadow-soft dark:border-white/10 dark:bg-white/5" variants={fadeInUp}>
            <p className="font-display text-4xl font-extrabold gradient-text">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
