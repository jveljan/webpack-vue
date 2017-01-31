const paths = require('../paths.conf');
const path = require('path');
const compose = require('./compose')();
const merge = require('webpack-merge');
const base = require('./webpack-common.conf');
module.exports = merge(base, {
  //debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), paths.tmp),
    filename: '[name]-[hash:7].js'
  },
  module: {
    loaders: [
      compose.loader('styles-dev')
    ]
  }
});