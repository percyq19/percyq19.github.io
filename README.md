
👋 Hi! Thanks for checking out Alkaline, I'm still making some minor changes and finishing up the docs. All the components curretnly have JSDocs and TypeScript types. It should be easy to pick up and use if you are familiar with Astro and Tailwind. I hope to have the whole project wrapped up and ready for public consumption around 2025-01-24.

# Alkaline 🧪

A neutral base for your next creation - Alkaline is a modern Astro theme focused on developer experience and clean design.

## What is this?

Alkaline is an Astro-based theme that provides:

- 🎨 14 built-in color themes with dark/light mode support
- 📝 Blog and documentation setup out of the box
- 🔧 Minimal dependencies
- 🚀 SEO-friendly with Open Graph support
- ⚡️ Near Zero-JS by default (but JS-framework friendly)
- 📦 MDX support with syntax highlighting
- 🎯 TypeScript & Tailwind included

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
│   ├── components/     # UI components
│   ├── content/       # Blog posts and documentation (MDX)
│   ├── layouts/       # Page layouts and templates
│   ├── pages/         # Astro pages
│   ├── styles/        # Theme files and global styles
│   └── utils/         # Utility functions
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
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run build:themes # Rebuild theme files
```

## Customizing Themes

Alkaline comes with 14 built-in themes. You can:

1. Switch themes using the theme picker in the top navigation
2. Create new themes by adding them to `src/styles/themes/`
3. Modify existing themes in `src/styles/themes/`

## Content Management

Create blog posts and documentation by adding MDX files to:

```
src/content/blog/    // For blog posts
src/content/docs/    // For documentation
```

## Components

Alkaline includes a variety of pre-built components:

- `<Card />` - Versatile card component with multiple variants
- `<PageHeader />` - Hero section with optional image support
- `<FeaturesList />` - Display feature lists with descriptions
- `<CodeCopy />` - Code blocks with syntax highlighting and copy button
- And many more...

## Contributing

You're welcome to contribute to this project, but please note that Alkaline is not _quite_ ready for public consumption yet. I still may have some changes to make.

## License

MIT

## Need Help?

[How to get support/contact info]
