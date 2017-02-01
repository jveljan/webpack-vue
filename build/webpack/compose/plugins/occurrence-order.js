const webpack = require('webpack');
module.exports = () => {
  /**
   * Assign the module and chunk ids by occurrence count. 
   * Ids that are used often get lower (shorter) ids. 
   * This make ids predictable, reduces total file size and is recommended. 
   * preferEntry (boolean) give entry chunks higher priority. This make entry chunks smaller but increases the overall size. (recommended)
   */
  return new webpack.optimize.OccurrenceOrderPlugin(true);
}
