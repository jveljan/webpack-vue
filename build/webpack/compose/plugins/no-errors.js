const webpack = require('webpack');
module.exports = () => {
  /**
   * When there are errors while compiling this plugin skips 
   * the emitting phase (and recording phase), so there are no assets emitted that include errors. 
   * The emitted flag in the stats is false for all assets. 
   * If you are using the CLI, the webpack process will not exit with an error code by enabling this plugin. 
   * If you want webpack to “fail” when using the CLI, please check out the bail option.
   */
  return new webpack.NoErrorsPlugin();
}
