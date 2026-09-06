/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        infra: {
          950: '#05070B',
          900: '#090D15',
          850: '#0E1422',
          800: '#141C2E',
          700: '#1E293B',
          600: '#334155',
          border: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(14, 20, 34, 0.75)',
        },
        gold: {
          400: '#F0CD6D',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#996F08',
        },
        telangana: {
          bronze: '#C59B27',
          amber: '#E5A93C',
          terracotta: '#A34728',
          stone: '#202634',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
