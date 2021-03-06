'use strict';

var gulp = require('gulp');

// Watch
gulp.task('watch', ['connect', 'serve'], function () {
  var livereload = require('gulp-livereload');
  var server = livereload();
    // Watch for changes in `app` folder
    gulp.watch([
        'dist/**/*'
    ]).on('change', function(file) {
      server.changed(file.path);
    });

    // Watch .less files
    gulp.watch('app/less/**/*.less', ['styles']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.js', ['jshint']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);

    // Watch .html files
    gulp.watch('app/*.html', ['html']);

    // Watch template files
    gulp.watch('app/templates/**/*.html', ['templates']);
});
