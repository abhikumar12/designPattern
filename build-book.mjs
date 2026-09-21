// Generates book.html from every lesson's README.md + code files.
// Run:  node build-book.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const PATTERN_CATEGORIES = [
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

// Each PART is one major section of the book. Parts II-IV each get their own
// divider page (rendered from that module's own README.md) before their chapters.
const PARTS = [
  {
    title: 'Part I — Design Patterns',
    intro: null, // the root README already serves as the book's global intro
    categories: PATTERN_CATEGORIES,
  },
  {
    title: 'Part II — SOLID Principles',
    intro: 'solid-principles/README.md',
    categories: [{
      name: 'SOLID Principles',
      lessons: [
        'solid-principles/01-single-responsibility',
        'solid-principles/02-open-closed',
        'solid-principles/03-liskov-substitution',
        'solid-principles/04-interface-segregation',
        'solid-principles/05-dependency-inversion',
      ],
    }],
  },
  {
    title: 'Part III — LLD Practice',
    intro: 'lld-practice/README.md',
    categories: [{
      name: 'LLD Practice',
      lessons: [
        'lld-practice/01-parking-lot',
        'lld-practice/02-splitwise',
        'lld-practice/03-elevator-system',
        'lld-practice/04-rate-limiter',
        'lld-practice/05-movie-ticket-booking',
        'lld-practice/06-notification-service',
      ],
    }],
  },
  {
    title: 'Part IV — System Design (HLD)',
    intro: 'system-design/README.md',
    categories: [{
      name: 'System Design (HLD)',
      lessons: [
        'system-design/01-load-balancing',
        'system-design/02-caching-strategies',
        'system-design/03-consistent-hashing',
        'system-design/04-database-sharding-replication',
        'system-design/05-cap-theorem-and-consistency',
        'system-design/06-message-queues-async-processing',
      ],
    }],
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

    if (/^\d+\.\s+/.test(line) || /^-\s+/.test(line)) {
      const marker = /^\d+\.\s+/.test(line) ? 'ol' : 'ul';
      if (listType !== marker) { closeList(); html += `<${marker}>\n`; listType = marker; }
      let itemText = line.replace(marker === 'ol' ? /^\d+\.\s+/ : /^-\s+/, '');
      i++;
      // A wrapped list item continues on the NEXT line with no marker at all (just indented
      // text) — without consuming those lines here, each one falls through to the generic
      // paragraph case below, which calls closeList() and breaks numbering (every item after
      // a wrap would start a fresh <ol> back at "1.").
      while (
        i < lines.length && lines[i].trim() !== '' &&
        !/^\d+\.\s+/.test(lines[i]) && !/^-\s+/.test(lines[i]) &&
        !/^#{1,3}\s+/.test(lines[i]) && !lines[i].trim().startsWith('```')
      ) {
        itemText += ' ' + lines[i].trim();
        i++;
      }
      html += `<li>${inline(itemText)}</li>\n`;
      continue;
    }

    // GitHub-flavored table: a header row, a |---|---| separator row, then body rows.
    if (/^\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      closeList();
      const parseRow = (l) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
      const header = parseRow(line);
      i += 2; // skip header row + the |---|---| separator row
      const bodyRows = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) { bodyRows.push(parseRow(lines[i])); i++; }
      html += '<table><thead><tr>' + header.map((c) => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>\n';
      for (const row of bodyRows) html += '<tr>' + row.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>\n';
      html += '</tbody></table>\n';
      continue;
    }

    if (line.trim() === '') {
      // A blank line WITHIN a list (common when list items span multiple lines) shouldn't
      // close the list — only a blank line NOT followed by another item of the same type
      // should. Otherwise every item after a blank line starts a fresh <ol> at "1." again.
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j++;
      const nextLine = lines[j] ?? '';
      const continuesList = listType === 'ol' ? /^\d+\.\s+/.test(nextLine)
        : listType === 'ul' ? /^-\s+/.test(nextLine)
        : false;
      if (!continuesList) closeList();
      i++; continue;
    }

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
  if (filename === '1-naive.js') return `❌ ${filename} — the naive approach`;
  if (filename === '1-violation.js') return `❌ ${filename} — the violation`;
  if (filename === '2-fixed.js') return `✅ ${filename} — the fix`;
  if (filename === 'design.js') return `✅ ${filename} — the full design`;
  if (filename === 'simulate.js') return `✅ ${filename} — the simulation`;
  return `✅ ${filename} — the pattern`;
}

function readLesson(dir) {
  const files = readdirSync(join(root, dir)).sort();
  const readme = files.includes('README.md') ? readFileSync(join(root, dir, 'README.md'), 'utf8') : '';
  const codeFiles = files.filter((f) => f.endsWith('.js'));
  const titleMatch = readme.match(/^#\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1].replace(/^(Lesson|SOLID|LLD|HLD)\s*\d+\s*—\s*/, '') : dir;
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

for (const part of PARTS) {
  toc += `<div class="toc-part"><h2>${esc(part.title)}</h2></div>\n`;

  if (part.intro) {
    const partIntroMd = readFileSync(join(root, part.intro), 'utf8');
    chapters += `<section class="part-divider">\n`;
    chapters += `<div class="part-kicker">${esc(part.title)}</div>\n`;
    chapters += mdToHtml(partIntroMd);
    chapters += `</section>\n`;
  }

  for (const cat of part.categories) {
    toc += `<div class="toc-cat"><h3>${esc(cat.name)}</h3><ul>\n`;
    for (const dir of cat.lessons) {
      chapterNum++;
      const lesson = readLesson(dir);
      const anchorId = dir.replace(/\//g, '-');
      toc += `<li><a href="#ch-${anchorId}">${chapterNum}. ${esc(lesson.title)}</a></li>\n`;

      chapters += `<section class="chapter" id="ch-${anchorId}">\n`;
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
  .toc-part h2 { font-family: Arial, sans-serif; font-size: 13pt; color: #1c1c1e; margin: 26px 0 2px; padding-top: 14px; border-top: 1px solid #ddd; }
  .toc-part:first-of-type h2 { border-top: none; padding-top: 0; }
  .toc-cat h3 { font-family: Arial, sans-serif; font-size: 11pt; text-transform: uppercase; letter-spacing: 1px; color: #7a5cff; margin: 16px 0 6px; }
  .toc-cat ul { list-style: none; margin: 0; padding: 0; }
  .toc-cat li { padding: 3px 0; font-size: 11.5pt; }
  .toc-cat a { color: #1c1c1e; text-decoration: none; }

  .part-divider { page-break-before: always; padding-top: 15vh; }
  .part-kicker { font-family: Arial, sans-serif; font-size: 11pt; text-transform: uppercase; letter-spacing: 3px; color: #7a5cff; margin-bottom: 14px; }
  .part-divider h1 { font-size: 28pt; margin: 0 0 16px; }
  .part-divider h2 { font-size: 14pt; margin-top: 20px; font-family: Arial, sans-serif; }
  .part-divider p { margin: 8px 0; }
  .part-divider pre.mdcode { background: #f4f3fb; border: 1px solid #e3e1f5; border-radius: 6px; padding: 10px 14px; font-size: 9.3pt; white-space: pre-wrap; }
  table { border-collapse: collapse; margin: 12px 0; font-size: 9.8pt; width: 100%; }
  th, td { border: 1px solid #ddd; padding: 5px 8px; text-align: left; vertical-align: top; }
  th { background: #f4f3fb; font-family: Arial, sans-serif; font-size: 9pt; }
  .part-divider ul, .part-divider ol { margin: 6px 0 6px 22px; padding: 0; }

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
  <div class="kicker">A hands-on JavaScript interview-prep course</div>
  <h1>Design Patterns</h1>
  <div class="sub">23 classic (Gang of Four) patterns, the 5 SOLID principles behind them, 6 LLD machine-coding problems that apply them, and 6 System Design (HLD) topics for scaling beyond one machine.</div>
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
