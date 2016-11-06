const webpack = require('webpack');
module.exports = () => {
  return new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    });
}
