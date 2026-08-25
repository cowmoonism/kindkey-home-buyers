'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = 'Ready to Get Your Cash Offer?',
  subtitle = 'Start in 60 seconds. No obligation, no pressure.',
  buttonText = 'Get My Cash Offer',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-accent/10 to-accent-blue/10 py-16">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">{title}</h2>
          <p className="mb-8 text-xl text-text-secondary">{subtitle}</p>
          <Link
            href={buttonHref}
            className="inline-block rounded-lg bg-divider px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-divider/90"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
