/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        dark: 'var(--dark)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, var(--primary), var(--accent) 90%)',
      },
      
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.2, 0.65, 0.3, 1) forwards',
        'parallax': 'parallax linear',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-50px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
