/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./public/index.html",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			tcbregular: ["tcbregular"],
			tcbnormal: ["tcbnormal"],
			tcbbold: ["tcbbold"],
		},
		extend: {
			backgroundImage: {
				"people-group":
					"linear-gradient(to right bottom, rgb(20 63 133 / 37%), rgb(0 21 53)),url('/src/assets/images/people-group.png')",
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar")({ nocompatible: true }),
		require("flowbite/plugin"),
	],
};
