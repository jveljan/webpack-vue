module.exports = () => {
  return {
    test: /\.(css|less)$/,
    loaders: [
      'style',
      'css',
      'less',
      'postcss'
    ]
  };
}
