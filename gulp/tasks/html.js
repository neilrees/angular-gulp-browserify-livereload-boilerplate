'use strict';

var config = require('../config');
var gulp = require('gulp');
var size = require('gulp-size');
var wiredep = require('wiredep').stream;

var step = function (dest) {
    return gulp.src('app/*.html')
        .pipe(wiredep({
            ignorePath: '../'
        }))
        .pipe(gulp.dest(dest))
        .pipe(size());
};

gulp.task('html', function() {
    return step(config.debug);
});

gulp.task('bowerDist', function() {
    return gulp.src('bower_components/**/*')
        .pipe(gulp.dest(config.release + '/bower_components/'));
});

gulp.task('browserifyDist', function() {
    return step(config.release);
});

gulp.task('htmlDist', ['bowerDist', 'browserifyDist']);
