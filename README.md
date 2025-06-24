# Verisette - Next.js App & Software Template

Verisette is a modern, responsive web application template built with Next.js, TailwindCSS, and shadcn/ui components. It features a clean design with a blue primary color scheme and includes all essential sections for a SaaS or software product landing page.

## Features

- **Modern Design**: Clean, professional UI with customized color scheme
- **Fully Responsive**: Looks great on all devices from mobile to desktop
- **Component-Based**: Built with reusable React components
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **Dark Mode Support**: Built-in light and dark mode with system preference detection
- **TypeScript**: Type-safe code for better developer experience
- **Next.js App Router**: Modern routing system with improved performance

## Sections Included

- Header with navigation
- Hero section with CTA buttons
- Features grid
- How It Works process steps
- Pricing plans
- Testimonials
- FAQ accordion
- Blog previews
- Call-to-action download section
- Footer with newsletter signup

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

The color scheme uses CSS variables defined in `src/app/globals.css` with the following colors:

- **Primary**: Blue (#3B82F6)
- **Secondary**: Slate (#64748B)
- **Error/Destructive**: Red (#EF4444)
- **Success**: Green (#22C55E)

You can easily modify these colors by updating the CSS variables.

## Deployment

This project is configured for easy deployment to Netlify using the included `netlify.toml` file.

You can also deploy on Vercel:

```bash
npm run build
vercel deploy
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
