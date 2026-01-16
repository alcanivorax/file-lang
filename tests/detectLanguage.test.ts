import { describe, it, expect } from "vitest";
import { detectLanguage } from "../src/detectLanguage.js";

describe("detectLanguage", () => {
  it("detects language from extension", () => {
    expect(detectLanguage("ts")).toBe("TypeScript");
    expect(detectLanguage(".ts")).toBe("TypeScript");
    expect(detectLanguage("js")).toBe("JavaScript");
  });

  it("detects language from filename with extension", () => {
    expect(detectLanguage("index.ts")).toBe("TypeScript");
    expect(detectLanguage("app.js")).toBe("JavaScript");
    expect(detectLanguage("README.md")).toBe("Markdown");
  });

  it("detects language from file path", () => {
    expect(detectLanguage("/src/index.ts")).toBe("TypeScript");
    expect(detectLanguage("path/to/file.py")).toBe("Python");
  });

  it("handles multiple dots in filename", () => {
    expect(detectLanguage("file.test.ts")).toBe("TypeScript");
    expect(detectLanguage("config.local.json")).toBe("JSON");
  });

  it("detects special filenames", () => {
    expect(detectLanguage("Dockerfile")).toBe("Docker");
    expect(detectLanguage("Makefile")).toBe("Makefile");
  });

  it("is case-insensitive", () => {
    expect(detectLanguage("FILE.TS")).toBe("TypeScript");
    expect(detectLanguage("DoCkErFiLe")).toBe("Docker");
  });

  it("returns Unknown for unsupported extensions", () => {
    expect(detectLanguage("file.unknownext")).toBe("Unknown");
  });

  it("returns Unknown for files without extension", () => {
    expect(detectLanguage("README")).toBe("Unknown");
  });

  it("returns Unknown for empty or invalid input", () => {
    expect(detectLanguage("")).toBe("Unknown");
    expect(detectLanguage("   ")).toBe("Unknown");
    expect(detectLanguage(undefined as unknown as string)).toBe("Unknown");
    expect(detectLanguage(null as unknown as string)).toBe("Unknown");
  });
});
