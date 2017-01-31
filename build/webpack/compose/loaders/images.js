module.exports = (path, limit) => {
  return {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: limit ? limit : 1024,
        name: `${path}/[name].[hash:7].[ext]`
      }
    };
}