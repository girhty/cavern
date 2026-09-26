/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        coal: '#0d0c0b',
        basalt: '#141312',
        bone: '#f1ece3',
        cream: '#faf7f1',
        sand: '#cbbda6',
        amber: '#e8a33d',
        ember: '#ff7a18',
        film: '#6ae6ff',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        script: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        mega: '0.42em',
      },
      maxWidth: {
        edge: '88rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.35)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        breathe: 'breathe 3.4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};