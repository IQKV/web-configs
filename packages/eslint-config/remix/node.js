module.exports = {
  extends: ['../base', '@remix-run/eslint-config', '@remix-run/eslint-config/node', 'prettier'],
  ignorePatterns: ['build', 'public/build'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        'newlines-between': 'never',
        pathGroups: [
          {
            group: 'builtin',
            pattern: 'react',
            position: 'before',
          },
          {
            group: 'builtin',
            pattern: 'react-dom/**',
            position: 'before',
          },
          {
            group: 'external',
            pattern: '@remix-run/**',
            position: 'before',
          },
          {
            group: 'external',
            pattern: '@iqkv/**',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-fragments': [2, 'syntax'],
  },
}
