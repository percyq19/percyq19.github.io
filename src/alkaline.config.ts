import { Platforms } from "./Types/types";

import type { Site, Author, Socials, NavEntry, Blog } from "./Types/types";

/**
 * @description This file contains the configuration for the Alkaline theme.
 * - There are quite a few settings, but they allow for a vast amount of automatization across the theme
 * @exports SITE - The site configuration object
 * @exports NAVIGATION - The navigation configuration object
 * @exports BLOG - The blog configuration object
 */

//  SITE socials - used for the site footer
// See: ./Types/types.ts for more info on author socials
export const socials: Socials[] = [
	{
		platform: "facebook",
		url: "https://facebook.com/tuusuario",
	},
	{
		platform: "twitter",
		url: "https://twitter.com/tuusuario",
	},
	{
		platform: "github",
		url: "https://github.com/tuusuario",
	},
	{
		platform: "linkedin",
		url: "https://linkedin.com/in/tuusuario",
	},
	{
		platform: "rss",
		url: "/feed.xml",
	}
];

// use in development to easily see all author socials at once, not useful in production, I suggest commenting this out in production
export const allSocials: Socials[] = Platforms.map((platform) => ({
	platform,
	url: `https://${platform}.com`,
	userName: `test_user_${platform}`,
}));


export const AUTHORS: Author[] = [
	{
		id: 1,
		name: "Percy Quispe",
		socials: socials,
		email: 'percyquispe@email.com'
	},
];

export const SITE: Site = {
	title: "Percy Quispe",
	showTitleBackground: true,
	faviconSrc: "/favicon.png", // in public directory
	url: "https://percyq19.github.io",
	ogImage: "/og-image.webp", // in public directory
	author: AUTHORS[0].name, // Made with ❤️ by Percy Quispe
	description: "Blog personal de Percy Quispe",
	keywords: ["astro", "blog", "percy quispe"],
	disableIndexing: false, // true for no indexing
	socials: socials,
	locale: "es_ES",
	postsPerPage: 5,
	shikiConfig: {
		// ctrl+space for theme suggestions
		theme: "night-owl",
	},
	fonts: [
		{
			typeface: "serif",
			fontFamily: "SUSE",
			fontWeights: ["100..800"],
		},
		{
			typeface: "sans",
			fontFamily: "Roboto",
			fontWeights: ["100..900"],
			includeItalic: true,
		},
		{
			typeface: "mono",
			fontFamily: "Fira Code",
			fontWeights: [400, 500, 700],
		},
	],
};

// TODO: "slug" is the more appropriate term  here but would require more changes throughout the theme

export const NAVIGATION: NavEntry[] = [
	{
		href: "/",
		text: "Inicio",
	},
	{
		href: "/elements",
		text: "Economia",
	},
	{
		href: "/features",
		text: "Investigacion",
	},
	{
		href: "/blog",
		text: "Blog",
	},
	{
		href: "/tags",
		text: "Tecnología",
	},
	{
		href: "/faq",
		text: "Inteligencia Artificial,-",
	},
	{
		href: "/404",
		text: "404",
	},
];

export const BLOG: Blog = {
	title: "My Blog",
	author: AUTHORS[0].name,
	description: SITE.description || "",
	keywords: SITE.keywords,
	postsPerPage: SITE.postsPerPage,
};

// export the name(s) of the collections as a list - must match the name of the collection in the ./Types/types.ts file
export const COLLECTION_NAMES_LIST = ["blog"] as const;
