// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // bring in your old .eslintrc extends
  ...compat.extends(
    "eslint:recommended",
    "plugin:import/recommended",
    "prettier"
  ),
  {
    rules: {
      "no-unused-vars": "warn",
      "unused-imports/no-unused-imports": "error"
    }
  }
];
