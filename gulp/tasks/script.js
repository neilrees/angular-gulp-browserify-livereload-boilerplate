'use strict';

var browserify = require('browserify');
var shim = require('browserify-shim');
var config = require('../config');
var partialify = require('partialify');
var gulp = require('gulp');
var debug = require('gulp-debug');
var source = require('vinyl-source-stream');
var size = require('gulp-size');
var karma = require('karma').server;
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var _ = require('lodash');

var step = function() {
    return browserify('./app/scripts/main.js')
        .transform(partialify)
        .transform(shim)
        .bundle({insertGlobals: false, debug: true})
        .pipe(source('main.js'))
}

gulp.task('script', function () {
    return step()
      .pipe(gulp.dest(config.debug + '/scripts/'));
});

gulp.task('scriptDist', function () {
    return step()
      .pipe(streamify(uglify()))
      .pipe(gulp.dest(config.release + '/scripts/'));
});

gulp.task('test', ['scriptDist'], function(done) {
    var config;
    var configure = require('../../test/karma.dist.conf.js');
    configure({set: function(c) { config = c;}});

    karma.start(_.extend(config, {basePath: '', singleRun: true}), done);
});

gulp.task('tdd', ['script'], function(done) {
    var config;
    var configure = require('../../test/karma.debuf.conf.js');
    configure({set: function(c) { config = c;}});

    karma.start(_.extend(config, {basePath: '', singleRun: false}), done);
});
