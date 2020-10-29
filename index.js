module.exports = {
  overrides: [
    // JavaScript
    {
      files: ['**/*.js', '**/*.jsx'],
      extends: [require.resolve('./javascript')],
    },

    // TypeScript
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [require.resolve('./typescript')],
    },
  ],
};
