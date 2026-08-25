import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-primary py-20">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-6xl font-bold text-text-primary">404</h1>
        <h2 className="mb-6 text-3xl font-semibold text-text-primary">Page Not Found</h2>
        <p className="mb-8 text-text-secondary">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-divider px-6 py-3 font-semibold text-white transition-colors hover:bg-divider/90"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}
