/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      "pale-blue": "hsl(225, 100%, 94%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "active-bright-blue": "hsl(245, 75%, 65%)",
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      "white": "#FFFFFF",
    },
    fontFamily: {
      display: ["\'Red Hat Display\'", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        mobile: "url('../images/pattern-background-mobile.svg')",
        desktop: "url('../images/pattern-background-desktop.svg')",
      }
    },
  },
  plugins: [],
}
