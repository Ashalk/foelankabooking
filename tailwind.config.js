/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          950: '#07080B',
          900: '#0D0F14',
          850: '#12151D',
          800: '#181C26',
          750: '#202534',
          700: '#2A3042',
          600: '#3D455C',
          500: '#5A6585',
          400: '#8A95B2',
          300: '#B4BED5',
          200: '#D6DCEB',
          100: '#F0F3F9',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F4ECD1',
          200: '#E9D6A0',
          300: '#DFC06E',
          400: '#D4AF37',
          500: '#B89224',
          600: '#947217',
          700: '#735612',
          800: '#543E10',
          900: '#3D2D0C',
        },
        pearl: '#FBFBFD',
        champagne: '#F7E7CE',
        emeraldGold: '#10B981',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 35px rgba(212, 175, 55, 0.35)',
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
        'inner-gold': 'inset 0 1px 1px 0 rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.02) 100%)',
        'dark-card': 'linear-gradient(180deg, rgba(24, 28, 38, 0.85) 0%, rgba(13, 15, 20, 0.95) 100%)',
        'radial-gold': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
