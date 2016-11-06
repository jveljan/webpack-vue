const webpack = require('webpack');
module.exports = () => {
  return new webpack.optimize.CommonsChunkPlugin({name: 'vendor'});
}