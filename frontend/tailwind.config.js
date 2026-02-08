/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          inverse: 'var(--text-inverse)',
        },
        button: {
          orange: 'var(--color-orange)',
          orangeHover: 'var(--orange-hover)',
          orangeDisabled: 'var(--orange-disabled)',
          dark: 'var(--dark-button-bg)',
          darkHover: 'var(--dark-button-hover)',
        },
        input: {
          border: 'var(--input-border)',
          focus: 'var(--input-focus)',
        },
        card: {
          border: 'var(--card-border)',
        }
      },
    },
  },
  plugins: [],
};
