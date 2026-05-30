import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  return (
    <a
      href="#home"
      aria-label="Back to top"
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white transition hover:-translate-y-1 hover:bg-brand-700 dark:bg-white dark:text-slate-950"
    >
      <ArrowUp size={18} />
    </a>
  );
}
