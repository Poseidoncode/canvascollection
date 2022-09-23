module.exports = {
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  
  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.vue',
  //   './src/**/*.jsx',
  // ],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
