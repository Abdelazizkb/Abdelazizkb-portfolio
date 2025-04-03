module.exports = {
  content: ["./src/**.html"],
  theme: {
    extend: {
      screens: {
        lg: "1350px",
      },
      maxWidth: {
        lg: "1320px",
      },
      colors: {
        primary: "#357EF5",
        "purple-primary": "#A855F7",
        secondary: "#121314",
        "secondary-light": "#5E6971",
        light: "#F8F8F8",
      },
      container: {
        center: true,
        xs: "410px",
        lg: "1320px",
      },
    },
  },
  plugins: [],
};
