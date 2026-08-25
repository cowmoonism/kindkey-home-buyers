export interface CityInfo {
  name: string;
  slug: string;
  description: string;
  intro: string;
  faq: Array<{ question: string; answer: string }>;
}

export const cities: CityInfo[] = [
  {
    name: 'Kent',
    slug: 'kent',
    description:
      'Selling your house in Kent, WA? Get a fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Kent is a vibrant community in South King County, known for its diverse neighborhoods and strong real estate market. Whether you're dealing with an inherited property, facing foreclosure, or simply need to sell quickly, we understand the local market dynamics and can provide a transparent cash offer for your Kent home.`,
    faq: [
      {
        question: 'Do you buy houses in Kent?',
        answer:
          'Yes, we specialize in buying houses in Kent and throughout South King County. We understand the local market and can provide a fair cash offer for your property, regardless of its condition.',
      },
      {
        question: 'How quickly can you close in Kent?',
        answer:
          'We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. No pressure, just flexibility.',
      },
      {
        question: 'What areas of Kent do you serve?',
        answer:
          'We serve all areas of Kent, including East Hill, West Hill, Kent Station, and surrounding neighborhoods. No Kent property is too far.',
      },
    ],
  },
  {
    name: 'Federal Way',
    slug: 'federal-way',
    description:
      'Selling your house in Federal Way, WA? Get a fast, fair cash offer from your local home buyer. No repairs needed.',
    intro: `Federal Way offers a unique blend of urban convenience and natural beauty, with strong neighborhoods and growing property values. If you need to sell your Federal Way home quickly—whether due to relocation, financial needs, or property condition—we're here to help with a straightforward cash offer process.`,
    faq: [
      {
        question: 'Do you buy houses in Federal Way?',
        answer:
          'Absolutely. Federal Way is one of our primary areas where we buy houses. We regularly purchase properties throughout the city and can provide competitive cash offers.',
      },
      {
        question: 'What types of properties do you buy in Federal Way?',
        answer: `We buy all types of residential properties in Federal Way: single-family homes, condos, townhouses, and more. Condition doesn't matter - we buy as-is.`,
      },
      {
        question: 'How do you determine the offer for my Federal Way home?',
        answer:
          'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer.',
      },
    ],
  },
  {
    name: 'Auburn',
    slug: 'auburn',
    description:
      'Selling your house in Auburn, WA? Get a fast, fair cash offer from your local home buyer. No repairs needed.',
    intro: `Auburn is a thriving community in South King County, known for its family-friendly neighborhoods and convenient location. As a family business based right here in Auburn, we understand the local market and can help you sell your property quickly and hassle-free. Whether you're facing a time-sensitive situation or simply want to avoid the traditional selling process, we're here to provide a transparent cash offer.`,
    faq: [
      {
        question: 'Do you buy houses in Auburn?',
        answer:
          'Yes! Auburn is our home base, and we specialize in buying houses throughout the city. We understand the local Auburn market and can provide fair cash offers for properties in any condition.',
      },
      {
        question: 'What neighborhoods in Auburn do you serve?',
        answer:
          'We serve all areas of Auburn, including Lakeland Hills, Lea Hill, and surrounding neighborhoods. No Auburn property is too far for us.',
      },
      {
        question: 'How quickly can you close in Auburn?',
        answer:
          "We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. Since we're based in Auburn, we can often move even faster for local properties.",
      },
    ],
  },
  {
    name: 'Milton',
    slug: 'milton',
    description:
      'Selling your house in Milton, WA? Get a fast, fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Milton is a charming community in Pierce County, offering a peaceful residential atmosphere with easy access to major highways and urban centers. Whether you're dealing with an inherited property, facing foreclosure, or need to relocate quickly, we understand the Milton market and can provide a transparent cash offer for your home.`,
    faq: [
      {
        question: 'Do you buy houses in Milton?',
        answer:
          'Yes, we actively buy houses in Milton and throughout Pierce County. We understand the local market dynamics and can provide fair cash offers for properties in any condition.',
      },
      {
        question: 'What types of properties do you buy in Milton?',
        answer:
          "We buy all types of residential properties in Milton: single-family homes, condos, townhouses, and land. Condition doesn't matter - we buy as-is.",
      },
      {
        question: 'How quickly can you close in Milton?',
        answer:
          'We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. No pressure, just flexibility.',
      },
    ],
  },
  {
    name: 'Tacoma',
    slug: 'tacoma',
    description:
      'Selling your house in Tacoma, WA? Get a fast, fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Tacoma is a vibrant city in Pierce County, known for its diverse neighborhoods, waterfront properties, and strong real estate market. Whether you're dealing with an inherited property, facing foreclosure, going through a divorce, or simply need to relocate quickly, we understand the Tacoma market and can provide a transparent cash offer for your home.`,
    faq: [
      {
        question: 'Do you buy houses in Tacoma?',
        answer:
          'Absolutely. Tacoma is one of our primary service areas. We regularly purchase properties throughout the city and can provide competitive cash offers for homes in any condition.',
      },
      {
        question: 'What neighborhoods in Tacoma do you serve?',
        answer:
          'We serve all areas of Tacoma, including North End, South Tacoma, Eastside, Hilltop, and surrounding neighborhoods. No Tacoma property is too far.',
      },
      {
        question: 'How do you determine the offer for my Tacoma home?',
        answer:
          'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer.',
      },
    ],
  },
  {
    name: 'Edgewood',
    slug: 'edgewood',
    description:
      'Selling your house in Edgewood, WA? Get a fast, fair cash offer from your local home buyer. No repairs needed.',
    intro: `Edgewood is a growing community in Pierce County, known for its family-friendly neighborhoods and convenient location between Tacoma and Puyallup. Whether you need to sell quickly due to relocation, financial needs, or property condition, we're here to help with a straightforward cash offer process.`,
    faq: [
      {
        question: 'Do you buy houses in Edgewood?',
        answer:
          'Yes, we actively buy houses in Edgewood and throughout Pierce County. We understand the local market and can provide fair cash offers for properties in any condition.',
      },
      {
        question: 'What types of properties do you buy in Edgewood?',
        answer:
          "We buy all types of residential properties in Edgewood: single-family homes, condos, townhouses, and more. Condition doesn't matter - we buy as-is.",
      },
      {
        question: 'How quickly can you close in Edgewood?',
        answer:
          'We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. No pressure, just flexibility.',
      },
    ],
  },
  {
    name: 'Puyallup',
    slug: 'puyallup',
    description:
      'Selling your house in Puyallup, WA? Get a fast, fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Puyallup is a thriving community in Pierce County, known for its strong neighborhoods, excellent schools, and growing property values. Whether you're dealing with an inherited property, facing foreclosure, or need to relocate quickly, we understand the Puyallup market and can provide a transparent cash offer for your home.`,
    faq: [
      {
        question: 'Do you buy houses in Puyallup?',
        answer:
          'Yes, we actively buy houses in Puyallup and throughout Pierce County. We understand the local market dynamics and can provide fair cash offers for properties in any condition.',
      },
      {
        question: 'What neighborhoods in Puyallup do you serve?',
        answer:
          'We serve all areas of Puyallup, including downtown, South Hill, and surrounding neighborhoods. No Puyallup property is too far.',
      },
      {
        question: 'How do you determine the offer for my Puyallup home?',
        answer:
          'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer.',
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityInfo | undefined {
  return cities.find((city) => city.slug === slug);
}
