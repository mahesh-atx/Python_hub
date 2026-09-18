import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

function findHtmlEntries(directory, entries = {}) {
  if (!existsSync(directory)) return entries;

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) findHtmlEntries(fullPath, entries);
    if (entry.isFile() && entry.name.endsWith('.html')) {
      const name = relative(resolve('pages'), fullPath).replace(/\.html$/, '').replaceAll('\\', '/');
      entries[`page-${name}`] = fullPath;
    }
  }

  return entries;
}

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve('index.html'),
        ...findHtmlEntries(resolve('pages'))
      }
    }
  }
});
