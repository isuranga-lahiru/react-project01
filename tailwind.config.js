/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium color palette
        charcoal: {
          50: '#f7f6f5',
          100: '#e8e6e3',
          200: '#d1ccc6',
          300: '#b8b0a7',
          400: '#9e9189',
          500: '#6b6359', // Primary dark
          600: '#5a4f48',
          700: '#49453f',
          800: '#3a3630',
          900: '#2d2a26',
        },
        cream: {
          50: '#fffcf9',
          100: '#fef9f3',
          200: '#fdf2e8',
          300: '#fce8dc',
          400: '#fadcd0',
          500: '#f5cfc0', // Soft cream
          600: '#d6aea8',
          700: '#b78d90',
          800: '#986d78',
          900: '#7a4d60',
        },
        midnight: {
          50: '#f3f6fb',
          100: '#e6ecf7',
          200: '#cdd9ef',
          300: '#b4c6e7',
          400: '#9bb3df',
          500: '#6c8ad7', // Midnight blue
          600: '#5570c4',
          700: '#4457b1',
          800: '#333f8e',
          900: '#1f2a6b',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff7e0',
          200: '#ffebbc',
          300: '#ffe099',
          400: '#ffd576',
          500: '#f5c842', // Accent gold
          600: '#d4a826',
          700: '#b38d1f',
          800: '#927218',
          900: '#715811',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backdropBlur: {
        glass: '10px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 20px 50px rgba(0, 0, 0, 0.15)',
        soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 16px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
