import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F8F9FA',
        // Бирюзовая палитра (teal-blue) - окончательный выбор
        accent: '#119BCD', // бирюзовый - основной акцент
        'accent-blue': '#0EA5E9', // светло-синий - вторичные акценты
        divider: '#016BA9', // темно-синий - разделители
        'warm-amber': '#F59E0B',
        'success-green': '#10B981',
        text: {
          primary: '#1F2937',
          secondary: '#6B7280',
          light: '#9CA3AF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
