/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster"],
        poppins: ["Poppins"],
        playfairDisplay: ['Playfair Display']

      },
    },
  },
  plugins: [],
};
