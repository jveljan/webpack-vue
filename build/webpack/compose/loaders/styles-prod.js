const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = () => {
  return {
    test: /\.(css|less)$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loaders: [
        'css-loader?minimize',
        'less-loader',
        'postcss-loader'
      ]
    })
  };
}