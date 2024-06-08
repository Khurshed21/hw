

/** @type {import('tailwindcss').Config} */
export default{

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'ms': {'max': '470px'},
      // => @media (max-width: 470px) { ... }
      'mn': {'max': '320px'},
      // => @media (max-width: 320px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

