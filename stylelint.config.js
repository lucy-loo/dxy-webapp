module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
    'selector-no-qualifying-type': [
      false,
      {
        ignore: ['attribute', 'class', 'id'],
      },
    ],
  },
}
