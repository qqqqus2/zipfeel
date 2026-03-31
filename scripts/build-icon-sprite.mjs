import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ICON_DIR = path.join(ROOT, "public", "icon");
const OUT_FILE = path.join(ICON_DIR, "sprite.svg");

function toSymbolId(filename) {
  return filename.replace(/\.svg$/i, "");
}

function escapeAttr(v) {
  return String(v).replace(/"/g, "&quot;");
}

function prefixIds(svgBody, prefix) {
  // Prefix id="..." and references url(#...) / href="#..."
  const idMap = new Map();

  const withPrefixedIds = svgBody.replace(/\sid="([^"]+)"/g, (m, id) => {
    const next = `${prefix}__${id}`;
    idMap.set(id, next);
    return ` id="${next}"`;
  });

  if (idMap.size === 0) return withPrefixedIds;

  const replaceRef = (s) =>
    s
      .replace(/url\(#([^)]+)\)/g, (m, id) => (idMap.has(id) ? `url(#${idMap.get(id)})` : m))
      .replace(/\shref="#([^"]+)"/g, (m, id) => (idMap.has(id) ? ` href="#${idMap.get(id)}"` : m))
      .replace(/\sxlink:href="#([^"]+)"/g, (m, id) =>
        idMap.has(id) ? ` xlink:href="#${idMap.get(id)}"` : m
      );

  return replaceRef(withPrefixedIds);
}

function normalizeColors(svgBody) {
  // Make fills/strokes themeable by inheriting currentColor.
  // Keep fill="none" as-is.
  return svgBody
    .replace(/\sfill="black"/gi, ' fill="currentColor"')
    .replace(/\sfill="#000000"/gi, ' fill="currentColor"')
    .replace(/\sstroke="black"/gi, ' stroke="currentColor"')
    .replace(/\sstroke="#000000"/gi, ' stroke="currentColor"');
}

function extractViewBox(svg) {
  const m = svg.match(/viewBox="([^"]+)"/i);
  return m?.[1] ?? "0 0 24 24";
}

function extractInner(svg) {
  const open = svg.match(/<svg\b[^>]*>/i);
  const closeIdx = svg.lastIndexOf("</svg>");
  if (!open || closeIdx === -1) return svg;
  return svg.slice(open[0].length, closeIdx);
}

async function main() {
  const entries = await fs.readdir(ICON_DIR, { withFileTypes: true });
  const svgs = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".svg"))
    .map((e) => e.name)
    .filter((name) => name.toLowerCase() !== "sprite.svg")
    .sort((a, b) => a.localeCompare(b));

  const symbols = [];

  for (const file of svgs) {
    const full = path.join(ICON_DIR, file);
    const raw = await fs.readFile(full, "utf8");
    const id = toSymbolId(file);
    const viewBox = extractViewBox(raw);
    let inner = extractInner(raw);
    inner = normalizeColors(inner);
    inner = prefixIds(inner, id);
    symbols.push(
      `<symbol id="${escapeAttr(id)}" viewBox="${escapeAttr(viewBox)}">${inner}</symbol>`
    );
  }

  const out =
    `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">` +
    symbols.join("") +
    `</svg>\n`;

  await fs.writeFile(OUT_FILE, out, "utf8");
  console.log(`Wrote ${svgs.length} symbols to ${path.relative(ROOT, OUT_FILE)}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

