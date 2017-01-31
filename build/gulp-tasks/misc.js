const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const paths = require('../conf').path;

gulp.task('clean', clean);
gulp.task('copy-files', copyStatic);

function clean() {
  return del([paths.dist, paths.tmp]);
}

function copyStatic() {
  const files = filter(file => file.stat.isFile());
  const src = path.join(paths.src, 'assets/static/*');
  const dest = gulp.dest(path.join(paths.dist, 'assets/static/')); 
  return gulp.src(src).pipe(files).pipe(dest);
}