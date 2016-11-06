const webpack = require('webpack');
module.exports = () => {
  return new webpack.optimize.OccurrenceOrderPlugin();
}
