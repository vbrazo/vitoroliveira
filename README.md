# vitoroliveira.ca

A modern, fast, and accessible marketing site for CTO services and writing, built with a small but well-structured React + TypeScript codebase and a reusable design system layer.

## Quick start

Requirements: Node 18+ (Vite 5).

```bash
npm install
npm run dev
# build and preview a production bundle
npm run build && npm run preview
```

## Tech stack

- Build tooling: Vite 5, SWC React plugin
- Framework: React 18, TypeScript
- Routing: React Router v6
- Styling: Tailwind CSS, tailwind-merge, class-variance-authority
- UI primitives: shadcn/ui on top of Radix UI
- State/data: TanStack Query (client cache), custom hooks
- Animations/icons: Framer Motion, Lucide Icons
- Notifications: Radix Toast + Sonner
- Deployment: Netlify (SPA redirects configured)

## Project structure and architecture

High-level layout of `src/` (trimmed):

```
src/
  App.tsx                     # Providers and routes
  main.tsx                    # App bootstrap
  index.css                   # Global styles
  data/                       # Static content (services, testimonials, cases, blog)
  hooks/                      # App/DS hooks (e.g., toast helpers)
  lib/
    utils.ts                  # cn() and generic utilities
  layouts/
    MainLayout.tsx            # Optional layout scaffold
  design-system/
    index.ts                  # Public DS entry — import from `@/design-system`
    tokens/                   # DS tokens (colors, spacing, radii, etc.)
      index.ts
    types/
      index.ts
    utils/
      index.ts
    compositions/             # DS-level compositions + atoms
      index.ts
      layout/
        Container.tsx
        Section.tsx
      typography/
        Typography.tsx        # Heading, Text, Muted
      common/
        Header.tsx
        Footer.tsx
        Blog.tsx              # posts, tags exports
      StickyCountdown.tsx
      ui/                     # shadcn/radix primitives (internal source)
        button.tsx, card.tsx, input.tsx, dialog.tsx, ...
  features/
    index.ts                  # Barrel: exports route pages
    home/
      page.tsx                # CTOServices route page
      components/
        HeroSection.tsx
        ServicesSection.tsx
        EngagementSection.tsx
        StudyCases.tsx
        WhyCTOSection.tsx
        CTASection.tsx
        ScrollingTestimonials.tsx
        StaggerTestimonials.tsx
        ServiceCard.tsx
        Tags.tsx
        VideoModal.tsx
        SpringModal.tsx
        index.ts
    blog/
      page.tsx                # Blog route page
      components/
        Chip.tsx
        DomainLogo.tsx
        index.ts
    not-found/
      page.tsx                # 404 route page
```

### Design System

- Single public entry: import everything from `@/design-system`.
- DS re-exports shadcn primitives, DS atoms (Container, Section, Typography), and compositions (Header, Footer, etc.).
- Internals live under `design-system/compositions/ui/*` but consumers should avoid deep imports and prefer `@/design-system`.

Example:

```tsx
import { Button, Container, Heading } from "@/design-system";
```

### Features

- Feature folders own their `page.tsx` and any feature-specific components.
- Pages assemble DS compositions and small feature components; keep route logic light.

Example:

```tsx
// features/home/page.tsx
export default function CTOServices() { /* ... */ }
```

## Routes

Defined in `App.tsx`:

- `/` and `/cto-services` — Marketing landing (`features/home/page.tsx`)
- `/blog` — Filterable list of posts (`features/blog/page.tsx`)
- `*` — Minimal 404 (`features/not-found/page.tsx`)

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CTOServices, BlogPage, NotFound } from "@/features";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<CTOServices />} />
    <Route path="/cto-services" element={<CTOServices />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

## Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview",
  "lint": "eslint ."
}
```

## Development tips

- Prefer importing UI from `@/design-system` (single surface) rather than deep `ui/*` paths.
- Keep route pages (`features/*/page.tsx`) lean; compose DS + feature components.
- Place static content (copy, lists) in `src/data/*` for faster iteration.
- Use `cn()` from `@/lib/utils` for safe class merging.

## Deployment

- Deployed to Netlify.
- SPA redirects configured in `netlify.toml` so deep links resolve to `index.html`.

## What’s included

- DS atoms: `Container`, `Section`, `Heading`, `Text`, `Muted`.
- shadcn/radix primitives exposed via the DS.
- Marketing sections: hero, services, engagement, testimonials, study cases, blog, CTA.
- Toasts via Radix Toast + Sonner.

## License

No explicit license file is present. Assume all rights reserved unless a license is added.
