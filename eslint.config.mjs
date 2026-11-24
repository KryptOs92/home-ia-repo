import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores([
    "**/.next/",
    "**/.pnpm-store/",
    "**/.turbo/",
    "**/build/",
    "**/coverage/",
    "**/dist/",
    "**/out/",
    "backups/",
    "data/",
    "storage/",
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
);
