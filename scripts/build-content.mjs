import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { marked } from 'marked';

const root = process.cwd();
const generatedDirectory = resolve(root, 'src/generated');

const topicDetails = {
  1: { icon: 'git-branch', summary: 'Make programs decide.' },
  2: { icon: 'arrows-clockwise', summary: 'Repeat with purpose.' },
  3: { icon: 'text-aa', summary: 'Shape and search text.' },
  4: { icon: 'brackets-curly', summary: 'Turn steps into tools.' },
  5: { icon: 'list-bullets', summary: 'Work with collections.' },
  6: { icon: 'arrows-left-right', summary: 'Model fixed records.' },
  7: { icon: 'circles-three-plus', summary: 'Handle unique values.' },
  8: { icon: 'tree-structure', summary: 'Look up data by key.' },
  9: { icon: 'lightning', summary: 'Write expressive loops.' },
  10: { icon: 'package', summary: 'Organise reusable code.' },
  11: { icon: 'file-code', summary: 'Save and read data.' },
  12: { icon: 'shield-check', summary: 'Make programs resilient.' },
  13: { icon: 'cube', summary: 'Design with objects.' }
};

const collectionLabels = {
  topic: 'Topic lesson',
  guide: 'Learning guide',
  'project-pack': 'Project pack',
  'topic-project': 'Topic project',
  'topic-project-guide': 'Topic project guide'
};

function read(relativePath) {
  return readFileSync(resolve(root, relativePath), 'utf8');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function stripInlineMarkdown(value) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_~]/g, '')
    .replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(value) {
  return stripInlineMarkdown(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'section';
}

function titleFromMarkdown(source) {
  const title = source.match(/^#\s+(.+)$/m)?.[1];
  if (!title) throw new Error('Every content file must start with a level-one heading.');
  return stripInlineMarkdown(title);
}

function shortTitle(title) {
  return title
    .replace(/^Topic\s+\d+\s+[—-]\s+/i, '')
    .replace(/\s+[—-]\s+2 basic \+ 1 hard$/i, '')
    .replace(/^Practice Projects\s+[—-]\s+/i, '')
    .replace(/^More Practice Projects\s+[—-]\s+/i, '')
    .trim();
}

function headingData(source) {
  const seen = new Map();
  const headings = [];
  const linePattern = /^(#{1,6})\s+(.+?)\s*#*\s*$/gm;
  let match;
  while ((match = linePattern.exec(source))) {
    const depth = match[1].length;
    const text = stripInlineMarkdown(match[2]);
    const base = slugify(text);
    const count = seen.get(base) || 0;
    seen.set(base, count + 1);
    headings.push({ depth, text, id: count ? `${base}-${count + 1}` : base, sourceIndex: match.index, contentStart: match.index + match[0].length });
  }
  return headings;
}

function wrapHintGroups(html) {
  return html.replace(/(?:<p><strong>Hint(?:\s+\d+)?:<\/strong>[\s\S]*?<\/p>\s*){1,}/g, (block) => {
    const count = (block.match(/<p><strong>Hint/g) || []).length;
    const label = count === 1 ? 'Show hint' : `Show ${count} hints`;
    return `<details class="hint-group"><summary>${label}</summary><div class="hint-body">${block}</div></details>\n`;
  });
}

function renderMarkdown(source, headings) {
  let index = 0;
  const html = marked.parse(source, { gfm: true, breaks: false, mangle: false, headerIds: false });
  const withIds = html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g, (full, level, inner) => {
    const heading = headings[index++];
    if (!heading) return full;
    return `<h${level} id="${heading.id}"><a href="#${heading.id}" aria-label="Link to ${escapeHtml(heading.text)}">${inner}</a></h${level}>`;
  });
  return wrapHintGroups(withIds);
}

function searchableText(source) {
  return source
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function createDocument({ id, sourcePath, route, collection, number, details }) {
  const source = read(sourcePath);
  const title = titleFromMarkdown(source);
  const toc = headingData(source);
  return {
    id,
    sourcePath,
    route,
    collection,
    collectionLabel: collectionLabels[collection],
    number,
    title,
    shortTitle: details?.shortTitle || shortTitle(title),
    summary: details?.summary || 'Practical Python challenges and guidance.',
    icon: details?.icon || 'code',
    toc,
    renderedHtml: renderMarkdown(source, toc),
    source
  };
}

const mainTopicFilenames = {
  1: 'conditional-statements', 2: 'loops', 3: 'strings', 4: 'functions', 5: 'lists', 6: 'tuples', 7: 'sets',
  8: 'dictionaries', 9: 'comprehensions', 10: 'modules-and-packages', 11: 'file-handling', 12: 'exception-handling', 13: 'oop'
};
const topicProjectFilenames = { ...mainTopicFilenames, 10: 'modules' };

const documents = [
  createDocument({ id: 'guide', sourcePath: 'README.md', route: 'pages/guide.html', collection: 'guide', details: { shortTitle: 'How the path works', summary: 'Plan, method, and recommendations.', icon: 'compass-tool' } }),
  ...Array.from({ length: 13 }, (_, index) => {
    const number = index + 1;
    const file = String(number).padStart(2, '0');
    const slug = mainTopicFilenames[number];
    return createDocument({ id: `topic-${file}`, sourcePath: `${file}-${slug}.md`, route: `pages/topics/${slug}.html`, collection: 'topic', number, details: topicDetails[number] });
  }),
  ...[
    ['practice-projects', 'Practice projects — Set 1', 'Lists and functions: 11 real-world programs.'],
    ['more-practice-projects', 'More practice projects — Set 2', 'Eleven more list-and-function projects.'],
    ['projects-tuples-sets-dicts', 'Practice projects — Set 3', 'Tuples, sets, and dictionaries in context.'],
    ['projects-comprehensions-to-oop', 'Practice projects — Set 4', 'From comprehensions to OOP systems.']
  ].map(([slug, title, summary], index) => createDocument({ id: `project-pack-${index + 1}`, sourcePath: `projects/${slug}.md`, route: `pages/projects/${slug}.html`, collection: 'project-pack', number: index + 1, details: { shortTitle: title, summary, icon: 'rocket-launch' } })),
  createDocument({ id: 'topic-project-guide', sourcePath: 'topic-projects/README.md', route: 'pages/topic-projects.html', collection: 'topic-project-guide', details: { shortTitle: 'Topic project guide', summary: 'How to build one-topic projects.', icon: 'map-trifold' } }),
  ...Array.from({ length: 13 }, (_, index) => {
    const number = index + 1;
    const file = String(number).padStart(2, '0');
    const slug = topicProjectFilenames[number];
    return createDocument({ id: `topic-project-${file}`, sourcePath: `topic-projects/${file}-${slug}.md`, route: `pages/topic-projects/${slug}.html`, collection: 'topic-project', number, details: { ...topicDetails[number], summary: 'Two basics and one hard challenge.' } });
  })
];

function rootPrefixFor(route) {
  const outputPath = resolve(root, route);
  return relative(dirname(outputPath), root).replaceAll('\\', '/') || '.';
}

function pageTemplate(document) {
  const rootPrefix = `${rootPrefixFor(document.route)}/`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(document.summary)}" />
    <title>${escapeHtml(document.title)} · Python Practice Path</title>
    <style>html{visibility:hidden;opacity:0}html.ready{visibility:visible;opacity:1;transition:opacity .14s ease}html.ready body{background:#f8f6f1;color:#1d1c1a}html.ready[data-theme="dark"] body{background:#171716;color:#f4f0e9}#app{min-height:100vh}</style>
    <script>
      try {
        var saved = localStorage.getItem('python-practice-theme');
        var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (e) {}
    </script>
    <link rel="modulepreload" href="${rootPrefix}src/main.js" />
  </head>
  <body data-page="document" data-document-id="${document.id}" data-root-prefix="${rootPrefix}">
    <div id="raw-content">${document.renderedHtml}</div>
    <div id="app"></div>
    <script type="module" src="${rootPrefix}src/main.js"></script>
    <noscript><style>html{visibility:visible;opacity:1}#app{opacity:1}</style></noscript>
  </body>
</html>`;
}

function writePage(document) {
  const outputPath = resolve(root, document.route);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, pageTemplate(document));
}

function buildSearchIndex() {
  const entries = [];
  for (const document of documents) {
    const firstSection = document.toc[0]?.contentStart ?? 0;
    entries.push({ title: document.title, heading: '', text: searchableText(document.source.slice(0, firstSection)), route: document.route, hash: '', collectionLabel: document.collectionLabel });
    for (const [index, heading] of document.toc.entries()) {
      const nextHeading = document.toc[index + 1];
      const section = document.source.slice(heading.contentStart, nextHeading?.sourceIndex);
      entries.push({ title: document.title, heading: heading.text, text: searchableText(section), route: document.route, hash: `#${heading.id}`, collectionLabel: document.collectionLabel });
    }
  }
  return entries;
}

mkdirSync(generatedDirectory, { recursive: true });
documents.forEach(writePage);

const clientDocuments = documents.map(({ renderedHtml, source, ...document }) => ({
  ...document,
  toc: document.toc.map(({ sourceIndex, contentStart, ...heading }) => heading)
}));
const searchIndex = buildSearchIndex();
writeFileSync(resolve(generatedDirectory, 'site-data.js'), `export default ${JSON.stringify({ documents: clientDocuments }, null, 2)};\n`);
writeFileSync(resolve(generatedDirectory, 'search-index.json'), `${JSON.stringify(searchIndex)}\n`);

console.log(`Built ${documents.length} content pages and ${searchIndex.length} search entries.`);
