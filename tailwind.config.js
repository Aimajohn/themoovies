/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
  	extend: {
  		colors: {
  			primary: '#12151a',
  			secondary: '#eab308',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			'Urbanist': [
  				'Urbanist',
  				'sans-serif'
  			],
  			'Poppins': [
  				'Poppins',
  				'sans-serif'
  			],
  			'Inter': [
  				'Inter',
  				'sans-serif'
  			],
  			'Montserrat': [
  				'Montserrat',
  				'Urbanist',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

