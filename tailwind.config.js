/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderColor: {
        "white-opacity-10": "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        "custom-light": "0 0 10px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "custom-image": "url('/src/assets/back.jpg')", // Adjust the path to your image
      },
      backdropBlur: {
        30: "30px",
      },
    },
  },
  plugins: [],
};
