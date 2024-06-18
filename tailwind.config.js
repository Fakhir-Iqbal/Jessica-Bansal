/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ["var(--font-cardo)"],
        nunito: ["var(--font-Nunito)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: { green: "#424242" },
      backgroundColor: {
        green: "#424242",
      },
    },
  },
  plugins: [],
};
