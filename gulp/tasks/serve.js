'use strict';

var gulp = require('gulp');

function prismInit(mode) {

    var prism = require('connect-prism');

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

    var prism = require('connect-prism');
    var connect = require('connect');
    var http = require('http');
    var serveStatic = require('serve-static');

    var config = require('../config');

    var app = connect()
        .use(require('connect-livereload')({ port: config.livereloadPort }))
        .use(serveStatic('dist'))
        .use(prism.middleware);

    http.createServer(app)
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
