// Tailwind config -> https://v3.tailwindcss.com/docs/theme


import theme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const { SITE } = require("./src/alkaline.config");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		colors: {
			// optionally add more colors from tailwindcss/colors
			// https://tailwindcss.com/docs/customizing-colors#default-color-palette
			// e.g. red: colors.red, blue: colors.blue, etc.
			slate: colors.slate,
			white: colors.white,
			black: colors.black,
			transparent: "transparent",
			// makes the custom colors available in the theme object so we can use them in utility classes (e.g. focus:ring-theme-accent)
			theme: {
				primary: "var(--color-text)",
				secondary: "var(--color-background)",
				accent: "var(--color-accent)",
				"accent-alt": "var(--color-accent-alt)",
			},
		},
		backgroundColor: {
			slate: colors.slate,
			white: colors.white,
			black: colors.black,
			transparent: "transparent",
			theme: {
				primary: "var(--color-background)",
				secondary: "var(--color-text)",
				accent: "var(--color-accent)",
				"accent-alt": "var(--color-accent-alt",
			},
		},
		backgroundImage: {
			// bg-gradient-linear
			"gradient-linear": generateGradient({
				type: "linear",
				angle: 145,
				colors: ["var(--color-background)", "var(--color-gradient)"],
			}),
			// bg-gradient-radial
			"gradient-radial": generateGradient({
				type: "radial",
				shape: "ellipse",
				position: "bottom right",
				colors: [
					"var(--color-text)",
					"var(--color-accent-alt)",
					"var(--color-accent)",
					"var(--color-accent)",
					"var(--color-accent-alt)",
					"var(--color-text)",
				],
			}),
		},
		borderColor: {
			slate: colors.slate,
			white: colors.white,
			black: colors.black,
			transparent: "transparent",
			theme: {
				primary: "var(--color-text)",
				secondary: "var(--color-background)",
				accent: "var(--color-accent)",
				"accent-alt": "var(--color-accent-alt)",
			},
		},

		boxShadowColor: {
			theme: {
				primary: "var(--color-shadow)",
				secondary: "var(--color-text)",
			},
		},
		textColor: {
			...colors.slate,
			white: colors.white,
			black: colors.black,
			transparent: "transparent",
			theme: {
				primary: "var(--color-text)",
				secondary: "var(--color-background)",
				accent: "var(--color-accent)",
				"accent-alt": "var(--color-accent-alt)",
			},
		},
		textDecorationColor: {
			theme: {
				//
				primary: "var(--color-text)",
				secondary: "var(--color-background)",
				accent: "var(--color-accent)",
				"accent-alt": "var(--color-accent-alt)",
			},
		},
		fontFamily: {
			sans: [
				`"${SITE.fonts
					.find((o) => o.typeface === "sans")
					?.fontFamily.replace(/\+/g, " ")}"`,
				...defaultTheme.fontFamily.sans,
			],
			serif: [
				`"${SITE.fonts
					.find((o) => o.typeface === "serif")
					?.fontFamily.replace(/\+/g, " ")}"`,
				...defaultTheme.fontFamily.serif,
			],
			mono: [
				`"${SITE.fonts
					.find((o) => o.typeface === "mono")
					?.fontFamily.replace(/\+/g, " ")}"`,
				...defaultTheme.fontFamily.mono,
			],
		},
		typography: {
			DEFAULT: {
				css: {
					maxWidth: "85ch",
				},
			},
		},
		minHeight: {
			screen: "100vh",
		},
		extend: {
			borderRadius: {
				theme: "var(--border-radius)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

/**
 * Generate a CSS gradient string.
 *
 * @param {object} options
 * @param {string} options.type - The type of gradient. Either "linear" or "radial".
 * @param {string[]} options.colors - An array of color stops.
 * @param {string} [options.direction="right"] - The direction of the gradient.
 * @param {number} [options.angle=0] - The angle of the gradient.
 * @param {string} [options.shape="ellipse"] - The shape of the gradient.
 * @param {string} [options.position="center"] - The position of the gradient.
 * @returns {string} The generated gradient string.
 */

function generateGradient({
	type,
	colors,
	direction = "top",
	angle = 0,
	shape = "ellipse",
	position = "center",
}) {
	if (!Array.isArray(colors) || colors.length < 2)
		throw new Error("At least two colors must be provided");

	if (type === "radial")
		return `radial-gradient(${shape} at ${position}, ${colors.join(", ")})`;

	return `linear-gradient(${
		angle ? angle + "deg" : "to " + direction
	}, ${colors.join(", ")})`;
}
