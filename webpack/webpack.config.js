var webpack = require('webpack');
var entry = require('./entry');
var postcss = require('./postcss');
var plugins = require('./plugins');
var output = require('./output');
var resolve = require('./resolve');
var resolveLoader = require('./resolveLoader');
var preLoaders = require('./preLoaders');
var loaders = require('./loaders');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry,
  plugins,
  output,
  resolve,
  resolveLoader,
  module: {
    preLoaders,
    loaders
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
    configFile: './.eslintrc'
  },
  postcss,
  vue: {
    loaders: {
      js: 'babel!eslint',
      html: 'vue-loader/lib/template-compiler'
    },
    cssModules: {
      localIdentName: '[path][name]---[local]---[hash:base64:5]',
      camelCase: true
    },
    postcss
  }
};
