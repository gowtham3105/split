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
