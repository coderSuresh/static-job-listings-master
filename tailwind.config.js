/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./src/**/*.js", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-desktop': "url('/images/bg-header-desktop.svg')",
        'hero-pattern-mobile': "url('/images/bg-header-mobile.svg')",
      },
      colors: {
        'primary': 'var(--primary)',
        'shadow-color': 'var(--shadow-color)',
        'bg': 'var(--bg)',
        'light-cyan': 'var(--light-cyan)',
        'grayish-cyan': 'var(--grayish-cyan)',
        'dark-grayish-cyan': 'var(--dark-grayish-cyan)',
      },
    },
    plugins: [],
  }
}