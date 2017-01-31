module.exports = () => {
  return {
      test: /\.js$/,
      loaders: ['babel-loader?presets[]=es2015', 'eslint-loader'],
      include: /src/,
      exclude: /node_modules/
    };
}
