// Generates book.html from every lesson's README.md + code files.
// Run:  node build-book.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const CATEGORIES = [
  {
    name: 'Creational Patterns',
    subtitle: 'How objects get created',
    lessons: ['04-singleton', '05-factory-method', '06-abstract-factory', '07-builder', '08-prototype'],
  },
  {
    name: 'Structural Patterns',
    subtitle: 'How objects are composed together',
    lessons: ['09-adapter', '10-bridge', '11-composite', '12-decorator', '13-facade', '14-flyweight', '15-proxy'],
  },
  {
    name: 'Behavioral Patterns',
    subtitle: 'How objects communicate and share responsibility',
    lessons: [
      '01-strategy', '02-observer', '03-command',
      '16-chain-of-responsibility', '17-iterator', '18-mediator', '19-memento',
      '20-state', '21-template-method', '22-visitor', '23-interpreter',
    ],
  },
];

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ---------- tiny markdown -> HTML (only the subset our READMEs use) ----------
function mdToHtml(md) {
  const lines = md.split('\n');
  let html = '';
  let i = 0;
  let inCode = false, codeBuf = [];
  let listType = null; // 'ul' | 'ol' | null

  function closeList() {
    if (listType) { html += `</${listType}>\n`; listType = null; }
  }
  function inline(text) {
    text = esc(text);
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    return text;
  }

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith('```')) {
      if (!inCode) { inCode = true; codeBuf = []; }
      else {
        closeList();
        html += `<pre class="mdcode"><code>${esc(codeBuf.join('\n'))}</code></pre>\n`;
        inCode = false;
      }
      i++; continue;
    }
    if (inCode) { codeBuf.push(line); i++; continue; }

    if (/^#\s+/.test(line)) { closeList(); html += `<h1>${inline(line.replace(/^#\s+/, ''))}</h1>\n`; i++; continue; }
    if (/^##\s+/.test(line)) { closeList(); html += `<h2>${inline(line.replace(/^##\s+/, ''))}</h2>\n`; i++; continue; }
    if (/^###\s+/.test(line)) { closeList(); html += `<h3>${inline(line.replace(/^###\s+/, ''))}</h3>\n`; i++; continue; }

    if (/^\d+\.\s+/.test(line)) {
      if (listType !== 'ol') { closeList(); html += '<ol>\n'; listType = 'ol'; }
      html += `<li>${inline(line.replace(/^\d+\.\s+/, ''))}</li>\n`;
      i++; continue;
    }
    if (/^-\s+/.test(line)) {
      if (listType !== 'ul') { closeList(); html += '<ul>\n'; listType = 'ul'; }
      html += `<li>${inline(line.replace(/^-\s+/, ''))}</li>\n`;
      i++; continue;
    }
    if (line.trim() === '') { closeList(); i++; continue; }

    closeList();
    html += `<p>${inline(line)}</p>\n`;
    i++;
  }
  closeList();
  return html;
}

// ---------- tiny JS syntax highlighter (comments + keywords + strings) ----------
// Single-pass tokenizer: scans the RAW source once and only ever escapes/wraps
// plain source text. Running separate regex.replace() passes on top of each
// other's HTML output is what breaks highlighters — a later pass (e.g.
// keywords) can match text inside an earlier pass's own <span class="..."> tag.
const TOKEN_RE = /(\/\/[^\n]*)|(`(?:[^`\\]|\\.)*`|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|\b(class|constructor|function|const|let|var|return|if|else|throw|new|extends|static|this|super|true|false|null|undefined|for|while|catch|try|typeof|instanceof|of|in|get|set|default|export|import|async|await)\b/g;

function highlightJs(code) {
  let result = '';
  let lastIndex = 0;
  let m;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(code))) {
    result += esc(code.slice(lastIndex, m.index));
    if (m[1]) result += `<span class="cmt">${esc(m[1])}</span>`;
    else if (m[2]) result += `<span class="str">${esc(m[2])}</span>`;
    else if (m[3]) result += `<span class="kw">${esc(m[3])}</span>`;
    lastIndex = TOKEN_RE.lastIndex;
  }
  result += esc(code.slice(lastIndex));
  return result;
}

function fileLabel(filename) {
  if (filename === 'exercise.js') return '🎯 exercise.js — your turn';
  if (/^1-naive\.js$/.test(filename)) return `❌ ${filename} — the naive approach`;
  return `✅ ${filename} — the pattern`;
}

function readLesson(dir) {
  const files = readdirSync(join(root, dir)).sort();
  const readme = files.includes('README.md') ? readFileSync(join(root, dir, 'README.md'), 'utf8') : '';
  const codeFiles = files.filter((f) => f.endsWith('.js'));
  const titleMatch = readme.match(/^#\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1].replace(/^Lesson\s*\d+\s*—\s*/, '') : dir;
  const bodyMd = readme.replace(/^#\s*.+$/m, '').trim();
  return { dir, title, bodyHtml: mdToHtml(bodyMd), codeFiles: codeFiles.map((f) => ({
    name: f,
    label: fileLabel(f),
    code: readFileSync(join(root, dir, f), 'utf8'),
  })) };
}

const introMd = readFileSync(join(root, 'README.md'), 'utf8');

let toc = '';
let chapters = '';
let chapterNum = 0;

for (const cat of CATEGORIES) {
  toc += `<div class="toc-cat"><h3>${esc(cat.name)}</h3><ul>\n`;
  for (const dir of cat.lessons) {
    chapterNum++;
    const lesson = readLesson(dir);
    toc += `<li><a href="#ch-${dir}">${chapterNum}. ${esc(lesson.title)}</a></li>\n`;

    chapters += `<section class="chapter" id="ch-${dir}">\n`;
    chapters += `<div class="chapter-kicker">${esc(cat.name)}</div>\n`;
    chapters += `<h1 class="chapter-title">${chapterNum}. ${esc(lesson.title)}</h1>\n`;
    chapters += lesson.bodyHtml;
    for (const f of lesson.codeFiles) {
      chapters += `<h4 class="filename">${esc(f.label)}</h4>\n`;
      chapters += `<pre class="code"><code>${highlightJs(f.code)}</code></pre>\n`;
    }
    chapters += `</section>\n`;
  }
  toc += `</ul></div>\n`;
}

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Design Patterns Course</title>
<style>
  @page { size: A4; margin: 22mm 18mm; }
  * { box-sizing: border-box; }
  body {
    font-family: Georgia, 'Times New Roman', serif;
    color: #1c1c1e;
    line-height: 1.55;
    font-size: 11.5pt;
  }
  code, pre, .code, .mdcode {
    font-family: 'Consolas', 'SFMono-Regular', Menlo, monospace;
  }
  .cover {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    page-break-after: always;
  }
  .cover .kicker { letter-spacing: 4px; text-transform: uppercase; color: #7a5cff; font-size: 12pt; margin-bottom: 18px; font-family: Arial, sans-serif; }
  .cover h1 { font-size: 40pt; margin: 0 0 12px; }
  .cover .sub { font-size: 14pt; color: #555; max-width: 520px; margin-bottom: 30px; }
  .cover .meta { font-size: 10pt; color: #888; font-family: Arial, sans-serif; }

  .intro { page-break-after: always; }
  .intro h1 { font-size: 22pt; }
  .intro h2 { font-size: 15pt; margin-top: 22px; }
  .intro pre.mdcode { background: #f4f3fb; border: 1px solid #e3e1f5; border-radius: 6px; padding: 10px 14px; font-size: 9.3pt; white-space: pre-wrap; }

  .toc { page-break-after: always; }
  .toc h1 { font-size: 22pt; margin-bottom: 4px; }
  .toc-cat h3 { font-family: Arial, sans-serif; font-size: 11pt; text-transform: uppercase; letter-spacing: 1px; color: #7a5cff; margin: 20px 0 6px; }
  .toc-cat ul { list-style: none; margin: 0; padding: 0; }
  .toc-cat li { padding: 3px 0; font-size: 11.5pt; }
  .toc-cat a { color: #1c1c1e; text-decoration: none; }

  .chapter { page-break-before: always; }
  .chapter-kicker { font-family: Arial, sans-serif; font-size: 9pt; text-transform: uppercase; letter-spacing: 2px; color: #7a5cff; margin-bottom: 6px; }
  .chapter-title { font-size: 22pt; margin: 0 0 16px; border-bottom: 2px solid #1c1c1e; padding-bottom: 10px; }
  .chapter h2 { font-size: 13.5pt; margin-top: 20px; font-family: Arial, sans-serif; }
  .chapter p { margin: 8px 0; }
  .chapter pre.mdcode {
    background: #f4f3fb; border: 1px solid #e3e1f5; border-radius: 6px;
    padding: 10px 14px; font-size: 9.3pt; white-space: pre-wrap; margin: 10px 0;
  }
  .chapter ul, .chapter ol { margin: 6px 0 6px 22px; padding: 0; }
  .chapter li { margin: 3px 0; }
  /* Inline code in prose only. Scoped OFF of pre > code (full code blocks) —
     an inline element with padding wrapping many lines paints an overlapping
     padding box per wrapped line, which looked like smeared/corrupted text. */
  code { background: #f0eefb; padding: 1px 5px; border-radius: 3px; font-size: 0.92em; }
  pre code { background: none; padding: 0; border-radius: 0; font-size: inherit; }

  .filename {
    font-family: Arial, sans-serif; font-size: 10pt; font-weight: bold;
    background: #1c1c1e; color: #fff; display: inline-block;
    padding: 4px 10px; border-radius: 4px 4px 0 0; margin: 18px 0 0;
  }
  pre.code {
    background: #1e1e2e; color: #e8e6f5; font-size: 8.6pt; line-height: 1.5;
    padding: 12px 14px; border-radius: 0 4px 4px 4px; overflow-x: auto;
    white-space: pre-wrap; word-break: break-word; margin: 0 0 4px;
  }
  pre.code .kw { color: #ff9d76; }
  pre.code .str { color: #a8e0a0; }
  pre.code .cmt { color: #8a8aa3; font-style: italic; }

  a { color: #5a3fd6; }
</style>
</head>
<body>

<div class="cover">
  <div class="kicker">A hands-on JavaScript course</div>
  <h1>Design Patterns</h1>
  <div class="sub">All 23 classic (Gang of Four) design patterns — the naive problem, the pattern that fixes it, and an exercise for each.</div>
  <div class="meta">Compiled for reading — run the code from the original project to experiment.</div>
</div>

<div class="intro">
${mdToHtml(introMd)}
</div>

<div class="toc">
<h1>Table of Contents</h1>
${toc}
</div>

${chapters}

</body>
</html>`;

writeFileSync(join(root, 'book.html'), html, 'utf8');
console.log('book.html written,', chapterNum, 'chapters');
