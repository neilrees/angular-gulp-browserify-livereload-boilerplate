'use strict';

var gulp = require('gulp');

gulp.task('vendor-scripts', function() {
    var wiredep = require('wiredep')();
    var sourcemaps = require('gulp-sourcemaps');
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var config = require('../config');

    return gulp.src(wiredep.js)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(uglify({
            output: {
                ascii_only: true
            }
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.release + '/scripts/'));
});

gulp.task('vendor-css', function() {
    var wiredep = require('wiredep')();
    var concat = require('gulp-concat');
    var uglifycss = require('gulp-uglifycss');
    var config = require('../config');

    return gulp.src(wiredep.css)
        .pipe(concat('vendor.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest(config.release + '/styles/'));
});

gulp.task('vendor-fonts', function() {
    var config = require('../config');
    var lib = require('bower-files')({join: {fonts: ['eot', 'woff', 'svg', 'ttf']}});

    return gulp.src(lib.fonts)
        .pipe(gulp.dest(config.release + '/fonts'));
});

gulp.task('vendor', ['vendor-scripts', 'vendor-css', 'vendor-fonts']);

