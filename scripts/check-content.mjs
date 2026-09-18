import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import siteData from '../src/generated/site-data.js';

const root = process.cwd();
const documents = siteData.documents;
const failures = [];

if (documents.length !== 32) failures.push(`Expected 32 content documents, found ${documents.length}.`);
if (new Set(documents.map((document) => document.id)).size !== documents.length) failures.push('Document IDs must be unique.');
if (new Set(documents.map((document) => document.route)).size !== documents.length) failures.push('Document routes must be unique.');

for (const document of documents) {
  if (document.title.includes('â')) failures.push(`${document.sourcePath} has a UTF-8 decoding issue.`);
  if (!document.toc.length) failures.push(`${document.sourcePath} has no headings.`);
  if (new Set(document.toc.map((heading) => heading.id)).size !== document.toc.length) failures.push(`${document.sourcePath} has duplicate heading anchors.`);

  const pagePath = resolve(root, document.route);
  if (!existsSync(pagePath)) {
    failures.push(`Generated page missing: ${document.route}`);
    continue;
  }
  const page = readFileSync(pagePath, 'utf8');
  if (!page.includes(`data-document-id="${document.id}"`)) failures.push(`${document.route} is linked to the wrong document ID.`);
  if (!page.includes('<div id="raw-content">')) failures.push(`${document.route} does not contain rendered content.`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Content checks passed for ${documents.length} static pages.`);
