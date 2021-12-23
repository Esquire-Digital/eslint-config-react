module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",
    "react/jsx-one-expression-per-line": "off",
    "prettier/prettier": [
      error,
      {
        semi: false,
        singleQuote: true,
        printWidth: 130,
        tabWidth: 2,
        jsxSingleQuote: false,
        trailingCOmma: "none",
        arrowParens: "avoid",
      },
    ],
  },
  settings: {
    "import/core-modules": [],
  },
  env: {
    browser: true,
  },
};
