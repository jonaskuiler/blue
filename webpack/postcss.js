var path = require('path');

module.exports = function () {
  const fontPath = path.join(__dirname, '../src/asset/font')
  const variables = require('../src/asset/style/config/variables.js')

  console.log('vars', variables)

  return [
    /**
     * Unwrap nested styles like Sass does.
     * https://github.com/postcss/postcss-nested
     */
    require('postcss-nested'),

    /**
     * Nestedd
     */
    require('postcss-import'),

    /**
     * PostCSS plugin for Sass-like variables, conditionals, and iteratives
     * https://github.com/jonathantneal/postcss-advanced-variables
     */
    require('postcss-advanced-variables')({
      variables
    }),

    /**
     * Mixins
     * https://github.com/postcss/postcss-mixins
     */
    require('postcss-mixins')({
      mixinsDir: path.join(__dirname, '../src/asset/style/mixin')
    }),

    /**
     * Advanced shorthand properties
     * https://github.com/jonathantneal/postcss-short
     */
    require('postcss-short'),

    /**
     * Transform W3C CSS Custom Media Queries to more compatible CSS
     * https://github.com/postcss/postcss-custom-media
     */
    require('postcss-custom-media'),

    /**
     * PostCSS plugin to use tomorrow's CSS syntax
     * https://github.com/MoOx/postcss-cssnext
     */
    require('postcss-cssnext')({
      browsers: ['last 3 versions', 'iOS >= 8']
    })
  ]
}
