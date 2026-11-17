# Tryngo

> Platform media pembelajaran pemrograman interaktif di browser dengan kurikulum terstruktur, code playground, dan evaluasi kuis otomatis.

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

## Screenshot

| Desktop | Mobile |
| :---: | :---: |
| **Beranda Utama & Hero Section**<br>![Beranda](screenshots/Beranda%20Desktop.png) | **Beranda Utama & Hero Section**<br>![Beranda](screenshots/Beranda%20Mobile.png) |
| **Katalog 28 Track Teknologi**<br>![Katalog Track](screenshots/Katalog%20Track%20Desktop.png) | **Katalog 28 Track Teknologi**<br>![Katalog Track](screenshots/Katalog%20Track%20Mobile.png) |
| **Silabus Kurikulum Modul Mingguan**<br>![Silabus Track](screenshots/Silabus%20Track%20Desktop.png) | **Silabus Kurikulum Modul Mingguan**<br>![Silabus Track](screenshots/Silabus%20Track%20Mobile.png) |
| **Playground Kode Monaco & Eksekusi Browser**<br>![Playground](screenshots/Playground%20Desktop.png) | **Playground Kode Monaco & Eksekusi Browser**<br>![Playground](screenshots/Playground%20Mobile.png) |
| **Arena Ujian Kuis Pilihan Ganda**<br>![Quiz](screenshots/Quiz%20Desktop.png) | **Arena Ujian Kuis Pilihan Ganda**<br>![Quiz](screenshots/Quiz%20Mobile.png) |

---

## Fitur

- **28 Kurikulum Teknologi Terstruktur**: Roadmap belajar komprehensif mencakup Frontend (HTML5, CSS3, Tailwind, JS, TS, React, Vue, Next.js, Angular, Svelte), Backend (Go, Python, Django, Node.js, NestJS, PHP, Laravel, CodeIgniter 4, C#, Ruby on Rails, Spring Boot, Rust), Database (PostgreSQL, MySQL, MongoDB, Redis, GraphQL), dan DevOps (Docker).
- **Engine Eksekusi Kode Langsung di Browser**:
  - **Runtime WebAssembly (Wasm)**: Eksekusi Go via Yaegi & TinyGo, Python via Pyodide, PHP via php-wasm, Ruby via ruby-head-wasm, dan kueri relasional via sql.js.
  - **Sandbox Client-Side**: Transformasi kode React via Babel Standalone, compiler SFC Vue 3, Svelte 5, dan live preview HTML/CSS.
  - **Simulator Terminal In-Memory**: Simulator CLI Docker dengan lifecycle container/image, terminal memori Redis, dan engine dokumen MongoDB in-memory.
- **Ekstraksi Kode Contoh Otomatis**: Playground secara otomatis mendeteksi dan memuat potongan kode yang paling relevan dari materi markdown mingguan yang aktif sehingga pengguna bisa langsung menjalankannya.
- **Editor Monaco Terintegrasi**: Menggunakan engine editor VS Code di browser lengkap dengan penyorotan sintaks (*syntax highlighting*), nomor baris, dan pelipatan kode (*code folding*).
- **Workspace Layar Terpisah (Split-Screen)**: Panel baca materi dan panel coding interaktif yang dapat diubah ukurannya (*resizable pane*) secara fleksibel.
- **Bank Soal Kuis Pilihan Ganda**: Evaluasi pemahaman di setiap modul dengan penilaian instan, penjelasan kunci jawaban, dan rekapitulasi progres.
- **Pencarian Fuzzy Cepat (`Ctrl + K`)**: Pencarian dokumen kurikulum toleran saltik (*typo-tolerant*) berbasis Fuse.js yang mengindeks materi secara instan.
- **100% Client-Side & Tanpa Login**: Seluruh progres belajar, status modul selesai, dan skor kuis tersimpan aman di `localStorage` peramban tanpa kewajiban registrasi akun.

---

## Tech Stack

| Kategori | Teknologi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **Framework Utama** | React `19`, TypeScript `5.8`, Vite `6` | Fondasi Single Page Application modern dengan build cepat |
| **Styling & Animasi** | Tailwind CSS `v4`, Motion (Framer Motion v12) | Antarmuka responsif dengan transisi animasi halus |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`) | Engine editor kode di peramban dengan syntax highlighting |
| **Runtime WebAssembly** | Yaegi + TinyGo, Pyodide, php-wasm, ruby-head-wasm, sql.js | Interpreter bahasa pemrograman riil yang berjalan langsung di browser |
| **Sandbox & Compiler** | Babel Standalone, Vue SFC Compiler, Svelte Compiler | Transformasi komponen dan evaluasi sintaks client-side |
| **Parser Konten** | React-Markdown, Remark GFM, Fuse.js | Rendering dokumen format markdown dan pencarian fuzzy instan |

---

## Panduan Setup & Menjalankan Lokal

### 1. Prasyarat Sistem

- **Node.js**: Versi `18.x` atau `20.x`
- **npm** atau **pnpm**
- Database: **Tidak membutuhkan database eksternal** (seluruh data tersimpan secara client-side di `localStorage`).

### 2. Environment Variables

Tidak ada environment variable khusus yang dibutuhkan.

### 3. Instalasi Dependensi

```bash
# Clone repository
git clone https://github.com/widifirmaan/reactjs-tryngo-programming-learning.git
cd reactjs-tryngo-programming-learning

# Masuk ke direktori web app & install dependensi
cd apps/web
npm install
```

### 4. Menjalankan Server Lokal

```bash
# Jalankan server Vite development
npm run dev
```

Buka URL yang tertera di terminal (biasanya [http://localhost:5173](http://localhost:5173)) di browser Anda.

### 5. Panduan Uji Manual (Testing Checklist)

| No | Fitur | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Katalog Beranda** | Buka `http://localhost:5173` | Daftar 28 kartu teknologi tampil responsif lengkap dengan filter kategori |
| 2 | **Navigasi Modul** | Klik salah satu kartu (misal: Go), pilih level Pemula | Silabus kurikulum mingguan tampil terstruktur |
| 3 | **Code Playground** | Buka salah satu minggu materi | Editor Monaco termuat dengan kode contoh; klik tombol *Jalankan* dan amati output pada konsol |
| 4 | **Pencarian Cepat** | Tekan tombol shortcut `Ctrl + K` (atau `Cmd + K`) | Modal pencarian fuzzy terbuka dan langsung memfilter daftar modul materi |
| 5 | **Kuis Interaktif** | Buka menu Kuis, klik *Mulai Kuis*, pilih jawaban lalu klik *Lanjut* | Soal kuis tampil dengan pilihan A/B/C/D dan skor bertambah saat jawaban benar |
| 6 | **Penyimpanan Progres** | Klik tombol *Selesai* pada salah satu minggu materi, lalu refresh browser | Modul tetap bertanda centang hijau sesuai data di `localStorage` |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
