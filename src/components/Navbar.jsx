import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, profile } from '../data/portfolio.js';

export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const renderLinks = (mobile = false) =>
    navLinks.map((link) => (
      <NavLink
        key={link.href}
        to={link.href}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `focus-ring rounded-full font-semibold transition ${
            mobile ? 'px-4 py-3 text-base' : 'px-3 py-2 text-sm'
          } ${
            isActive
              ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
              : 'text-slate-700 hover:text-brand-600 dark:text-slate-200 dark:hover:text-accent-400'
          }`
        }
        end={link.href === '/'}
      >
        {link.label}
      </NavLink>
    ));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-mist/78 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/78">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring rounded-full font-display text-lg font-extrabold">
          {profile.name}
          <span className="text-brand-600 dark:text-accent-400">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{renderLinks()}</div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-white/15 dark:bg-white/10 dark:text-white"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-800 lg:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-4 mb-4 grid gap-1 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-soft lg:hidden dark:border-white/10 dark:bg-slate-900/95"
          >
            {renderLinks(true)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
