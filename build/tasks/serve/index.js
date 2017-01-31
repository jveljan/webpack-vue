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

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    chunks: false
  }
});
// serve webpack bundle output
app.use(devMiddleware)

// TODO: proxy middleware


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