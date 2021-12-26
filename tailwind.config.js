module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scenes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 12s infinite",
        "xc-blob": "xc-blob 12s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(5%, -7%) scale(1.1)",
          },
          "66%": {
            transform: "translate(-2%, 4%) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "xc-blob": {
          "0%": {
            transform: "translate(-50%, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-32%, -10%) scale(1.1)",
          },
          "66%": {
            transform: "translate(-67%, 12%) scale(0.9)",
          },
          "100%": {
            transform: "translate(-50%, 0px) scale(1)",
          },
        }
      }
    },
  },
  plugins: [],
}
