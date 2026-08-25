'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cities } from '@/data/cities';

export default function CityGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {cities.map((city, index) => (
        <motion.div
          key={city.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={`/areas/${city.slug}`}
            className="group block rounded-lg border border-divider bg-white p-6 shadow-sm transition-all hover:border-accent hover:shadow-md"
          >
            <h3 className="mb-2 text-xl font-semibold text-text-primary transition-colors group-hover:text-divider">
              {city.name}
            </h3>
            <p className="mb-4 text-sm text-text-secondary">{city.description}</p>
            <span className="text-sm font-medium text-divider group-hover:underline">
              Learn more about {city.name} →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
