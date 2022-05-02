module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react-hooks", "sort-destructure-keys"],
  "extends": [
    "eslint:recommended",
    "plugin:ordered-imports/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  "settings": {
    "jest": {
      "version": "detect"
    },
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-use-before-define": [
      2,
      {
        "classes": false,
        "functions": false
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/ban-ts-comment": [
      1,
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description"
      }
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": [
      1,
      {
        "ignoreRestArgs": true
      }
    ],
    "@typescript-eslint/prefer-for-of": 2,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/sort-type-union-intersection-members": 2,
    "prefer-const": 2,
    "no-multiple-empty-lines": 2,
    "no-eval": 2,
    "no-console": 1,
    "no-duplicate-imports": 2,
    "eqeqeq": 2,
    "one-var": [2, "never"],
    "quote-props": 0,
    "radix": 2,
    "sort-keys": [
      1,
      "asc",
      { "caseSensitive": true, "natural": true, "minKeys": 2 }
    ],
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/jsx-sort-props": 2,
    "require-await": 1,
    "prefer-arrow-callback": [
      2,
      {
        "allowNamedFunctions": true
      }
    ],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 0,
    "sort-destructure-keys/sort-destructure-keys": [
      2,
      { "caseSensitive": true }
    ]
  }
}
