/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#212435',
        'green': '#0BD88F',
        'green_gradient': '#00C2FF',
        'green_gradient_light': '#00F0FF',
        'green_dark': '#0bd8902e',
        'grey': '#A0A8C3',
        'grey_light': '#737B98',
        'grey_dark': '#2B2F44',
        'grey_opacity': '#2B2F44E5',
        'grey_grad_from': '#FFFFFF33',
        'grey_grad_to': '#FFFFFF00',
        'blue': '#4F08E680',
        'purple': '#FF497580'
      },
    },
    borderRadius: {
      'basic': '10px',
      'outer': '11px',
      'lg': '0.5rem',
      '2xl': '1rem',
      '3xl': '1.9rem',
      'full': '50%'
    }
  },
  plugins: [],
}