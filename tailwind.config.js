export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF5',
          100: '#FDF6E9',
          200: '#F7EAD3',
          300: '#EFDCBB',
        },
        gold: {
          400: '#DCB65A',
          500: '#C9982A',
          600: '#A87C1C',
          700: '#836014',
        },
        maroon: {
          500: '#8A1C28',
          600: '#6B0F1A',
          700: '#4A0A12',
          800: '#33060C',
        },
      },
      fontFamily: {
        script: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Marcellus', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        deva: ['Mukta', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 18px 40px -24px rgba(168, 124, 28, 0.55)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
