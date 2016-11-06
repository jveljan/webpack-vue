const paths = require('../paths.conf');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack-common.conf');
const compose = require('./compose')();
module.exports = merge(base, {
  output: {
    path: path.join(process.cwd(), paths.dist),
    filename: '[name]-[hash:7].js'
  },
  module: {
    loaders: [
      compose.loader('styles-prod')
    ]
  },
  plugins: [
    compose.plugin('define-prod-env'),
    compose.plugin('uglify-js'),
    compose.plugin('content-hash-css'),
    compose.plugin('vendor-js')
  ]
});
