const webpack = require('webpack');
module.exports = () => {
  /**
   * Hook into the compiler to extract progress information.
   * The handler must have the signature function(percentage, message).
   * It’s called with 0 <= percentage <= 1. percentage == 0 indicates the start. percentage == 1 indicates the end.
   */ 
  return new webpack.ProgressPlugin(function(percentage, message) {
    var p = Math.round( percentage * 100 );
    //console.log('progress:', p, message);
    process.stdout.write('.');
  });
  //return new webpack.ProgressPlugin({ profile: true});
}
