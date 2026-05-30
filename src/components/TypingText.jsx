import { useEffect, useMemo, useState } from 'react';

export function TypingText({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const safePhrases = useMemo(() => (phrases?.length ? phrases : ['software engineer']), [phrases]);
  const phrase = safePhrases[phraseIndex] ?? safePhrases[0];
  const atEnd = letterCount === phrase.length;
  const atStart = letterCount === 0;

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!deleting && atEnd) {
          setDeleting(true);
          return;
        }
        if (deleting && atStart) {
          setDeleting(false);
          setPhraseIndex((current) => (current + 1) % safePhrases.length);
          return;
        }
        setLetterCount((current) => current + (deleting ? -1 : 1));
      },
      atEnd ? 1200 : 55,
    );

    return () => window.clearTimeout(timeout);
  }, [atEnd, atStart, deleting, letterCount, phrase.length, safePhrases.length]);

  return (
    <span className="text-brand-700 dark:text-accent-400">
      {phrase.slice(0, letterCount)}
      <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 animate-pulse bg-current" />
    </span>
  );
}
