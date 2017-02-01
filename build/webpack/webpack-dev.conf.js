const paths = require('../conf').path;
const path = require('path');
const compose = require('./compose')();
const merge = require('webpack-merge');
const base = require('./webpack-common.conf');
module.exports = merge(base, {
  module: {
    loaders: [
      compose.loader('styles-dev')
    ]
  }
});