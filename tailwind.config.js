/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        translate: {
          '0%': { transform: 'translateY(-100%)'},
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        translate: 'translate 1s ease-in-out',
    }
    }
  },
  plugins: [],
}