/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  layers: {
    'my-custom-styles': {
      // Define your custom styles
      '.inner-align-end-bg': {
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.61))',
        padding: '68px 16px 16px',
      },
      '.align-end': {
        alignContent: 'end',
        padding: '0',
      },
      '.inner-align-end': {
        background: 'rgba(0, 0, 0, 0)',
        padding: '68px 16px 16px',
      }
    }
  },
  plugins: [],
}
