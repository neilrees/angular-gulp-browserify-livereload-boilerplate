'use strict';

var gulp = require('gulp');

gulp.task('styles', function () {
    var config = require('../config');

    var less = require('gulp-less');
    var size = require('gulp-size');
    var uglifycss = require('gulp-uglifycss');
    var handleError = require('../util/handleError');

    return gulp.src('app/less/app.less')
        .pipe(less({
            style: 'expanded',
            loadPath: [config.bower]
        }))
        .on('error', handleError)
        .pipe(uglifycss())  // minify css
        .pipe(gulp.dest(config.release + '/styles'))
        .pipe(size());
});
