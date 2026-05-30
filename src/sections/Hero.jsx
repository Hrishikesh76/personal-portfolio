import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';
import profileImage from '../assets/profile-placeholder.svg';
import { Button } from '../components/Button.jsx';
import { TypingText } from '../components/TypingText.jsx';
import { profile, socials } from '../data/portfolio.js';
import { fadeInUp, staggerContainer } from '../utils/animation.js';

export function Hero() {
  return (
    <section id="home" className="section-shell grid min-h-[calc(100vh-4.5rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={fadeInUp}>
          Available for impactful backend and AI work
        </motion.span>
        <motion.h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" variants={fadeInUp}>
          Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
        </motion.h1>
        <motion.p className="mt-5 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl" variants={fadeInUp}>
          {profile.title}
        </motion.p>
        <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300" variants={fadeInUp}>
          {profile.intro}
        </motion.p>
        <motion.p className="mt-5 text-base font-bold text-slate-700 dark:text-slate-200" variants={fadeInUp}>
          Building as a <TypingText phrases={profile.typingPhrases} />
        </motion.p>

        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeInUp}>
          <Button href={profile.resumeUrl} download>
            <Download size={18} /> Download Resume
          </Button>
          <Button href="#contact" variant="secondary">
            <Send size={18} /> Contact Me
          </Button>
        </motion.div>

        <motion.div className="mt-8 flex gap-3" variants={fadeInUp}>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/75 text-slate-700 transition hover:-translate-y-1 hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:bg-white/10 dark:text-slate-200 dark:hover:text-accent-400"
            >
              <Icon size={19} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-6 rounded-[2rem] bg-brand-500/20 blur-3xl dark:bg-accent-400/15" />
        <div className="glass relative overflow-hidden rounded-[2rem] p-4">
          <img src={profileImage} alt={`${profile.name} profile placeholder`} className="aspect-square w-full rounded-[1.5rem] object-cover" />
          <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/45 bg-white/82 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
            <p className="text-sm font-bold text-slate-950 dark:text-white">Engineering focus</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              APIs, cloud platforms, automation, and GenAI systems.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
