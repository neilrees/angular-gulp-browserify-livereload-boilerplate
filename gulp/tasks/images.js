'use strict';

var gulp = require('gulp');

// Images Dist
gulp.task('images', function () {
    var config = require('../config');
    var size = require('gulp-size');

    var dest = config.release + '/images';

    return gulp.src(['app/images/**/*'])
        .pipe(gulp.dest(dest))
        .pipe(size());
});
