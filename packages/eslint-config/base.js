module.exports = {
  root: true,
  rules: {
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
  },
}
