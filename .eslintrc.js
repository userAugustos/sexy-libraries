module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "prettier", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off",
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-single"],
    "arrow-parens": ["warn", "as-needed"],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "func-style": [0],
  },
  overrides: [
    {
      files: ["**/node_modules/*", "**/miragejs/*", "**/*.spec.js"],
    },
  ],
};
