const webpack = require('webpack');
module.exports = () => {
  return new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true, warnings: false} // eslint-disable-line camelcase
    });
}
