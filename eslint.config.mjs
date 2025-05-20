import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },


  rules:
    indent: ['error', 2],
    // "no-unused-vars": "error"
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'max-len': [
      error,
      { code: 120, ignoreComments: true, ignoreStrings: true
    }]
    // npx eslint .
    // npx eslint . --fix (FIXES ALL ERRORS)

]);
