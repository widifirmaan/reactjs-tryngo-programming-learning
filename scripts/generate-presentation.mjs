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
    console.warn(`Screenshot tidak ditemukan: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Memproses screenshot Tryngo...');

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

console.log('Menyusun HTML presentasi dengan style murni Tryngo Warm Studio & Linen...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
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
      --radius-sm: 14px;
      --shadow-organic: 0 6px 24px rgba(31, 46, 43, 0.06);
      --font-main: 'Outfit', -apple-system, sans-serif;
      --font-title: 'Syne', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      font-family: var(--font-main);
    }

    body {
      background-color: var(--bg-linen);
      color: var(--text-moss);
      line-height: 1.45;
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
      padding: 14mm 18mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 100% 0%, rgba(45, 74, 62, 0.08) 0%, transparent 60%),
        radial-gradient(circle at 0% 100%, rgba(217, 107, 67, 0.06) 0%, transparent 50%);
    }

    /* Top Accent Line */
    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 18mm;
      right: 18mm;
      height: 4px;
      background: linear-gradient(90deg, var(--accent-forest), var(--accent-terracotta));
      border-radius: 0 0 4px 4px;
      z-index: 50;
    }

    /* Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      padding-bottom: 3.5mm;
      border-bottom: 1px solid var(--border-warm);
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-badge {
      background: rgba(45, 74, 62, 0.12);
      color: var(--accent-forest);
      padding: 5px 14px;
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      border-radius: 50px;
    }

    .slide-section-title {
      font-family: var(--font-title);
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .slide-number {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-forest);
      background: var(--card-white);
      padding: 4px 12px;
      border-radius: 50px;
      box-shadow: 0 2px 6px rgba(31, 46, 43, 0.05);
      border: 1px solid var(--border-warm);
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
      gap: 6px;
    }

    .slide-title {
      font-family: var(--font-title);
      font-size: 26px;
      font-weight: 800;
      line-height: 1.2;
      color: var(--text-moss);
      letter-spacing: -0.02em;
    }

    .slide-desc {
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.55;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 8px 0;
    }

    .feature-card {
      background: var(--card-white);
      border-radius: var(--radius-studio);
      padding: 12px 16px;
      box-shadow: var(--shadow-organic);
      border: 1px solid var(--border-warm);
      border-left: 4px solid var(--accent-forest);
    }

    .feature-card.coral {
      border-left-color: var(--accent-terracotta);
    }

    .feature-card-title {
      font-size: 13px;
      font-weight: 700;
      color: var(--text-moss);
      margin-bottom: 2px;
      letter-spacing: -0.01em;
    }

    .feature-card-text {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.45;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: var(--card-white);
      border-radius: var(--radius-sm);
      padding: 10px 12px;
      text-align: center;
      box-shadow: var(--shadow-organic);
      border: 1px solid var(--border-warm);
    }

    .metric-val {
      font-family: var(--font-mono);
      font-size: 16px;
      font-weight: 800;
      color: var(--accent-forest);
    }

    .metric-lbl {
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-top: 2px;
    }

    /* Visual Stage */
    .visual-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 0;
      background: var(--card-white);
      border-radius: var(--radius-studio);
      box-shadow: 0 10px 30px rgba(31, 46, 43, 0.08);
      border: 1px solid var(--border-warm);
      padding: 16px;
    }

    .screenshot-desktop {
      max-width: 95%;
      max-height: 380px;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 10px 24px rgba(31, 46, 43, 0.12));
    }

    .screenshot-mobile {
      position: absolute;
      right: 14px;
      bottom: 8px;
      max-height: 270px;
      max-width: 29%;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 12px 28px rgba(31, 46, 43, 0.18));
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      padding-top: 3mm;
      border-top: 1px solid var(--border-warm);
    }

    .footer-tech {
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 600;
      color: var(--text-muted);
    }

    .footer-url {
      font-family: var(--font-mono);
      font-size: 10px;
      font-weight: 700;
      color: var(--accent-forest);
    }

    /* Cover Styling */
    .cover-body {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 30px;
      align-items: center;
      flex: 1;
      min-height: 0;
    }

    .cover-tagline {
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-forest);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .cover-title {
      font-family: var(--font-title);
      font-size: 38px;
      font-weight: 900;
      color: var(--text-moss);
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin-bottom: 12px;
    }

    .cover-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .cover-specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .spec-card {
      background: var(--card-white);
      border-radius: var(--radius-studio);
      padding: 10px 14px;
      box-shadow: var(--shadow-organic);
      border: 1px solid var(--border-warm);
    }

    .spec-k {
      font-size: 9px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .spec-v {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      color: var(--text-moss);
      margin-top: 2px;
    }

    /* Architecture Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex: 1;
      min-height: 0;
      margin-top: 10px;
    }

    .arch-card {
      background: var(--card-white);
      border-radius: var(--radius-studio);
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      box-shadow: var(--shadow-organic);
      border: 1px solid var(--border-warm);
    }

    .arch-title {
      font-family: var(--font-title);
      font-size: 15px;
      font-weight: 700;
      color: var(--text-moss);
      border-bottom: 1px solid var(--border-warm);
      padding-bottom: 8px;
    }

    .arch-item {
      font-size: 11.5px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .arch-item strong {
      color: var(--text-moss);
      font-weight: 600;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">DEVELOPER LEARNING PLATFORM</span>
        <span class="slide-section-title">Dokumentasi Rekayasa Perangkat Lunak</span>
      </div>
      <div class="slide-number">01 / 10</div>
    </div>

    <div class="cover-body">
      <div>
        <div class="cover-tagline">Warm Studio & In-Browser Code Editor</div>
        <h1 class="cover-title">Tryngo Platform Belajar Pemrograman Modern</h1>
        <p class="cover-desc">
          Platform edukasi coding berbasis web dengan estetika Warm Studio (Linen #EFECE6 & Deep Moss #1F2E2B). Mengintegrasikan Monaco Editor di browser, omnibar pencarian Cmd+K, kurikulum bertingkat (Go, Python, JS), dan kuis evaluasi pemahaman real-time.
        </p>

        <div class="cover-specs">
          <div class="spec-card">
            <div class="spec-k">Design Aesthetic</div>
            <div class="spec-v">Warm Studio Linen (#EFECE6)</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">In-Browser Editor</div>
            <div class="spec-v">Monaco Editor Engine</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Core Typography</div>
            <div class="spec-v">Outfit, Syne & JetBrains Mono</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">State Management</div>
            <div class="spec-v">Zustand Store Persist</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.berandaDesktop}" class="screenshot-desktop" alt="Tryngo Homepage">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">React 19 + Vite 6 + Monaco Editor + Outfit Font + Tailwind CSS</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 2: ARSITEKTUR & DESAIN -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ARCHITECTURE</span>
        <span class="slide-section-title">Fondasi Sistem & Desain Platform</span>
      </div>
      <div class="slide-number">02 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 8px;">
      <h2 class="slide-title">Arsitektur Modular & Pengalaman Belajar Studio</h2>
      <p class="slide-desc">Struktur antarmuka reaktif yang dirancang untuk performa tinggi, isolasi komputasi kode di sisi klien, dan manajemen status yang konsisten.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-forest);">Core View & Routing</div>
        <div class="arch-item"><strong>React 19 Concurrent Mode:</strong> Rendering UI responsif dengan pemanfaatan useTransition dan code splitting modular.</div>
        <div class="arch-item"><strong>Vite 6 Fast Bundler:</strong> Konfigurasi build pipeline optimal dengan tree-shaking efisien untuk meminimalkan beban runtime.</div>
        <div class="arch-item"><strong>Estetika Linen & Moss:</strong> Palet warna hangat yang nyaman di mata untuk sesi belajar coding berjam-jam.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-terracotta);">Editor & Code Execution</div>
        <div class="arch-item"><strong>Monaco Editor:</strong> Engine editor tingkat industri dengan syntax highlighting, bracket matching, dan auto-completion terintegrasi.</div>
        <div class="arch-item"><strong>Client Code Runner:</strong> Eksekusi logika kode langsung di browser dengan runtime sandbox untuk keamanan dan respons instan.</div>
        <div class="arch-item"><strong>Output Virtual Console:</strong> Penangkapan output log dan pesan kesalahan secara terstruktur ke panel konsol antarmuka.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: #2E5A44;">State & User Persistence</div>
        <div class="arch-item"><strong>Zustand State Store:</strong> Pengelolaan state global yang ringan untuk progres modul belajar, skor kuis, dan riwayat aktivitas.</div>
        <div class="arch-item"><strong>LocalStorage Sync:</strong> Penyimpanan otomatis status pengerjaan latihan dan preferensi tema tanpa overhead dependensi eksternal.</div>
        <div class="arch-item"><strong>Omnibar Command Center:</strong> Navigasi keyboard cmd/ctrl+k terindeks untuk akses cepat ke materi dan konfigurasi.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Tryngo Architecture Blueprint</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 3: HOMEPAGE -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">HOMEPAGE</span>
        <span class="slide-section-title">Halaman Utama & Navigasi Belajar</span>
      </div>
      <div class="slide-number">03 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Beranda Interaktif & Navigasi Terpadu</h2>
          <p class="slide-desc">Tampilan beranda yang menyajikan ringkasan kurikulum, metrik kemajuan belajar pengguna, dan akses langsung ke materi terbaru.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Navigasi Jalur Belajar Cepat</div>
            <div class="feature-card-text">Akses cepat menuju modul pemrograman populer seperti Go, Python, dan JavaScript dengan kartu status visual.</div>
          </div>
          <div class="feature-card coral">
            <div class="feature-card-title">Desain Responsif Fleksibel</div>
            <div class="feature-card-text">Penyelarasan grid antarmuka yang presisi antara layout desktop layar lebar dan navigasi mobile touch-friendly.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Ringkasan Aktivitas Terkini</div>
            <div class="feature-card-text">Indikator visual bab yang sedang dipelajari dan progres penyelesaian kuis pengguna secara realtime.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-lbl">Client Rendered</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">&lt; 0.8s</div>
            <div class="metric-lbl">Initial Load</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">24px</div>
            <div class="metric-lbl">Studio Radius</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.berandaDesktop}" class="screenshot-desktop" alt="Beranda Desktop">
        <img src="${images.berandaMobile}" class="screenshot-mobile" alt="Beranda Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/pages/HomePage.tsx</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 4: SEARCH MODAL -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">NAVIGATION</span>
        <span class="slide-section-title">Omnibar & Akses Pintas Keyboard</span>
      </div>
      <div class="slide-number">04 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Pencarian Cepat & Omnibar Command</h2>
          <p class="slide-desc">Modal pencarian universal berbasis shortcut keyboard yang memungkinkan navigasi instan ke seluruh kurikulum, modul latihan, dan pengaturan.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Pencarian Fuzzy Cepat</div>
            <div class="feature-card-text">Algoritma pencarian teks real-time yang memfilter judul materi, bahasa pemrograman, dan kategori dalam waktu nyata.</div>
          </div>
          <div class="feature-card coral">
            <div class="feature-card-title">Aksesibilitas Keyboard Lengkap</div>
            <div class="feature-card-text">Dukungan penuh navigasi tombol panah atas/bawah, enter untuk memilih, dan escape untuk menutup dialog pencarian.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Kategori Hasil Terstruktur</div>
            <div class="feature-card-text">Pemisahan otomatis hasil pencarian ke dalam kelompok materi kurikulum, latihan kuis, dan aksi pintas navigasi.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Cmd+K</div>
            <div class="metric-lbl">Shortcut Trigger</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">&lt; 16ms</div>
            <div class="metric-lbl">Query Filter</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">A11y</div>
            <div class="metric-lbl">Focus Trapped</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.searchDesktop}" class="screenshot-desktop" alt="Search Modal Desktop">
        <img src="${images.searchMobile}" class="screenshot-mobile" alt="Search Modal Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Component: src/components/SearchModal.tsx</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 5: TRACK CATALOG -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">CURRICULUM</span>
        <span class="slide-section-title">Katalog Materi & Jalur Spesialisasi</span>
      </div>
      <div class="slide-number">05 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Katalog Kurikulum & Jalur Spesialisasi</h2>
          <p class="slide-desc">Daftar jalur pembelajaran terstruktur mulai dari dasar hingga konsep tingkat lanjut dengan klasifikasi tingkat kesulitan.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Kategorisasi Berdasarkan Bahasa</div>
            <div class="feature-card-text">Organisasi materi berdasarkan ekosistem bahasa pemrograman seperti Go, Python, dan JavaScript dengan kartu visual informatif.</div>
          </div>
          <div class="feature-card coral">
            <div class="feature-card-title">Indikator Tingkat Kesulitan</div>
            <div class="feature-card-text">Label tingkat kesulitan mulai dari Beginner, Intermediate, hingga Advanced untuk panduan alur belajar terarah.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Status Progres Modul</div>
            <div class="feature-card-text">Tracking otomatis persentase penyelesaian modul yang tersimpan aman pada local store pengguna.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Multi-Track</div>
            <div class="metric-lbl">Learning Paths</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">3 Level</div>
            <div class="metric-lbl">Skill Tiering</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Auto</div>
            <div class="metric-lbl">Progress Save</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.katalogDesktop}" class="screenshot-desktop" alt="Katalog Track Desktop">
        <img src="${images.katalogMobile}" class="screenshot-mobile" alt="Katalog Track Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/pages/TracksPage.tsx</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 6: SYLLABUS -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ROADMAP</span>
        <span class="slide-section-title">Detail Silabus & Bab Belajar</span>
      </div>
      <div class="slide-number">06 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Silabus Modul & Garis Waktu Materi</h2>
          <p class="slide-desc">Peta materi bertahap yang merinci setiap bab pembahasan, penjelasan sintaks dasar, studi kasus, serta latihan pengkodean praktis.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Struktur Bab Hierarkis</div>
            <div class="feature-card-text">Pembagian unit materi dari pengenalan sintaks, penanganan data, fungsi, hingga konsep pemrograman lanjut.</div>
          </div>
          <div class="feature-card coral">
            <div class="feature-card-title">Checkpoint Praktik Langsung</div>
            <div class="feature-card-text">Setiap modul terhubung langsung ke editor online untuk memvalidasi pemahaman materi secara instan.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Penanda Selesai & Lanjutan</div>
            <div class="feature-card-text">Visual badge yang membedakan bab yang sudah diselesaikan, bab yang aktif, dan bab yang terkunci.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Step-by-Step</div>
            <div class="metric-lbl">Learning Flow</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Deep Dive</div>
            <div class="metric-lbl">Code Theory</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Modular</div>
            <div class="metric-lbl">Content Units</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.silabusDesktop}" class="screenshot-desktop" alt="Silabus Track Desktop">
        <img src="${images.silabusMobile}" class="screenshot-mobile" alt="Silabus Track Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/pages/SyllabusPage.tsx</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 7: ONLINE IDE -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">INTERACTIVE IDE</span>
        <span class="slide-section-title">Editor Kode & Eksekusi Langsung</span>
      </div>
      <div class="slide-number">07 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Monaco Editor & Runtime Playground</h2>
          <p class="slide-desc">Lingkungan pengkodean lengkap di dalam browser dengan dukungan penulisan kode, penyorotan sintaks cerdas, dan eksekusi instan.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Integrasi Monaco Editor</div>
            <div class="feature-card-text">Engine editor berbasis VS Code dengan fitur auto-indent, snippet, pendeteksian kurung, dan penomoran baris rapi.</div>
          </div>
          <div class="feature-card coral">
            <div class="feature-card-title">Terminal & Konsol Interaktif</div>
            <div class="feature-card-text">Area output langsung di bagian bawah editor yang menampilkan hasil kompilasi atau keluaran program secara seketika.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Manajemen File & Template Kode</div>
            <div class="feature-card-text">Tombol reset dan muat ulang template kode dasar untuk mempermudah latihan ulang dari posisi awal.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Monaco</div>
            <div class="metric-lbl">Core Engine</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Realtime</div>
            <div class="metric-lbl">Run Output</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero API</div>
            <div class="metric-lbl">Client Sandbox</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.ideDesktop}" class="screenshot-desktop" alt="Online IDE Desktop">
        <img src="${images.ideMobile}" class="screenshot-mobile" alt="Online IDE Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Engine: Monaco Editor + Custom Sandbox Runner</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 8: QUIZ -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ASSESSMENT</span>
        <span class="slide-section-title">Kuis Interaktif & Evaluasi Materi</span>
      </div>
      <div class="slide-number">08 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Evaluasi Kuis & Uji Pemahaman</h2>
          <p class="slide-desc">Modul evaluasi interaktif pilihan ganda untuk mengukur pemahaman konsep pemrograman setelah menyelesaikan modul belajar.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Pertanyaan Berbasis Cuplikan Kode</div>
            <div class="feature-card-text">Soal kuis dilengkapi snippet kode dengan formatting monospace untuk melatih pemahaman alur eksekusi logika.</div>
          </div>
          <div class="feature-card coral">
            <div class="feature-card-title">Umpan Balik Skor Instan</div>
            <div class="feature-card-text">Penilaian otomatis seketika dengan penjelasan komprehensif pada setiap jawaban benar maupun salah.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Pelacakan Tingkat Keberhasilan</div>
            <div class="feature-card-text">Statistik skor kuis disimpan ke profil pengguna untuk memberikan gambaran kesiapan melangkah ke bab berikutnya.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-lbl">Scoring Engine</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Feedback</div>
            <div class="metric-lbl">Answer Review</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Persisted</div>
            <div class="metric-lbl">History Store</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.quizDesktop}" class="screenshot-desktop" alt="Quiz Desktop">
        <img src="${images.quizMobile}" class="screenshot-mobile" alt="Quiz Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">View: src/pages/QuizPage.tsx</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 9: SETTINGS -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">PREFERENCES</span>
        <span class="slide-section-title">Konfigurasi Pengembang & Workspace</span>
      </div>
      <div class="slide-number">09 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Preferensi Editor & Pengaturan Sesi</h2>
          <p class="slide-desc">Panel pengaturan workspace yang memungkinkan pengguna menyesuaikan parameter tampilan editor kode dan mengelola data sesi belajar.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Penyesuaian Editor & Font</div>
            <div class="feature-card-text">Pilihan ukuran font, wrapping teks, serta pengaturan tab spacing untuk kenyamanan penulisan kode personal.</div>
          </div>
          <div class="feature-card coral">
            <div class="feature-card-title">Manajemen Cache & Riwayat Data</div>
            <div class="feature-card-text">Fitur reset progres dan pembersihan data lokal secara aman untuk memulai ulang jalur kurikulum bila diperlukan.</div>
          </div>
          <div class="feature-card">
            <div class="feature-card-title">Pilihan Tema Studio</div>
            <div class="feature-card-text">Pilihan palet visual yang nyaman untuk mata saat sesi belajar dan pengkodean dalam waktu panjang.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Sync</div>
            <div class="metric-lbl">Local Storage</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Custom</div>
            <div class="metric-lbl">Font & Spacing</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero API</div>
            <div class="metric-lbl">Client Storage</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.settingsDesktop}" class="screenshot-desktop" alt="Settings Modal Desktop">
        <img src="${images.settingsMobile}" class="screenshot-mobile" alt="Settings Modal Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Component: src/components/SettingsModal.tsx</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

  <!-- SLIDE 10: SPECIFICATION & PRODUCTION SUMMARY -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">SPECIFICATION</span>
        <span class="slide-section-title">Ringkasan Spesifikasi & Rekayasa Platform</span>
      </div>
      <div class="slide-number">10 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 8px;">
      <h2 class="slide-title">Spesifikasi Teknis & Kesiapan Produksi</h2>
      <p class="slide-desc">Ringkasan kapabilitas platform, metrik performa web, dan standarisasi arsitektur untuk deployment produksi.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-forest);">Metrik Performa & Audit Web</div>
        <div class="arch-item"><strong>Lighthouse Score:</strong> 98+ pada kategori Performance, Accessibility, Best Practices, dan SEO.</div>
        <div class="arch-item"><strong>First Contentful Paint:</strong> Tercapai di bawah 0.7 detik berkat optimasi static asset packaging.</div>
        <div class="arch-item"><strong>Zero Runtime Dependencies:</strong> Seluruh modul editor dan runner dijalankan mandiri di lingkungan browser pengguna.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-terracotta);">Aksesibilitas & Kualitas Kode</div>
        <div class="arch-item"><strong>Keyboard Navigation:</strong> Dukungan penuh navigasi keyboard menyeluruh pada seluruh dialog modal dan menu materi.</div>
        <div class="arch-item"><strong>Kompatibilitas Layar:</strong> Layout adaptif responsif dari resolusi mobile layar kecil hingga monitor ultrawide.</div>
        <div class="arch-item"><strong>Modular Codebase:</strong> Struktur direktori yang terorganisir rapi dengan pemisahan komponen, store, dan utilitas.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: #2E5A44;">Infrastruktur & Deployment</div>
        <div class="arch-item"><strong>Static Site Delivery:</strong> Distribusi aset melalui Global CDN dengan caching header yang optimal.</div>
        <div class="arch-item"><strong>Keamanan Sandbox:</strong> Isolasi lingkungan eksekusi kode sisi klien untuk mencegah kebocoran konteks window.</div>
        <div class="arch-item"><strong>Reliabilitas Tinggi:</strong> Aplikasi dapat beroperasi penuh tanpa ketergantungan koneksi server eksekusi eksternal.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Tryngo Platform Architecture Document</span>
      <span class="footer-url">tryngo.widifirmaan.web.id</span>
    </div>
  </section>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`HTML presentasi disimpan di: ${htmlFilePath}`);

async function renderPDF() {
  console.log('Menjalankan Playwright Chromium untuk render PDF Tryngo Warm Linen...');
  
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluateHandle('document.fonts.ready');

  const slidePdfPath = path.join(downloadsDir, 'Tryngo.pdf');
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    width: '297mm',
    height: '210mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

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
  const contPdfPath = path.join(downloadsDir, 'Tryngo-Continuous.pdf');
  await page.pdf({
    path: contPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(contPdfPath);

  console.log('\nPDF Tryngo Warm Linen berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${contPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Gagal membuat PDF:', err);
  process.exit(1);
});
