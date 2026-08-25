'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SEOContentAccordionProps {
  cityName: string;
  cityIntro: string;
  cityDescription: string;
}

export default function SEOContentAccordion({
  cityName,
  cityIntro,
  cityDescription,
}: SEOContentAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between rounded-lg border border-divider bg-secondary p-6 text-left transition-colors hover:bg-secondary/80"
          >
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              Learn about selling a house in {cityName}
            </h2>
            <svg
              className={`h-6 w-6 text-text-secondary transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-lg border border-divider bg-white p-8 shadow-lg">
                  <div className="prose prose-lg max-w-none text-text-secondary">
                    <p className="mb-4 text-lg">{cityIntro}</p>
                    <p className="mb-6 text-lg">
                      {cityDescription}{' '}
                      {cityName.includes('State') || cityName === 'Washington'
                        ? "As part of our commitment to buying houses throughout Washington State, we're proud to purchase homes from homeowners across the entire state. Whether you're in Kent, Auburn, Tacoma, Federal Way, Milton, Edgewood, Puyallup, or any other city in Washington, we're here to buy your house fast for cash."
                        : `As part of our commitment to buying houses throughout Washington State, we're proud to purchase homes from homeowners in ${cityName} and across the entire state. Whether you're in ${cityName} or any other city in Washington, we're here to buy your house fast for cash.`}
                    </p>
                    <div className="rounded-lg border border-accent/20 bg-accent/10 p-6">
                      <h3 className="mb-4 text-xl font-semibold text-text-primary">
                        Why Sell to Us{' '}
                        {cityName.includes('State') || cityName === 'Washington'
                          ? 'in Washington State'
                          : `in ${cityName}`}
                        ?
                      </h3>
                      <ul className="list-inside list-disc space-y-3 text-text-secondary">
                        <li>
                          {cityName.includes('State') || cityName === 'Washington'
                            ? 'Statewide Washington'
                            : `Local ${cityName}`}{' '}
                          market expertise
                        </li>
                        <li>Fast closing on your timeline</li>
                        <li>No repairs needed</li>
                        <li>No agent commission charged by KindKey</li>
                        <li>Fair, transparent cash offers</li>
                        <li>We buy houses in any condition</li>
                        <li>Flexible move-out dates</li>
                      </ul>
                    </div>
                    {!cityName.includes('State') && cityName !== 'Washington' && (
                      <div className="mt-6">
                        <h3 className="mb-4 text-xl font-semibold text-text-primary">
                          About {cityName}, Washington
                        </h3>
                        <p className="text-text-secondary">
                          {cityName} is a thriving community in Washington State with a strong real
                          estate market. Whether you're dealing with an inherited property, facing
                          foreclosure, going through a divorce, or simply need to relocate quickly,
                          we understand the {cityName} market and can provide a transparent cash
                          offer for your home. Our local expertise allows us to make fair offers
                          quickly, and we're committed to making the selling process as smooth as
                          possible for homeowners throughout {cityName} and the surrounding areas.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
