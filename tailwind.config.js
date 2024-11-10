/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F7",
        secondary: "#86868B",
        tertiary: "#CCCDD7",
        quaternary: "#8C7CFF",
        "button-primary": "#F5F5F7",
        "button-secondary": "#BFBCDD",
        "g-primary": "#161D3A",
        "g-secondary": "#2B3973",
      },
      backgroundColor: {
        "button-primary": "#4D4397",
        "button-secondary": "#BFBCDD",
        primary: "#161D3A",
        secondary: "#86868B",
        tertiary: "#F2F2F814",
        quaternary: "#453C8852",
      },
      borderColor: {
        primary: "#4D4397",
        secondary: "#86868B",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #5BB6D6 0%, #CD428E 50%, #544C9A 100%)",
      },
    },
  },
  plugins: [],
};
