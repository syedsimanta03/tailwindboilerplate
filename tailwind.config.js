module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
