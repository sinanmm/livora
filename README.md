# LIVORA CHEMICALS — Official Web Platform

> **Smart Solutions. Stronger Structures.**  
> Advanced Construction Chemical Solutions

An original, premium, responsive, SEO-optimised commercial brand website for **LIVORA CHEMICALS** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Motion**.

---

## 🏛️ Project Overview

LIVORA CHEMICALS is a performance-driven construction chemicals brand committed to advancing modern construction through specialised chemical solutions, technical expertise, and research-led product development.

This web application combines:
- **Premium Brand Design System**: Inspired directly by the official LIVORA logo with exact primary deep teal (`#00504A`), industrial teal (`#003C3A`), mascot warm orange accents (`#C87535`), and architectural off-white (`#F6F7F4`).
- **Engineered Visual Campaign Hero**: Highlighting the isolated LIVORA Bull mascot staged alongside architectural material plinths and porcelain/marble surfaces.
- **Four Core Product Divisions**:
  1. *Tile Adhesive Solutions*
  2. *Waterproofing Solutions*
  3. *Tile Epoxy Solutions*
  4. *Stone & Marble Solutions*
- **Research & Geographic Climatic Understanding**: Interactive analysis of Indian regional climate demands (North, South, East, West, Central).
- **Comprehensive Stakeholder Solutions**: Tailored value propositions for 8 industry audiences (Architects, Civil Engineers, Builders, Contractors, Tile Layers, Stone Professionals, Homeowners, and Dealers).
- **Commercial Partnership Experience**: Dedicated portal and multi-field enquiry form for regional distributors and dealers.
- **Strict Brand Integrity**: No fabricated SKUs, unverified dates, fake certificates, or speculative performance claims.

---

## 📂 Feature-Based Architecture

```
src/
├── app/
│   ├── layout.tsx                     # Root layout, local font loader, schema metadata
│   ├── globals.css                    # Tailwind CSS v4 design tokens & utilities
│   ├── page.tsx                       # Complete 11-section campaign homepage
│   ├── about/page.tsx                 # Mission, vision, 6 commitments, 4 core values
│   ├── products/
│   │   ├── page.tsx                   # Divisions directory & technical guide
│   │   └── [category]/page.tsx        # Static generated category deep-dives
│   ├── solutions/page.tsx             # 8 industry audience profiles & solutions
│   ├── research-development/page.tsx  # Specialised R&D & 5 Indian climate zones
│   ├── partners/page.tsx              # Dealer/distributor partnership portal
│   ├── contact/page.tsx               # Direct enquiry desk with preselected params
│   ├── privacy/page.tsx               # Transparent data protection policy
│   ├── api/contact/route.ts           # Server-side validation & Resend email relay
│   ├── sitemap.ts                     # Search engine XML sitemap
│   ├── robots.ts                      # Crawler indexing rules
│   └── not-found.tsx                  # Branded 404 error page
├── components/
│   ├── layout/
│   │   ├── header.tsx                 # Sticky navigation, logo, mobile drawer
│   │   └── footer.tsx                 # Complete brand footer, white logo, social
│   ├── ui/
│   │   ├── button.tsx                 # Tactile buttons (primary, accent, outline)
│   │   ├── container.tsx              # Responsive container max-width constraints
│   │   ├── icons.tsx                  # Dedicated SVGs (Instagram, etc.)
│   │   └── section-heading.tsx        # Editorial typography & eyebrow component
│   └── motion/
│       └── reveal.tsx                 # Motion reveal wrappers with reduced-motion support
├── config/
│   ├── site.ts                        # Central verified contact details & metadata
│   └── navigation.ts                  # Main navigation links & division sublinks
├── features/
│   ├── home/components/              # 11 distinct, custom homepage sections
│   ├── products/
│   │   ├── data/categories.ts         # Verified data for the 4 core divisions
│   │   └── types.ts                   # Future-ready product and SKU data model
│   ├── company/
│   │   └── data/company.ts            # Authoritative company profile, values, climate data
│   ├── contact/components/            # General contact form with validation
│   └── partners/components/           # Commercial partnership form
└── lib/
    ├── seo.ts                         # Metadata generators & Organization Schema
    └── utils.ts                       # Class merging utility (clsx + tailwind-merge)
```

---

## 🎨 Asset Optimization & Mascot Cutout

1. **Official Logo**: Extracted exact deep teal (`#00504A`) from the uploaded logo image. Created both a transparent cutout PNG/WebP and a crisp white variant (`livora-logo-white.png`) for dark teal backgrounds.
2. **LIVORA Bull Mascot**: Processed using machine-learning background removal (`@imgly/background-removal-node` + `sharp`). Completely removed the original construction background while preserving horns, ears, cap, boots, gloves, tail, and facial expression into an ultra-sharp transparent WebP (`81 KB`).
3. **Typography**: Self-hosted `Space Grotesk` (editorial headlines) and `DM Sans` (body and interface copy) via `next/font/local` in `public/fonts/`. Eliminates layout shifts (CLS: 0) and functions completely offline without Google Fonts latency.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested on Node v24.18)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
- `NEXT_PUBLIC_SITE_URL`: Canonical domain (defaults to `https://livorachemicals.com`)
- `GMAIL_USER`: Primary inbox (defaults to `livorachemicals@gmail.com`)
- `GMAIL_APP_PASSWORD`: (Recommended) 16-character Google App Password for direct inbox delivery
- `RESEND_API_KEY`: (Alternative) Server-side API key for Resend relay
- `CONTACT_RECIPIENT_EMAIL`: Primary inbox (defaults to `livorachemicals@gmail.com`)

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🧪 Testing & Verification Summary

| Test Area | Result | Notes |
|---|---|---|
| **Next.js Production Build** | ✅ PASSED | Zero errors, static generation of 20 route pages |
| **TypeScript Compilation** | ✅ PASSED | 100% strict type checking with zero compiler warnings |
| **Asset Paths & Image Integrity** | ✅ PASSED | Transparent mascot WebP, logo variants, and high-res photography all verified |
| **Contact API Route** | ✅ PASSED | Server-side validation with honest delivery reporting |
| **Responsive Viewports** | ✅ PASSED | Desktop (1440px), Laptop (1024px), Tablet (768px), Mobile (375px/390px) |
| **SEO & Schemas** | ✅ PASSED | Canonical URLs, Open Graph, Twitter Cards, Organization JSON-LD, sitemap.xml, robots.txt |
| **Accessibility & Motion** | ✅ PASSED | Semantic HTML5, ARIA labels, keyboard navigability, `prefers-reduced-motion` compliance |

---

## 📋 Information & Assets Needed From LIVORA

When ready for full commercial rollout, LIVORA may provide:
1. **Registered Corporate Phone & Office Coordinates**: To replace the pending publication notices in `src/config/site.ts`.
2. **Verified Individual Product SKUs**: Name, packaging sizes (e.g. 20kg bags, 1kg pouches), technical data sheets (TDS), and safety data sheets (SDS) to populate `src/features/products/types.ts`.
3. **Gmail App Password (`GMAIL_APP_PASSWORD`) or Resend API Key**: To enable live transactional email forwarding of website enquiries to `livorachemicals@gmail.com`.
