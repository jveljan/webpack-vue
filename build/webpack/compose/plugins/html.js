const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (template) => {
  return new HtmlWebpackPlugin({
      template: template
    });
}
