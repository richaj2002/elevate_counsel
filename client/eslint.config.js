import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable the rule that requires React to be in scope when using JSX
      'react/jsx-uses-react': 'off', // Disable the rule that marks React as used when using JSX
      'react/jsx-uses-vars': 'error', // Ensure variables used in JSX are marked as used
    },
  },
];