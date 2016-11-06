module.exports = () => {
  return {
      test: /\.js$/,
      loaders: ['babel?presets[]=es2015', 'eslint'],
      include: /src/,
      exclude: /node_modules/
    };
}
