# Free Email Provider Domains

> An aggregated, de-duplicated list of **free and public email provider domains** — **12,000+ domains** (Gmail, Yahoo, Outlook, iCloud, GMX, and thousands more), rebuilt automatically from the major community lists. Maintained by [Valid Email Checker](https://www.validemailchecker.com).

**Is `someone@gmail.com` a free/personal email rather than a company address?** This list answers that — useful for B2B lead scoring, fraud/abuse checks, signup gating, and analytics where you want to separate **free/consumer** mailboxes from **business** ones.

[![Domains](https://img.shields.io/badge/domains-12%2C000%2B-4F46E5)](https://www.validemailchecker.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Updated weekly](https://img.shields.io/badge/updated-weekly-brightgreen)](.github/workflows/update.yml)

## Why this list

- **Aggregated** — merges the leading community lists into one comprehensive, de-duplicated set (more complete than any single source).
- **Normalized** — lowercased, domain-shape validated, sorted, newline-delimited.
- **Auto-updated** — a weekly GitHub Action rebuilds it from the upstream sources.
- **MIT licensed** — use it anywhere, commercial or not.

> Looking for **disposable / temporary** email domains instead? See [validemailchecker/disposable-email-domains](https://github.com/Validemailchecker/disposable-email-domains).

## Get the list

| Format | Here | Always-fresh |
|---|---|---|
| Plain text (one domain per line) | [`data/domains.txt`](data/domains.txt) | `https://www.validemailchecker.com/free-email-provider-domains.txt` |

## Use it (any language)

```js
// JavaScript
const res = await fetch('https://www.validemailchecker.com/free-email-provider-domains.txt');
const free = new Set((await res.text()).split('\n'));
const isFreeProvider = (email) => free.has(email.split('@')[1]?.toLowerCase());
isFreeProvider('jane@gmail.com'); // true
```

```python
# Python
import requests
free = set(requests.get('https://www.validemailchecker.com/free-email-provider-domains.txt').text.splitlines())
def is_free_provider(email: str) -> bool:
    return email.split('@')[-1].lower() in free
```

## How it's maintained

`data/domains.txt` is rebuilt by [`scripts/aggregate.mjs`](scripts/aggregate.mjs) (run weekly via GitHub Actions), which fetches the upstream lists, merges, normalizes, de-duplicates, and sorts. Sources are credited in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Need to verify the mailbox, not just the domain?

A free-provider match tells you the *domain*. To know whether a specific address is real, reachable, disposable, catch-all, or a role/spam-trap, run a live check with [Valid Email Checker](https://www.validemailchecker.com) — real 11-stage SMTP verification, 200 free credits, no card. Try the [Email Verifier](https://www.validemailchecker.com/tools/email-verifier).

## License

MIT © Valid Email Checker — see [LICENSE](LICENSE).
