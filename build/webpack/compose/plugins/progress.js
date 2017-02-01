const webpack = require('webpack');
module.exports = () => {
  /**
   * Hook into the compiler to extract progress information.
   * The handler must have the signature function(percentage, message).
   * It’s called with 0 <= percentage <= 1. percentage == 0 indicates the start. percentage == 1 indicates the end.
   */
  // return new webpack.ProgressPlugin(function(percentage, message) {
  //   console.log('progress:', percentage*100, message);
  // });
  return new webpack.ProgressPlugin({ profile: true});
}
