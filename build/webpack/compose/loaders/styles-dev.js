module.exports = () => {
  return {
    test: /\.(css|less)$/,
    loaders: [
      'style-loader',
      'css-loader',
      'less-loader',
      'postcss-loader'
    ]
  };
}
