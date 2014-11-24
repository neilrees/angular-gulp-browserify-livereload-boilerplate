'use strict';

var angular = require('angular');

angular.module('myApp', ['templates'])
    .controller('WelcomeCtrl', require('./controllers/WelcomeCtrl'))
    .directive('sample', require('./directives/SampleDirective'))
    .service('sampleService', require('./services/SampleService'));
