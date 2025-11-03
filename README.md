# this is me - Astro Static Site

A minimal personal website built with Astro and Tailwind CSS.

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`

4. Preview production build:
\`\`\`bash
npm run preview
\`\`\`

## Features

- Static site generation with Astro
- Automatic dark/light mode based on system preferences
- Tailwind CSS for styling
- Fully responsive design

## Project Structure

\`\`\`
/
├── public/
│   └── avatar.png
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
