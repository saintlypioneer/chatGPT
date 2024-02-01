/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signifier: ['Signifier', 'sans-serif'],
        soehne: ['Söhne', 'sans-serif'],
        'soehne-mono': ['Söhne Mono', 'monospace'],
        'soehne-circle': ['Söhne Circle', 'sans-serif'],
      },
      colors: {
        'light-primary': '',
        'light-secondary': '',
        'light-background': '',
        'light-text-primary': '#0f0f0f',
        'light-text-token': '#666666',
        'light-text-secondary': '#d9d9e3',
      }
    },
  },
  plugins: [],
}

