import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button.jsx';

export function NotFoundPage() {
  return (
    <section className="section-shell flex min-h-[calc(100vh-14rem)] items-center justify-center text-center">
      <div className="max-w-2xl">
        <span className="eyebrow">404</span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          This page is off the map.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          The route you opened does not exist in this portfolio.
        </p>
        <Button as={Link} to="/" className="mt-8">
          <Home size={18} /> Back Home
        </Button>
      </div>
    </section>
  );
}
