/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Monochrome Colors
        'primary': '#000000',      // Pure black - Headers and primary text
        'secondary': '#333333',    // Dark gray - Secondary text and icons
        'accent': '#666666',       // Medium gray - Borders and dividers
        'light': '#999999',        // Light gray - Subtle text and disabled states
        'lighter': '#CCCCCC',      // Lighter gray - Borders and backgrounds
        'white': '#FFFFFF',        // Pure white - Backgrounds and text
        
        // Background Variations
        'bg-dark': '#1A1A1A',     // Very dark gray - Dark mode background
        'bg-light': '#F5F5F5',    // Very light gray - Light mode background
        
        // Gradient Colors
        'gradient-dark': '#000000',  // Black gradient start
        'gradient-light': '#666666'  // Gray gradient end
      }
    },
  },
  plugins: [],
}