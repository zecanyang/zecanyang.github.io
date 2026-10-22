import { copyFile, mkdir, writeFile } from 'node:fs/promises';

// GitHub Pages serves directory index files for direct visits to these routes.
for (const route of ['experience', 'publications', 'honors', 'community-service']) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await writeFile('dist/.nojekyll', '');
