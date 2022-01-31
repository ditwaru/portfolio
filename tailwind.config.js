module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        openSans: ['Open Sans'],
      },
      animation: {
        type: 'type 2s steps(20, end) forwards, blink .8s infinite',
        slam: 'slam 1s, rattle 0.2s',
      },
      keyframes: {
        type: {
          from: { width: 0 },
          to: { width: '100%' },
        },
        blink: {
          from: { 'border-color': 'transparent' },
          to: { 'border-color': 'orange' },
        },
      },
    },
  },
  plugins: [],
}
