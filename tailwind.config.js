/** @type {import('tailwindcss').Config} */
export default {
  content: [
   // "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
   extend: {},
   colors: {
       'custom-black': '#0000',
       'custom-blackish': '#1a1a04',
       'gray':'#1a2a23',
       'lemon': '#A8D600',
       'white': '#FFFFFF',
       'black': '#000000',
       'grey-700': '#333333',
       'grey-800': '#1f1f1f',     
       'grey-900': '#141414',
     }
 },
 plugins: [],
}

