import { Link } from 'react-router-dom';
import { BackToTop } from './BackToTop.jsx';
import { navLinks, profile, socials } from '../data/portfolio.js';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/55 py-10 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl font-bold">
            {profile.name}
            <span className="text-brand-600 dark:text-accent-400">.</span>
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <Link
              className="focus-ring rounded-full px-2 py-1 text-sm font-semibold text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-accent-400"
              to={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:-translate-y-1 hover:text-brand-600 dark:border-white/15 dark:bg-white/10 dark:text-slate-200"
            >
              <Icon size={18} />
            </a>
          ))}
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
