'use strict';

var gulp = require('gulp');

// Build
gulp.task('dist', ['bower'], function() {
    GLOBAL.__debugBuild = false;
    gulp.start('dist-build');
});

gulp.task('dist-build', ['html', 'images', 'styles', 'templates', 'jshint', 'vendor'], function() {
    gulp.start('dist-test');
});
