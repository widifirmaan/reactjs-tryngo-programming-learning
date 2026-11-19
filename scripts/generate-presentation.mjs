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
    console.warn(`⚠️ Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('💻 Encoding Tryngo developer platform screenshots...');

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

console.log('🎨 Constructing Tryngo Modern IDE Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Tryngo - In-Browser Developer Learning Platform & Monaco Playground</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-space: #090D16;
      --bg-card: #0F172A;
      --bg-surface: #1E293B;
      --border-glow: #334155;
      --border-active: #0EA5E9;
      --text-main: #F8FAFC;
      --text-muted: #94A3B8;
      --accent-cyan: #38BDF8;
      --accent-emerald: #10B981;
      --accent-indigo: #6366F1;
      --accent-amber: #F59E0B;
      --accent-rose: #F43F5E;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #020617;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-main);
      line-height: 1.4;
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
      background: var(--bg-space);
      display: flex;
      flex-direction: column;
      padding: 16mm 18mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 60%),
        linear-gradient(to right, rgba(51, 65, 85, 0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(51, 65, 85, 0.15) 1px, transparent 1px);
      background-size: 100% 100%, 32px 32px, 32px 32px;
    }

    /* Top Accent Line */
    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #38BDF8, #6366F1, #10B981);
      z-index: 50;
    }

    /* Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1px solid var(--border-glow);
      padding-bottom: 3.5mm;
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-badge {
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid var(--accent-cyan);
      color: var(--accent-cyan);
      padding: 4px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 4px;
    }

    .slide-section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .slide-page-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid var(--border-glow);
      color: var(--accent-cyan);
      padding: 3px 10px;
      border-radius: 4px;
    }

    /* Body */
    .slide-body {
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 22px;
      flex: 1;
      min-height: 0;
    }

    .slide-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 0;
    }

    .headline-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .route-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid var(--border-glow);
      padding: 3px 10px;
      width: fit-content;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      color: var(--accent-emerald);
      border-radius: 4px;
    }

    .slide-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 24px;
      font-weight: 800;
      line-height: 1.15;
      color: #FFFFFF;
      letter-spacing: -0.02em;
    }

    .slide-subtitle {
      font-size: 12.5px;
      color: var(--text-muted);
      font-weight: 400;
      line-height: 1.5;
    }

    /* Cards */
    .feature-blocks {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .ide-card {
      background: rgba(15, 23, 42, 0.75);
      border: 1px solid var(--border-glow);
      border-radius: 6px;
      padding: 10px 14px;
      border-left: 3px solid var(--accent-cyan);
    }

    .ide-card.emerald-border {
      border-left-color: var(--accent-emerald);
    }

    .ide-card.indigo-border {
      border-left-color: var(--accent-indigo);
    }

    .ide-card.amber-border {
      border-left-color: var(--accent-amber);
    }

    .card-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .card-text {
      font-size: 11px;
      line-height: 1.45;
      color: #CBD5E1;
    }

    /* Metrics Grid */
    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid var(--border-glow);
      border-radius: 6px;
      padding: 7px 10px;
      text-align: center;
    }

    .metric-val {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 16px;
      font-weight: 800;
      color: var(--accent-cyan);
    }

    .metric-desc {
      font-size: 8.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
    }

    /* Media Mockup Frame */
    .slide-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 0;
    }

    .device-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .desktop-frame {
      width: 90%;
      background: #0B0F17;
      border: 1px solid #334155;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .frame-bar {
      height: 24px;
      background: #111827;
      border-bottom: 1px solid #1F2937;
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 6px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .dot.red { background: #EF4444; }
    .dot.yellow { background: #F59E0B; }
    .dot.green { background: #10B981; }

    .url-chip {
      margin-left: 12px;
      background: #030712;
      border: 1px solid #1F2937;
      padding: 1px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 600;
      color: #94A3B8;
      border-radius: 4px;
    }

    .desktop-img {
      width: 100%;
      height: auto;
      max-height: 380px;
      object-fit: contain;
      background: #0B0F17;
      display: block;
    }

    .mobile-frame {
      position: absolute;
      right: -8px;
      bottom: -12px;
      width: 27%;
      background: #0B0F17;
      border: 2px solid #334155;
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.7);
      border-radius: 14px;
      overflow: hidden;
      z-index: 10;
    }

    .mobile-notch {
      height: 12px;
      background: #030712;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .notch-speaker {
      width: 28px;
      height: 2.5px;
      background: #374151;
      border-radius: 2px;
    }

    .mobile-img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border-glow);
      padding-top: 3.5mm;
      margin-top: 4mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #64748B;
      font-weight: 600;
    }

    /* Cover Slide */
    .cover-slide {
      background: radial-gradient(circle at 75% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 55%), #090D16;
      justify-content: space-between;
      padding: 18mm 20mm;
    }

    .cover-giant-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 50px;
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.04em;
      color: #FFFFFF;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .cover-giant-title span {
      background: linear-gradient(90deg, #38BDF8, #818CF8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .cover-desc {
      font-size: 15.5px;
      line-height: 1.5;
      color: #94A3B8;
      font-weight: 400;
      max-width: 720px;
    }

    .cover-split {
      display: grid;
      grid-template-columns: 1.05fr 1fr;
      gap: 28px;
      align-items: center;
      margin: 10px 0;
    }

    .cover-specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .cover-spec-card {
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid var(--border-glow);
      border-radius: 6px;
      padding: 12px 14px;
    }

    .cover-spec-k {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      color: var(--accent-cyan);
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    .cover-spec-v {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #FFFFFF;
    }

    /* Architecture Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 10px;
      flex: 1;
    }

    .arch-col {
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid var(--border-glow);
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .arch-col-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 12.5px;
      font-weight: 800;
      text-transform: uppercase;
      padding-bottom: 6px;
      border-bottom: 1px solid var(--border-glow);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #FFFFFF;
    }

    .arch-item {
      background: rgba(2, 6, 23, 0.6);
      border: 1px solid rgba(51, 65, 85, 0.6);
      border-radius: 5px;
      padding: 8px 10px;
      font-size: 11px;
    }

    .arch-item-name {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: var(--accent-cyan);
      margin-bottom: 2px;
    }

    .arch-item-detail {
      font-size: 10px;
      color: #94A3B8;
      line-height: 1.4;
    }

    /* Closing Slide */
    .closing-slide {
      background: radial-gradient(circle at 50% 40%, rgba(14, 165, 233, 0.12) 0%, transparent 60%), #090D16;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20mm;
      gap: 18px;
    }

    .closing-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: #FFFFFF;
    }

    .closing-pills {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 760px;
    }

    .live-hero-card {
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid var(--accent-cyan);
      box-shadow: 0 12px 30px rgba(14, 165, 233, 0.2);
      border-radius: 8px;
      padding: 16px 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      margin-top: 10px;
    }

    .live-url-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 18px;
      font-weight: 800;
      color: var(--accent-cyan);
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 01: COVER ==================== -->
  <div class="slide cover-slide">
    <div>
      <div style="display:flex; gap:12px; align-items:center;">
        <div class="brand-badge">DEVELOPER PLATFORM</div>
        <div class="route-pill">REACT 19 • MONACO EDITOR • TYPESCRIPT 5.8</div>
        <div class="brand-badge" style="border-color:#10B981; color:#10B981; background:rgba(16,185,129,0.1);">PRODUCTION DEPLOYED</div>
      </div>
      <div style="margin-top: 20px; max-width: 85%;">
        <div class="cover-giant-title">
          <span>TRYNGO PLATFORM</span><br>
          INTERACTIVE IN-BROWSER CODE & CURRICULUM
        </div>
        <p class="cover-desc">
          Platform pembelajaran pemrograman modern dengan 28 silabus terstruktur, Monaco code playground terintegrasi, omnibar navigasi instan, dan arena kuis evaluasi berbasis client-side runtime.
        </p>
      </div>
    </div>

    <div class="cover-split">
      <div class="cover-specs-grid">
        <div class="cover-spec-card">
          <div class="cover-spec-k">CORE FRAMEWORK</div>
          <div class="cover-spec-v">React 19 + Vite 6 SPA</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">TYPE CHECKING</div>
          <div class="cover-spec-v">TypeScript 5.8 Strict</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">IN-BROWSER IDE</div>
          <div class="cover-spec-v">Monaco Code Editor</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">STYLE SYSTEM</div>
          <div class="cover-spec-v">Tailwind CSS v4 Engine</div>
        </div>
      </div>

      <div style="position: relative;">
        <div class="desktop-frame" style="width: 100%;">
          <div class="frame-bar">
            <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
            <div class="url-chip">https://tryngo.widifirmaan.web.id</div>
          </div>
          <img src="${images.berandaDesktop}" class="desktop-img" alt="Tryngo Cover">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AUTHOR: WIDI FIRMANSYAH</div>
      <div>PROJECT: TRYNGO PROGRAMMING PLATFORM</div>
      <div>PAGE 01 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 02: HOMEPAGE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge">PORTAL LANDING</div>
        <div class="slide-section-title">PLATFORM HOMEPAGE & CURRICULUM DISCOVERY</div>
      </div>
      <div class="slide-page-badge">SLIDE 02</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET / • PUBLIC HOMEPAGE</div>
          <h2 class="slide-title">Curriculum Highway & Technology Hub</h2>
          <p class="slide-subtitle">
            Halaman beranda interaktif yang menyajikan ikhtisar roadmap pembelajaran developer, sorotan materi utama, dan tautan langsung ke playground kode interaktif.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="ide-card">
            <div class="card-label">🚀 Fast Track Navigation</div>
            <div class="card-text">
              Akses instan ke bahasa pemrograman populer (Go, TypeScript, Python, Rust) dengan kategorisasi tingkat kemahiran dari Beginner hingga Advanced.
            </div>
          </div>
          <div class="ide-card emerald-border">
            <div class="card-label">⚡ Zero-Latency Responsive Shell</div>
            <div class="card-text">
              Layout responsif dioptimasi untuk MacBook dan mobile, memastikan navigasi silabus dan kode tetap nyaman di berbagai form factor layar.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">28+</div>
            <div class="metric-desc">Tech Stacks</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Responsive UI</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">&lt; 1s</div>
            <div class="metric-desc">Initial Load</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">tryngo.widifirmaan.web.id</div>
            </div>
            <img src="${images.berandaDesktop}" class="desktop-img" alt="Homepage Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.berandaMobile}" class="mobile-img" alt="Homepage Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>CORE LEARNING HIGHWAY & NAVIGATION</div>
      <div>PAGE 02 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 03: GLOBAL SEARCH MODAL ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge">SEARCH SUBSYSTEM</div>
        <div class="slide-section-title">OMNIBAR GLOBAL SEARCH & HOTKEY MATRIX</div>
      </div>
      <div class="slide-page-badge">SLIDE 03</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">HOTKEY: CMD+K / CTRL+K • FUZZY SEARCH</div>
          <h2 class="slide-title">Keyboard-First Omnibar Modal</h2>
          <p class="slide-subtitle">
            Modal pencarian cepat berbasis fuzzy query yang mengindeks seluruh judul materi silabus, syntax cheatsheet, dan teknologi pembelajaran dalam hitungan milidetik.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="ide-card indigo-border">
            <div class="card-label">🔍 Substring & Keyword Indexing</div>
            <div class="card-text">
              Algoritma pencarian lokal tanpa round-trip API, menyaring hasil berdasarkan topik materi, modul kurikulum, atau perintah pemrograman secara real-time.
            </div>
          </div>
          <div class="ide-card">
            <div class="card-label">⌨️ Full Keyboard Accessibility</div>
            <div class="card-text">
              Dukungan navigasi tombol panah atas/bawah, pemilihan via tombol Enter, dan penutupan modal dengan tombol Escape tanpa memerlukan kursor mouse.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Cmd+K</div>
            <div class="metric-desc">Hotkey Trigger</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">0 ms</div>
            <div class="metric-desc">Local Search API</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">A11y Compliant</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">tryngo.widifirmaan.web.id/search</div>
            </div>
            <img src="${images.searchDesktop}" class="desktop-img" alt="Search Modal Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.searchMobile}" class="mobile-img" alt="Search Modal Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>OMNIBAR KEYBOARD SHORTCUTS & EVENT BUS</div>
      <div>PAGE 03 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 04: TRACK DIRECTORY ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge">CURRICULUM DIRECTORY</div>
        <div class="slide-section-title">28 TECHNOLOGY STACKS CATALOG GRID</div>
      </div>
      <div class="slide-page-badge">SLIDE 04</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /tracks • TECH DIRECTORY</div>
          <h2 class="slide-title">Multi-Stack Technology Catalog</h2>
          <p class="slide-subtitle">
            Katalog kurikulum komprehensif yang memetakan 28 ekosistem teknologi modern meliputi Frontend, Backend, Database, Cloud Native, hingga DevOps.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="ide-card emerald-border">
            <div class="card-label">📁 Category & Difficulty Filtering</div>
            <div class="card-text">
              Filter multi-level untuk memilah bahasa pemrograman dan framework berdasarkan domain minat, durasi kurikulum, dan tingkat kompleksitas teori.
            </div>
          </div>
          <div class="ide-card">
            <div class="card-label">📊 Track Progress Indicator</div>
            <div class="card-text">
              Badge visual interaktif menampilkan persentase modul yang telah diselesaikan dan jumlah latihan kode yang tersedia pada setiap track.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">28</div>
            <div class="metric-desc">Active Curricula</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">4</div>
            <div class="metric-desc">Domain Categories</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Free</div>
            <div class="metric-desc">Open Access</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">tryngo.widifirmaan.web.id/tracks</div>
            </div>
            <img src="${images.katalogDesktop}" class="desktop-img" alt="Katalog Track Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.katalogMobile}" class="mobile-img" alt="Katalog Track Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>STACK METADATA & PROGRESS SCHEMA</div>
      <div>PAGE 04 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 05: SYLLABUS ROADMAP ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge">SYLLABUS ENGINE</div>
        <div class="slide-section-title">STEP-BY-STEP LEARNING ROADMAP</div>
      </div>
      <div class="slide-page-badge">SLIDE 05</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /tracks/:id/syllabus • ROADMAP VIEW</div>
          <h2 class="slide-title">Modular Syllabus & Milestone Roadmap</h2>
          <p class="slide-subtitle">
            Alur pembelajaran mingguan terstruktur dengan pohon prasyarat (prerequisite tree), rangkuman teori inti, dan target implementasi praktis per sesi.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="ide-card amber-border">
            <div class="card-label">🗺️ Milestone Timeline Matrix</div>
            <div class="card-text">
              Penyusunan modul hierarkis mulai dari sintaks dasar, struktur data, kontrol alur, concurrency, hingga arsitektur modular production-ready.
            </div>
          </div>
          <div class="ide-card">
            <div class="card-label">🎯 Hands-on Coding Checkpoints</div>
            <div class="card-text">
              Setiap sub-bab materi dilengkapi tautan langsung ke sesi latihan Online IDE bersangkutan untuk langsung menguji kode secara real-time.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">12+</div>
            <div class="metric-desc">Weeks per Track</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Structured Milestones</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Direct</div>
            <div class="metric-desc">IDE Checkpoint</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">tryngo.widifirmaan.web.id/tracks/go/syllabus</div>
            </div>
            <img src="${images.silabusDesktop}" class="desktop-img" alt="Silabus Track Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.silabusMobile}" class="mobile-img" alt="Silabus Track Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>CURRICULUM TREE & PREREQUISITE GRAPH</div>
      <div>PAGE 05 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 06: MONACO ONLINE IDE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge" style="border-color:#38BDF8; color:#38BDF8;">IN-BROWSER IDE</div>
        <div class="slide-section-title">MONACO CODE EDITOR & RUNTIME WORKSPACE</div>
      </div>
      <div class="slide-page-badge">SLIDE 06</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /ide • MONACO ENGINE INTERFACE</div>
          <h2 class="slide-title">Monaco Editor In-Browser IDE Workspace</h2>
          <p class="slide-subtitle">
            Lingkungan editor kode terintegrasi Microsoft Monaco Engine (inti dari VS Code) dengan syntax highlighting presisi, tab berkas, dan terminal output terpadu.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="ide-card">
            <div class="card-label">💻 Multi-Language Highlighting</div>
            <div class="card-text">
              Dukungan tokenisasi kode lengkap untuk Go, JavaScript, TypeScript, Python, dan JSON dengan autocompletion dan inline parameter hints.
            </div>
          </div>
          <div class="ide-card emerald-border">
            <div class="card-label">📟 Integrated Console Log Output</div>
            <div class="card-text">
              Terminal emulator yang menangkap stdout/stderr eksekusi kode secara visual, dilengkapi pemformatan error trace dan tombol clear buffer.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Monaco</div>
            <div class="metric-desc">Editor Core</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">60 fps</div>
            <div class="metric-desc">Editor Typing</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero-Install</div>
            <div class="metric-desc">Cloud Execution</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">tryngo.widifirmaan.web.id/ide</div>
            </div>
            <img src="${images.ideDesktop}" class="desktop-img" alt="Online IDE Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.ideMobile}" class="mobile-img" alt="Online IDE Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>MONACO WORKER THREADS & SYNTAX TREE</div>
      <div>PAGE 06 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 07: INTERACTIVE QUIZ ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge" style="border-color:#F59E0B; color:#F59E0B;">ASSESSMENT ARENA</div>
        <div class="slide-section-title">AUTOMATED MULTIPLE-CHOICE QUIZ SYSTEM</div>
      </div>
      <div class="slide-page-badge">SLIDE 07</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">GET /quiz • EVALUATION ENGINE</div>
          <h2 class="slide-title">Interactive Quiz Arena & Progress Scoring</h2>
          <p class="slide-subtitle">
            Modul pengujian kompetensi berbasis pilihan ganda dinamis dengan acak urutan soal, penilaian instan, feedback pembahasan kunci jawaban, dan akumulasi skor.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="ide-card amber-border">
            <div class="card-label">✅ Instant Feedback & Explanation</div>
            <div class="card-text">
              Setiap opsi jawaban langsung menampilkan validasi status (benar/salah) disertai ulasan mendalam mengenai konsep logika di balik jawaban benar.
            </div>
          </div>
          <div class="ide-card">
            <div class="card-label">📈 Real-Time Score Aggregator</div>
            <div class="card-text">
              Kalkulator skor reaktif yang menghitung akurasi pemahaman materi developer serta menandai kelulusan modul silabus terkait.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-desc">Evaluation Time</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Explanation Ratio</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Local</div>
            <div class="metric-desc">Progress Cache</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">tryngo.widifirmaan.web.id/quiz</div>
            </div>
            <img src="${images.quizDesktop}" class="desktop-img" alt="Quiz Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.quizMobile}" class="mobile-img" alt="Quiz Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>QUESTION DISPATCH & SCORING STATE MACHINE</div>
      <div>PAGE 07 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 08: SETTINGS & PREFERENCES ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge">PREFERENCES</div>
        <div class="slide-section-title">WORKSPACE SETTINGS & THEME ENGINE</div>
      </div>
      <div class="slide-page-badge">SLIDE 08</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">MODAL /settings • LOCALSTORAGE PREFERENCES</div>
          <h2 class="slide-title">IDE Customizer & Preferences Modal</h2>
          <p class="slide-subtitle">
            Pusat konfigurasi kenyamanan coding developer, mencakup tema editor (VS Code Dark, Monokai, Dracula), ukuran font, tab spacing, dan font ligatures.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="ide-card indigo-border">
            <div class="card-label">🎨 Multi-Theme CSS Variable Engine</div>
            <div class="card-text">
              Perubahan tema instan tanpa reload browser menggunakan CSS Custom Properties yang disinkronkan ke canvas Monaco Editor secara otomatis.
            </div>
          </div>
          <div class="ide-card">
            <div class="card-label">💾 LocalStorage State Persistence</div>
            <div class="card-text">
              Seluruh preferensi developer disimpan ke dalam browser storage lokal, mempertahankan konfigurasi lingkungan kerja setiap kunjungan ulang.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">4+</div>
            <div class="metric-desc">Editor Themes</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-desc">Theme Apply</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Persistent</div>
            <div class="metric-desc">Config Storage</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">tryngo.widifirmaan.web.id/settings</div>
            </div>
            <img src="${images.settingsDesktop}" class="desktop-img" alt="Settings Modal Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.settingsMobile}" class="mobile-img" alt="Settings Modal Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>CSS CUSTOM TOKENS & STORAGE ADAPTER</div>
      <div>PAGE 08 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 09: TECH STACK MATRIX ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="brand-badge" style="border-color:#38BDF8; color:#38BDF8;">TECH STACK</div>
        <div class="slide-section-title">FULLSTACK RUNTIME & DEVELOPER ARCHITECTURE</div>
      </div>
      <div class="slide-page-badge">SLIDE 09</div>
    </div>

    <div style="margin-bottom: 8px;">
      <h2 class="slide-title">System Architecture & Modern Web Runtime</h2>
      <p class="slide-subtitle">
        Fondasi performa tinggi menggabungkan React 19, TypeScript 5.8 strict typing, Monaco editor web worker, dan Tailwind CSS v4 engine di Cloudflare Pages edge.
      </p>
    </div>

    <div class="arch-grid">
      <!-- Frontend Core -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>01. FRONTEND CORE</span>
          <span style="color:#38BDF8;">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">React 19 SPA</div>
          <div class="arch-item-detail">Arsitektur komponen modern dengan Hooks terbaru dan manajemen re-render yang terisolasi secara optimal.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">TypeScript 5.8</div>
          <div class="arch-item-detail">Sistem pengetikan ketat (strict mode) untuk seluruh skema silabus, kuis, dan konfigurasi editor.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Vite 6 Engine</div>
          <div class="arch-item-detail">Next-generation bundling pipeline dengan Hot Module Replacement secepat kilat dan tree-shaking efisien.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Tailwind CSS v4</div>
          <div class="arch-item-detail">Engine CSS modern berbasis JIT compiler dengan zero-runtime overhead dan class-name teroptimasi.</div>
        </div>
      </div>

      <!-- Editor Engine -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>02. EDITOR & WORKERS</span>
          <span style="color:#6366F1;">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Monaco Code Editor</div>
          <div class="arch-item-detail">Inti editor kode setara Visual Studio Code dengan syntax parser dan text decoration kustom.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Web Worker Threads</div>
          <div class="arch-item-detail">Tokenisasi dan analisis sintaks berjalan pada worker background tanpa membebani rendering UI utama.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Lucide Developer Icons</div>
          <div class="arch-item-detail">Ikonografi teknis berbasis vektor yang konsisten dan adaptif terhadap tema gelap.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Fuzzy Search Engine</div>
          <div class="arch-item-detail">Pencarian in-memory berkecepatan tinggi yang memproses indeks silabus secara instan.</div>
        </div>
      </div>

      <!-- Edge Delivery -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>03. EDGE DEPLOYMENT</span>
          <span style="color:#10B981;">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Cloudflare Pages</div>
          <div class="arch-item-detail">Distribusi aset statis ke 300+ data center global dengan latensi Time-To-First-Byte (TTFB) ultra-rendah.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">HTTP/3 & Brotli</div>
          <div class="arch-item-detail">Protokol transfer termutakhir dengan kompresi Brotli maksimal untuk ukuran bundle minimal.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Client-Side Persistence</div>
          <div class="arch-item-detail">Skema penyimpanan lokal yang menjamin data kuis dan preferensi editor tersimpan tanpa login server.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Automated E2E Suite</div>
          <div class="arch-item-detail">Verifikasi kualitas Playwright otomatis memastikan interaksi editor dan modal 100% lulus uji.</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>TRYNGO ARCHITECTURE</div>
      <div>CORE TECH STACK & SYSTEM TOPOLOGY</div>
      <div>PAGE 09 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 10: CLOSING ==================== -->
  <div class="slide closing-slide">
    <div class="brand-badge" style="font-size:12px; padding:6px 14px; border-color:#38BDF8; color:#38BDF8;">
      TRYNGO DEVELOPER PLATFORM
    </div>
    <h1 class="closing-title">MODERN IN-BROWSER<br>DEVELOPER LEARNING PLATFORM</h1>
    
    <p style="font-size: 15px; color: #94A3B8; max-width: 680px; font-weight: 500; line-height: 1.5;">
      Platform edukasi pemrograman masa depan yang memadukan silabus terstruktur, fleksibilitas online code editor Monaco, dan kenyamanan antarmuka keyboard-first dalam satu aplikasi web berkinerja tinggi.
    </p>

    <div class="closing-pills">
      <div class="ide-card" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">🚀 28 CURRICULA</div>
      <div class="ide-card emerald-border" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">💻 MONACO EDITOR</div>
      <div class="ide-card indigo-border" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">⌨️ CMD+K OMNIBAR</div>
      <div class="ide-card amber-border" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">📝 QUIZ ARENA</div>
      <div class="ide-card" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">🎨 MULTI-THEME</div>
    </div>

    <div class="live-hero-card">
      <div style="font-family:'Space Grotesk',sans-serif; font-size:11px; font-weight:700; color:#94A3B8; letter-spacing:0.08em; text-transform:uppercase;">
        LIVE PRODUCTION ENVIRONMENT
      </div>
      <div class="live-url-text">https://tryngo.widifirmaan.web.id</div>
      <div style="font-size:11px; color:#94A3B8; font-weight:500;">
        Built with React 19 • TypeScript 5.8 • Monaco Editor • Vite 6 • Tailwind v4
      </div>
    </div>

    <div class="slide-footer" style="width: 100%; margin-top: 15px;">
      <div>ENGINEERED BY WIDI FIRMANSYAH</div>
      <div>PRODUCTION-READY WEB PLATFORM</div>
      <div>PAGE 10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`📄 Presentation HTML written to: ${htmlFilePath}`);

console.log('🚀 Launching Chromium with Playwright to render Tryngo PDF...');

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
  console.log('🖨️  Rendering Multi-Page A4 Landscape Presentation PDF (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('📜 Rendering Continuous Single-Scroll Showcase PDF (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background: #090D16 !important;
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

  console.log('\n================================================================================');
  console.log('🎉 TRYNGO PLATFORM ARCHITECTURE PDFS SUCCESSFULLY GENERATED!');
  console.log(`📦 Multi-Page Deck (Slides)   : ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (10 Pages A4 Landscape)`);
  console.log(`   -> Saved: ${slidePdfPath}`);
  console.log(`📦 Continuous Poster (Scroll) : ${(contStat.size / 1024 / 1024).toFixed(2)} MB (1 Long Showcase Page)`);
  console.log(`   -> Saved: ${continuousPdfPath}`);
  console.log('================================================================================\n');
}

renderPDF().catch((err) => {
  console.error('❌ Error during PDF generation:', err);
  process.exit(1);
});
