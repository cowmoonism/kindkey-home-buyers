import Link from 'next/link';
import { APPROVED_TRANSACTION_DISCLOSURE } from '@/data/disclosures';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-divider bg-secondary">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-text-primary">
              {process.env.NEXT_PUBLIC_BRAND_NAME || 'KindKey Home Buyers'}
            </h3>
            <p className="mb-4 text-text-secondary">
              {process.env.NEXT_PUBLIC_BRAND_TAGLINE ||
                'Your Local Home Buyer in Kent, Federal Way, Auburn, Milton, Tacoma, Edgewood & Puyallup'}
            </p>
            <p className="mt-4 text-sm text-text-secondary">{APPROVED_TRANSACTION_DISCLOSURE}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/success"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-text-primary">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+12532604117"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  (253)260-4117
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kindkeyhomebuyers.com"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  info@kindkeyhomebuyers.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-text-primary">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-text-secondary transition-colors hover:text-divider"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-divider pt-8 text-center text-sm text-text-secondary">
          <p>&copy; {currentYear} KindKey Home Buyers LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
