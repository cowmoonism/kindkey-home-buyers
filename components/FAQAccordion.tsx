'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData, type FAQItem } from '@/data/faq';

interface FAQAccordionProps {
  items?: FAQItem[];
}

export default function FAQAccordion({ items = faqData }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-divider bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-secondary"
          >
            <span className="pr-4 font-semibold text-text-primary">{item.question}</span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-text-secondary transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-text-secondary">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
