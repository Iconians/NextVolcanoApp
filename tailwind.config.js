/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      colors: {
        volcano: {
          orange: '#FF6B35',
          'orange-light': '#FF8C42',
          'orange-dark': '#F7931E',
          red: '#C41E3A',
          'red-dark': '#8B1538',
          amber: '#FFB347',
          'amber-light': '#FFC966'
        },
        bg: {
          dark: '#1A1A1A',
          darker: '#0F0F0F',
          card: 'rgba(26, 26, 26, 0.85)'
        }
      },
      backgroundImage: {
        volcanoGif: "url('/vocanicEuruption1.gif')",
        stHelensWithtop: "url('/sthelens1-animation-eb3a7d-640.gif')",
        stHelensWithPlume: "url('/st-helens.webp')",
        lavaVolcano: "url('/lava-volcano-image.jpg')",
        activeVolcano: "url('/active-volcano-turrialba-in-costa-rica.jpg')",
        'volcano-gradient': 'linear-gradient(135deg, #FF6B35 0%, #C41E3A 100%)',
        'volcano-gradient-light': 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)',
        'volcano-gradient-dark': 'linear-gradient(135deg, #8B1538 0%, #C41E3A 100%)'
      },
      boxShadow: {
        volcano: '0 8px 32px rgba(255, 107, 53, 0.2)',
        'volcano-lg': '0 12px 48px rgba(255, 107, 53, 0.3)',
        'volcano-glow': '0 0 20px rgba(255, 107, 53, 0.4)'
      },
      animation: {
        'subtle-glow': 'subtleGlow 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out'
      },
      keyframes: {
        subtleGlow: {
          '0%, 100%': {
            boxShadow: '0 20px 60px rgba(255, 107, 53, 0.15)'
          },
          '50%': {
            boxShadow: '0 20px 60px rgba(255, 107, 53, 0.25)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
