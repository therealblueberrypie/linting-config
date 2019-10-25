# @blueberrypie/stylelint-config

## Installation

1. Install:

```cmd
npm install --save-dev stylelint @blueberrypie/stylelint-config
```

2. Add the following to `package.json`:

```json
{
  "scripts": {
    "fix:styles": "stylelint \"**/*.css\" --ignore-path .lintignore --cache --fix",
    "lint:styles": "stylelint \"**/*.css\" --ignore-path .lintignore --max-warnings 0 --cache"
  },
  "stylelint": {
    "extends": "@blueberrypie/stylelint-config"
  }
}
```

3. Add the following to `.lintignore`, adjusted as needed:

```
build/
```
