const path = require('path');

module.exports = {
  path: {
    tmp: '.tmp',
    src: 'src',
    dist: 'dist',
    assets: 'assets',
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