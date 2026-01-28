import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  // Ignorera genererade filer
  {
    ignores: ["coverage/**", "node_modules/**"]
  },

  // Node + CommonJS-kod
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },

  // Jest testfiler
  {
    files: ["**/*.test.js"],
    plugins: {
      jest
    },
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals
      }
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  },
  {
    ignores: ["coverage/**", "node_modules/**", "script.js"]
  }
];
