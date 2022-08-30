/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        edu: "0.4rem 0.4rem 0px #00CCFF",
        exp: "0.4rem 0.4rem 0px #00FFCC",
        pro: "0.4rem 0.4rem 0px #CC00FF",
        add: "0.4rem 0.4rem 0px #FFCC00",
      }
    },
  },
  plugins: [],
};
