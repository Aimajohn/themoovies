/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
  	extend: {
		colors: {
			primary: '#04021a', // Custom color for primary
			secondary: '#1E3A8A',
		},
		fontFamily: {
			"Urbanist": ['Urbanist', 'sans-serif'],
			"Poppins": ['Poppins', 'sans-serif'],
			"Inter": ['Inter', 'sans-serif']
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

