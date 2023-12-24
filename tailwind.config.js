/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#6CBEFF",
        main: "#F5FBFF",
      },
      fontFamily: {
        inika: ["Inika", "Arial", "sans-serif"],
        Baloo: ["Baloo Thambi", "sans-serif"],
        Inika: ["Inika", `serif`],
      },
      boxShadow: {
        custom: "10px 10px 20px 0px rgba(80, 141, 190, 0.10)",
      },
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero.png')",
        "hero-cat": "url('src/assets/image 2.png')",
      },
    },
  },
  plugins: [],
};
