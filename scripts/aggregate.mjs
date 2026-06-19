// Rebuilds data/domains.txt by merging the upstream community lists,
// normalizing (lowercase, valid-domain-shape), de-duplicating, and sorting.
// Run by .github/workflows/update.yml on a schedule. Node 18+ (global fetch).

import { writeFileSync, readFileSync, existsSync } from 'node:fs';

const SOURCES = [
  { url: 'https://raw.githubusercontent.com/Kikobeats/free-email-domains/master/domains.json', format: 'json' },
  { url: 'https://raw.githubusercontent.com/willwhite/freemail/master/data/free.txt', format: 'txt' },
];

const DOMAIN_RE = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9-]+)*\.[a-z]{2,}$/;

const set = new Set();
for (const { url, format } of SOURCES) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`WARN: ${url} -> HTTP ${res.status} (skipping)`);
    continue;
  }
  const body = await res.text();
  const list = format === 'json' ? JSON.parse(body) : body.split('\n');
  let n = 0;
  for (let d of list) {
    d = String(d).trim().toLowerCase();
    if (d && !d.startsWith('#') && DOMAIN_RE.test(d)) {
      set.add(d);
      n++;
    }
  }
  console.log(`${url} -> ${n} entries`);
}

if (set.size < 5000) {
  console.error(`ERROR: only ${set.size} domains — sources likely down. Refusing to overwrite.`);
  process.exit(1);
}

const out = [...set].sort().join('\n') + '\n';
const path = 'data/domains.txt';
const prev = existsSync(path) ? readFileSync(path, 'utf8') : '';
if (prev === out) {
  console.log(`No changes (${set.size} domains).`);
} else {
  writeFileSync(path, out);
  console.log(`Wrote ${set.size} domains.`);
}
