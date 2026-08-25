'use client';

import { motion } from 'framer-motion';
import TrustBadges from './TrustBadges';
import ReviewsSection from './ReviewsSection';

interface AdsConversionBlocksProps {
  cityName: string;
}

export default function AdsConversionBlocks({ cityName }: AdsConversionBlocksProps) {
  const steps = [
    {
      number: '1',
      title: 'Tell us about the house',
      description: 'Share your property details. Takes less than 60 seconds.',
    },
    {
      number: '2',
      title: 'Get a fair cash offer',
      description: 'Receive a transparent, no-obligation cash offer within 24 hours.',
    },
    {
      number: '3',
      title: 'Close on your timeline',
      description: 'We close when it works for you. Fast, simple, and flexible.',
    },
  ];

  const benefits = [
    {
      icon: '🏠',
      title: 'We buy as-is',
      description: 'No repairs needed. We buy your house in any condition.',
    },
    {
      icon: '⚡',
      title: 'Close in as little as 7 days',
      description: 'Fast closing on your timeline. No waiting around.',
    },
    {
      icon: '💰',
      title: 'No Agent Commission Charged by KindKey',
      description: 'KindKey does not charge the seller an agent commission.',
    },
    {
      icon: '📋',
      title: 'Written closing terms',
      description: 'Closing-cost responsibility is stated in the purchase agreement and may vary.',
    },
    {
      icon: '📅',
      title: 'Flexible move-out',
      description: "Work with your schedule. We're flexible with move-out dates.",
    },
  ];

  return (
    <>
      {/* How It Works - 3 Steps */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">How It Works</h2>
            <p className="text-xl text-text-secondary">
              Selling your house in {cityName} is simple and fast
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-divider text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Block */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
                Why Choose Us in {cityName}?
              </h2>
              <p className="text-xl text-text-secondary">
                We make selling your house simple, fast, and stress-free
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg border border-divider bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 text-4xl">{benefit.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-text-primary">{benefit.title}</h3>
                  <p className="text-text-secondary">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Social Proof - Short Testimonials */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
                Trusted by Homeowners in {cityName}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  name: 'Sarah J.',
                  location: 'Kent',
                  text: 'Closed in 10 days. No repairs needed. Best decision we made!',
                  rating: 5,
                },
                {
                  name: 'Michael C.',
                  location: 'Federal Way',
                  text: 'Fair offer, fast closing. They coordinated the purchase professionally.',
                  rating: 5,
                },
                {
                  name: 'Jennifer M.',
                  location: 'Auburn',
                  text: 'Made selling our inherited property so easy. Highly recommend!',
                  rating: 5,
                },
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg border border-divider bg-white p-6 shadow-md"
                >
                  <div className="mb-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic text-text-secondary">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-text-primary">{review.name}</p>
                    <p className="text-sm text-text-secondary">{review.location}, WA</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
