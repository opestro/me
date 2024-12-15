/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite',
        'spin-very-slow': 'spin-very-slow 20s linear infinite',
        'spin-very-slow-reverse': 'spin-very-slow-reverse 30s linear infinite',
        'float-slow': 'float 15s ease-in-out infinite',
        'float-debris': 'float-debris 8s ease-in-out infinite',
        'float-debris-delayed': 'float-debris-delayed 12s ease-in-out infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slower': 'spin 25s linear infinite',
        'gradient': 'gradient 8s linear infinite',
        'float-particle': 'float-particle 6s ease-in-out infinite',
        'float-particle-delayed': 'float-particle 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-debris': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, -10px)' },
        },
        'float-debris-delayed': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -15px)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        gradient: {
          '0%, 100%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(50%)' }
        },
        'float-particle': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, -10px)' }
        },
      },
    },
  },
  plugins: [],
}

