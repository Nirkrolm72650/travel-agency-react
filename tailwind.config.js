/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Crete': ["Crete Round, sans-serif"]
      },
      backgroundImage: ({
        'hero-section': "url('/src/images/main.jpg')",
      }),
    },
  },
  plugins: [],
}