'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Submit Your Info',
    description: 'Tell us about your property. Takes less than 60 seconds.',
  },
  {
    number: '2',
    title: 'Quick Walkthrough',
    description: 'Virtual or in-person walkthrough. We assess the property quickly.',
  },
  {
    number: '3',
    title: 'Transparent Cash Offer',
    description:
      'Receive a fair, no-obligation cash offer. KindKey does not charge the seller a separate service or assignment fee.',
  },
  {
    number: '4',
    title: 'Close on Your Timeline',
    description: 'We close when it works for you. Fast, simple, and transparent.',
  },
];

export default function StepTimeline() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-divider text-2xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="text-sm text-text-secondary">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-full top-8 hidden h-0.5 w-full bg-gradient-to-r from-accent to-transparent md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
