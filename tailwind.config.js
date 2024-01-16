/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        internationalKleinBlue: '#002FA7'
      },
      aspectRatio: {
        'andyAspect' : '100 / 2.5',
      }
    },
    // 

  },
  plugins: [],
  // darkMode: 'class',
}

