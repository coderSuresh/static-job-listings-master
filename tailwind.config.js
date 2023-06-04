/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-desktop': "url('/src/images/bg-header-desktop.svg')",
        'hero-pattern-mobile': "url('/src/images/bg-header-mobile.svg')",
      },
      colors: {
        'primary': 'hsl(180, 29%, 50%)',
        'bg': 'hsl(180, 52%, 96%)',
        'light-cyan': 'hsl(180, 31%, 95%)',
        'grayish-cyan': 'hsl(180, 8%, 52%)',
        'dark-grayish-cyan': 'hsl(180, 14%, 20%)',
      },
    },
    plugins: [],
  }
}