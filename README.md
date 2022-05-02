# eslint-plugin-react-config

Specific ESLint configuration for React projects based on Typescript. The setup is based on the guidelines provided
by the official [eslint documentation](https://eslint.org/docs/developer-guide/shareable-configs).

It applies the `recommended` rules from:

- [eslint-friendly-formatter](https://www.npmjs.com/package/eslint-friendly-formatter)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [eslint-plugin-ordered-imports](https://www.npmjs.com/package/eslint-plugin-ordered-imports)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-sort-destructure-keys](https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys)

## Configuration

### 1. Install [ESLint](http://eslint.org)

```sh
# npm
npm install eslint --save-dev
# yarn
yarn add eslint --save
```

### 2. Install `eslint-plugin-react-config`

```sh
# npm
npm install eslint-plugin-react-config --save-dev
# yarn
yarn add -D eslint-plugin-react-config 
```

### 3. Install required ESLint React specific plugins and configure

All configurations inherit from some base rules. Therefore, these plugins are always required.

```sh
# npm
npm install eslint-friendly-formatter \
            eslint-plugin-jest \
            eslint-plugin-ordered-imports \
            eslint-plugin-prettier \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            eslint-plugin-sort-destructure-keys \
            --save-dev
# yarn
yarn add eslint-friendly-formatter \
            eslint-plugin-jest \
            eslint-plugin-ordered-imports \
            eslint-plugin-prettier \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            eslint-plugin-sort-destructure-keys \
            --dev
```

To add this configuration:

```js
module.exports = {
  extends: ['eslint-config-react-config'],
};
```

### 4. Run ESLint

Run the following script:

```bash
# npm
npx eslint .
# yarn
yarn eslint .
```

ESLint will lint all relevant files within the current folder, and output results.

Most IDEs via a ESLint plugin will also give these results.


## Publishing package

To update the ruleset and publish as a public npm package, first authenticate yourself via npm and then run: 

```sh
npm run publish:public
```

The package should then be available for public installation and usage. Further information about publishing npm 
packages can be found [here](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)