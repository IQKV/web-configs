# `@iqkv/prettier-config`

Shared configuration for [Prettier](https://prettier.io/) code formatting in IQKV projects.

## Installation

`npm install --save-dev @iqkv/prettier-config`

## Usage

In `package.json`

```json
{
  "name": "my-project",
  "scripts": {
    "prettier": "prettier --write"
  },
  "devDependencies": {
    "@iqkv/prettier-config": "x.x.x"
  },
  "prettier": "@iqkv/prettier-config"
}
```

In `.prettierrc.js`

```javascript
module.exports = {
  ...require('@iqkv/prettier-config'),
  // additional config
}
```
