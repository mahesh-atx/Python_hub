import '@fontsource-variable/manrope';
import '@fontsource-variable/jetbrains-mono';
import './icons.css';
import './styles.css';
import searchIndexUrl from './generated/search-index.json?url';
import siteData from './generated/site-data.js';

const app = document.querySelector('#app');
const page = document.body.dataset.page;
const documentId = document.body.dataset.documentId;
const rootPrefix = document.body.dataset.rootPrefix || './';
const rawContent = document.querySelector('#raw-content');
const documentContentHtml = rawContent?.innerHTML || '';
rawContent?.remove();
const currentDocument = siteData.documents.find((item) => item.id === documentId);
const icon = (name, label = '') => `<i class="ph ph-${name}"${label ? ` aria-label="${label}"` : ' aria-hidden="true"'}></i>`;

function absoluteRoute(route) {
  if (route === '#') return '#';
  if (route.startsWith('#')) return route;
  return `${rootPrefix}${route}`;
}

function homeAnchor(hash) {
  return page === 'home' ? hash : absoluteRoute(`index.html${hash}`);
}

function getTheme() {
  return localStorage.getItem('python-practice-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem('python-practice-theme', theme);
  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-label', label);
    button.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
  });
}

function pageLink(route, label, className = '') {
  return `<a class="${className}" href="${route === '#' ? '#' : absoluteRoute(route)}">${label}</a>`;
}

function documentHref(document) {
  return absoluteRoute(document.route);
}

function groupedTopics() {
  return siteData.documents.filter((item) => item.collection === 'topic');
}

function projectPacks() {
  return siteData.documents.filter((item) => item.collection === 'project-pack');
}

function topicProjects() {
  return siteData.documents.filter((item) => item.collection === 'topic-project');
}

function railList(items, badge) {
  return `<ol>${items.map((item) => `<li class="${item.id === documentId ? 'is-current' : ''}"><a ${item.id === documentId ? 'aria-current="page" ' : ''}href="${documentHref(item)}"><span>${badge(item)}</span><span>${item.shortTitle}</span></a></li>`).join('')}</ol>`;
}

function drawerLinks(items, prefix) {
  return items.map((item) => `<a class="${item.id === documentId ? 'is-current' : ''}"${item.id === documentId ? ' aria-current="page"' : ''} href="${documentHref(item)}">${prefix(item)}${item.shortTitle}</a>`).join('');
}

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="${absoluteRoute('index.html')}" aria-label="Python Practice Path home">
        <span class="brand-mark">&lt;/&gt;</span>
        <span>Python<span>Path</span></span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${pageLink(homeAnchor('#path'), 'Learning path')}
        ${pageLink('pages/projects.html', 'Projects')}
        ${pageLink('pages/guide.html', 'Method')}
      </nav>
      <div class="header-actions">
        <button class="icon-button" type="button" data-search-open aria-label="Search the curriculum">${icon('magnifying-glass')}</button>
        <button class="icon-button" type="button" data-theme-toggle aria-label="Switch color theme"></button>
        <button class="icon-button mobile-menu-button" type="button" data-menu-open aria-label="Open curriculum navigation">${icon('list')}</button>
      </div>
    </header>`;
}

function isProjectContext() {
  return ['project-pack', 'topic-project', 'topic-project-guide'].includes(currentDocument?.collection);
}

function mobileDrawer() {
  const projectList = `
      <span class="drawer-label">Project packs · ${projectPacks().length}</span>
      ${drawerLinks(projectPacks(), (pack) => `Set ${pack.number} · `)}
      <span class="drawer-label">Topic projects · ${topicProjects().length}</span>
      ${drawerLinks(topicProjects(), (challenge) => `${challenge.number}. `)}`;
  const topicList = `
      <span class="drawer-label">Topics · ${groupedTopics().length}</span>
      ${drawerLinks(groupedTopics(), (topic) => `${topic.number}. `)}`;
  return `
    <div class="drawer-backdrop" data-menu-close></div>
    <aside class="mobile-drawer" aria-label="Curriculum navigation" aria-hidden="true">
      <div class="drawer-top"><span class="eyebrow">Curriculum</span><button class="icon-button" type="button" data-menu-close aria-label="Close navigation">${icon('x')}</button></div>
      <a href="${homeAnchor('#path')}">Full learning path</a>
      <a href="${absoluteRoute('pages/projects.html')}">Project hub</a>
      <a href="${absoluteRoute('pages/guide.html')}">How to practise</a>
      ${page === 'projects' || isProjectContext() ? projectList : topicList}
    </aside>`;
}

function searchDialog() {
  return `
    <dialog class="search-dialog" data-search-dialog aria-labelledby="search-title">
      <div class="search-panel">
        <div class="search-top">
          <div class="search-field">${icon('magnifying-glass')}<input data-search-input id="search-input" type="search" placeholder="Search lessons, questions, projects…" autocomplete="off" /><kbd>Esc</kbd></div>
          <button class="icon-button" type="button" data-search-close aria-label="Close search">${icon('x')}</button>
        </div>
        <p class="search-note" id="search-title">Search all lessons, project packs, and topic projects.</p>
        <div class="search-results" data-search-results></div>
      </div>
    </dialog>`;
}

function topicRail() {
  return `
    <aside class="curriculum-rail" aria-label="Topic navigation">
      <div class="rail-heading"><span class="eyebrow">Python path</span><a href="${homeAnchor('#path')}">View path ${icon('arrow-up-right')}</a></div>
      ${railList(groupedTopics(), (topic) => String(topic.number).padStart(2, '0'))}
      <div class="rail-foot-link">${icon('rocket-launch')}<a href="${absoluteRoute('pages/projects.html')}">Project hub</a></div>
    </aside>`;
}

function projectRail() {
  const packs = projectPacks();
  const challenges = topicProjects();
  return `
    <aside class="curriculum-rail" aria-label="Project navigation">
      <div class="rail-heading"><span class="eyebrow">Projects</span><a href="${absoluteRoute('pages/projects.html')}">View hub ${icon('arrow-up-right')}</a></div>
      <p class="rail-label">Project packs · ${packs.length}</p>
      ${railList(packs, (pack) => `S${pack.number}`)}
      <p class="rail-label">Topic projects · ${challenges.length}</p>
      ${railList(challenges, (challenge) => String(challenge.number).padStart(2, '0'))}
      <div class="rail-foot-link">${icon('arrow-left')}<a href="${homeAnchor('#path')}">Learning path</a></div>
    </aside>`;
}

function tableOfContents() {
  const toc = currentDocument?.toc || [];
  if (!toc.length) return '';
  const items = toc.filter((heading, index) => heading.depth === 2 || (heading.depth === 1 && index > 0));
  if (!items.length) return '';
  return `<aside class="page-toc" aria-label="On this page"><p class="eyebrow">On this page</p><ol>${items.map((heading) => `<li class="toc-depth-${heading.depth}"><a href="#${heading.id}">${heading.text}</a></li>`).join('')}</ol></aside>`;
}

function neighbours() {
  if (!currentDocument || typeof currentDocument.number !== 'number') return {};
  const pool = siteData.documents
    .filter((item) => item.collection === currentDocument.collection && typeof item.number === 'number')
    .sort((a, b) => a.number - b.number);
  if (pool.length < 2) return {};
  const index = pool.findIndex((item) => item.id === currentDocument.id);
  const labels = {
    topic: ['Previous topic', 'Next topic'],
    'project-pack': ['Previous pack', 'Next pack'],
    'topic-project': ['Previous challenge', 'Next challenge']
  }[currentDocument.collection] || ['Previous', 'Next'];
  return {
    previous: index > 0 ? { document: pool[index - 1], label: labels[0] } : null,
    next: index < pool.length - 1 ? { document: pool[index + 1], label: labels[1] } : null
  };
}

function topicProjectCta() {
  if (currentDocument?.collection !== 'topic' || typeof currentDocument.number !== 'number') return '';
  const challenge = siteData.documents.find((item) => item.collection === 'topic-project' && item.number === currentDocument.number);
  if (!challenge) return '';
  return `
      <div class="topic-project-cta">
        <div class="cta-left">
          <span class="cta-icon" aria-hidden="true">${icon('rocket-launch')}</span>
          <div class="cta-copy">
            <p class="eyebrow">Next</p>
            <h3>${challenge.shortTitle} project</h3>
          </div>
        </div>
        <a class="button button-primary cta-action" href="${documentHref(challenge)}">Open ${icon('arrow-right')}</a>
      </div>`;
}

function siteFooter() {
  return `<footer class="site-footer"><span>Python Practice Path</span><nav aria-label="Footer navigation"><a href="${homeAnchor('#path')}">Learning path</a><a href="${absoluteRoute('pages/projects.html')}">Projects</a><a href="${absoluteRoute('pages/guide.html')}">Method</a></nav><span>Write it. Test it. Own it.</span></footer>`;
}

function documentShell() {
  const { previous, next } = neighbours();
  return `
    ${header()}
    <a class="skip-link" href="#main-content">Skip to content</a>
    <main class="document-layout" id="main-content">
      ${isProjectContext() ? projectRail() : topicRail()}
      <article class="document-article">
        <div class="document-meta">
          <a href="${absoluteRoute('index.html')}">Python Practice Path</a><span>/</span><span>${currentDocument?.collectionLabel || 'Guide'}</span>
        </div>
        ${documentContentHtml || '<p>Document not found.</p>'}
        <div class="document-footer">
          ${previous ? `<a class="page-step previous" href="${documentHref(previous.document)}">${icon('arrow-left')}<span><small>${previous.label}</small>${previous.document.shortTitle}</span></a>` : '<span></span>'}
          ${next ? `<a class="page-step next" href="${documentHref(next.document)}"><span><small>${next.label}</small>${next.document.shortTitle}</span>${icon('arrow-right')}</a>` : ''}
        </div>
        ${topicProjectCta()}
      </article>
      ${tableOfContents()}
    </main>
    ${mobileDrawer()}
    ${searchDialog()}`;
}

function topicCard(topic) {
  return `<a class="topic-card" href="${documentHref(topic)}"><span class="topic-number">${String(topic.number).padStart(2, '0')}</span><span class="topic-card-icon">${icon(topic.icon)}</span><span class="topic-card-copy"><strong>${topic.shortTitle}</strong><small>${topic.summary}</small></span><span class="topic-card-arrow">${icon('arrow-up-right')}</span></a>`;
}

function homeShell() {
  const topics = groupedTopics();
  const packs = projectPacks();
  const challenges = topicProjects();
  const questionCount = siteData.documents
    .flatMap((item) => item.toc || [])
    .filter((heading) => /^Q\d+ ·/.test(heading.text)).length;
  const packProjectCount = siteData.documents
    .filter((item) => item.collection === 'project-pack')
    .flatMap((item) => item.toc || [])
    .filter((heading) => /^P\d+ ·/.test(heading.text)).length;
  const projectCount = packProjectCount + challenges.length * 3;
  const statsLine = `${topics.length} topics · ${questionCount} questions · ${projectCount}+ projects`;
  return `
    ${header()}
    <a class="skip-link" href="#main-content">Skip to content</a>
    <main id="main-content">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-orbit orbit-one" aria-hidden="true"></div><div class="hero-orbit orbit-two" aria-hidden="true"></div>
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow"><span></span> Learn by building</p>
          <h1 id="hero-title">Stop watching.<br /><em>Start writing.</em></h1>
          <p class="hero-description">A practical, no-shortcuts Python path for turning tutorials into code you can write from a blank file.</p>
          <div class="hero-actions"><a class="button button-primary" href="#path">Start the path ${icon('arrow-down')}</a><a class="button button-quiet" href="${absoluteRoute('pages/guide.html')}">How it works ${icon('arrow-up-right')}</a></div>
        </div>
        <div class="hero-console" aria-label="Python learning path preview">
          <div class="console-bar"><span></span><span></span><span></span><small>practice.py</small></div>
          <pre><code><span class="code-keyword">def</span> <span class="code-function">learn</span>():
    <span class="code-comment"># think, write, test, retry</span>
    <span class="code-keyword">for</span> topic <span class="code-keyword">in</span> path:
        practise(topic)

<span class="code-function">learn</span>() <span class="code-comment"># your turn</span></code></pre>
          <div class="console-status"><span>${icon('check-circle')}</span> ${statsLine}</div>
        </div>
      </section>
      <section class="path-section" id="path" aria-labelledby="path-title">
        <div class="section-heading"><div><p class="eyebrow">The sequence matters</p><h2 id="path-title">Build your Python <em>muscle.</em></h2></div><p>Each topic only uses the tools you have already learned. No jumping ahead, no accidental shortcuts.</p></div>
        <div class="path-grid">${topics.map(topicCard).join('')}</div>
      </section>
      <section class="practice-band" id="projects" aria-labelledby="projects-title">
        <div class="practice-intro"><p class="eyebrow">Turn concepts into programs</p><h2 id="projects-title">The project<br /><em>workshop.</em></h2><p>Use the project packs once individual concepts feel familiar. They make you choose the right tool, structure real programs, and learn by shipping.</p>${packs.length ? `<a class="text-link" href="${absoluteRoute('pages/projects.html')}">Open project packs ${icon('arrow-right')}</a>` : ''}</div>
        <div class="project-stack">${packs.map((project, index) => `<a class="project-card project-card-${index + 1}" href="${documentHref(project)}"><span>Set ${index + 1}</span><strong>${project.shortTitle}</strong><small>${project.summary}</small>${icon('arrow-up-right')}</a>`).join('')}</div>
      </section>
      <section class="focused-section" aria-labelledby="focused-title">
        <div class="section-heading compact"><div><p class="eyebrow">One tool at a time</p><h2 id="focused-title">Topic project <em>challenges.</em></h2></div><a class="text-link" href="${absoluteRoute('pages/projects.html')}#challenges">View all challenges ${icon('arrow-right')}</a></div>
        <div class="focused-grid">${challenges.map((project) => `<a href="${documentHref(project)}"><span>${project.number ? String(project.number).padStart(2, '0') : '—'}</span><strong>${project.shortTitle}</strong>${icon('arrow-up-right')}</a>`).join('')}</div>
      </section>
      <section class="closing-cta"><p class="eyebrow">Ready when you are</p><h2>Open a blank file.<br /><em>Make the first move.</em></h2><a class="button button-primary" href="${topics.length ? documentHref(topics[0]) : absoluteRoute('pages/guide.html')}">Begin with conditionals ${icon('arrow-right')}</a></section>
    </main>
    ${mobileDrawer()}
    ${searchDialog()}
    ${siteFooter()}`;
}

function projectsShell() {
  const packs = projectPacks();
  const challenges = topicProjects();
  return `
    ${header()}
    <a class="skip-link" href="#main-content">Skip to content</a>
    <main class="document-layout" id="main-content">
      ${projectRail()}
      <article class="document-article">
        <div class="document-meta">
          <a href="${absoluteRoute('index.html')}">Python Practice Path</a><span>/</span><span>Projects</span>
        </div>
        <h1>Project workshop.</h1>
        <p class="hub-lede">Concepts feel familiar? Prove it by shipping. Pick a project pack for mixed, real-world programs, or a topic project to lock in one tool at a time.</p>
        <h2 id="packs">Project packs</h2>
        <p>Mixed programs that make you choose the right tool and structure real code. Do these after the topics they build on.</p>
        <div class="project-stack hub-packs">${packs.map((project, index) => `<a class="project-card project-card-${index + 1}" href="${documentHref(project)}"><span>Set ${index + 1}</span><strong>${project.shortTitle}</strong><small>${project.summary}</small>${icon('arrow-up-right')}</a>`).join('')}</div>
        <h2 id="challenges">Topic projects</h2>
        <p>One tool at a time: two basics and one hard challenge per topic. Finish a topic, then attempt its project before moving on.</p>
        <div class="focused-grid hub-challenges">${challenges.map((project) => `<a href="${documentHref(project)}"><span>${project.number ? String(project.number).padStart(2, '0') : '—'}</span><strong>${project.shortTitle}</strong>${icon('arrow-up-right')}</a>`).join('')}</div>
      </article>
      <aside class="page-toc" aria-label="On this page"><p class="eyebrow">On this page</p><ol><li class="toc-depth-2"><a href="#packs">Project packs</a></li><li class="toc-depth-2"><a href="#challenges">Topic projects</a></li></ol></aside>
    </main>
    ${mobileDrawer()}
    ${searchDialog()}
    ${siteFooter()}`;
}

function decorateCodeBlocks() {
  document.querySelectorAll('.document-article pre').forEach((block) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-code';
    button.innerHTML = `${icon('copy')}<span>Copy</span>`;
    button.setAttribute('aria-label', 'Copy code block');
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.querySelector('code')?.innerText || block.innerText);
        button.innerHTML = `${icon('check')}<span>Copied</span>`;
        setTimeout(() => { button.innerHTML = `${icon('copy')}<span>Copy</span>`; }, 1600);
      } catch {
        button.querySelector('span').textContent = 'Select text';
      }
    });
    block.append(button);
  });
}

function wireMenu() {
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const open = () => { drawer?.classList.add('is-open'); backdrop?.classList.add('is-open'); drawer?.setAttribute('aria-hidden', 'false'); document.body.classList.add('menu-open'); };
  const close = () => { drawer?.classList.remove('is-open'); backdrop?.classList.remove('is-open'); drawer?.setAttribute('aria-hidden', 'true'); document.body.classList.remove('menu-open'); };
  document.querySelectorAll('[data-menu-open]').forEach((button) => button.addEventListener('click', open));
  document.querySelectorAll('[data-menu-close]').forEach((button) => button.addEventListener('click', close));
}

function normalize(text) { return text.toLocaleLowerCase(); }

async function wireSearch() {
  const dialog = document.querySelector('[data-search-dialog]');
  const input = document.querySelector('[data-search-input]');
  const results = document.querySelector('[data-search-results]');
  if (!dialog || !input || !results) return;
  let entries = [];
  const open = async () => {
    if (!dialog.open) dialog.showModal();
    input.focus();
    if (!entries.length) {
      try {
        entries = await fetch(searchIndexUrl).then((response) => response.json());
      } catch {
        results.innerHTML = '<p class="empty-search">Search is unavailable right now. Try again in a moment.</p>';
      }
    }
  };
  const close = () => dialog.close();
  document.querySelectorAll('[data-search-open]').forEach((button) => button.addEventListener('click', open));
  document.querySelectorAll('[data-search-close]').forEach((button) => button.addEventListener('click', close));
  dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); });
  input.addEventListener('input', () => {
    const query = normalize(input.value.trim());
    if (!query) { results.innerHTML = '<p class="empty-search">Start typing to search the whole curriculum.</p>'; return; }
    const words = query.split(/\s+/).filter(Boolean);
    const matches = entries.filter((entry) => words.every((word) => normalize(`${entry.title} ${entry.heading} ${entry.text}`).includes(word))).slice(0, 12);
    results.innerHTML = matches.length ? matches.map((entry) => {
      const source = `${entry.title} ${entry.heading} ${entry.text}`;
      const position = normalize(source).indexOf(words[0]);
      const excerpt = source.slice(Math.max(0, position - 58), position + 150).replace(/\s+/g, ' ').trim();
      return `<a class="search-result" href="${absoluteRoute(`${entry.route}${entry.hash || ''}`)}"><span class="result-type">${entry.collectionLabel}</span><strong>${entry.heading || entry.title}</strong><p>${excerpt}${source.length > excerpt.length ? '…' : ''}</p><small>${entry.title}</small></a>`;
    }).join('') : '<p class="empty-search">No matching lesson or project yet.</p>';
  });
  results.innerHTML = '<p class="empty-search">Start typing to search the whole curriculum.</p>';
}

function wireKeyboardSearch() {
  window.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.querySelector('[data-search-open]')?.click();
    }
  });
}

app.innerHTML = page === 'home' ? homeShell() : page === 'projects' ? projectsShell() : documentShell();
applyTheme(getTheme());
document.querySelectorAll('[data-theme-toggle]').forEach((button) => button.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')));
decorateCodeBlocks();
wireMenu();
wireSearch();
wireKeyboardSearch();
requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add('ready')));
