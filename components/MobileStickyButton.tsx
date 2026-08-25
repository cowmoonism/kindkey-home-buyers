'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileStickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку после скроллинга на 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    // Проверяем при монтировании на случай, если пользователь уже прокрутил
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="border-t border-divider bg-white px-4 py-3 shadow-lg">
            <Link
              href="/contact"
              className="block w-full rounded-lg bg-divider px-6 py-4 text-center font-semibold text-white shadow-md transition-colors hover:bg-divider/90"
            >
              Get My Cash Offer
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
