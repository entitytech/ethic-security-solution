/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Lighter green
          300: '#86efac',  // Light green
          400: '#4ade80',  // Medium light green
          500: '#63CD69',  // Main color
          600: '#63CD69',  // Main color
          700: '#4ade80',  // Darker green
          800: '#16a34a',  // Dark green
          900: '#15803d',  // Darkest green
        },
        green: {
          50:  '#eff6ff',  // Very light blue
          100: '#dbeafe',  // Light blue
          200: '#bfdbfe',  // Lighter blue
          300: '#93c5fd',  // Light blue
          400: '#60a5fa',  // Medium light blue
          500: '#3b82f6',  // Main color
          600: '#3b82f6',  // Main color
          700: '#2563eb',  // Darker blue
          800: '#1d4ed8',  // Dark blue
          900: '#1e40af',  // Darkest blue
        },
      }
    },
  },
  plugins: [],
};
