/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#101828',
        mist: '#F6F8FB',
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        accent: {
          400: '#2DD4BF',
          500: '#14B8A6',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(37, 99, 235, 0.20)',
        soft: '0 18px 60px rgba(15, 23, 42, 0.10)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 20% 20%, rgba(45, 212, 191, 0.16), transparent 30%), radial-gradient(circle at 80% 0%, rgba(37, 99, 235, 0.16), transparent 32%)',
      },
    },
  },
  plugins: [],
};
