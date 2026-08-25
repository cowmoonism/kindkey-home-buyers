'use client';

import { motion } from 'framer-motion';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Kent, WA',
    rating: 5,
    text: 'KindKey Home Buyers made selling our house so easy. We needed to relocate quickly for a job, and they closed in just 10 days. No repairs, no hassle, and the process was completely transparent. Highly recommend!',
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Federal Way, WA',
    rating: 5,
    text: "As a family business, they really care about their customers. We felt like we were working with neighbors, not a big corporation. Fair offer, fast closing, and they handled everything. Couldn't be happier.",
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Jennifer Martinez',
    location: 'Auburn, WA',
    rating: 5,
    text: 'We inherited a property that needed major repairs. KindKey bought it as-is and closed quickly. The team was professional, respectful, and made a stressful situation much easier. Thank you!',
    date: '3 weeks ago',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function ReviewsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-xl text-text-secondary">
            Real reviews from homeowners who sold with us
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-divider bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-text-primary">{review.name}</h3>
                  <p className="text-sm text-text-secondary">{review.location}</p>
                </div>
                <div className="text-right">
                  <StarRating rating={review.rating} />
                  <p className="mt-1 text-xs text-text-secondary">{review.date}</p>
                </div>
              </div>
              <p className="leading-relaxed text-text-secondary">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
