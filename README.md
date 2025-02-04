# Alkaline 🧪

A neutral base for your next creation - Alkaline is a modern Astro theme focused on developer experience and clean design.

**🛑 Alkaline assumes you have some familiarity with Astro and Tailwind CSS. If you're new to Astro, I recommend checking out the [Astro starter documentation](https://docs.astro.build/en/basics/astro-pages/). Astro also has a really great [general reference guide](https://docs.astro.build/en/basics/astro-pages/).**

## What is this?

Alkaline is an Astro-based theme that provides:

- 🎨 14 built-in color themes with dark/light mode support
- 📝 Blog and documentation setup out of the box
- 🔧 Minimal dependencies
- 🚀 SEO-friendly with Open Graph support
- ⚡️ Near Zero-JS by default (but JS-framework friendly)
- 📦 MDX support with syntax highlighting
- 🎯 TypeScript & Tailwind included
- 🍒 Statically generated with Astro, with a focus on developer experience and clean design
- 🥇 Fully free, open source and MIT licensed

## Getting Started

### Clone the repository

```bash
git clone https://github.com/TruJared/alkaline
cd alkaline-astro-theme
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## Project Structure

```
alkaline/
├── src/
│   ├── assets/        # Images and static assets
│   ├── components/    # UI components
│   ├── data/          # Content - E.G. Blog posts
│   ├── layouts/       # Page layouts and templates
│   ├── pages/         # Astro pages and routes (file-based routing)
│   ├── styles/        # Theme files and global styles
│   ├── utils/         # Utility functions - not really used outside of the build process
│   ├── alkaline.config.ts/   # START HERE - the main config files
│   └── content.config.ts/    # Schema for the content collections
├── public/            # Static assets
├── astro.config.mjs   # Astro configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## Configuration

Alkaline is designed to be easily configurable. The main configuration files are:

```typescript
src/alkaline.config.ts    // Site-wide settings
src/content.config.ts     // Content collection schemas
src/styles/themes.css     // Themes colors and options
src/styles/global.css     // Global styles
```

## Available Scripts

```bash
npm run...
    "dev": "npm run build:themes && astro dev",
    "start": "npm run build:themes && astro dev",
    "build": "npm run astro check && astro build",
    "check": "npm run build:themes && astro check",
    "preview": "npm run build:themes && astro preview",
    "astro": "astro",
    "build:themes": "node ./src/utils/buildThemes.mjs",
    "tech:support": "rm node_modules .astro .dist -rfv && npm i && npm run build:themes && astro dev"
```

**👋 - Note that all scripts *except* `build` will check for theme changes and rebuild as necessary. The `build:themes` script causes issues on on some platforms and/or hosting providers.**

## Customizing Themes

Alkaline comes with 14 built-in themes. You can:

1. Switch themes using the theme picker in the top navigation.
2. Create new themes by adding them to `src/styles/themes/`.
3. Modify existing themes in `src/styles/themes/`.

Themes are defined in CSS custom properties, and very easy to modify or create your own.  Here's an example of the "Old Couch" theme:

```css
.theme-old-couch {
 --color-background: #1a110d;
 --color-gradient: #3d2a20;
 --color-text: #e6b785;
 --color-accent: #ff7f00;
 --color-accent-alt: #a85400;
 --color-shadow: hsla(0, 0%, 0%, 0.6);
 /* options */
 --border-radius: 0.25rem;
}
```

 **👋 - See [themes.css](https://github.com/TruJared/alkaline/blob/main/src/styles/themes.css) for tips on color selections for custom themes.**

## Content Management

Create blog posts and documentation by adding MDX files to, or create your own content collection. The default content directories are:

```
src/content/blog/    // For blog posts
src/content/docs/    // For documentation
```

## Components

Alkaline includes a variety of pre-built components:

- `<Card />` - Versatile card component with multiple variants
- `<PageHeader />` - Hero section with optional image and background support
- `<FeaturesList />` - Display feature lists with descriptions
- `<CodeCopy />` - Code blocks with syntax highlighting and copy button
- `<ToggleTheme/>` - Switch between themes
- And many more...

## Iconography

Alkaline uses the awesome [Astro Icon](https://github.com/natemoo-re/astro-icon) integration by [Nate Moore](https://github.com/natemoo-re). This allows for flexible and easy-to-use icons in your project. Astro Icon allows for using custom svg's or any of the sets on [Iconify](https://icon-sets.iconify.design/).

Currently Alkaline uses the Remix Icon set. You can find a list of [available icons](https://remixicon.com/) at the Remix Icon website.

## Contributing

⏲️ coming soon

<!-- You're welcome to contribute to this project, but please note that Alkaline is not _quite_ ready for public consumption yet. I still may have some changes to make. -->

## To-Do

- [ ] Docker support
- [ ] Review intellisense for Astro
- [ ] Upgrade to Tailwind 4.0
- [ ] Work around for the build:themes script with some hosts

## License

MIT

## Need Help?

file a bug report

email

bluesky
