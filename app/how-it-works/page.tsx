import type { Metadata } from 'next';
import StepTimeline from '@/components/StepTimeline';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { APPROVED_TRANSACTION_DISCLOSURE } from '@/data/disclosures';

export const metadata: Metadata = {
  title: 'How It Works - Simple 4-Step Process',
  description:
    'Learn how our simple 4-step process works. Submit your info, get a walkthrough, receive a transparent cash offer, and close on your timeline.',
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl">How It Works</h1>
            <p className="text-xl text-text-secondary">
              Our simple, transparent process designed to get you a fair cash offer quickly.
            </p>
          </div>

          <StepTimeline />
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-text-primary">
            Legal Clarity & Transparency
          </h2>

          <div className="space-y-6 text-text-secondary">
            <div className="rounded-lg border border-divider bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-text-primary">
                Transaction Costs &amp; Final Proceeds
              </h3>
              <p>{APPROVED_TRANSACTION_DISCLOSURE}</p>
            </div>

            <div className="rounded-lg border border-divider bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-text-primary">Flexible Timeline</h3>
              <p>
                We understand that every situation is unique. Whether you need to close in 7 days or
                45 days, we work with your schedule. No pressure, just flexibility.
              </p>
            </div>

            <div className="rounded-lg border border-divider bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-text-primary">Property Condition</h3>
              <p>
                We buy houses in any condition—as-is, cosmetic fixes needed, or major repairs
                required. You don't need to spend time or money on repairs before selling.
              </p>
            </div>

            <div className="rounded-lg border border-divider bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-text-primary">No Obligation</h3>
              <p>
                Submitting your information and receiving a cash offer is completely free and comes
                with no obligation. You're free to accept, decline, or take time to think it over.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            Common Questions About Our Process
          </h2>
          <FAQAccordion />
        </div>
      </section>

      <CTASection />
    </>
  );
}
