# file-lang

> Deterministically detect a programming language from a file path, file name, or extension.

`file-lang` is a tiny utility that maps file extensions and well-known filenames to **human‑readable language names**.

No heuristics. No content parsing. No guessing.

---

<br />

## Why

When building tools that analyze files, repositories, you end up rewriting the same logic again and again:

- Extract extension from paths
- Normalize weird inputs
- Map extensions to language names
- Handle unknowns safely

`file-lang` exists so you never have to think about this again.

---

<br />

## Install

```bash
npm install file-lang
```

---

<br />

## Usage

```ts
import { detectLanguage } from "file-lang";

detectLanguage("ts"); // "TypeScript"
detectLanguage(".ts"); // "TypeScript"
detectLanguage("index.ts"); // "TypeScript"
detectLanguage("/src/utils/file.ts"); // "TypeScript"
detectLanguage("Dockerfile"); // "Docker"
detectLanguage("unknown.ext"); // "Unknown"
```

---

<br />

## Accepted Input

`detectLanguage` accepts **any string** representing:

- A file extension (`ts`, `.ts`)
- A file name (`index.ts`)
- A file path (`/path/to/file.ts`)
- Well-known filenames (`Dockerfile`, `Makefile`)

Invalid, empty, or unsupported inputs safely return:

```ts
"Unknown";
```

The function **never throws**.

---

<br />

## Output

- Returns a **human-readable language name** (Title Case)
- Returns `"Unknown"` if no mapping exists

Examples:

- `"TypeScript"`
- `"JavaScript"`
- `"Markdown"`
- `"Docker"`

---

<br />

## Design Principles

- Deterministic output
- Extension-based only
- Zero dependencies
- Minimal public API
- Predictable behavior

If an extension is ambiguous or unclear, `file-lang` **does not guess**.

Ambiguity resolves to `"Unknown"`.

---

<br />

## Contributing

Contributions are welcome, especially:

- Adding support for additional languages
- Improving test coverage

Guidelines:

- Keep changes minimal
- Follow existing naming conventions
- Do not introduce heuristics or content-based detection
