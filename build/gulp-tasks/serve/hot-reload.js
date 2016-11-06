const path = require('path');

function adjustWebpackConfig(webpackConfig) {
  // add hot-reload related code to entry chunks
  Object.keys(webpackConfig.entry).forEach(function (name) {
    const client = path.resolve(__dirname + '/hot-reload-client');
    webpackConfig.entry[name] = [client].concat(webpackConfig.entry[name]);
  });
  // and add the plugin
  const webpack = require('webpack');
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

function createHotMiddleware(webpackCompiler) {
  var hotMiddleware = require('webpack-hot-middleware')(webpackCompiler);
  webpackCompiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' });
      cb();
    })
  });
  return hotMiddleware;
}

module.exports = {
  adjustConfig: adjustWebpackConfig,
  hotMiddleware: createHotMiddleware
};
