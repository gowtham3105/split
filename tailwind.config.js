/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'cc-gray': {
					300: '#36373b',
					400: '#28292b',
					500: '#1c1d1f',
					700: '#18191b',
				},
				'ocean-green': {
					50: '#effaf4',
					100: '#d9f2e3',
					200: '#b6e4cc',
					300: '#87cead',
					400: '#4dac83',
					500: '#32976e',
					600: '#237858',
					700: '#1c6048',
					800: '#184d3a',
					900: '#153f31',
					950: '#0b231c',
				},
			},
			fontFamily: {
				roboto: {
					light: ['Roboto-Light', 'sans-serif'],
					regular: ['Roboto-Regular', 'sans-serif'],
					medium: ['Roboto-Medium', 'sans-serif'],
					bold: ['Roboto-Bold', 'sans-serif'],
					black: ['Roboto-Black', 'sans-serif'],
				},

				'open-sans': ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
