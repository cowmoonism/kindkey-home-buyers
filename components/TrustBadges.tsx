'use client';

import { motion } from 'framer-motion';

const badges = [
  { text: 'No Repairs Needed', icon: '🏠' },
  { text: 'No Agent Commission Charged by KindKey', icon: '💰' },
  { text: 'Fast Closing', icon: '⚡' },
  { text: 'Local & Trusted', icon: '✅' },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.text}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="rounded-lg border border-divider bg-white p-4 text-center shadow-sm"
        >
          <div className="mb-2 text-3xl">{badge.icon}</div>
          <p className="text-sm font-medium text-text-primary">{badge.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
