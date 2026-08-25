import type { Metadata } from 'next';
import { APPROVED_TRANSACTION_DISCLOSURE, BUSINESS_MODEL_DISCLOSURE } from '@/data/disclosures';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service and SMS messaging terms for KindKey Home Buyers LLC',
  robots: {
    index: false,
    follow: false,
  },
};

const BUSINESS_NAME = 'KindKey Home Buyers LLC';
const BUSINESS_EMAIL = 'info@kindkeyhomebuyers.com';
const BUSINESS_PHONE_DISPLAY = '(253) 260-4117';
const BUSINESS_PHONE_TEL = '+12532604117';

export default function TermsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kindkeyhomebuyers.com';
  const year = new Date().getFullYear();
  const privacyUrl = `${siteUrl.replace(/\/$/, '')}/privacy`;

  return (
    <section className="min-h-screen bg-primary py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-text-primary">{BUSINESS_NAME}</h1>
        <p className="mb-8 text-text-secondary">Effective Date: January 1st, {year}</p>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary">
          <section>
            <h2 className="mb-4 mt-0 text-2xl font-semibold text-text-primary">
              Real Estate Transaction Disclosure
            </h2>
            <p>{APPROVED_TRANSACTION_DISCLOSURE}</p>
            <p className="mt-4">{BUSINESS_MODEL_DISCLOSURE.introduction}</p>
            <p className="mt-4">Depending on the property and transaction, KindKey may:</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5">
              <li>{BUSINESS_MODEL_DISCLOSURE.purchase}</li>
              <li>{BUSINESS_MODEL_DISCLOSURE.assignment}</li>
            </ol>
            <p className="mt-4">{BUSINESS_MODEL_DISCLOSURE.compensation}</p>
          </section>

          <section>
            <h2 className="mb-4 mt-0 text-2xl font-semibold text-text-primary">
              SMS Messaging Terms &amp; Compliance
            </h2>
            <ol className="list-decimal space-y-4 pl-5">
              <li>
                <strong className="text-text-primary">Program Description:</strong> This messaging
                program sends appointment confirmation and reminder messages to customers who have
                booked an appointment with {BUSINESS_NAME} through our website at{' '}
                <a href={siteUrl} className="text-divider hover:underline">
                  {siteUrl.replace(/^https?:\/\//, '')}
                </a>
                , or via our scheduling forms, and have explicitly opted in to receive SMS
                notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS
                consent. Messages include scheduling confirmations, appointment reminders,
                rescheduling updates, and customer support communications.
              </li>
              <li>
                <strong className="text-text-primary">Cancellation Instructions:</strong> You can
                cancel the SMS service at any time. Simply text &quot;STOP&quot; to the same number
                that sent you messages. Upon sending &quot;STOP,&quot; we will confirm your
                unsubscribe status via SMS. Following this confirmation, you will no longer receive
                SMS messages from us. To rejoin, sign up as you did initially, and we will resume
                sending SMS messages to you.
              </li>
              <li>
                <strong className="text-text-primary">Support Information:</strong> If you
                experience issues with the messaging program, reply with the keyword
                &quot;HELP&quot; for more assistance, or reach out directly to{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-divider hover:underline">
                  {BUSINESS_EMAIL}
                </a>{' '}
                or call{' '}
                <a href={`tel:${BUSINESS_PHONE_TEL}`} className="text-divider hover:underline">
                  {BUSINESS_PHONE_DISPLAY}
                </a>{' '}
                during business hours.
              </li>
              <li>
                <strong className="text-text-primary">Carrier Liability:</strong> Carriers are not
                liable for delayed or undelivered messages.
              </li>
              <li>
                <strong className="text-text-primary">Message &amp; Data Rates:</strong> Message and
                data rates may apply for messages sent to you from us and to us from you. Message
                frequency varies based on your service usage and appointment schedule. For questions
                about your text plan or data plan, contact your wireless provider.
              </li>
              <li>
                <strong className="text-text-primary">Supported Carriers:</strong> Our SMS program
                works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon,
                Sprint, and most regional carriers.
              </li>
              <li>
                <strong className="text-text-primary">Age Restriction:</strong> You must be 18 years
                or older to participate in our SMS program.
              </li>
              <li>
                <strong className="text-text-primary">Privacy Policy:</strong> For privacy-related
                inquiries, please refer to our Privacy Policy at{' '}
                <a href={privacyUrl} className="text-divider hover:underline">
                  {privacyUrl}
                </a>
                . We comply with all applicable laws and regulations, including the Telephone
                Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS
                communications.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">General Terms</h2>
            <p>
              This website (the &quot;Site&quot;) is owned and operated by {BUSINESS_NAME}{' '}
              (&quot;COMPANY,&quot; &quot;we&quot; or &quot;us&quot;). By using the Site, you agree
              to be bound by these Terms of Service and to use the Site in accordance with these
              Terms of Service, our Privacy Policy, and any additional terms and conditions that may
              apply to specific sections of the Site or to products and services available through
              the Site or from {BUSINESS_NAME}.
            </p>
            <p className="mt-4">
              Accessing the Site, in any manner, whether automated or otherwise, constitutes use of
              the Site and your agreement to be bound by these Terms of Service.
            </p>
            <p className="mt-4">
              We reserve the right to change these Terms of Service or to impose new conditions on
              the use of the Site from time to time, in which case we will post the revised Terms of
              Service on this website. By continuing to use the Site after we post any such changes,
              you accept the Terms of Service, as modified.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              Intellectual Property Rights
            </h2>
            <h3 className="mb-3 mt-6 text-xl font-semibold text-text-primary">
              Our Limited License to You
            </h3>
            <p>
              This Site and all the materials available on the Site are the property of{' '}
              {BUSINESS_NAME} and/or our affiliates or licensors and are protected by copyright,
              trademark, and other intellectual property laws. The Site is provided solely for your
              personal non-commercial use.
            </p>
            <p className="mt-4">
              You may not use the Site or the materials available on the Site in a manner that
              constitutes an infringement of our rights or that has not been authorized by us.
            </p>
            <p className="mt-4">
              Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload,
              post, transmit, translate, sell, create derivative works, exploit, or distribute in
              any manner or medium any material from the Site. However, you may download and/or
              print one copy of individual pages for your personal, non-commercial use, provided
              that you keep intact all copyright and other proprietary notices.
            </p>
            <h3 className="mb-3 mt-6 text-xl font-semibold text-text-primary">
              Your License to Us
            </h3>
            <p>
              By posting or submitting any material (including comments, blog entries, social media
              posts, photos, and videos) to us via the Site, internet groups, or other digital
              venues, you represent that you own the material or have obtained the necessary
              permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive,
              worldwide license to use, modify, transmit, sell, exploit, create derivative works
              from, distribute, and publicly perform or display such material.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">Disclaimers</h2>
            <p>
              Throughout the Site, we may provide links and pointers to Internet sites maintained by
              third parties. Our linking to such third-party sites does not imply an endorsement or
              sponsorship of such sites or the information, products, or services offered on or
              through the sites.
            </p>
            <p className="mt-4">
              The information, products, and services offered on or through the Site are provided
              &quot;as is&quot; and without warranties of any kind, either express or implied. To
              the fullest extent permissible pursuant to applicable law, we disclaim all warranties,
              including implied warranties of merchantability and fitness for a particular purpose.
            </p>
            <p className="mt-4">
              You agree at all times to indemnify and hold harmless {BUSINESS_NAME}, its affiliates,
              and their respective officers, directors, agents, and employees from any claims,
              causes of action, damages, liabilities, costs, and expenses arising out of or related
              to your breach of any obligation, warranty, or representation under these Terms of
              Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">Online Commerce</h2>
            <p>
              Certain sections of the Site may allow you to purchase products and services from
              third-party vendors. We are not responsible for the quality, accuracy, timeliness,
              reliability, or any other aspect of these products and services. If you make a
              purchase from a third party linked through the Site, the information obtained during
              your visit, including payment information, may be collected by both the merchant and
              us.
            </p>
            <p className="mt-4">
              Your participation in any dealings with third-party vendors is solely between you and
              the third party. {BUSINESS_NAME} shall not be responsible for any loss or damage
              incurred as a result of such dealings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              Registration &amp; Passwords
            </h2>
            <p>
              To access certain features of the Site, you may be required to register and create an
              account. You agree to provide accurate, current, and complete information during the
              registration process. You are responsible for maintaining the confidentiality of your
              login credentials and for all activities conducted under your account.
            </p>
            <p className="mt-4">
              If you suspect unauthorized use of your account, notify us immediately at{' '}
              <a href={`mailto:${BUSINESS_EMAIL}`} className="text-divider hover:underline">
                {BUSINESS_EMAIL}
              </a>
              . We are not liable for any loss or damage arising from your failure to comply with
              this obligation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Site, without notice,
              if we determine that you have violated these Terms of Service or engaged in conduct
              that we deem inappropriate or unlawful. Upon termination, you must cease all use of
              the Site and any content obtained from it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the State of Washington. Any dispute arising under these Terms shall be resolved
              exclusively through binding arbitration in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 mt-8 text-2xl font-semibold text-text-primary">
              Changes to Terms of Service
            </h2>
            <p>
              We may update these Terms of Service from time to time. The latest version will always
              be available on our website with the effective date.
            </p>
            <p className="mt-4">
              For any questions regarding these Terms of Service, please contact us at:
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
                  {siteUrl.replace(/^https?:\/\//, '')}
                </a>
              </li>
            </ul>
            <p className="mt-6">
              By using our website and services, you consent to these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
