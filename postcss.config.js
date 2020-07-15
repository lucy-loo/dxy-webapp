/* eslint-disable */
const { resolve } = require('path')

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    // 'postcss-import': {},
    'postcss-import': { plugins: [require('stylelint')] },
    'postcss-reporter': {},
    precss: {},
    // PreCSS is powered by the following plugins (in this order):
    // postcss-extend-rule
    // postcss-advanced-variables
    // postcss-preset-env
    // postcss-atroot
    // postcss-property-lookup
    // postcss-nested
    cssnano: {},
  },
}

