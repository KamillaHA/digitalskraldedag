/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      colors: {
        beige: "#FFF9E8",
        gron: "#2B4836",
        lyserod: "#E3A1AD",
        orange: "#ED9045",
        brun: "#AE835F",
      },
      fontFamily: {
        moret: ["moret"],
        work: ["work-sans"]
      },
      
    },
  },
};
