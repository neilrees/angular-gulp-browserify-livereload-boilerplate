'use strict';

var gulp = require('gulp');
var size = require('gulp-size');

// Build
gulp.task('dist', ['htmlDist', 'imagesDist', 'stylesDist', 'scriptDist', 'test']);
