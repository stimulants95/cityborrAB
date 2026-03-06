# Cityborr i Umeå AB - Website Redesign

Modern, industrial redesign of Cityborr AB's website with a focus on professional B2B aesthetic and subtle animations.

## Design Philosophy

**Industrial & Robust** - Inspired by raw materials (concrete, steel) with a clean, professional B2B design approach (like Boliden.com).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Animations**: Framer Motion
- **Export**: Static site (SSG)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # Reusable React components
│   └── styles/            # Design system
│       ├── theme.css      # CSS custom properties
│       └── design-tokens.ts
├── public/                # Static assets
├── design-brief.md        # Project design brief
├── DESIGN-SYSTEM.md       # Design system documentation
└── tailwind.config.ts     # Tailwind configuration
```

## Design System

See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for complete design system documentation including:
- Color palette (concrete, steel, industrial)
- Typography (Space Grotesk + IBM Plex Sans)
- Spacing system
- Components and usage guidelines

## Pages

- **Hem** (Home) - Company introduction and hero
- **Tjänster** (Services) - 4 service categories with project images
- **Projekt-bilder** (Gallery) - Project image gallery
- **Personal** (Staff) - Team member profiles
- **Kontakt** (Contact) - Contact information and form

## Features

- ✅ Industrial design aesthetic
- ✅ Generous whitespace (inspired by Boliden)
- ✅ Subtle scroll and hover animations
- ✅ Responsive design (mobile-first)
- ✅ Static site generation
- ✅ TypeScript for type safety
- ✅ Custom design system

## Contact Form

Contact form sends to: info@cityborr.com

## License

Private project for Cityborr i Umeå AB.
