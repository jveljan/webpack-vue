const path = require('path');

module.exports = {
  path: {
    src: 'src',
    dist: 'dist',
    root: path.resolve(__dirname, '../')
  },
  proxy: {
    '/api/': 'http://proxy.url/api'
  },
  dev: {
    port: 3344,
    enableHotReload: true,
    enableBrowserAutoOpen: true
  }
}