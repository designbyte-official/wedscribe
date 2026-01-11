<div align="center">
<img width="1200" height="475" alt="WedScribe - Premium Biodata Maker by DesignByte Studio" src="./public/wedscribe-logo.png" />
</div>

# WedScribe – Built by DesignByte Studio

A beautiful, free online biodata maker for Indian weddings. Create professional, elegant matrimonial biodata with 30+ premium templates.

**Live Site:** [wedscribe.designbyte.dev](https://wedscribe.designbyte.dev)  
**Studio Website:** [studio.designbyte.dev](https://studio.designbyte.dev)

Crafted with care by **DesignByte Studio** — tailored flows, refined templates, and a smooth onboarding experience.

## Run Locally

**Prerequisites:** Node.js (v18 or higher) and pnpm

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Features

- 🎨 **30+ Premium Templates** - Beautiful, professionally designed biodata templates for every style
- 📱 **Multi-Language Support** - English and Hindi support
- 🎯 **Religion-Specific Templates** - Templates for Hindu, Muslim, Christian, Sikh, Jain, and Buddhist weddings
- 📄 **Instant Downloads** - Download as high-quality PDF or PNG
- ✨ **Fully Customizable** - Edit all details, upload photos, and personalize your biodata
- 🖨️ **A4 Print Ready** - All templates optimized for A4 paper size
- 🆓 **100% Free** - No signup required, use it directly in your browser
- 🔒 **Privacy First** - All data processed locally, nothing stored on servers

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives
- **html2pdf.js** - PDF generation
- **html-to-image** - PNG export

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (TemplateRenderer, CanvasWorkspace)
│   ├── pages/           # Page-specific components (home, editor)
│   ├── templates/       # All 30+ biodata templates
│   └── ui/              # UI components (buttons, cards, etc.)
├── context/             # React contexts (LanguageContext)
├── pages/               # Main page components
├── services/            # External services
└── types.ts             # TypeScript type definitions
```

## Templates

BioData Generator includes 30+ professionally designed templates:

- **Modern**: Sky Blossom, Mint Blossom, Minimalist, Ivory Modern
- **Royal**: Regal Anvika, Royal Red, Classic Gold
- **Religious**: Sacred Saffron (Hindu), Noor Crescent (Muslim), Grace Chapel (Christian), Khalsa Heritage (Sikh), Shanti Jain (Jain), Lotus Serenity (Buddhist)
- **Floral**: Graceful Lily, Pastel Peony, Emerald Leaf, Blush Marble
- **Elegant**: Noir Elegant, Aqua Glass, Navy Minimal, Rustic Kraft
- And many more...

## Contributing

This is a project by DesignByte Studio. For issues or feature requests, please contact us at [hello@designbyte.dev](mailto:hello@designbyte.dev).

## License

Built with ❤️ by [DesignByte Studio](https://studio.designbyte.dev)

© 2024 DesignByte Studio. All rights reserved.
