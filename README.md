# Tryngo

> In-browser coding playgrounds, interactive quizzes, and structured developer learning paths.

Tryngo is a 100% client-side interactive learning platform featuring 28 structured curricula (332 weekly modules) across frontend, backend, database, and devops technologies. It includes in-browser execution sandboxes, code playgrounds, interactive quizzes, and local progress tracking with zero account registration required.

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 5.8](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Monaco Editor](https://img.shields.io/badge/Editor-Monaco-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://microsoft.github.io/monaco-editor/)

---

## Showcase

### 1. Platform Entrance & Track Roadmaps (`/`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Platform Homepage & Value Proposition**<br>![Tryngo Index Homepage Desktop](screenshots/Tryngo%20Index%20Homepage%20Desktop.png) | **Platform Homepage & Value Proposition**<br>![Tryngo Index Homepage Mobile](screenshots/Tryngo%20Index%20Homepage%20Mobile.png) |
| **Curriculum 28 Stacks Categorized Grid**<br>![Tryngo Track Grid Showcase Desktop](screenshots/Tryngo%20Track%20Grid%20Showcase%20Desktop.png) | **Curriculum 28 Stacks Categorized Grid**<br>![Tryngo Track Grid Showcase Mobile](screenshots/Tryngo%20Track%20Grid%20Showcase%20Mobile.png) |

### 2. Course Syllabus & In-Browser Monaco Playgrounds (`/course/*`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Track Weekly Module Syllabus Directory**<br>![Tryngo Course Syllabus Desktop](screenshots/Tryngo%20Course%20Syllabus%20View%20Desktop.png) | **Track Weekly Module Syllabus Directory**<br>![Tryngo Course Syllabus Mobile](screenshots/Tryngo%20Course%20Syllabus%20View%20Mobile.png) |
| **In-Browser Monaco Code Playground Split Screen**<br>![Tryngo Interactive Playground Desktop](screenshots/Tryngo%20Interactive%20Playground%20Desktop.png) | **In-Browser Monaco Code Playground Split Screen**<br>![Tryngo Interactive Playground Mobile](screenshots/Tryngo%20Interactive%20Playground%20Mobile.png) |

### 3. Module Quizzes, Fuzzy Search & System Settings

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Interactive Module Knowledge Check Quiz**<br>![Tryngo Interactive Module Quiz Desktop](screenshots/Tryngo%20Interactive%20Module%20Quiz%20Desktop.png) | **Interactive Module Knowledge Check Quiz**<br>![Tryngo Interactive Module Quiz Mobile](screenshots/Tryngo%20Interactive%20Module%20Quiz%20Mobile.png) |
| **Typo-Tolerant Curriculum Search Modal (`Ctrl+K`)**<br>![Tryngo Fuzzy Search Modal Desktop](screenshots/Tryngo%20Fuzzy%20Search%20Modal%20Desktop.png) | **Typo-Tolerant Curriculum Search Modal (`Ctrl+K`)**<br>![Tryngo Fuzzy Search Modal Mobile](screenshots/Tryngo%20Fuzzy%20Search%20Modal%20Mobile.png) |
| **System Preferences & Theme Settings Modal**<br>![Tryngo System Settings Modal Desktop](screenshots/Tryngo%20System%20Settings%20Modal%20Desktop.png) | **System Preferences & Theme Settings Modal**<br>![Tryngo System Settings Modal Mobile](screenshots/Tryngo%20System%20Settings%20Modal%20Mobile.png) |
| **Mobile Drawer Navigation Menu**<br>![Tryngo Mobile Navigation Drawer Desktop](screenshots/Tryngo%20Mobile%20Navigation%20Drawer%20Desktop.png) | **Mobile Drawer Navigation Menu**<br>![Tryngo Mobile Navigation Drawer Mobile](screenshots/Tryngo%20Mobile%20Navigation%20Drawer%20Mobile.png) |

---

## Features

- **28 Structured Curricula (332 Weekly Modules)**: Comprehensive learning roadmaps spanning Frontend, Backend, Databases, and DevOps divided into Beginner, Intermediate, and Advanced tiers.
- **Dedicated In-Browser Execution Engines**: Zero-setup interactive coding environments tailored to each tech stack:
  - **WebAssembly Runtimes**: Yaegi & TinyGo (Go), Pyodide (Python), php-wasm (PHP), ruby-head-wasm (Ruby), and sql.js (PostgreSQL & MySQL relational schema).
  - **Client-Side Framework Sandboxes**: In-browser React execution via Babel Standalone, Vue 3 live SFC runner, Svelte 5 compiler, GraphQL.js AST executor, and real-time HTML/CSS previews.
  - **Interactive Terminal & Database Emulators**: Client-side Docker CLI simulator with container/image lifecycle, Redis in-memory key-value terminal, and MongoDB in-memory document store engine.
  - **Virtual Multi-File Workspaces & StackBlitz Integration**: Hierarchical project explorer with virtual file tree and in-browser simulation, plus 1-click cloud launch into StackBlitz for full-stack tracks (Next.js, NestJS, Angular, Node.js, Django, Spring Boot).
  - **Remote Compiler Integration**: Rust Playground official CORS API for full Rust compilation.
- **Automatic Lesson Code Extraction**: The playground automatically detects and pre-fills the most relevant executable code block from the active week's markdown material so learners can run examples immediately.
- **7,332 Interactive Multiple-Choice Quizzes**: Knowledge checks across all 332 modules with immediate grading, detailed explanations, and progress tracking.
- **Embedded Monaco Editor**: VS Code's editor engine in the browser featuring syntax highlighting, line numbers, autocomplete, and code folding.
- **Resizable Split-Screen Workspace**: Smooth draggable desktop split-pane to adjust reading material width against the live code playground.
- **Fullscreen IDE Modal**: Standalone coding modal for distraction-free experimentation and testing.
- **Full Bilingual Content (ID & EN)**: Instant language switch between Bahasa Indonesia and English across all 332 lesson modules, quizzes, and UI elements (664 indexed markdown files).
- **Instant Typo-Tolerant Search (`Cmd/Ctrl + K`)**: Pre-indexed fuzzy search indexing 664 curriculum documents powered by Fuse.js with global keyboard shortcut navigation.
- **100% Client-Side Privacy & Zero Login**: All progress tracking, quiz scores, and settings persist securely in the browser's `localStorage`—no account creation, no tracking, and no external database.
- **Responsive Dark & Light Theme**: Tactile interface with smooth transitions and persistent theme preferences.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 19, TypeScript 5.8, Vite 6 | Modern SPA foundation with fast HMR and static build pipeline |
| **Styling & Motion** | Tailwind CSS v4, Motion (Framer Motion v12) | Utility-first responsive design, dark/light theme & fluid UI animations |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`) | In-browser VS Code editor engine with syntax highlighting & autocomplete |
| **WebAssembly Engines** | Yaegi + TinyGo (Go), Pyodide (Python), php-wasm (PHP), ruby-head-wasm (Ruby), sql.js (SQLite) | Real language interpreters running directly in the browser via WebAssembly |
| **Client-Side Framework Sandboxes** | Babel Standalone (React), Vue 3 SFC Compiler, Svelte 5 Compiler, GraphQL.js | In-browser code transformation, component rendering & AST execution |
| **CLI & Database Emulators** | Custom In-Memory State Engines (TypeScript) | Client-side Docker CLI simulator, Redis key-value engine, MongoDB document store, and procedural C# interpreter |
| **Full-Stack Project Workspaces** | Virtual Multi-File Tree + StackBlitz SDK | Hierarchical file explorer with in-browser simulation and 1-click cloud sandbox launch |
| **Content & Search** | React-Markdown, Remark GFM, Fuse.js | GitHub Flavored Markdown rendering and pre-indexed fuzzy search across 664 documents |

---

## Curriculum

| Track | Weeks | Execution Runtime |
|---|:---:|---|
| **Go (Golang)** | 13 | In-Browser WebAssembly (Yaegi & TinyGo) |
| **HTML5** | 14 | In-Browser Live HTML Preview |
| **CSS3** | 14 | In-Browser Live CSS Preview |
| **JavaScript** | 14 | Browser JS V8 Runtime |
| **Angular** | 14 | Virtual Multi-File Workspace + StackBlitz SDK |
| **Rust** | 14 | Rust Playground Official API |
| **Spring Boot** | 14 | Virtual Multi-File Workspace + StackBlitz SDK |
| **React** | 12 | Client-Side React / Babel Standalone Runner |
| **Next.js** | 12 | Virtual Multi-File Workspace + StackBlitz SDK |
| **TypeScript** | 12 | Monaco Editor TypeScript Engine |
| **Python** | 12 | Pyodide WebAssembly (Wasm) |
| **Django** | 12 | Virtual Multi-File Workspace + StackBlitz SDK |
| **Docker** | 12 | Interactive Client-Side CLI Simulator |
| **Node.js** | 12 | Virtual Multi-File Workspace + StackBlitz SDK |
| **NestJS** | 12 | Virtual Multi-File Workspace + StackBlitz SDK |
| **Vue** | 12 | Client-Side Vue 3 SFC Runner |
| **PHP** | 12 | php-wasm WebAssembly / Procedural PHP Engine |
| **Laravel** | 12 | php-wasm WebAssembly / Procedural PHP Engine |
| **C# (.NET)** | 12 | Procedural C# AST Interpreter |
| **Ruby on Rails** | 12 | ruby-head-wasm WebAssembly / Procedural Engine |
| **Svelte** | 10 | Client-Side Svelte 5 Runner |
| **CodeIgniter 4** | 10 | php-wasm WebAssembly / Procedural PHP Engine |
| **PostgreSQL** | 10 | sql.js WebAssembly (Relational SQLite Schema) |
| **MySQL** | 10 | sql.js WebAssembly (Relational SQLite Schema) |
| **MongoDB** | 10 | In-Memory Document Store Engine |
| **Redis** | 10 | In-Memory Key-Value CLI Simulator |
| **GraphQL** | 10 | GraphQL.js Client-Side AST Executor |
| **Tailwind CSS** | 9 | Live HTML/CSS Preview with Tailwind CSS v4 |

---

## Project Structure

```bash
/
├── apps/
│   └── web/                      # Main Web Application
│       ├── public/
│       │   ├── data/course/      # Course markdown materials (28 tracks x levels x weeks)
│       │   ├── search-index.json # Pre-compiled Fuse.js search index
│       │   ├── quiz-index.json   # Comprehensive quiz question banks
│       │   └── wasm/             # Yaegi WebAssembly Go execution binaries
│       ├── scripts/              # Curriculum, WASM build & sitemap generators
│       ├── src/
│       │   ├── assets/           # SVG technology logos & brand graphics
│       │   ├── components/       # Reusable UI, Modals, & Playgrounds
│       │   │   ├── playgrounds/  # Specialized language playground runners
│       │   │   ├── CodePlayground.tsx
│       │   │   ├── CoursePage.tsx
│       │   │   ├── HeroSection.tsx
│       │   │   ├── IdeModal.tsx
│       │   │   ├── Modals.tsx
│       │   │   ├── QuizModal.tsx
│       │   │   └── TrackCard.tsx
│       │   ├── data/             # Curriculum configurations, tracks & slug mappings
│       │   ├── utils/            # Bilingual translations, progress sync, color tokens
│       │   ├── App.tsx           # Root application & state router
│       │   └── main.tsx          # React entrypoint
│       ├── tests/                # Vitest unit test suites
│       ├── package.json
│       └── vite.config.ts
├── screenshots/                  # High-resolution desktop & mobile showcase images
└── README.md
```

---

## Local Setup & Deployment

### 1. Prerequisites

- **Node.js**: Version `20.x` or `22.x`
- **npm**, **pnpm**, or **yarn**

### 2. Installation & Menjalankan Server Lokal

Aplikasi ini berjalan 100% *client-side* tanpa kebutuhan konfigurasi database server eksternal:

```bash
# 1. Clone repository
git clone https://github.com/widifirmaan/reactjs-tryngo-programming-learning.git
cd reactjs-tryngo-programming-learning

# 2. Masuk ke direktori web app & install dependencies
cd apps/web
npm install

# 3. Jalankan server development Vite
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 3. Panduan Uji Manual (Testing Checklist)

Lakukan verifikasi manual berikut di browser:

| No | Fitur yang Diuji | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Grid Track Kurikulum** | Buka halaman utama `http://localhost:3000` | 28 track teknologi tampil lengkap dengan badge kategori dan estimasi durasi |
| 2 | **Modul Pembelajaran** | Klik salah satu track (misal Go atau Python), buka modul Week 1 | Materi pembelajaran markdown termuat rapi; toggle bahasa (ID / EN) berfungsi instan |
| 3 | **Interactive Code Playground** | Di halaman modul, klik tab playground Monaco Editor, lalu tekan tombol "Run" | Kode dieksekusi via runtime Wasm/JS dan output terminal tampil di konsol |
| 4 | **Quiz Pemahaman** | Buka tab quiz pada modul yang aktif, pilih opsi jawaban | Validasi jawaban langsung diproses dengan skor real-time dan pembahasan |
| 5 | **Fuzzy Search Modal** | Tekan `Ctrl + K` (atau `Cmd + K`), ketik kata kunci materi (misal "goroutine") | Modal Fuse.js muncul dan menampilkan daftar referensi kurikulum yang relevan |
| 6 | **Persistensi Progress** | Tandai beberapa modul sebagai selesai, refresh browser | Status checklist dan progres pembelajaran tetap tersimpan melalui `localStorage` |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
