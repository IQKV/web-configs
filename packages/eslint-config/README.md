# @iqkv/eslint-config

This package contains the [shareable ESLint configs](https://eslint.org/docs/developer-guide/shareable-configs) for IQKV projects.
If using the project generators these configs will be included by default.

## Manual installation

You can add these configurations manually by using the `extends` feature in `.eslintrc.json`.

```json
{
  "extends": ["@iqkv"]
}
```

Remix projects:

```json
{
  "extends": ["@iqkv/eslint-config/remix/node"]
}
```
