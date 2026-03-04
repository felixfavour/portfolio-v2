#!/usr/bin/env node
import fs from "fs/promises"
import path from "path"

const root = process.cwd()
const args = process.argv.slice(2)
const target = (args[0] || "all").toLowerCase()
const mappings = {
  stories: "src/pages/stories",
  books: "src/pages/books",
}
const outputs = {
  stories: "data/merged-stories.md",
  books: "data/merged-books.md",
}

function stripFrontmatter(content) {
  const fmMatch = content.match(/^---\s*[\s\S]*?---\s*/)
  if (fmMatch) {
    const fm = fmMatch[0]
      .replace(/^---\s*/, "")
      .replace(/---\s*$/, "")
      .trim()
    const body = content.slice(fmMatch[0].length).trim()
    return { fm, body }
  }
  return { fm: "", body: content }
}

function extractTitle(fm) {
  if (!fm) return null
  const m = fm.match(/^title:\s*(?:"|')?(.+?)(?:"|')?\s*$/m)
  if (m) return m[1].trim()
  return null
}

async function merge(kind) {
  const dir = path.join(root, mappings[kind])
  const out = path.join(root, outputs[kind])
  await fs.mkdir(path.dirname(out), { recursive: true })
  let files
  try {
    files = await fs.readdir(dir)
  } catch (e) {
    console.error(`Failed to read directory: ${dir}\n${e}`)
    return
  }

  files = files.filter((f) => f.toLowerCase().endsWith(".md")).sort()
  const parts = []
  for (const f of files) {
    const full = path.join(dir, f)
    let content
    try {
      content = await fs.readFile(full, "utf8")
    } catch (e) {
      console.warn(`Skipping ${full}: ${e}`)
      continue
    }

    const { fm, body } = stripFrontmatter(content)
    const title =
      extractTitle(fm) || f.replace(/\.md$/i, "").replace(/[-_]/g, " ")
    parts.push(`## ${title}\n\n${body}`)
  }

  const joined = parts.join("\n\n---\n\n")
  await fs.writeFile(out, joined, "utf8")
  console.log(`Wrote ${out} (${files.length} files)`)
}

;(async () => {
  const kinds = target === "all" ? Object.keys(mappings) : [target]
  for (const k of kinds) {
    if (!mappings[k]) {
      console.error(`Unknown target: ${k}`)
      continue
    }
    await merge(k)
  }
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
