/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16181B",
        bronze: "#9C7B52",
        porcelain: "#F6F2EA",
        graphite: "#2E3137",
        surface: "#F6F2EA",
        darkSurface: "#16181B",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        drama: ['"Prata"', "serif"],
        data: ['"IBM Plex Mono"', "monospace"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '2rem',
        '4xl': '3rem',
      }
    },
  },
  plugins: [],
}
