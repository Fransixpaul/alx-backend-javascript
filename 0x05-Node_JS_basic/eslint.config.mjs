import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";  // Ensure the React plugin is imported

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,  // For browser globals
        ...globals.node,     // Add Node.js globals like 'module'
      },
    },
    settings: {
      react: {
        version: "detect",  // Automatically detect the React version in your project
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];