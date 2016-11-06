const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = () => {
  return new ExtractTextPlugin('[name]-[contenthash:7].css');
}
