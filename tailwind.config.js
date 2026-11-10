/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAF8F5',
        obsidian: '#111315',
        vermilion: {
          DEFAULT: '#FF4F17',
          hover: '#E03E0B',
          light: '#FFF1EC',
        },
        amber: {
          gold: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        reader: ['"Newsreader"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'book': '24px 32px 56px -12px rgba(17, 19, 21, 0.38), 4px 8px 16px -4px rgba(17, 19, 21, 0.2)',
        'card': '0 10px 30px -10px rgba(17, 19, 21, 0.06)',
      }
    },
  },
  plugins: [],
}
