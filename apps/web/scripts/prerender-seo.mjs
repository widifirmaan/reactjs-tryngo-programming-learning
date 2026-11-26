import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '../dist');
const COURSE_DIR = path.join(__dirname, '../public/data/course');
const CANON = 'https://tryngo.widifirmaan.web.id';

const META = {
  html5: ['HTML5 Semantic Web', 'Panduan HTML5: markup semantik, aksesibilitas, dan membangun Corporate Web Portal yang SEO-friendly.'],
  css3: ['Modern CSS3 & Design Systems', 'Kuasai Flexbox, CSS Grid, Custom Properties, dan responsive E-Commerce Design System.'],
  tailwind: ['Tailwind CSS Modern Styling', 'Utility-first styling untuk membangun SaaS Landing Page dan Analytics Dashboard modern.'],
  javascript: ['JavaScript Deep Dive', 'Fondasi JavaScript ES6+, DOM manipulation, async event loop, dan build Interactive Kanban Board.'],
  typescript: ['TypeScript Engineering', 'Sistem tipe statis, generics, type narrowing, dan Financial Portfolio Engine.'],
  react: ['React 19 & Architecture', 'Hooks, state management, concurrent rendering, dan collaborative Notion-style block editor.'],
  nextjs: ['Next.js App Router', 'Server Components, Server Actions, caching, dan full-stack e-commerce storefront.'],
  vue: ['Vue.js 3 & Pinia', 'Composition API, reactivity system, Pinia state, dan enterprise CRM sales pipeline.'],
  svelte: ['Svelte 5 & Runes', 'Reaktivitas Runes modern, snippets, dan interactive 16-step web audio beat sequencer.'],
  angular: ['Angular Standalone & Signals', 'Arsitektur enterprise, signals, RxJS, dan clinical management suite.'],
  golang: ['Go (Golang) Systems', 'Goroutines, channels, low-latency concurrency, dan distributed reverse proxy gateway.'],
  rust: ['Rust Systems & Memory Safety', 'Ownership, borrow checker, concurrency, dan in-memory key-value store dengan WAL durability.'],
  csharp: ['C# & .NET 9', 'Object-oriented programming, LINQ, async/await, dan order fulfillment microservice.'],
  spring: ['Spring Boot 3 & Java 21', 'Spring Data JPA, virtual threads, Kafka, dan resilient banking transaction ledger.'],
  python: ['Python & Data APIs', 'Python modern, FastAPI, DuckDB, dan financial market sentiment intelligence engine.'],
  nodejs: ['Node.js 22 LTS Runtime', 'Streams, worker threads, WebSockets, dan real-time telemetry event gateway.'],
  nestjs: ['NestJS Modular Enterprise API', 'Dependency injection, Prisma ORM, microservices, dan enterprise REST/GraphQL engine.'],
  django: ['Django & Django REST Framework', 'ORM, multi-tenant architecture, Celery, dan subscription learning management system.'],
  php: ['Modern PHP 8.3+', 'PSR standards, attributes, reflection DI container, dan custom MVC microframework.'],
  laravel: ['Laravel 11 Ecosystem', 'Eloquent, queues, Reverb real-time, Stripe, dan multi-vendor marketplace.'],
  codeigniter4: ['CodeIgniter 4 Lightweight MVC', 'Arsitektur MVC ringan, security shields, dan academic school information system.'],
  rails: ['Ruby on Rails 8', 'Hotwire, Solid Stack, Active Record, dan real-time collaborative team workspace.'],
  postgresql: ['PostgreSQL Relational Mastery', 'ACID transactions, locking, partitioning, GIN indexing, dan high-concurrency e-commerce relational engine.'],
  mysql: ['MySQL & InnoDB Deep Dive', 'Clustered indexes, gap locks, GTID replication, dan high-availability financial ledger.'],
  mongodb: ['MongoDB NoSQL Architecture', 'BSON, $jsonSchema, aggregation pipelines, dan real-time IoT telemetry engine.'],
  redis: ['Redis In-Memory Powerhouse', 'Single-threaded event loop, Lua scripts, streams, dan gaming leaderboard cache.'],
  graphql: ['GraphQL API Architecture', 'SDL, DataLoader N+1 batching, subscriptions, dan unified federated e-commerce gateway.'],
  docker: ['Docker & Containerization', 'Namespaces, multi-stage distroless builds, Compose v2, dan production microservice cluster.'],
};

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPage({ title, desc, urlPath, heading }) {
  const abs = `${CANON}${urlPath === '/' ? '/' : urlPath}`;
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(desc);
  const safeHeading = escapeHtml(heading || title);
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/, `$1${safeTitle}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${safeDesc}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${abs}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${abs}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${safeTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${safeDesc}$2`)
    .replace(/(<meta name="twitter:url" content=")[^"]*(")/, `$1${abs}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${safeTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${safeDesc}$2`)
    .replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${safeHeading}</h1>`);
}

function writePage(urlPath, html) {
  const parts = urlPath.replace(/^\//, '').split('/').filter(Boolean);
  const dir = path.join(DIST, ...parts);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

const LEVEL_NAMES = {
  beginer: 'Pemula',
  intermediate: 'Menengah',
  advanced: 'Lanjutan',
};

let count = 0;
for (const [slug, [name, desc]] of Object.entries(META)) {
  const trackMeta = renderPage({
    title: `Belajar ${name} - Kurikulum Interaktif + Playground | Tryngo`,
    desc,
    urlPath: `/course/${slug}/`,
    heading: `Belajar ${name}`,
  });
  count++;
  writePage(`/course/${slug}`, trackMeta);

  const slugDir = path.join(COURSE_DIR, slug);
  if (!fs.existsSync(slugDir)) continue;
  const levels = fs.readdirSync(slugDir).filter(l => fs.statSync(path.join(slugDir, l)).isDirectory());
  for (const level of levels) {
    const idDir = path.join(slugDir, level, 'id');
    if (!fs.existsSync(idDir)) continue;
    for (const file of fs.readdirSync(idDir)) {
      const m = file.match(/^week(\d+)-(.*?)\.md$/);
      if (!m) continue;
      const topic = m[2].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      const levelLabel = LEVEL_NAMES[level] || level;
      const weekHtml = renderPage({
        title: `${name} Minggu ${m[1]}: ${topic} | Tryngo`,
        desc: `Pelajari ${topic} pada modul ${name} tingkat ${levelLabel} Minggu ${m[1]} lengkap dengan In-Browser Code Playground & Kuis.`,
        urlPath: `/course/${slug}/${level}/${m[1]}/`,
        heading: `${name} (${levelLabel} - Minggu ${m[1]}): ${topic}`,
      });
      writePage(`/course/${slug}/${level}/${m[1]}`, weekHtml);
      count++;
    }
  }
}
console.log(`Prerendered ${count} SEO pages under dist/course/`);
