const path = require('path');

module.exports = {
  path: {
    src: 'src',
    dist: 'dist',
    root: path.resolve(__dirname, '../')
  },
  webpack: {
    stats: {
      colors: true,
      chunks: false
    }
  },
  proxy: {
    '/api/': { // see https://github.com/chimurai/http-proxy-middleware#options
      target: 'https://jsonplaceholder.typicode.com',
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return path.replace('/api', '/');
      }
    }
  },
  dev: {
    port: 3344,
    enableHotReload: true,
    enableBrowserAutoOpen: true
  }
}