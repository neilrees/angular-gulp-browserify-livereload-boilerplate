'use strict';

var config = require('../config');
var gulp = require('gulp');
var connect = require('connect');
var url = require('url');
var prism = require('connect-prism');


function prismInit(mode) {

    prism.create({
        name: 'api',
        mode: mode || 'proxy',
        context: '/api',
        host: 'localhost',
        port: '2676'
    });

}

// Connect
gulp.task('connect', function () {

    var app = connect()
        .use(require('connect-livereload')({ port: config.livereloadPort }))
        .use('/', connect.static('.tmp'))
        .use('/bower_components', connect.static('bower_components'))
        .use(prism.middleware);

    require('http').createServer(app)
        .listen(config.port)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:' + config.port);
        });
});

gulp.task('serve', ['connect', 'styles'], function () {
    prismInit();
});

gulp.task('serve:mock', ['connect', 'styles'], function () {
    prismInit('mock');
});

gulp.task('serve:record', ['connect', 'styles'], function () {
    prismInit('record');
});

gulp.task('serve:proxy', ['connect', 'styles'], function () {
    prismInit('proxy');
});
