/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ This line is the fix
  theme: {
    extend: {},
  },
  plugins: [],
};
