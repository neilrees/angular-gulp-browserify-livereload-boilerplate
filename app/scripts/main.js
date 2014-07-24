'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node

var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.
var SampleDirective = require('./directives/SampleDirective');
var SampleService = require('./services/SampleService');

angular.module('myApp', [])
    .controller('WelcomeCtrl', WelcomeCtrl)
    .directive('sample', SampleDirective)
    .service('sampleService', SampleService);
