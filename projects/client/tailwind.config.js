/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		colors: {
			green: {
				100: "#E8F2EC",
				200: "#53B97C",
				300: "#4CAD73",
				400: "#2E9D5B",
				500: "#0EB177",
			},
			gray: {
				100: "#F2F2F2",
				200: "#BDBDBD",
				300: "#828282",
				400: "#4F4F4F",
				500: "#333333",
			},
			red: "#EB5757",
			blue: "#2D9CDB",
			black: "#000000",
			white: "#ffffff",
			yellow: "#FFE082",
		},
		fontFamily: {
			inter: ["Inter, sans-serif"],
		},
		extend: {},
	},
	plugins: [],
	darkMode: "class",
};
