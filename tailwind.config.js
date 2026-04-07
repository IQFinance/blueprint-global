/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        sans: ['var(--font-dm-sans)', "sans-serif"],
        drama: ['var(--font-prata)', "serif"],
        data: ['var(--font-ibm-plex-mono)', "monospace"],
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
