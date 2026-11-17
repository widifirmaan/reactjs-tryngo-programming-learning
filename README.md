# Tryngo

> Interactive in-browser developer learning platform featuring 28 structured curricula, Monaco code playgrounds, and automated multiple-choice quizzes.

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 5.8](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Monaco Editor](https://img.shields.io/badge/Editor-Monaco-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://microsoft.github.io/monaco-editor/)
[![Live Demo](https://img.shields.io/badge/Demo-tryngo.widifirmaan.web.id-10B981?style=flat-square)](https://tryngo.widifirmaan.web.id)

---

## Live URL

- **Production URL**: [https://tryngo.widifirmaan.web.id](https://tryngo.widifirmaan.web.id)

---

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| **Platform Homepage & Hero Section**<br>![Beranda](screenshots/Beranda%20Desktop.png) | **Platform Homepage & Hero Section**<br>![Beranda](screenshots/Beranda%20Mobile.png) |
| **28 Technology Stacks Directory Grid**<br>![Katalog Track](screenshots/Katalog%20Track%20Desktop.png) | **28 Technology Stacks Directory Grid**<br>![Katalog Track](screenshots/Katalog%20Track%20Mobile.png) |
| **Weekly Curriculum Syllabus Roadmap**<br>![Silabus Track](screenshots/Silabus%20Track%20Desktop.png) | **Weekly Curriculum Syllabus Roadmap**<br>![Silabus Track](screenshots/Silabus%20Track%20Mobile.png) |
| **Monaco Code Playground & Browser Execution**<br>![Playground](screenshots/Playground%20Desktop.png) | **Monaco Code Playground & Browser Execution**<br>![Playground](screenshots/Playground%20Mobile.png) |
| **Interactive Multiple-Choice Quiz Arena**<br>![Quiz](screenshots/Quiz%20Desktop.png) | **Interactive Multiple-Choice Quiz Arena**<br>![Quiz](screenshots/Quiz%20Mobile.png) |

---

## Features

- **28 Structured Technology Curricula**: Comprehensive roadmaps spanning Frontend (HTML5, CSS3, Tailwind, JS, TS, React, Vue, Next.js, Angular, Svelte), Backend (Go, Python, Django, Node.js, NestJS, PHP, Laravel, CodeIgniter 4, C#, Ruby on Rails, Spring Boot, Rust), Databases (PostgreSQL, MySQL, MongoDB, Redis, GraphQL), and DevOps (Docker).
- **Dedicated In-Browser Execution Engines**:
  - **WebAssembly Runtimes (Wasm)**: Real language interpreters running directly in the browser via Yaegi & TinyGo (Go), Pyodide (Python), php-wasm (PHP), ruby-head-wasm (Ruby), and sql.js (relational queries).
  - **Client-Side Framework Sandboxes**: In-browser React code transformation via Babel Standalone, live Vue 3 SFC compiler, Svelte 5 compiler, and live HTML/CSS previews.
  - **In-Memory Terminal & Database Emulators**: Client-side Docker CLI simulator with container/image lifecycle, Redis in-memory terminal, and MongoDB in-memory document store.
- **Automatic Lesson Code Extraction**: The playground automatically detects and pre-fills the most relevant code snippet from the active lesson markdown so learners can run code immediately.
- **Embedded Monaco Editor**: VS Code's editor engine in the browser featuring syntax highlighting, line numbers, and code folding.
- **Resizable Split-Screen Workspace**: Draggable desktop split-pane to adjust reading material width against the interactive live code playground.
- **Multiple-Choice Knowledge Check Quizzes**: Interactive quizzes across lesson modules with immediate scoring, answer keys, and progress tracking.
- **Instant Typo-Tolerant Search (`Ctrl + K`)**: Pre-indexed fuzzy search indexing curriculum documents powered by Fuse.js with global keyboard shortcut navigation.
- **100% Client-Side Privacy & Zero Login**: All learning progress, completed module checkmarks, and quiz scores persist securely in the browser's `localStorage`—no account registration required.

---

## Tech Stack

| Category | Technology | Description / Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React `19`, TypeScript `5.8`, Vite `6` | Modern SPA foundation with fast HMR and optimized static build |
| **Styling & Motion** | Tailwind CSS `v4`, Motion (Framer Motion v12) | Responsive design with dark/light themes and fluid UI transitions |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`) | In-browser VS Code editor engine with syntax highlighting |
| **WebAssembly Engines** | Yaegi + TinyGo, Pyodide, php-wasm, ruby-head-wasm, sql.js | Real language interpreters running directly in browser memory |
| **Sandboxes & Compilers** | Babel Standalone, Vue SFC Compiler, Svelte Compiler | In-browser component transformation and live preview compilers |
| **Content & Search** | React-Markdown, Remark GFM, Fuse.js | Markdown documentation rendering and client-side fuzzy search |

---

## Local Setup & Deployment

### 1. Prerequisites

- **Node.js**: Version `18.x` or `20.x`
- **npm** or **pnpm**
- Database: **No database required** (all progress persists locally in browser `localStorage`).

### 2. Environment Variables

No environment variables are required.

### 3. Installation

```bash
# Clone the repository
git clone https://github.com/widifirmaan/reactjs-tryngo-programming-learning.git
cd reactjs-tryngo-programming-learning

# Enter web app directory & install dependencies
cd apps/web
npm install
```

### 4. Running the Local Server

```bash
# Start Vite development server
npm run dev
```

Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

### 5. Manual Testing Checklist

| No | Feature | Test Steps | Expected Result |
| :---: | :--- | :--- | :--- |
| 1 | **Homepage Catalog** | Open `http://localhost:5173` | Displays 28 technology cards with category filtering |
| 2 | **Course Navigation** | Click any card (e.g., Go), select Beginner level | Weekly curriculum syllabus roadmap renders cleanly |
| 3 | **Code Playground** | Open any weekly module | Monaco editor loads with example code; clicking *Jalankan* executes and prints output in the console pane |
| 4 | **Fuzzy Search** | Press shortcut `Ctrl + K` (or `Cmd + K`) | Search modal opens and filters curriculum modules in real time |
| 5 | **Interactive Quiz** | Open Quiz section, click *Mulai Kuis*, select an option and click *Lanjut* | Quiz questions load with A/B/C/D option cards and score updates upon correct answer |
| 6 | **Progress Persistence** | Click *Selesai* on a lesson module, then refresh the page | Module remains marked as completed via `localStorage` |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
