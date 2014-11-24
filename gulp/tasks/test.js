'use strict';

var gulp = require('gulp');

var testTask = function(karmaConf, done) {
    var karma = require('karma').server;
    var _ = require('lodash');

    var config;
    var configure = require(karmaConf);
    configure({
        set: function (c) {
            config = c;
        }
    });

    karma.start(_.extend(config, {basePath: ''}), done);
};

gulp.task('dist-test', ['script', 'templates'], function (done) {
    return testTask('../../test/karma.dist.conf.js', done);
});

gulp.task('tdd', ['script', 'templates', 'watch'], function (done) {
    return testTask('../../test/karma.debug.conf.js', done);
});
