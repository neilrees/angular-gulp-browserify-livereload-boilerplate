'use strict';

var config = require('../config');
var gulp = require('gulp');
var size = require('gulp-size');
var wiredep = require('wiredep');

var step = function (dest) {
    return gulp.src('app/*.html')
        .pipe(wiredep.stream())
        .pipe(gulp.dest(dest))
        .pipe(size());
};

gulp.task('html', function() {
    return step(config.debug);
});

gulp.task('htmlDist', function () {
    return step(config.release);
});
