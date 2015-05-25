var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('source/admin/js/**/*');
});

gulp.task('html', function() {
  gulp.src('source/admin/*.html');
});

gulp.task('css', function() {
  gulp.src('source/admin/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('source/admin/js/**/*', ['js']);
  gulp.watch('source/admin/css/*.css', ['css']);
  gulp.watch(['source/admin/*.html',
    'source/admin/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('source/')
    .pipe(webserver({
      path: "/admin/",
      directoryListing: true,
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
