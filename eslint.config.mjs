import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  // Ignore generated and dependency files
  {
    ignores: ["coverage/**", "node_modules/**", "script.js"]
  },

  // Node + CommonJS code
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        fetch: "readonly",           // Node 18+ global
        AbortController: "readonly", // Node 18+ global
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },

  // Jest test files
  {
    files: ["**/*.test.js"],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals, // Jest globals
        fetch: "readonly",                    // mocked fetch
        AbortController: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        global: "readonly"                    // global.fetch
      },
      sourceType: "script"
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  }
];
