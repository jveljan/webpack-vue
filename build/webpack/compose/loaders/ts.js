module.exports = () => {
  return {
    test: /\.tsx?$/,
    loaders: ['ts-loader', 'tslint-loader'],
    include: /src/,
    exclude: /node_modules/
  };
}
