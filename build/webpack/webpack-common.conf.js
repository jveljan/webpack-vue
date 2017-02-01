const paths = require('../conf').path;
const compose = require('./compose')();

module.exports = {
  module: {
    loaders: [
      compose.loader('json'),
      compose.loader('es2015'), // *.js -> eslint + babel
      compose.loader('ts'),     // *.ts -> tslint + typescript
      compose.loader('html'),
      compose.loader('fonts', 'assets/fonts'),
      compose.loader('images', 'assets/images')
    ]
  },
  plugins: [
    compose.plugin('occurrence-order'),
    compose.plugin('html', paths.src + '/index.html'),
    compose.plugin('progress')
  ],
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      assets: `${paths.root}/src/assets`, 
      src: `${paths.root}/src`,
      app: `${paths.root}/src/app`,
      vue: 'vue/dist/vue'
    }
  },
  entry: {
    index: `./${paths.src}/index`
  }
}

