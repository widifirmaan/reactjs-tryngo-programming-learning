# Tryngo - Interactive Coding & Roadmap Platform

Interactive programming curriculum, browser code playgrounds, and adaptive quiz platform built with React 19, TypeScript, Vite, Tailwind CSS, Monaco Editor, and Fuse.js.

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-0.56-007ACC?style=for-the-badge)
![Vitest](https://img.shields.io/badge/Vitest-5-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

Tryngo serves 28 programming technology roadmaps totaling 664 markdown lessons, per-track adaptive quizzes, and browser code sandboxes. Curriculum data, search indexes, and SEO route pages are generated at build time, while learner progress and UI settings persist in browser `localStorage`.

## Live URL

- **URL:** [https://tryngo.widifirmaan.web.id](https://tryngo.widifirmaan.web.id)

## Features

- **28 Curriculum Roadmaps (664 Lessons):** Covers frontend (`HTML5`, `CSS3`, `Tailwind CSS`, `JavaScript`, `TypeScript`, `React`, `Next.js`, `Vue`, `Svelte`, `Angular`), backend (`Go`, `Rust`, `C#`, `Spring Boot`, `Python`, `Node.js`, `NestJS`, `Django`, `PHP`, `Laravel`, `CodeIgniter 4`, `Ruby on Rails`), databases/APIs (`PostgreSQL`, `MySQL`, `MongoDB`, `Redis`, `GraphQL`), and containers (`Docker`), supporting deep links (`/course/{slug}/{level}/{week}`) and hash routes.
- **In-Browser Code Playground & Online IDE:** Embeds Monaco Editor (`@monaco-editor/react`) with multi-language runners using WebAssembly runtimes (`esbuild-wasm`, Pyodide, Go WASM, SQL WASM), simulated engines, and `@stackblitz/sdk` workspace launching.
- **Fuzzy Curriculum Search (`Modals.tsx`):** Searches across 28 tracks and all 664 indexed lesson files (`public/search-index.json`) powered by `fuse.js`.
- **Interactive Assessments (`QuizModal`):** Per-track and sample quizzes generated into `public/quiz-index.json` with immediate scoring and bilingual (`id` / `en`) prompts.
- **Progress Tracking and Preferences:** Saves completed weeks (`tryngo-learning-progress`), language preference (`id` / `en` via `Fredoka`, `Outfit`, and `Syne` typography), and light/dark theme state in `localStorage`.

## Tech Stack

- **Frontend:** React 19, TypeScript 5.8, Vite 6
- **Styling & Animation:** Tailwind CSS 4 (`@tailwindcss/vite`), Motion (`motion`), FontAwesome Solid, Lucide React
- **Content & Search:** `react-markdown`, `remark-gfm`, `fuse.js`
- **Code Execution & IDE:** Monaco Editor (`@monaco-editor/react`, `monaco-editor`), `@stackblitz/sdk`, `graphql`
- **Testing:** Vitest 5 (`vitest run`)

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| ![Beranda Desktop](screenshots/Beranda%20Desktop.png) | ![Beranda Mobile](screenshots/Beranda%20Mobile.png) |
| ![Katalog Track Desktop](screenshots/Katalog%20Track%20Desktop.png) | ![Katalog Track Mobile](screenshots/Katalog%20Track%20Mobile.png) |
| ![Silabus Track Desktop](screenshots/Silabus%20Track%20Desktop.png) | ![Silabus Track Mobile](screenshots/Silabus%20Track%20Mobile.png) |
| ![Online IDE Desktop](screenshots/Online%20IDE%20Desktop.png) | ![Online IDE Mobile](screenshots/Online%20IDE%20Mobile.png) |
| ![Quiz Desktop](screenshots/Quiz%20Desktop.png) | ![Quiz Mobile](screenshots/Quiz%20Mobile.png) |
| ![Search Modal Desktop](screenshots/Search%20Modal%20Desktop.png) | ![Search Modal Mobile](screenshots/Search%20Modal%20Mobile.png) |
| ![Settings Modal Desktop](screenshots/Settings%20Modal%20Desktop.png) | ![Settings Modal Mobile](screenshots/Settings%20Modal%20Mobile.png) |

## Local Setup

### Prerequisites

- Node.js 18+ (tested with Node.js 26)
- npm

### Quick Start

1. **Navigate to the web application directory and install dependencies**

   ```bash
   cd apps/web
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   Vite serves the application at `http://localhost:3000` with COOP/COEP headers enabled for in-browser WASM runtimes.

3. **Run tests, type checks, and production build**

   ```bash
   npm test
   npm run lint
   npm run build
   ```

## Author

**Widi Firmansyah** · [widifirmaan.web.id](https://widifirmaan.web.id)
