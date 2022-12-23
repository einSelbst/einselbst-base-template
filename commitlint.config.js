module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [message => message.includes('skip actions')],
  /* add some more commit types */
  rules: {
    'type-enum': [
      2, // eslint-disable-line no-magic-numbers
      'always',
      [
        'a11y', // accessibility
        'build',
        'chore',
        'ci', // continuous integration
        'cx', // customer experience
        'deps', // dependencies
        'docs',
        'dx', // all things dev experience
        'feat',
        'fix',
        'i18n', // internationalization
        'perf',
        'refactor',
        'revert',
        'style', // this means 'code' style
        'test',
        'ui', // CSS, etc
        'ux', // user experience
        'wip',
      ],
    ],
  },
}
