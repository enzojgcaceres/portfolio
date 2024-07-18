const { list } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-radial-tornasol': 'radial-gradient(circle, #667bea, #764ba2, #6b4db3, #8b5fbf, #a578c8, #c597d6)',
        'gradient-conic-tornasol': 'conic-gradient(from 0deg, #537eea, #764ba2, #6b4db3, #8b5fbf, #a578c8, #c597d6)',
      },
      colors: {
        dark: '#1a202c', // Define el color oscuro
        light: '#f7fafc', // Define el color claro
        primary: '#667eea', // Define el color primario
        purple: '#6b4db3', // Define el color púrpura
      },
      textColor: {
        dark: '#1a202c', // Define el color de texto oscuro
        light: '#f7fafc', // Define el color de texto claro
        primary: '#699aaa', // Define el color de texto primario
      },
      backgroundColor: {
        dark: '#1a202c', // Define el fondo oscuro
        light: '#f7fafc', // Define el fondo claro
        purple: '#6b4db3', // Define el fondo púrpura
      },
    },
  },
  plugins: [],
};
