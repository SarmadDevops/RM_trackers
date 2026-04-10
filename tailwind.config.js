/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#04060F',
          900: '#0A0F1E',
          800: '#0D1530',
          700: '#111D3E',
          600: '#162252',
        },
        brand: {
          blue: '#1A6DFF',
          glow: '#3D8BFF',
          light: '#7FB3FF',
        },
        chrome: {
          DEFAULT: '#C8D4E8',
          light: '#E8EEF8',
          dark: '#8A9AB8',
        },
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(26,109,255,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(26,109,255,0.05) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26,109,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(26,109,255,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
