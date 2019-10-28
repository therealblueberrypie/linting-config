# @blueberrypie/prettier-config

[![NpmVersion](https://img.shields.io/npm/v/@blueberrypie/prettier-config.svg)](https://www.npmjs.com/package/@blueberrypie/prettier-config)

## Installation

1. Install:

```cmd
npm install --save-dev prettier @blueberrypie/prettier-config
```

2. Add the following to `package.json`:

```json
{
  "scripts": {
    "fix:prettier": "prettier --ignore-path .lintignore --check --write \"**/*.{ts,tsx,js,jsx,json,css,html,md}\"",
    "lint:prettier": "prettier --ignore-path .lintignore --list-different \"**/*.{ts,tsx,js,jsx,json,css,html,md}\""
  },
  "prettier": "@blueberrypie/prettier-config"
}
```

3. Add the following to `.lintignore`, adjusted as needed:

```
package-lock.json
build/
```
