import tailwindcss from "@tailwindcss/vite";

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {}, 
    autoprefixer: {},
  },
}
