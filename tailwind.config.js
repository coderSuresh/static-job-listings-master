/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-desktop': "url('/src/images/bg-header-desktop.svg')",
        'hero-pattern-mobile': "url('/src/images/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}

