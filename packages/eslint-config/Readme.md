# @blueberrypie/eslint-config

[![NpmVersion](https://img.shields.io/npm/v/@blueberrypie/eslint-config.svg)](https://www.npmjs.com/package/@blueberrypie/eslint-config)

## Installation

1. Install:

```cmd
npm install --save-dev eslint @blueberrypie/eslint-config
```

2. Add the following to `package.json`:

```json
{
  "scripts": {
    "fix:scripts": "eslint --ignore-path .lintignore --cache --fix \"**/*.{ts,tsx,js,jsx,json}\"",
    "lint:scripts": "eslint --ignore-path .lintignore --max-warnings 0 --cache \"**/*.{ts,tsx,js,jsx,json}\""
  },
  "eslintConfig": {
    "extends": "@blueberrypie/eslint-config",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
}
```

3. Add the following to `.lintignore`, adjusted as needed:

```
package-lock.json
build/
```
