import { APPROVED_TRANSACTION_DISCLOSURE, MORTGAGE_AND_LIEN_DISCLOSURE } from './disclosures';

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'Do I need to make repairs before selling?',
    answer: `No Repairs Needed: We buy homes and land as-is, in any condition. Save time and money by skipping repairs and renovations.`,
  },
  {
    question: 'Who pays closing costs?',
    answer: APPROVED_TRANSACTION_DISCLOSURE,
  },
  {
    question: 'What if I have a mortgage or liens on the property?',
    answer: MORTGAGE_AND_LIEN_DISCLOSURE,
  },
  {
    question: 'Can I still sell if I have a listing agreement with a real estate agent?',
    answer: `This depends on your specific listing agreement, so review that agreement and consult the appropriate professional if needed. KindKey acts as a principal buyer, not as the seller's real estate agent, and does not charge the seller an agent commission or a separate service or assignment fee.`,
  },
  {
    question: 'How quickly can you close?',
    answer: `We can close on your timeline. Typically, we can complete transactions in 7-14 days, but we understand that every situation is different. Whether you need to close ASAP or prefer a longer timeline, we'll work with you.`,
  },
  {
    question: 'Is there any obligation after I submit my information?',
    answer: `No obligation whatsoever. Submitting your information is completely free, and we'll provide a no-obligation cash offer. You're free to accept, decline, or take time to think it over - no pressure.`,
  },
  {
    question: 'What areas do you buy houses in?',
    answer: `We buy houses throughout Washington State. Our primary areas include Kent, Federal Way, and Auburn, but we purchase homes from homeowners across the entire state. Whether you're in Seattle, Tacoma, Spokane, or any other city in Washington, we're here to buy your house fast for cash.`,
  },
];
