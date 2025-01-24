/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Tokens semânticos
        primary: {
          DEFAULT: "#33CC66", // Cor principal (padrão)
          light: "#95D7B5",  // Versão clara
          dark: "#02542D",   // Versão escura
        },
        secondary: {
          DEFAULT: "#2783D7", // Cor secundária
          light: "#7BB6F2",   // Versão clara (opcional)
          dark: "#1B5A92",    // Versão escura (opcional)
        },
        danger: {
          DEFAULT: "#C00F0C", // Cor de alerta
          light: "#D28D8D",   // Versão clara
          dark: "#B00000",    // Versão escura
        },
        warning: {
          DEFAULT: "#FFC107", // Cor de aviso
          light: "#FFD54F",   // Versão clara
          dark: "#FFA000",    // Versão escura
        },
        neutral: {
          DEFAULT: "#828282", // Neutro padrão
          light: "#C4C4C4",   // Versão clara
          dark: "#2C2C2C",    // Versão escura
        },
        input: {
          bg: "#fff",
          border: "#e0e0e0",
          text: "#333333"
        },
        background: "#f4f4f4",
        black: "#1a1a1a",
        white: "#fafafa",
      },
    },
  },
  plugins: [],
};
