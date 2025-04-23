module.exports = {
    root: true,
    env: { browser: true, es2021: true, node: true },
    extends: ["eslint:recommended", "plugin:import/recommended", "prettier"],
    plugins: ["unused-imports"],
    rules: {
      "no-unused-vars": "warn",
      "unused-imports/no-unused-imports": "error"
    }
  }
  