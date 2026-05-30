import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader.jsx';
import { blogPosts } from '../data/portfolio.js';
import { fadeInUp, staggerContainer } from '../utils/animation.js';

export function Blog() {
  return (
    <section id="blog" className="section-shell">
      <SectionHeader
        eyebrow="Blog"
        title="Writing on systems, AI, and craft."
        description="Sample articles for showcasing engineering judgment, architecture thinking, and practical lessons."
      />

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {blogPosts.map((post, index) => (
          <motion.article key={post.title} className="glass overflow-hidden rounded-3xl transition hover:-translate-y-1" variants={fadeInUp}>
            <div className={`aspect-[16/10] bg-gradient-to-br ${index === 0 ? 'from-brand-500 to-accent-400' : index === 1 ? 'from-slate-800 to-cyan-500' : 'from-emerald-500 to-brand-600'}`} />
            <div className="p-6">
              <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold text-brand-700 dark:text-brand-100">{post.tag}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{post.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{post.summary}</p>
              <a href="#blog" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full text-sm font-bold text-brand-700 hover:text-brand-500 dark:text-accent-400">
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
