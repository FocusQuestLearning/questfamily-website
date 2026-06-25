/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest:    '#1a3a1e',
        leaf:      '#2d5a32',
        meadow:    '#4a7a3a',
        cream:     '#faf5e8',
        parchment: '#f0e8d0',
        amber:     '#c87c2a',
        bark:      '#6b4226',
        moss:      '#5a7a4a',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        body:    ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
