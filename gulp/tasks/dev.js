'use strict';

var gulp = require('gulp');

// Dev Server
gulp.task('dev', ['html', 'styles', 'script', 'images', 'watch', 'jshint']);
