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
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": "error",
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-single"],
    "arrow-parens": ["error", "as-needed"],
    "import/prefer-default-export": "off",
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function | "
    }]
  },
};
