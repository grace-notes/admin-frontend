var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('source/js/**/*');
});

gulp.task('html', function() {
  gulp.src('source/*.html');
});

gulp.task('css', function() {
  gulp.src('source/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('source/js/**/*', ['js']);
  gulp.watch('source/css/*.css', ['css']);
  gulp.watch(['source/*.html',
    'source/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('source/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
