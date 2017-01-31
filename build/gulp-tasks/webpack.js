const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('test', (done) => {
  console.log('task test');
  done();
});

gulp.task('serve', (done) => {
  require('./serve/server');
  done();
});

gulp.task('compile', (done) => {
  const cfg = require('../webpack/webpack-dist.conf');
  var compiler = webpack(cfg);
  compiler.run(function(err, stats) {
        if (err) { throw new gutil.PluginError('webpack:build', err); }
        gutil.log('[webpack:build]', stats.toString({
            chunks: true,
            colors: true
        }));
        done();
  });
});

gulp.task('build', gulp.series('clean', 'copy-files', 'compile'));