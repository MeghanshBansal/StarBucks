module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greenshade: "#d8e8e3",
        firstdivcolor: "#f2f0eb",
        joincolor: "#f1f8f6",
        pickup: "#d4e9e2",
      },
      minWidth: {
        19: "1.1875rem",
        35: "2.188rem",
      },
      minHeight: {
        35: "2.188rem",
      },
      letterSpacing: {
        new: "0.313rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
