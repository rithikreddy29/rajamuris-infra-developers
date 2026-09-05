/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#07080A',
          900: '#0B0C0F',
          850: '#101217',
          800: '#161920',
          750: '#1C2029',
          700: '#242934',
        },
        brass: {
          DEFAULT: '#C5A880',
          50: '#FBF9F5',
          100: '#F4EFE7',
          200: '#E7DC sample',
          300: '#D8C5A8',
          400: '#C5A880',
          500: '#B08E60',
          600: '#947245',
          700: '#755734',
        },
        parchment: {
          50: '#FAF9F5',
          100: '#F4F2EB',
          200: '#E8E5DA',
          300: '#D5D1C3',
          400: '#AFA998',
          500: '#898473',
        },
        institutional: {
          gold: '#D4AF37',
          bronze: '#9E7D4B',
          saffron: '#D97724',
          slate: '#222831',
          forest: '#182B23',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-editorial': '0.25em',
        'monumental': '0.35em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(197, 168, 128, 0.1)',
        'luxury-hover': '0 30px 60px -20px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
