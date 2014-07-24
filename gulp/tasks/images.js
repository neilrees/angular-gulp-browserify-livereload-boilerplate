'use strict';

var config = require('../config');
var path = require('path');
var gulp = require('gulp');
var cache = require('gulp-cache');
var changed = require('gulp-changed');
var size = require('gulp-size');

// Images
gulp.task('images', function () {
    var dest = config.debug + '/images';

    return gulp.src('app/images/**/*')
        .pipe(changed(dest)) // Ignore unchanged files
        .pipe(gulp.dest(dest))
        .pipe(size());
});


// Images Dist
gulp.task('imagesDist', ['images'], function () {
    var dest = config.release + '/images';

    return gulp.src(['app/images/**/*'], {base: path.resolve('app')})
        .pipe(gulp.dest(dest))
        .pipe(size());
});
