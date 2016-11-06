const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = () => {
  return {
    test: /\.(css|less)$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style',
      loader: 'css?minimize!less!postcss'
    })
  };
}