import { APPROVED_TRANSACTION_DISCLOSURE, MORTGAGE_AND_LIEN_DISCLOSURE } from './disclosures';

export type IntentType = 'sell-fast' | 'cash-offer' | 'as-is';

export interface IntentFAQ {
  question: string;
  answer: string;
}

export const intentFAQs: Record<IntentType, IntentFAQ[]> = {
  'sell-fast': [
    {
      question: 'How fast can you close on my house?',
      answer:
        "We can close in as little as 7 days, but we work with your timeline. Whether you need to close quickly or need more time to move out, we're flexible. Most transactions close within 7-14 days, but we can accommodate your schedule.",
    },
    {
      question: 'What if I need to sell my house urgently?',
      answer:
        "We specialize in fast closings for urgent situations. Whether you're facing foreclosure, need to relocate quickly, or have other time-sensitive circumstances, we can expedite the process and close in as little as 7 days.",
    },
    {
      question: 'Do I need to make repairs before selling?',
      answer:
        "No! We buy houses exactly as they are. Whether your house needs minor cosmetic fixes or major repairs, we'll make you a fair cash offer. You do not need to make repairs before the sale; KindKey handles repairs after purchase.",
    },
    {
      question: 'Can I pick my closing date?',
      answer:
        "Absolutely! We work with your timeline. Whether you need to close in 7 days or need 30+ days to move out, we're flexible. You choose the closing date that works best for you.",
    },
    {
      question: 'What happens if I need to move out quickly?',
      answer:
        "We understand that sometimes you need to move fast. We can close quickly and work with you on flexible move-out dates. We'll coordinate the closing and move-out timing with you and the closing agent.",
    },
    {
      question: 'Are there any fees or commissions?',
      answer: APPROVED_TRANSACTION_DISCLOSURE,
    },
    {
      question: 'How do you determine the cash offer?',
      answer:
        'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer. Our offers are fair and competitive.',
    },
    {
      question: 'What if I have a mortgage or owe money on the house?',
      answer: MORTGAGE_AND_LIEN_DISCLOSURE,
    },
    {
      question: 'Is the cash offer obligation-free?',
      answer:
        "Yes! Our cash offer is completely no-obligation. You can review the offer, take your time to decide, and there's no pressure. We want you to feel comfortable with the process.",
    },
    {
      question: 'What types of homes do you buy?',
      answer:
        "We buy all types of residential properties: single-family homes, condos, townhouses, multi-family properties, and even land. Condition doesn't matter - we buy houses that need repairs, have tenants, are vacant, or are in perfect condition.",
    },
  ],
  'cash-offer': [
    {
      question: 'How do you determine the cash offer?',
      answer:
        'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer. Our offers are fair and competitive.',
    },
    {
      question: 'Is the cash offer obligation-free?',
      answer:
        "Yes! Our cash offer is completely no-obligation. You can review the offer, take your time to decide, and there's no pressure. We want you to feel comfortable with the process.",
    },
    {
      question: 'How quickly will I receive my cash offer?',
      answer:
        "You'll receive a transparent cash offer within 24 hours of submitting your information. We work quickly to provide you with a fair offer so you can make an informed decision.",
    },
    {
      question: 'What makes your cash offer different from other buyers?',
      answer:
        "We're local principal buyers who understand the market. We provide a written, no-obligation offer, buy houses as-is, and work with your timeline. The purchase agreement clearly states responsibility for closing costs, which may vary by transaction.",
    },
    {
      question: 'Do I need to make repairs before getting a cash offer?',
      answer:
        "No! We buy houses exactly as they are. Whether your house needs minor cosmetic fixes or major repairs, we'll make you a fair cash offer. No need to spend time or money fixing anything.",
    },
    {
      question: 'Are there any fees or commissions?',
      answer: APPROVED_TRANSACTION_DISCLOSURE,
    },
    {
      question: 'What if I have a mortgage or owe money on the house?',
      answer: MORTGAGE_AND_LIEN_DISCLOSURE,
    },
    {
      question: 'Can I get multiple cash offers to compare?',
      answer:
        'Absolutely! We encourage you to get multiple offers and compare. Our cash offer is transparent and competitive. We want you to feel confident in your decision, so take your time to review and compare.',
    },
    {
      question: 'What types of homes do you buy?',
      answer:
        "We buy all types of residential properties: single-family homes, condos, townhouses, multi-family properties, and even land. Condition doesn't matter - we buy houses that need repairs, have tenants, are vacant, or are in perfect condition.",
    },
    {
      question: 'How long is the cash offer valid?',
      answer:
        "Our cash offers are typically valid for a reasonable period, giving you time to review and decide. We understand this is a big decision, so we don't pressure you with short deadlines. Contact us to discuss your specific situation.",
    },
  ],
  'as-is': [
    {
      question: 'Do I need to make repairs before selling?',
      answer:
        "No! We buy houses exactly as they are - in any condition. Whether your house needs minor cosmetic fixes, major repairs, or is in perfect condition, we'll make you a fair cash offer. No need to spend time or money fixing anything.",
    },
    {
      question: 'What condition does my house need to be in?',
      answer:
        'Your house can be in any condition! We buy houses that need repairs, have structural issues, need cosmetic updates, have water damage, fire damage, or are in perfect condition. We truly buy as-is - no repairs needed.',
    },
    {
      question: 'What if my house needs major repairs?',
      answer:
        "We buy houses that need major repairs! Whether it's foundation issues, roof problems, plumbing or electrical issues, or any other major repairs, we'll still make you a fair cash offer. You don't need to fix anything.",
    },
    {
      question: 'Do you buy houses with water damage or fire damage?',
      answer:
        "Yes! We buy houses with water damage, fire damage, and other types of damage. We understand that these situations can be stressful, and we're here to help. We'll make you a fair cash offer regardless of the damage.",
    },
    {
      question: 'What if my house is in foreclosure?',
      answer:
        "We can help! If your house is in foreclosure or facing foreclosure, we can work with you to provide a fast solution. We'll make you a cash offer and can close quickly to help you avoid foreclosure.",
    },
    {
      question: 'Do you buy houses that need cosmetic updates?',
      answer:
        "Absolutely! We buy houses that need cosmetic updates like new paint, flooring, kitchen or bathroom updates, or any other cosmetic improvements. You don't need to do any of these updates - we'll buy it as-is.",
    },
    {
      question: 'What if my house has structural issues?',
      answer:
        "Yes, we buy houses with structural issues. Whether it's foundation problems, structural damage, or other issues, we'll still make you a fair cash offer. We handle all the repairs after we purchase the property.",
    },
    {
      question: 'Are there any fees or commissions?',
      answer: APPROVED_TRANSACTION_DISCLOSURE,
    },
    {
      question: 'How do you determine the cash offer for a house that needs repairs?',
      answer:
        "We evaluate your property based on its location, condition, and current market value. We factor in the cost of repairs and provide a fair, transparent cash offer. After a quick walkthrough (virtual or in-person), we'll give you a no-obligation offer.",
    },
    {
      question: 'What types of homes do you buy as-is?',
      answer:
        'We buy all types of residential properties as-is: single-family homes, condos, townhouses, multi-family properties, and even land. No matter the condition - whether it needs repairs, has damage, or is in perfect condition - we buy it as-is.',
    },
  ],
};
