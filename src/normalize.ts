import { extname } from "node:path";

export function normalize(input: string): string {
  // Special case: ".ts" → "ts"
  if (input.startsWith(".") && !input.includes("/") && !input.includes("\\")) {
    return input.slice(1).toLowerCase();
  }

  const ext = extname(input);
  if (!ext) return input.toLowerCase();

  return ext.slice(1).toLowerCase();
}
