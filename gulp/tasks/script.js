'use strict';

var gulp = require('gulp');

gulp.task('script', function () {

    var config = require('../config');

    var sourcemaps = require('gulp-sourcemaps');
    var browserify = require('browserify');
    var shim = require('browserify-shim');
    var uglify = require('gulp-uglify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var handleError = require('../util/handleError');
    var gutil = require('gulp-util');

    var bundler = browserify({
        entries: ['./app/scripts/app.js'],
        insertGlobals: false,
        debug: true
    }).transform(shim);

    var pipe = bundler.bundle()
        .on('error', handleError)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}));

    if (GLOBAL.__debugBuild) {
        gutil.log('Debug build, not minifying source');
    } else {
        gutil.log('Release build, minifying source');
        pipe = pipe.pipe(uglify({
            output: {
                ascii_only: true
            }
        }));
    }

    return pipe.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.release + '/scripts/'));
});
