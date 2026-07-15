<p align="center">
  <img src="./public/logo.png" alt="Restu Averian Putra portfolio logo" width="96" />
</p>

<h1 align="center">Restu Averian Putra — Frontend Engineer Portfolio</h1>

<p align="center">
  A responsive and bilingual personal portfolio showcasing selected frontend projects,
  professional experience, reusable UI work, and performance-focused engineering.
</p>

<p align="center">
  <a href="https://restu-averian-portofolio.pages.dev/">Live Website</a>
  ·
  <a href="https://www.linkedin.com/in/restu-averian-putra/">LinkedIn</a>
  ·
  <a href="https://github.com/Restu-Averian">GitHub</a>
  ·
  <a href="https://www.npmjs.com/~restu_averian_putra">npm</a>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Cloudflare Pages" src="https://img.shields.io/badge/Cloudflare_Pages-F38020?logo=cloudflarepages&logoColor=white" />
</p>

## Overview

This repository contains my personal portfolio as a Frontend Engineer. It is designed to present my work clearly to recruiters, engineering teams, and potential collaborators while keeping the experience responsive, accessible, and easy to explore.

The portfolio highlights selected public projects, professional experience, technical skills, and links to my resume and developer profiles.

## Highlights

- Responsive single-page portfolio for desktop and mobile
- Light, dark, and system theme support
- English and Indonesian language support
- Dynamic greeting, date, and local time
- Theme-aware profile image and favicon
- Downloadable/viewable PDF resume
- Featured project cards with live-demo and source-code links
- Responsive project-detail experience using desktop dialogs and mobile drawers
- Professional work-experience summaries with confidential client details omitted
- Social links for LinkedIn, GitHub, npm, Instagram, and WhatsApp

## Featured Projects

### Nisora

A responsive book-tracking application for managing reading progress, personal collections, and book notes.

**Stack:** React, Supabase, Tailwind CSS, Shadcn UI

[Live Demo](https://nisora.pages.dev/) · [Source Code](https://github.com/Restu-Averian/nisora)

### ResuAve Text Editor

A reusable and mobile-friendly rich-text editor package built with Tiptap for configurable product requirements.

**Stack:** React, Tiptap, Shadcn UI

[Live Demo](https://resuave-texteditor.pages.dev/) · [Source Code](https://github.com/Restu-Averian/-resuave-texteditor) · [NPM Package](https://www.npmjs.com/package/@resuave/texteditor)

## Tech Stack

- **Frontend:** React, JavaScript, HTML5, CSS3
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Primitives:** Radix UI and Shadcn UI
- **Icons:** Iconify and Lucide React
- **State and Hooks:** React hooks and custom hooks
- **Localization:** Custom English and Indonesian translation system
- **Deployment:** Cloudflare Pages

## Project Structure

```text
src/
├── assets/                  # Portfolio images, branding, project previews, and resume
├── components/
│   ├── modal/detail-project # Responsive project-detail dialog and drawer
│   ├── page/                # Profile, projects, experience, navigation, and footer
│   └── ui/                  # Reusable UI primitives
├── data/                    # Work-experience data
├── hooks/                   # Theme and responsive hooks
├── i18n/                    # Translation provider, locales, and helpers
├── App.jsx
├── constants.js             # Projects and social-link data
└── index.css
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Restu-Averian/restu_averian_portofolio.git
cd restu_averian_portofolio
npm install
```

### Run locally

```bash
npm run start
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Deployment

The portfolio is deployed with Cloudflare Pages.

Recommended Cloudflare Pages settings:

```text
Build command: npm run build
Build output directory: dist
```

## Contact

- **Email:** restuaverianputra123@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/restu-averian-putra/
- **GitHub:** https://github.com/Restu-Averian
- **Portfolio:** https://restu-averian-portofolio.pages.dev/

---

© 2026 Restu Averian Putra. All rights reserved.
