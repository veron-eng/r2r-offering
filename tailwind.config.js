const { default: daisyui } = require('daisyui');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'superhuman': {
          purple: '#6B46C1',
          'purple-light': '#9F7AEA',
          blue: '#4299E1',
          'blue-dark': '#2B6CB0',
          'gradient-start': '#6B46C1',
          'gradient-end': '#4299E1',
        }
      },
      backgroundImage: {
        'superhuman-gradient': 'linear-gradient(135deg, var(--tw-gradient-start) 0%, var(--tw-gradient-end) 100%)',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula"],
  }
};
