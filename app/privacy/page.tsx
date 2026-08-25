import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for KindKey Home Buyers LLC',
  robots: {
    index: false,
    follow: false,
  },
};

const BUSINESS_NAME = 'KindKey Home Buyers LLC';
const BUSINESS_EMAIL = 'info@kindkeyhomebuyers.com';
const BUSINESS_PHONE_DISPLAY = '(253) 260-4117';
const BUSINESS_PHONE_TEL = '+12532604117';

export default function PrivacyPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com';
  const year = new Date().getFullYear();
  const siteDisplay = siteUrl.replace(/^https?:\/\//, '');

  return (
    <section className="min-h-screen bg-primary py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-text-primary">{BUSINESS_NAME}</h1>
        <p className="mb-8 text-text-secondary">Effective Date: January 1st, {year}</p>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary">
          <section
            className="rounded-lg border border-divider/30 bg-primary/50 p-6"
            aria-labelledby="sms-data-notice"
          >
            <h2
              id="sms-data-notice"
              className="mb-4 mt-0 text-xl font-semibold uppercase tracking-wide text-text-primary"
            >
              Important Notice Regarding Text Messaging Data
            </h2>
            <p className="mb-0">
              {BUSINESS_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) DOES NOT share
              customer opt-in information, including phone numbers and consent records, with any
              affiliates or third parties for marketing, promotional, or any other purposes
              unrelated to providing our direct services. All text messaging originator opt-in data
              is kept strictly confidential.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-0 text-2xl font-semibold text-text-primary">
              1. Information We Collect
            </h2>
            <p>We collect the following types of information:</p>
            <h3 className="mb-3 mt-6 text-lg font-semibold text-text-primary">
              Personal Information
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Name, email address, phone number, physical address</li>
              <li>Payment information when you make a purchase or request a quote</li>
              <li>
                Opt-in records and timestamps for all communication channels (SMS, email, etc.)
              </li>
            </ul>
            <h3 className="mb-3 mt-6 text-lg font-semibold text-text-primary">
              Non-Personal Information
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>IP address, browser type, device information</li>
              <li>Website usage patterns and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>
            <h3 className="mb-3 mt-6 text-lg font-semibold text-text-primary">
              Customer Communication
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Records of inquiries and service requests</li>
              <li>Appointment details and preferences</li>
              <li>Service history and feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              2. How We Use Your Information
            </h2>
            <p>We use collected data for:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Providing and improving our services</li>
              <li>Processing transactions and payments</li>
              <li>Communicating with you about your inquiries, appointments, and promotions</li>
              <li>Enhancing website functionality and user experience</li>
              <li>Ensuring security and fraud prevention</li>
              <li>Maintaining records of your communication preferences and consent</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              3. SMS Messaging &amp; Compliance
            </h2>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-text-primary">
              Text Message Program Terms &amp; Conditions
            </h3>
            <p>
              By opting into our SMS messaging services, you agree to receive text messages related
              to our services, including appointment reminders, customer support, and important
              updates.
            </p>

            <h4 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
              Opt-In &amp; Consent
            </h4>
            <ul className="list-disc space-y-2 pl-5">
              <li>You will only receive messages if you have explicitly opted in</li>
              <li>We maintain timestamped records of all opt-in actions</li>
              <li>
                We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws
              </li>
            </ul>

            <h4 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
              Opt-Out Instructions
            </h4>
            <ul className="list-disc space-y-2 pl-5">
              <li>You can cancel SMS notifications at any time by replying &quot;STOP&quot;</li>
              <li>
                You will receive a final confirmation message, and no further messages will be sent
                unless you re-opt in
              </li>
              <li>All opt-out requests are processed immediately.</li>
            </ul>

            <h4 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
              Message Frequency &amp; Content
            </h4>
            <ul className="list-disc space-y-2 pl-5">
              <li>Message frequency varies based on your interactions with our business</li>
              <li>Messages will be directly related to the services you have requested</li>
              <li>We do not send promotional content without specific consent</li>
            </ul>

            <h4 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
              Help &amp; Support
            </h4>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Reply &quot;HELP&quot; for assistance or contact us at{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-divider hover:underline">
                  {BUSINESS_EMAIL}
                </a>
              </li>
              <li>Customer support is available during regular business hours</li>
            </ul>

            <h4 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
              Carrier Information
            </h4>
            <ul className="list-disc space-y-2 pl-5">
              <li>Standard message and data rates may apply</li>
              <li>Carriers are not liable for delayed or undelivered messages</li>
              <li>
                Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional
                carriers
              </li>
            </ul>

            <h3 className="mb-3 mt-8 text-xl font-semibold text-text-primary">
              SMS Data Protection Statement
            </h3>
            <p>
              No mobile information will be shared with third parties/affiliates for
              marketing/promotional purposes. Information sharing to subcontractors in support
              services, such as customer service is permitted. All other use case categories exclude
              text messaging originator opt-in data and consent; this information will not be shared
              with any third parties.
            </p>
            <p className="mt-4">
              We implement strict data protection measures to safeguard your SMS opt-in information
              and consent records.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              4. Information Sharing &amp; Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade personal information. We may share information with:
            </p>

            <h3 className="mb-2 mt-6 text-lg font-semibold text-text-primary">Service Providers</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Third-party vendors who assist in our operations (e.g., payment processing,
                appointment scheduling)
              </li>
              <li>
                SMS aggregators and providers solely for the purpose of delivering messages
                you&apos;ve consented to receive
              </li>
              <li>
                All service providers are contractually obligated to maintain confidentiality and
                security
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-lg font-semibold text-text-primary">Legal Compliance</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>If required by law, legal process, or to protect our rights</li>
              <li>In response to valid law enforcement requests or court orders</li>
            </ul>

            <h3 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
              Business Transfers
            </h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>In case of mergers, acquisitions, or sale of assets</li>
              <li>In such cases, your data remains protected under the terms of this policy</li>
            </ul>

            <p className="mt-4">
              All the above categories exclude text messaging originator opt-in data and consent;
              this information will not be shared with any third parties, excluding aggregators and
              providers of the Text Message services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">5. Data Security</h2>
            <p>
              We implement and maintain reasonable security measures to protect your personal
              information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
              <li>Breach notification protocols in accordance with applicable laws</li>
              <li>Secure backup systems and disaster recovery procedures</li>
            </ul>
            <p className="mt-4">
              Despite these measures, no method of transmission over the Internet or electronic
              storage is 100% secure. We strive to use commercially acceptable means to protect your
              personal information but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              6. Cookies &amp; Tracking Technologies
            </h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Analyze site traffic and user behavior</li>
              <li>Remember your preferences</li>
              <li>Improve website functionality and user experience</li>
              <li>Measure the effectiveness of our services</li>
            </ul>
            <p className="mt-4">
              You may control cookies through your browser settings. Disabling cookies may limit
              your ability to use certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              7. Your Rights &amp; Choices
            </h2>
            <p>You have the right to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing emails by clicking &quot;unsubscribe&quot; in our emails</li>
              <li>Opt-out of SMS messages by replying &quot;STOP&quot;</li>
              <li>Request information on how we process your data</li>
              <li>Withdraw consent at any time for future communications</li>
              <li>
                Lodge a complaint with a supervisory authority if you believe your rights have been
                violated
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information in Section 10.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              their privacy practices and encourage you to review their policies. This privacy
              policy applies only to information collected by {BUSINESS_NAME}.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this policy periodically. The latest version will always be available on
              our website with the effective date. For significant changes, we will notify you by
              email or through a notice on our website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is handled,
              contact us at:
            </p>
            <ul className="mt-4 list-none space-y-2 pl-0">
              <li className="font-medium text-text-primary">{BUSINESS_NAME}</li>
              <li>
                Phone:{' '}
                <a href={`tel:${BUSINESS_PHONE_TEL}`} className="text-divider hover:underline">
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                Email:{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-divider hover:underline">
                  {BUSINESS_EMAIL}
                </a>
              </li>
              <li>
                Website:{' '}
                <a href={siteUrl} className="text-divider hover:underline">
                  {siteDisplay}
                </a>
              </li>
            </ul>
            <p className="mt-6">
              By using our website and services, you consent to this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
