module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1xl": "1.125rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "black-86": "rgba(0, 0, 0, 0.86);",
        "black-50": "rgba(0, 0, 0, 0.50);",
        blue: "#002638",
        red: "#B3001B",
        gray: "#DBE1E3",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0px)", opacity: 0.01 },
          "50%": { transform: "translateY(5px)", opacity: 1 },
          "100%": { transform: "translateY(10px)", opacity: 0.01 },
        },
        fade: {
          "0%": { opacity: 0.01 },
          "100%": { opacity: 1 },
        },
        "fade-up": {
          "0%": { transform: "translateY(5px)", opacity: 0.01 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        "fade-right": {
          "0%": { transform: "translateX(-20px)", opacity: 0.01 },
          "100%": { transform: "translateX(0px)", opacity: 1 },
        },
        width: {
          "0%": { opacity: 0.01, width: 0 },
          "100%": { opacity: 1, width: "100%" },
        },
      },
      animation: {
        scroll: "scroll 2s cubic-bezier(0.4, 0, 1, 1) infinite",
        fade: "fade 2s cubic-bezier(0.4, 0, 1, 1) forwards",
        "fade-sm": "fade 0.5s cubic-bezier(0.4, 0, 1, 1) forwards",
        width: "width 2s ease forwards",
        "fade-up": "fade-up 2s ease forwards",
        "fade-right": "fade-right 2s ease forwards",
      },
    },
    fontFamily: {
      sans: ["Raleway", "ui-sans-serif", "system-ui"],
      display: ["Raleway", "ui-sans-serif", "system-ui"],
      body: ["Raleway", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar-hide"),
  ],
};
