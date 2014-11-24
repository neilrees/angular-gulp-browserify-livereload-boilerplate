'use strict';

var gulp = require('gulp');

// Dev Server
gulp.task('build', ['html', 'images', 'styles', 'templates', 'jshint', 'vendor'], function() {
    gulp.start('watch');
});

gulp.task('dev', function() {
    GLOBAL.__debugBuild = false;
    gulp.start('build');
});

gulp.task('debug', function() {
    GLOBAL.__debugBuild = true;
    gulp.start('build');
});
