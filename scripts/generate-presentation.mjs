import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');
const downloadsDir = '/home/widifirmaan/Downloads';

function encodeImage(filename) {
  const filePath = path.join(screenshotsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Encoding Tryngo screenshots...');

const images = {
  berandaDesktop: encodeImage('Beranda Desktop.png'),
  berandaMobile: encodeImage('Beranda Mobile.png'),
  searchDesktop: encodeImage('Search Modal Desktop.png'),
  searchMobile: encodeImage('Search Modal Mobile.png'),
  settingsDesktop: encodeImage('Settings Modal Desktop.png'),
  settingsMobile: encodeImage('Settings Modal Mobile.png'),
  katalogDesktop: encodeImage('Katalog Track Desktop.png'),
  katalogMobile: encodeImage('Katalog Track Mobile.png'),
  silabusDesktop: encodeImage('Silabus Track Desktop.png'),
  silabusMobile: encodeImage('Silabus Track Mobile.png'),
  ideDesktop: encodeImage('Online IDE Desktop.png'),
  ideMobile: encodeImage('Online IDE Mobile.png'),
  quizDesktop: encodeImage('Quiz Desktop.png'),
  quizMobile: encodeImage('Quiz Mobile.png'),
};

console.log('Assembling English Tryngo Warm Studio & Linen Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tryngo - In-Browser Developer Learning Platform</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Syne:wght@700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-linen: #EFECE6;
      --card-white: #FFFFFF;
      --text-moss: #1F2E2B;
      --text-muted: #536B63;
      --accent-forest: #2D4A3E;
      --accent-terracotta: #D96B43;
      --accent-sage: #8DAA9D;
      --border-warm: rgba(31, 46, 43, 0.12);
      --radius-studio: 24px;
      --radius-substudio: 16px;
      --shadow-organic: 0 4px 20px rgba(31, 46, 43, 0.06);
      --font-body: 'Outfit', sans-serif;
      --font-heading: 'Syne', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      font-family: var(--font-body);
    }

    body {
      background-color: var(--bg-linen);
      color: var(--text-moss);
      line-height: 1.45;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
      color: var(--text-moss);
      letter-spacing: -0.02em;
    }

    @page {
      size: 297mm 210mm;
      margin: 0;
    }

    .slide {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      position: relative;
      background-color: var(--bg-linen);
      display: flex;
      flex-direction: column;
      padding: 15mm 18mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 90% 10%, rgba(217, 107, 67, 0.05) 0%, transparent 40%),
        radial-gradient(circle at 10% 90%, rgba(45, 74, 62, 0.05) 0%, transparent 40%);
    }

    /* Studio Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5.5mm;
      z-index: 10;
    }

    .brand-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--card-white);
      border: 1px solid var(--border-warm);
      padding: 7px 18px;
      border-radius: 50px;
      box-shadow: var(--shadow-organic);
    }

    .brand-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--accent-terracotta);
    }

    .brand-title {
      font-family: var(--font-heading);
      font-size: 14px;
      font-weight: 800;
      color: var(--text-moss);
      letter-spacing: -0.01em;
    }

    .brand-subtitle {
      font-size: 12px;
      color: var(--text-muted);
      font-weight: 500;
      border-left: 1px solid var(--border-warm);
      padding-left: 10px;
      margin-left: 2px;
    }

    .badge-pill {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-terracotta);
      background: rgba(217, 107, 67, 0.1);
      border: 1px solid rgba(217, 107, 67, 0.25);
      padding: 6px 14px;
      border-radius: 50px;
    }

    /* Content Area */
    .slide-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 10;
    }

    .title-banner {
      margin-bottom: 5mm;
    }

    .slide-category {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-terracotta);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }

    .slide-title {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--text-moss);
      line-height: 1.18;
    }

    .slide-subtitle {
      font-size: 13.5px;
      color: var(--text-muted);
      margin-top: 4px;
      max-width: 900px;
      font-weight: 500;
    }

    /* Studio Cards */
    .studio-card {
      background: var(--card-white);
      border: 1px solid var(--border-warm);
      border-radius: var(--radius-studio);
      box-shadow: var(--shadow-organic);
      padding: 18px 22px;
    }

    .studio-card-accent {
      background: var(--card-white);
      border: 1px solid var(--border-warm);
      border-radius: var(--radius-studio);
      box-shadow: var(--shadow-organic);
      padding: 18px 22px;
      border-left: 5px solid var(--accent-forest);
    }

    /* Split Layouts */
    .layout-split {
      display: grid;
      grid-template-columns: 1.08fr 0.92fr;
      gap: 18px;
      align-items: stretch;
      flex: 1;
    }

    .layout-split-reversed {
      display: grid;
      grid-template-columns: 0.92fr 1.08fr;
      gap: 18px;
      align-items: stretch;
      flex: 1;
    }

    .layout-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex: 1;
    }

    .layout-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      flex: 1;
    }

    /* Visual Stage */
    .visual-stage {
      background: var(--card-white);
      border: 1px solid var(--border-warm);
      border-radius: var(--radius-studio);
      box-shadow: var(--shadow-organic);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      min-height: 290px;
      padding: 12px;
    }

    .visual-stage img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 8px 18px rgba(31, 46, 43, 0.08));
    }

    /* Feature Items */
    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
    }

    .feature-box {
      background: var(--card-white);
      border: 1px solid var(--border-warm);
      border-radius: var(--radius-substudio);
      box-shadow: var(--shadow-organic);
      padding: 14px 18px;
    }

    .feature-box-title {
      font-family: var(--font-heading);
      font-size: 14.5px;
      font-weight: 700;
      color: var(--text-moss);
      margin-bottom: 3px;
    }

    .feature-box-desc {
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.45;
      font-weight: 500;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      padding-top: 3.5mm;
      border-top: 1px solid var(--border-warm);
      font-size: 11px;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-weight: 600;
    }

    .tech-pill {
      display: inline-block;
      padding: 3px 10px;
      background: rgba(31, 46, 43, 0.06);
      border-radius: 50px;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-forest);
      margin-right: 6px;
      margin-top: 4px;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Tryngo Learning</div>
        <div class="brand-subtitle">In-Browser Developer Education &amp; WebAssembly IDE</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-01 / 10</div>
    </div>

    <div class="slide-content">
      <div class="layout-split">
        <div style="display: flex; flex-direction: column; justify-content: center; padding-right: 15px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px;">
            <span class="tech-pill">React 18</span>
            <span class="tech-pill">Monaco Editor</span>
            <span class="tech-pill">Web Workers REPL</span>
            <span class="tech-pill">Warm Studio Linen</span>
          </div>
          <h1 style="font-size: 40px; font-weight: 800; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 16px;">
            In-Browser Coding Platform &amp; WebAssembly IDE Architecture
          </h1>
          <p style="font-size: 14.5px; color: var(--text-muted); line-height: 1.55; margin-bottom: 24px; font-weight: 500;">
            An interactive developer education platform engineered in a warm studio aesthetic (Linen #EFECE6, Deep Moss #1F2E2B, Terracotta accents) featuring in-browser code execution, interactive language curricula, fuzzy search, and gamified progress streaks.
          </p>

          <div class="studio-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">SANDBOX ENGINE</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--accent-terracotta); margin-top: 2px;">Web Workers</div>
              <div style="font-size: 11px; color: var(--text-muted);">In-Browser REPL</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">DESIGN SYSTEM</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--accent-forest); margin-top: 2px;">Studio Linen</div>
              <div style="font-size: 11px; color: var(--text-muted);">24px Radius &bull; Syne Font</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">INTERACTIVITY</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--text-moss); margin-top: 2px;">Real-Time</div>
              <div style="font-size: 11px; color: var(--text-muted);">AST Evaluation</div>
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.berandaDesktop}" alt="Tryngo Beranda Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; DEVELOPER EDUCATION ARCHITECTURE</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>01 / 10</div>
    </div>
  </div>

  <!-- SLIDE 2: ARCHITECTURE & EDUCATIONAL FOUNDATIONS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">System Architecture</div>
        <div class="brand-subtitle">Core Foundations &amp; Pedagogical Principles</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Design Foundations</div>
        <h2 class="slide-title">Interactive Gamified Learning &amp; Client-Side Sandboxing</h2>
        <p class="slide-subtitle">Eliminating complex local environment setups so aspiring engineers can code, run tests, and receive feedback instantly.</p>
      </div>

      <div class="layout-grid-3">
        <div class="studio-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-terracotta); font-weight: 700; margin-bottom: 8px;">01 &bull; CHALLENGE</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Environment Setup Barrier</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Novice developers often abandon programming journeys due to frustrating compiler installations, PATH variable mismatches, and broken CLI tools.
          </p>
        </div>

        <div class="studio-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-terracotta); font-weight: 700; margin-bottom: 8px;">02 &bull; SOLUTION</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">In-Browser Sandboxed REPL</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Isolated Web Workers and WebAssembly runtimes execute student code directly inside the browser sandbox, providing sub-millisecond execution loops.
          </p>
        </div>

        <div class="studio-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-terracotta); font-weight: 700; margin-bottom: 8px;">03 &bull; ERGONOMIC IDENTITY</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Organic Studio Warmth</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Linen paper backgrounds and deep forest moss accents foster a calm, scholarly mindset that relieves programming anxiety and rewards persistence.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; PEDAGOGICAL FOUNDATIONS</div>
      <div>ZERO-SETUP RUNTIME PHILOSOPHY</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: LEARNING PORTAL & COMMUNITY HUB -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Learning Portal</div>
        <div class="brand-subtitle">Home Hub &amp; Daily Streaks</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Student Engagement</div>
        <h2 class="slide-title">Interactive Learning Portal &amp; Habit Building</h2>
        <p class="slide-subtitle">Central dashboard featuring active course resume cards, daily coding streak trackers, community achievements, and level progress.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.berandaMobile}" alt="Tryngo Beranda Mobile View">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Daily Streak Gamification Engine</div>
            <div class="feature-box-desc">
              Calendar tracking logic awards consecutive daily lesson completions, cultivating consistent developer study habits with zero friction.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">One-Click Resume Learning Card</div>
            <div class="feature-box-desc">
              Contextual card remembers exact lesson and challenge states, allowing students to immediately jump back into their active code editor.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Curated Track Discovery Carousel</div>
            <div class="feature-box-desc">
              Categorized language pills (JavaScript, Python, Go, Rust, TypeScript) with progress percentages and estimated completion milestones.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; STUDENT PORTAL</div>
      <div>STREAK &amp; ENGAGEMENT MECHANICS</div>
      <div>03 / 10</div>
    </div>
  </div>

  <!-- SLIDE 4: SEARCH COMMAND PALETTE -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Navigation Engine</div>
        <div class="brand-subtitle">Command Palette &amp; Fuzzy Search</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Search Architecture</div>
        <h2 class="slide-title">Keyboard-First Command Palette &amp; Topic Lookup</h2>
        <p class="slide-subtitle">Instant Cmd+K modal search indexing courses, specific functions, code snippets, and documentation with fuzzy substring matching.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Instant Keyboard Trigger (Cmd+K / Ctrl+K)</div>
            <div class="feature-box-desc">
              Global event listener mounts an accessible modal dialog with automatic input focus, allowing power users to navigate without touching a mouse.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Client-Side Fuzzy Substring Scoring</div>
            <div class="feature-box-desc">
              Fast memory search algorithm matches partial keywords, tags, and language codes in under 5ms without server roundtrips.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Direct Curriculum Deep-Linking</div>
            <div class="feature-box-desc">
              Selecting a result navigates immediately to the relevant syllabus lesson module and preloads corresponding code exercise templates.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.searchDesktop}" alt="Tryngo Search Command Palette Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; SEARCH ENGINE</div>
      <div>COMMAND PALETTE WORKFLOW</div>
      <div>04 / 10</div>
    </div>
  </div>

  <!-- SLIDE 5: TRACK CATALOG & SYLLABUS TREES -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Curriculum Structure</div>
        <div class="brand-subtitle">Track Catalog &amp; Skill Tree Graph</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Learning Paths</div>
        <h2 class="slide-title">Comprehensive Language Tracks &amp; Skill Trees</h2>
        <p class="slide-subtitle">Visual learning roadmaps mapping beginner fundamentals, algorithmic challenges, and real-world project milestones.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.silabusDesktop}" alt="Tryngo Syllabus Track Tree Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Prerequisite Locking Architecture</div>
            <div class="feature-box-desc">
              Progressive mastery gates ensure learners understand core concepts (variables, loops, arrays) before tackling asynchronous programming.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Granular Lesson Checkpoint Visualizer</div>
            <div class="feature-box-desc">
              Connected node graph indicates completed, active, and locked modules with clear time estimates and difficulty badges.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Track Catalog Filtering &amp; Bookmarking</div>
            <div class="feature-box-desc">
              Multi-tag filtering (Frontend, Backend, Systems, Algorithms) enables learners to plan tailored multi-language developer curricula.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; CURRICULUM ARCHITECTURE</div>
      <div>SKILL TREE VISUALIZER</div>
      <div>05 / 10</div>
    </div>
  </div>

  <!-- SLIDE 6: IN-BROWSER MONACO IDE & REPL -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Development Environment</div>
        <div class="brand-subtitle">Monaco Code Editor &amp; Sandboxed REPL</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Interactive Code Workspace</div>
        <h2 class="slide-title">Full-Featured Online IDE with Real-Time Output Console</h2>
        <p class="slide-subtitle">Integrated Monaco code editor (VS Code engine) with syntax highlighting, autocomplete IntelliSense, and instant sandboxed execution.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Monaco Editor Engine (IntelliSense &amp; Linting)</div>
            <div class="feature-box-desc">
              Industry-standard editing experience with bracket matching, code folding, inline documentation tooltips, and real-time syntax checking.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Sandboxed Web Worker Execution Loop</div>
            <div class="feature-box-desc">
              Code executes in an isolated thread with safe console.log interceptors, infinite loop guards, and memory quotas to keep the UI responsive.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Automated Unit Test Evaluation (Test Runner)</div>
            <div class="feature-box-desc">
              Instant assertions verify student code against test cases with descriptive green/red feedback badges identifying failing edge cases.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.ideDesktop}" alt="Tryngo In-Browser Online IDE Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; ONLINE IDE ENGINE</div>
      <div>MONACO &amp; SANDBOXED REPL</div>
      <div>06 / 10</div>
    </div>
  </div>

  <!-- SLIDE 7: INTERACTIVE QUIZZES & ASSESSMENTS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Evaluation Studio</div>
        <div class="brand-subtitle">Interactive Quizzes &amp; Code Checkpoints</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Concept Verification</div>
        <h2 class="slide-title">Interactive Syntax Quizzes &amp; Knowledge Checks</h2>
        <p class="slide-subtitle">Targeted multi-choice and code completion exercises reinforcing language concepts and algorithmic mental models.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.quizDesktop}" alt="Tryngo Interactive Quiz Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Code Snippet Question Framing</div>
            <div class="feature-box-desc">
              Questions presented with formatted JetBrains Mono code blocks and line numbers, testing student prediction of runtime outputs.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Instant Pedagogical Explanation Modals</div>
            <div class="feature-box-desc">
              Selecting an answer provides immediate, in-depth technical reasoning detailing why specific options are correct or erroneous.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">XP Points &amp; Level Up Animations</div>
            <div class="feature-box-desc">
              Correct answers award experience points (XP), unlocking achievement badges and updating global progress meters in real time.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; EVALUATION ENGINE</div>
      <div>CODE CHECKPOINT ASSESSMENTS</div>
      <div>07 / 10</div>
    </div>
  </div>

  <!-- SLIDE 8: RESPONSIVE TOUCH & MOBILE ERGONOMICS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Mobile Ergonomics</div>
        <div class="brand-subtitle">Pocket IDE &amp; Responsive Touch Controls</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Mobile Coding Experience</div>
        <h2 class="slide-title">Ergonomic Smartphone Coding &amp; Reading Modes</h2>
        <p class="slide-subtitle">Adapting code editors, exercise cards, and quiz options for seamless one-handed study during commutes.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Mobile Code Input Helper Bar</div>
            <div class="feature-box-desc">
              Specialized keyboard accessory strip providing quick-tap programming symbols ({, }, (, ), ;, =, &gt;, &lt;) on mobile screens.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Collapsible Split-Screen Panels</div>
            <div class="feature-box-desc">
              Drawer tabs allow students to switch smoothly between lesson instructions, editor canvas, and console terminal on small displays.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Touch-Target Spacing &amp; Zero Horizontal Shifts</div>
            <div class="feature-box-desc">
              Strict 48px tap areas and horizontal scroll locks ensure smooth, frustration-free navigation across mobile browsers.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.ideMobile}" alt="Tryngo Online IDE Mobile View">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; MOBILE ERGONOMICS</div>
      <div>POCKET IDE TOUCH CONTROLS</div>
      <div>08 / 10</div>
    </div>
  </div>

  <!-- SLIDE 9: RUNTIME PERFORMANCE & ZERO-LAG EXECUTION -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Performance Engineering</div>
        <div class="brand-subtitle">Core Web Vitals &amp; Thread Isolation</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Runtime Performance</div>
        <h2 class="slide-title">Sub-Millisecond Execution &amp; Main Thread Isolation</h2>
        <p class="slide-subtitle">Ensuring interactive editing and code compilation never hitch browser rendering or drain device battery.</p>
      </div>

      <div class="layout-grid-3">
        <div class="studio-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-terracotta); font-weight: 700; margin-bottom: 8px;">THREAD ISOLATION</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Dedicated Web Workers</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Heavy parsing, AST validation, and code execution offloaded to background threads to guarantee a rock-solid 60 FPS UI experience.
          </p>
        </div>

        <div class="studio-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-terracotta); font-weight: 700; margin-bottom: 8px;">BUNDLE MANAGEMENT</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">On-Demand Language Chunks</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Monaco editor grammar parsers and compiler runtimes lazy-load only when the specific language track is opened, preserving bandwidth.
          </p>
        </div>

        <div class="studio-card">
          <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-terracotta); font-weight: 700; margin-bottom: 8px;">CORE WEB VITALS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Sub-50ms INP Response</h3>
          <p style="font-size: 12.5px; color: var(--text-muted); line-height: 1.5;">
            Optimized keyboard typing and tab switching achieve near-instantaneous Interaction to Next Paint across mobile and desktop devices.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; PERFORMANCE AUDIT</div>
      <div>CORE WEB VITALS BENCHMARKS</div>
      <div>09 / 10</div>
    </div>
  </div>

  <!-- SLIDE 10: ARCHITECTURAL SUMMARY & DEPLOYMENT -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Milestone Summary</div>
        <div class="brand-subtitle">Production Specifications &amp; Quality Audit</div>
      </div>
      <div class="badge-pill">DECK-TRYNGO-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-banner">
        <div class="slide-category">Production Readiness</div>
        <h2 class="slide-title">Comprehensive Project Implementation Summary</h2>
        <p class="slide-subtitle">A state-of-the-art interactive coding education platform combining editorial studio warmth with modern web sandboxing.</p>
      </div>

      <div class="layout-grid-4">
        <div class="studio-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">FRAMEWORK</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-terracotta); margin-top: 4px; margin-bottom: 4px;">React 18 + Vite</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Monorepo Turborepo structure with high-speed Rollup bundling.</p>
        </div>

        <div class="studio-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">DESIGN SYSTEM</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-forest); margin-top: 4px; margin-bottom: 4px;">Studio Linen</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Warm Linen #EFECE6, Deep Moss, 24px radius, and Syne typography.</p>
        </div>

        <div class="studio-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">IDE RUNTIME</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--text-moss); margin-top: 4px; margin-bottom: 4px;">Monaco Editor</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">Web Workers isolation with automated test runner evaluation.</p>
        </div>

        <div class="studio-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">STATUS</div>
          <div style="font-size: 18px; font-weight: 800; color: #16A34A; margin-top: 4px; margin-bottom: 4px;">Production</div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">100% test coverage across modern desktop and mobile browsers.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.katalogDesktop}" alt="Tryngo Katalog Track Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO &bull; PROJECT COMPLETION</div>
      <div>WIDI FIRMANSYAH &bull; LEAD ENGINEER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`Presentation HTML written to: ${htmlFilePath}`);

console.log('Launching Chromium with Playwright to render English Tryngo PDFs...');

async function renderPDF() {
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const slidePdfPath = path.join(downloadsDir, 'Tryngo.pdf');
  const continuousPdfPath = path.join(downloadsDir, 'Tryngo-Continuous.pdf');

  // 1. Multi-Page Deck Mode (10 Slides A4 Landscape)
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('Rendering Continuous Single-Scroll Showcase (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background-color: #EFECE6 !important;
      }
      .slide {
        page-break-after: unset !important;
        page-break-inside: avoid !important;
        margin-bottom: 0px !important;
        box-shadow: none !important;
      }
    `
  });

  await page.waitForTimeout(500);

  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.pdf({
    path: continuousPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    pageRanges: '1',
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(continuousPdfPath);

  console.log('\nTryngo English PDFs successfully generated:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error rendering PDF:', err);
  process.exit(1);
});
