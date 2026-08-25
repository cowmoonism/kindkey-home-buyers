'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useCookieConsent } from '@/lib/useCookieConsent';

export default function CookieConsent() {
  const { consent, isLoading, acceptCookies, rejectCookies } = useCookieConsent();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!isLoading && consent === 'pending') {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, consent]);

  if (isLoading || consent !== 'pending') {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] border-t-2 border-divider bg-white shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-text-secondary">
                  We use cookies to enhance your browsing experience, analyze site traffic, and
                  personalize content. By clicking &quot;Accept All&quot;, you consent to our use of
                  cookies.{' '}
                  <Link
                    href="/privacy"
                    className="font-medium text-divider underline hover:text-divider/80"
                  >
                    Learn more about our privacy policy
                  </Link>
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <button
                  onClick={rejectCookies}
                  className="rounded-lg border border-divider bg-secondary px-6 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-secondary/80"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptCookies}
                  className="rounded-lg bg-divider px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-divider/90"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
