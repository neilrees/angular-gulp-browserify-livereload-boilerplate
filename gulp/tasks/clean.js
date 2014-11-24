'use strict';

var gulp = require('gulp');

// Clean
gulp.task('clean', function (done) {
    var del = require('del');

    del(['dist'], done);
});
