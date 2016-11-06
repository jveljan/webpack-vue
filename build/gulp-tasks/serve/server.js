//TODO: externalize config
const port = 4044; //TODO: dynamic port
const enableHotReload = true;
const enableBrowserAutoOpen = true;


const paths = require('../../paths.conf');
const webpackConfig = require('../../webpack/webpack-dev.conf');
const webpack = require('webpack');
const express = require('express');
const hr = require('./hot-reload');

if(enableHotReload) {
  hr.adjustConfig(webpackConfig);
}

const compiler = webpack(webpackConfig);
const app = express();

if(enableHotReload) {
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


app.use('/assets/static', express.static(`${paths.root}/${paths.src}/assets/static`));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  if(enableBrowserAutoOpen) {
    require('opn')(uri);
  }
})