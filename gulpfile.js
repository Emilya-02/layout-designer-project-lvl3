const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('build/'))
})

gulp.task('copy', function() {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('build/'))
})

gulp.task('js', function() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
  .pipe(gulp.dest('build/'))
})

gulp.task('jsmap', function() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js.map')
  .pipe(gulp.dest('build/'))
})

gulp.task('watch', function() {
  gulp.watch('./app/scss/**/*.scss', gulp.series('sass-compile', 'copy', 'js', 'jsmap'))
})
