# Tryngo 🚀

> Interactive in-browser developer learning platform featuring 28 structured curricula, Monaco code playgrounds, and automated multiple-choice quizzes.

[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 5.8](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 6](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Monaco Editor](https://img.shields.io/badge/Editor-Monaco-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://microsoft.github.io/monaco-editor/)
[![Live Demo](https://img.shields.io/badge/Demo-tryngo.widifirmaan.web.id-10B981?style=flat-square)](https://tryngo.widifirmaan.web.id)

---

## Live URL

- **Production URL:** [https://tryngo.widifirmaan.web.id](https://tryngo.widifirmaan.web.id)
- **Deployment Platform:** Cloudflare Pages (`tryngo-web`)

---

## Screenshots

| Desktop (MacBook Pro M4) | Mobile (iPhone 16 Pro) |
| :---: | :---: |
| **Platform Homepage & Hero Section**<br>![Beranda](screenshots/Beranda%20Desktop.png) | **Platform Homepage & Hero Section**<br>![Beranda](screenshots/Beranda%20Mobile.png) |
| **28 Technology Stacks Directory Grid**<br>![Katalog Track](screenshots/Katalog%20Track%20Desktop.png) | **28 Technology Stacks Directory Grid**<br>![Katalog Track](screenshots/Katalog%20Track%20Mobile.png) |
| **Weekly Curriculum Syllabus Roadmap**<br>![Silabus Track](screenshots/Silabus%20Track%20Desktop.png) | **Weekly Curriculum Syllabus Roadmap**<br>![Silabus Track](screenshots/Silabus%20Track%20Mobile.png) |
| **Monaco Code Playground & Browser Execution**<br>![Playground](screenshots/Playground%20Desktop.png) | **Monaco Code Playground & Browser Execution**<br>![Playground](screenshots/Playground%20Mobile.png) |
| **Online IDE Workspace**<br>![Online IDE](screenshots/Online%20IDE%20Desktop.png) | **Online IDE Workspace**<br>![Online IDE](screenshots/Online%20IDE%20Mobile.png) |
| **Interactive Multiple-Choice Quiz Arena**<br>![Quiz](screenshots/Quiz%20Desktop.png) | **Interactive Multiple-Choice Quiz Arena**<br>![Quiz](screenshots/Quiz%20Mobile.png) |
| **Track Catalog Filter & Sort Panel**<br>![Katalog Track Filter](screenshots/Katalog%20Track%20Filter%20Desktop.png) | **Track Catalog Filter & Sort Panel**<br>![Katalog Track Filter](screenshots/Katalog%20Track%20Filter%20Mobile.png) |
| **Global Search Modal**<br>![Search Modal](screenshots/Search%20Modal%20Desktop.png) | **Global Search Modal**<br>![Search Modal](screenshots/Search%20Modal%20Mobile.png) |
| **Website Settings Modal**<br>![Settings Modal](screenshots/Settings%20Modal%20Desktop.png) | **Website Settings Modal**<br>![Settings Modal](screenshots/Settings%20Modal%20Mobile.png) |

---

## Fitur

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
| **Core Framework** | React `19.0.1`, TypeScript `5.8.2`, Vite `6.2.3` | Modern SPA foundation with fast HMR and optimized static build |
| **Styling & Motion** | Tailwind CSS `v4.1.14`, Motion `12.23.24` | Responsive design with dark/light themes and fluid UI transitions |
| **Code Editor** | Monaco Editor (`@monaco-editor/react` `4.7.0`) | In-browser VS Code editor engine with syntax highlighting |
| **WebAssembly Engines** | Yaegi + TinyGo, Pyodide, php-wasm, ruby-head-wasm, sql.js | Real language interpreters running directly in browser memory |
| **Sandboxes & Compilers** | Babel Standalone, Vue SFC Compiler, Svelte Compiler | In-browser component transformation and live preview compilers |
| **Content & Search** | React-Markdown `10.1.0`, Remark GFM `4.0.1`, Fuse.js `7.5.0` | Markdown documentation rendering and client-side fuzzy search |

---

## Tutorial Run Local & Setup

### 1. Prerequisites
- **Node.js**: Version `20.x` or `22.x`
- **npm** or **pnpm**
- Database: **No database required** (all progress persists locally in browser `localStorage`).

### 2. Environment Variables Setup
No environment variables are required.

### 3. Installation
```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/reactjs-tryngo-programming-learning.git
cd reactjs-tryngo-programming-learning

# 2. Enter web application directory & install dependencies
cd apps/web
npm install
```

### 4. Running the Local Server
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the URL printed by Vite) in your browser.

### 5. Production Build
```bash
# Build search index, quiz data, sitemap, split wasm, and bundle distribution
npm run build
```

---

## Testing & QA Automation

Automated testing and QA verification are powered by the system's `qa-toolkit`:

### 1. Playwright Test Suite
End-to-end smoke verification covering homepage, hero showcase, and curriculum catalog:

```bash
cd /home/widifirmaan/Projects/qa-toolkit
npx playwright test tests/playwright/tryngo.spec.js
```

### 2. Cypress E2E Verification
Cross-browser regression testing on DOM structure and production stability:

```bash
cd /home/widifirmaan/Projects/qa-toolkit
npx cypress run --spec cypress/e2e/tryngo.cy.js
```

### 3. QA Execution Summary
- **Playwright**: 2 tests passed (Homepage load & Curriculum tracks catalog)
- **Cypress**: 1 spec passed (Production URL rendering & DOM mount)
- **Status**: ✅ All automated tests verified and passing

---

## Author

Made with ❤️ by **Widi Firmansyah** / [widifirmaan.web.id](https://widifirmaan.web.id)
