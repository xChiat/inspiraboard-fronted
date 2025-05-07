module.exports = {
    content: [
      "./index.html",
      "./src/modules/**/components/*.{js,ts,jsx,tsx}",
      "./src/modules/**/pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      },
      extend: {},
    },
    plugins: [],
  }