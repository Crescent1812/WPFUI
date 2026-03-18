#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parseXML } from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get file path from CLI args
const file = process.argv[2];

if (!file) {
  console.error("Usage: wpfui-parse <file.xml>");
  process.exit(1);
}

const fullPath = path.resolve(process.cwd(), file);

if (!fs.existsSync(fullPath)) {
  console.error("File not found:", fullPath);
  process.exit(1);
}

const xml = fs.readFileSync(fullPath, "utf8");

(async () => {
  const result = await parseXML(xml);
  console.log(JSON.stringify(result, null, 2));
})();