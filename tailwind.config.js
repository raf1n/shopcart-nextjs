/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#404040",
        gray: {
          "100": "#808080",
          "200": "rgba(128, 128, 128, 0.5)",
          "300": "rgba(129, 129, 129, 0.5)",
        },
        sandybrown: "#ffae5d",
        black: "#000",
        darkgray: "#a29781",
        dimgray: "#606060",
        red: "#ff3232",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
