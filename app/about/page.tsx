import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import CityGrid from '@/components/CityGrid';

export const metadata: Metadata = {
  title: 'About Us - Your Local Home Buyer in Kent & Federal Way',
  description:
    'Learn about KindKey Home Buyers LLC, your trusted local home buyer in Kent and Federal Way, WA.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl">About Us</h1>
            <div className="space-y-6 text-lg text-text-secondary">
              <p>
                KindKey Home Buyers LLC is a local real estate investment company buying houses in
                Kent, Federal Way, and throughout Washington State. We specialize in purchasing
                houses directly from homeowners who need to sell quickly. KindKey enters into
                purchase and sale agreements as a principal buyer and is not acting as the seller's
                real estate agent.
              </p>

              <p>
                We're not a tiny startup, and we're not a giant corporation. We're a family business
                based right here in Auburn, Washington. As a local company, we understand our
                community and treat every homeowner like a neighbor. Our family-run approach means
                you get personal attention, direct communication, and decisions made by people who
                care—not a faceless corporation.
              </p>

              <p>
                Our mission is simple: provide a fair, transparent, and hassle-free way for
                homeowners to sell their properties. Whether you're facing foreclosure, dealing with
                an inherited property, going through a divorce, or simply need to relocate quickly,
                we're here to help.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">Why Choose Us?</h2>

              <ul className="ml-4 list-inside list-disc space-y-4">
                <li>
                  <strong className="text-text-primary">Local Expertise:</strong> We know the Kent
                  and Federal Way markets inside and out. Our local knowledge helps us provide fair
                  offers that reflect true market value.
                </li>
                <li>
                  <strong className="text-text-primary">No Repairs Needed:</strong> We buy homes and
                  land as-is, in any condition. Save time and money by skipping repairs and
                  renovations.
                </li>
                <li>
                  <strong className="text-text-primary">Fast & Flexible:</strong> We can close on
                  your timeline, whether that's 7 days or 45 days. Every situation is unique, and we
                  work with you.
                </li>
                <li>
                  <strong className="text-text-primary">Transparent Process:</strong> KindKey does
                  not charge the seller an agent commission or a separate service or assignment fee.
                  Closing-cost responsibility is stated in the written purchase agreement and may
                  vary by transaction. The closing agent provides a settlement statement showing
                  charges and final proceeds before closing.
                </li>
                <li>
                  <strong className="text-text-primary">Respectful & Professional:</strong> We
                  understand that selling a house can be stressful. We treat every homeowner with
                  respect and provide a pressure-free experience.
                </li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
                Areas Where We Buy
              </h2>
              <p>
                While we focus primarily on Kent, Federal Way, Auburn, Milton, Tacoma, Edgewood, and
                Puyallup, we buy houses throughout Washington State. Contact us to see if we can
                purchase your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            Primary Areas Where We Buy
          </h2>
          <CityGrid />
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-divider bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-text-primary">Contact Information</h2>
            <p className="mb-4 text-text-secondary">
              Ready to learn more or get started? We're here to help.
            </p>
            <div className="mb-4">
              <p className="mb-2 text-text-secondary">Call or text us:</p>
              <a
                href="tel:+12535183638"
                className="mb-2 block text-xl font-semibold text-divider hover:underline"
              >
                (253) 518-3638
              </a>
              <p className="mb-2 text-text-secondary">Email us:</p>
              <a
                href="mailto:info@kindkeyhomebuyers.com"
                className="block text-xl font-semibold text-divider hover:underline"
              >
                info@kindkeyhomebuyers.com
              </a>
            </div>
            <p className="text-text-secondary">
              Visit our{' '}
              <a href="/contact" className="text-divider hover:underline">
                contact page
              </a>{' '}
              to submit your property information or reach out directly.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
