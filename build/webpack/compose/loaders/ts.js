module.exports = () => {
  return {
    test: /\.tsx?$/,
    loaders: ['ts-loader', 'tslint'],
    include: /src/,
    exclude: /node_modules/
  };
}
