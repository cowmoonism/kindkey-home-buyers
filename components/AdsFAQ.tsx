'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import { APPROVED_TRANSACTION_DISCLOSURE, MORTGAGE_AND_LIEN_DISCLOSURE } from '@/data/disclosures';

interface FAQItem {
  question: string;
  answer: string;
}

interface AdsFAQProps {
  cityName: string;
  items: FAQItem[];
}

export default function AdsFAQ({ cityName, items }: AdsFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Enhanced FAQ items focused on conversion
  const conversionFAQ: FAQItem[] = [
    {
      question: 'Do I need to make repairs before selling?',
      answer: `No! We buy houses in {cityName} exactly as they are. Whether your house needs minor cosmetic fixes or major repairs, we'll make you a fair cash offer. You do not need to make repairs before the sale; KindKey handles repairs after purchase.`,
    },
    {
      question: 'How fast can we close?',
      answer: `We can close in as little as 7 days, but we work with your timeline. Whether you need to close quickly or need more time to move out, we're flexible. Most transactions in {cityName} close within 7-14 days, but we can accommodate your schedule.`,
    },
    {
      question: 'Are there any fees or commissions?',
      answer: APPROVED_TRANSACTION_DISCLOSURE,
    },
    {
      question: 'Is the cash offer obligation-free?',
      answer: `Yes, absolutely. Our cash offers are completely no-obligation. You can review the offer, ask questions, and take your time to decide. There's no pressure - we want you to feel confident in your decision.`,
    },
    {
      question: 'What types of homes do you buy?',
      answer: `We buy all types of residential properties in {cityName}: single-family homes, condos, townhouses, multi-family properties, and even land. Condition doesn't matter - we buy houses that need repairs, have tenants, are vacant, or are in perfect condition.`,
    },
    {
      question: 'What if I have a mortgage or owe money on the house?',
      answer: MORTGAGE_AND_LIEN_DISCLOSURE,
    },
    ...items, // Include city-specific FAQ items
  ];

  // Replace {cityName} placeholder with actual city name
  const processedFAQ = conversionFAQ.map((item) => ({
    question: item.question.replace('{cityName}', cityName),
    answer: item.answer.replace('{cityName}', cityName),
  }));

  // Generate FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: processedFAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section className="bg-primary py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary md:text-4xl">
            Frequently Asked Questions - {cityName}
          </h2>
          <div className="space-y-4">
            {processedFAQ.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-divider bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-secondary"
                  aria-expanded={openIndex === index}
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
        </div>
      </section>
    </>
  );
}
