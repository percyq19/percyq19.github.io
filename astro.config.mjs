// @ts-check
import { SITE, COLLECTION_NAMES_LIST } from "./src/alkaline.config";
import robotsConfig from "./src/utils/robots-txt.config";

import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	markdown: {
		shikiConfig: SITE.shikiConfig,
	},
	integrations: [mdx(), tailwind(), sitemap(), robotsTxt(robotsConfig), icon()],
	//   content: {
	//     collections: COLLECTION_NAMES_LIST.map((collection) => ({ name: collection, type: 'content' })),
	// },
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "src/styles/animations.css";`,
				},
			},
		},
	},
});
