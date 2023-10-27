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
        primaryColor3: 'var(--primaryColor3)',
        primaryColor4: 'var(--primaryColor4)',
        primaryColor4Darker: 'var(--primaryColor4Darker)',
        normalFontColor: 'var(--normalFontColor)',
        shadowColor: 'var(--shadowColor)',
      }},
      boxShadow: {
        buttonShadow: 'var(--buttonShadow)',
        buttonShadowClick: 'var(--buttonShadowClick)',
      }
  },
  plugins: [],
}
