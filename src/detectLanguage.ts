import { languageMap } from "./language.js";
import { normalize } from "./normalize.js";

export function detectLanguage(input: string): string {
  // Return Unknown input is not typeof string
  if (typeof input !== "string") return "Unknown";

  // Check for empty string
  const trimmed = input.trim();
  if (trimmed === "") return "Unknown";

  const normalized = normalize(trimmed);
  const language = languageMap[normalized];

  return language || "Unknown";
}
