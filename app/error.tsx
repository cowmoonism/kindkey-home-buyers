'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center bg-primary py-20">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-text-primary">Something went wrong</h1>
        <p className="mb-8 text-text-secondary">
          We're sorry for the inconvenience. Please try again.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="rounded-lg bg-divider px-6 py-3 font-semibold text-white transition-colors hover:bg-divider/90"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-lg border-2 border-divider bg-transparent px-6 py-3 font-semibold text-divider transition-colors hover:bg-divider/10"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
