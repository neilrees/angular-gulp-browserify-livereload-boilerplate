'use strict';

var gulp = require('gulp');

gulp.task('templates', function () {
    var size = require('gulp-size');
    var config = require('../config');
    var templateCache = require('gulp-angular-templatecache');

    return gulp.src('./app/templates/**/*.html')
        .pipe(templateCache({standalone: true}))
        .pipe(gulp.dest(config.release + '/scripts/'))
        .pipe(size());
});
