/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        NavbarBackground: "#0E1C50",
        bgButtonNavbar: "#D3B472",
        bgButtonHeader: "#BDA97F",
        bgHeader: "#E1E6F880",
        oneTextHeader: "#2E344A",
        twoTextHeader: "#656262",
        textInput: "#656262",
        red: "#ED5A46",
        bgPop: "#E1E6F8",
        textFilter: "#706E6E",
        bgButtonPagination: "#EDC165EB",
        bgButtonPaginationActive: "#BDA97F",
        bgOverlay: "#13121233",
      },
    },
  },
  plugins: [],
};
