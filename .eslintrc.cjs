module.exports = {
  extends: [
    "airbnb",
    "plugin:react-hooks/recommended", // add React Hooks rules
    "prettier",
  ],
  overrides: [
    {
      files: ["vite.config.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
  plugins: ["react-refresh"], // React Fast Refresh plugin
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
  },
};
