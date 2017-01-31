module.exports = (path, limit) => {
  return  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: limit ? limit : 1024,
      name: `${path}/[name].[hash:7].[ext]`
    }
  };
}