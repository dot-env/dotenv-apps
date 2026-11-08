import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import noEmDash, { textParser } from "../eslint/no-em-dash.mjs";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      local: noEmDash,
    },
    rules: {
      "local/no-em-dash": "error",
    },
    settings: {
      react: {
        version: "19.3.1",
      },
    },
  },
  {
    files: ["src/**/*.json"],
    languageOptions: {
      parser: textParser,
    },
    plugins: {
      local: noEmDash,
    },
    rules: {
      "local/no-em-dash": "error",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "scripts/**"]),
]);
