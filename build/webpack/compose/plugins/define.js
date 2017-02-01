const webpack = require('webpack');
module.exports = (defs) => {
  return new webpack.DefinePlugin(defs);
}