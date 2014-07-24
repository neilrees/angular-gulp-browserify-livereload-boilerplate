'use strict';

var angular = require('angular');

var WelcomeCtrl = require('./controllers/WelcomeCtrl'); 
var SampleDirective = require('./directives/SampleDirective');
var SampleService = require('./services/SampleService');

angular.module('myApp', ['templates'])
    .controller('WelcomeCtrl', WelcomeCtrl)
    .directive('sample', SampleDirective)
    .service('sampleService', SampleService);
