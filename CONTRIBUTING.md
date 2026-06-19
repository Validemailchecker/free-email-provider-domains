# Contributing

`data/domains.txt` is **auto-generated** weekly by `scripts/aggregate.mjs`, which
merges the upstream community lists (see THIRD_PARTY_NOTICES.md). Edits made
directly to `data/domains.txt` will be overwritten on the next rebuild.

- **Missing a free/public provider?** Best path: contribute it upstream to one of
  the source lists (it then flows in here), or open an issue and we'll add a local
  override.
- **False positive (a business/paid domain listed)?** Open an issue — we'll exclude it.

Formatting: one lowercased domain per line, sorted, no comments or blanks.
