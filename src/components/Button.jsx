export function Button({ as: Component = 'a', variant = 'primary', className = '', children, ...props }) {
  const variants = {
    primary:
      'bg-slate-950 text-white shadow-glow hover:-translate-y-0.5 hover:bg-brand-700 dark:bg-white dark:text-slate-950 dark:hover:bg-brand-100',
    secondary:
      'border border-slate-300 bg-white/70 text-slate-900 hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-700 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:text-accent-400',
  };

  return (
    <Component
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
