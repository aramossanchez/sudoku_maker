/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor1: 'var(--primaryColor1)',
        primaryColor2: 'var(--primaryColor2)',
        backgroundColor: 'var(--backgroundColor)',
        normalFontColor: 'var(--normalFontColor)',
        titleFontColor: 'var(--titleFontColor)',
        shadowColor: 'var(--shadowColor)',
        cellColor: 'var(--cellColor)',
        cellSelectedColor: 'var(--cellSelectedColor)',
      }},
      boxShadow: {
        buttonShadow: 'var(--buttonShadow)',
        buttonShadowClick: 'var(--buttonShadowClick)',
      }
  },
  plugins: [],
}
