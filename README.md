# React ESLint & Prettier Config

A basic ESLint & Prettier config to be used in React/Gatsby projects.

## Installation

Install the package:

```sh
npm i -D @esquiredigital/eslint-config-react
```

Then add to the `.eslintrc.json` file in the project's root:

```js
{
  ...
  extends: ["@esquiredigital/eslint-config-react"]
  ...
}
```

If your project uses another filetype for the eslint config, just add the above line to the `extends` array wherever it can be found.
