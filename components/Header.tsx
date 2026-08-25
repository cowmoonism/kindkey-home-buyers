'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isAdsMode } from '@/lib/adsMode';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/success', label: 'Success Stories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const [adsMode, setAdsMode] = useState(false);

  useEffect(() => {
    setAdsMode(isAdsMode());
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [mobileMenuOpen]);

  // Ads Mode: Slim header with logo + phone + CTA
  if (adsMode) {
    return (
      <header className="sticky top-0 z-50 border-b border-divider bg-primary/95 shadow-sm backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="KindKey Home Buyers - Go to home page"
            >
              <Image
                src="/logo-header.avif"
                alt="KindKey Home Buyers logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                priority
                fetchPriority="high"
                quality={70}
                sizes="40px"
              />
              <span className="hidden text-lg font-bold text-text-primary sm:inline">
                {process.env.NEXT_PUBLIC_BRAND_NAME || 'KindKey Home Buyers'}
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <a
                href="tel:+12532604117"
                className="hidden text-sm font-medium text-text-secondary transition-colors hover:text-divider sm:inline"
              >
                (253)260-4117
              </a>
              <a
                href="#form"
                className="rounded-lg bg-divider px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-divider/90"
              >
                Get Cash Offer
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  // Normal Mode: Full header
  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-primary/95 shadow-sm backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3"
            aria-label="KindKey Home Buyers - Go to home page"
          >
            <Image
              src="/logo-header.avif"
              alt="KindKey Home Buyers logo"
              width={64}
              height={64}
              className="h-16 w-auto object-contain"
              priority
              fetchPriority="high"
              quality={70}
              sizes="64px"
            />
            <span className="text-2xl font-bold text-text-primary">
              {process.env.NEXT_PUBLIC_BRAND_NAME || 'KindKey Home Buyers'}
            </span>
            <span className="sr-only">Go to home page</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-divider'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12532604117"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-divider"
            >
              (253)260-4117
            </a>
            <a
              href="mailto:info@kindkeyhomebuyers.com"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-divider"
            >
              info@kindkeyhomebuyers.com
            </a>
            <Link
              href="/contact"
              className="rounded-lg bg-divider px-4 py-2 font-medium text-white transition-colors hover:bg-divider/90"
            >
              Get My Cash Offer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-text-primary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          animate={{
            height: mobileMenuOpen ? menuHeight : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ overflow: 'hidden' }}
          className="md:hidden"
        >
          <div ref={menuRef} className="space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-divider'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12532604117"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-text-secondary transition-colors hover:text-divider"
            >
              (253)260-4117
            </a>
            <a
              href="mailto:info@kindkeyhomebuyers.com"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-text-secondary transition-colors hover:text-divider"
            >
              info@kindkeyhomebuyers.com
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg bg-divider px-4 py-2 text-center font-medium text-white transition-colors hover:bg-divider/90"
            >
              Get My Cash Offer
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}
