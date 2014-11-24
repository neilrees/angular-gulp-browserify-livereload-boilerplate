'use strict';

var gulp = require('gulp');

gulp.task('html', function() {
    var config = require('../config');
    var size = require('gulp-size');

    return gulp.src('app/*.html')
        .pipe(gulp.dest(config.release))
        .pipe(size());
});
