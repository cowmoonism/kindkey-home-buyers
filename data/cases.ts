export interface CaseStudy {
  id: string;
  city: string;
  address: string;
  condition: string;
  timeframe: string;
  result: string;
  videoUrl?: string; // Для локальных видео файлов (например, /video.mp4)
  youtubeUrl?: string; // Для YouTube ссылок (например, https://youtube.com/watch?v=... или просто ID)
  beforeImage?: string;
  afterImage?: string;
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    city: 'Kent',
    address: 'Kent, WA',
    condition: 'As-Is',
    timeframe: '10 days',
    result: 'Closed successfully',
    youtubeUrl: 'https://youtu.be/Gc4bmX_St9k',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description:
      'Homeowner needed to relocate quickly due to job transfer. Property was in good condition but needed minor updates. We provided a fair cash offer and closed within 10 days.',
  },
  {
    id: '2',
    city: 'Federal Way',
    address: 'Federal Way, WA',
    condition: 'Cosmetic Fixes Needed',
    timeframe: '14 days',
    result: 'Closed successfully',
    youtubeUrl: 'https://youtu.be/aiVZ8JRIb8k',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description:
      'Elderly homeowner downsizing after 30 years. Property needed fresh paint and minor repairs. We coordinated our purchase with the closing agent and provided a smooth closing process.',
  },
  {
    id: '3',
    city: 'Kent',
    address: 'Kent, WA',
    condition: 'Major Repairs Required',
    timeframe: '12 days',
    result: 'Closed successfully',
    youtubeUrl: 'https://youtu.be/zxQ5-8ZcMLY',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description:
      'Inherited property with significant repair needs. Executor wanted a quick, hassle-free sale. We purchased as-is and closed efficiently.',
  },
  {
    id: '4',
    city: 'Federal Way',
    address: 'Federal Way, WA',
    condition: 'As-Is',
    timeframe: '8 days',
    result: 'Closed successfully',
    youtubeUrl: 'https://youtu.be/xsl_IPFnfpU',
    beforeImage: '/placeholder-before.jpg',
    afterImage: '/placeholder-after.jpg',
    description:
      'Divorce situation requiring quick property sale. We provided a fair offer and closed faster than traditional methods, helping both parties move forward.',
  },
];
