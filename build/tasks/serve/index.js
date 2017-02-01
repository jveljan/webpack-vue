const conf = require('../../conf');
const webpackConfig = require('../../webpack/webpack-dev.conf');
const webpack = require('webpack');
const express = require('express');
const hr = require('./hot-reload');

if(conf.dev.enableHotReload) {
  hr.adjustConfig(webpackConfig);
}

const compiler = webpack(webpackConfig);
const app = express();

if(conf.dev.enableHotReload) {
  app.use(hr.hotMiddleware(compiler));
}

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  stats: conf.webpack.stats
});
// serve webpack bundle output
app.use(devMiddleware)

if(conf.proxy) {
  // proxy middleware
  const proxy = require('http-proxy-middleware');
  for(var k in conf.proxy) {
    console.log('registering proxy: ', k, ' => ', conf.proxy[k]);
    app.use(k, proxy(conf.proxy[k]));
  }
}


app.use('/assets/static', express.static(`${conf.path.root}/${conf.path.src}/assets/static`));

module.exports = app.listen(conf.dev.port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + conf.dev.port
  console.log('Listening at ' + uri + '\n')
  if(conf.dev.enableBrowserAutoOpen) {
    require('opn')(uri);
  }
})