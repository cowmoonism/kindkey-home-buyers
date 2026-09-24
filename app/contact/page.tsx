import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Cash Offer Today',
  description:
    'Contact KindKey Home Buyers to get your cash offer. Submit your property information or reach out via phone or text.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl">Contact Us</h1>
            <p className="text-xl text-text-secondary">
              Get your cash offer today. Fill out the form below or reach out directly.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-divider bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-text-primary">Get Your Cash Offer</h2>
                <LeadForm variant="extended" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-divider bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-text-primary">
                  Alternative Contact Methods
                </h3>
                <div className="space-y-4 text-text-secondary">
                  <div>
                    <p className="mb-1 font-medium text-text-primary">Phone Call</p>
                    <a
                      href="tel:+12535183638"
                      className="mb-1 block text-sm text-divider hover:underline"
                    >
                      (253) 518-3638
                    </a>
                    <p className="text-sm">
                      Prefer to talk? We'll call you at your preferred time after you submit your
                      information.
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-text-primary">Text</p>
                    <a
                      href="tel:+12535183638"
                      className="mb-1 block text-sm text-divider hover:underline"
                    >
                      (253) 518-3638
                    </a>
                    <p className="text-sm">
                      Text us at the number above. We respond quickly to text inquiries.
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-text-primary">Email</p>
                    <a
                      href="mailto:info@kindkeyhomebuyers.com"
                      className="mb-1 block text-sm text-divider hover:underline"
                    >
                      info@kindkeyhomebuyers.com
                    </a>
                    <p className="text-sm">
                      Send us an email with your property details. We'll respond promptly to all
                      email inquiries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-divider bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-text-primary">What Happens Next?</h3>
                <ol className="list-inside list-decimal space-y-3 text-sm text-text-secondary">
                  <li>Submit your property information</li>
                  <li>We'll reach out within one business day</li>
                  <li>Schedule a quick walkthrough (virtual or in-person)</li>
                  <li>Receive your transparent cash offer</li>
                  <li>Close on your timeline</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
