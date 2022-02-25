const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [    
    "./index.html",    
    "./src/**/*.{vue,js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary
        "url-cyan": "#2acfcf",
        "url-primary-violet": "#3b3054",
        // ### Secondary
        "url-red": "#f46262",
        // ### Neutral
        "url-gray": "#bfbfbf",
        "url-gray-violet": "#9e9aa7",
        "url-dark-blue": "#35323e",
        "url-dark-violet": "#232127",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: { 
      center: true, 
      padding : "0.5rem"
    },
    screens: {
      lg: "1440px",
      md: "375px",
      ...defaultTheme.screens,
    },
    backgroundImage: {       
      'shorten-desktop-image': "url('/src/images/bg-shorten-desktop.svg')",        
      'shorten-mobile-image': "url('/src/images/bg-shorten-desktop.svg')",      
    }
  },
  plugins: [],
}
