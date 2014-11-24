'use strict';

var SampleModel = require('../models/SampleModel');

function WelcomeController($scope, sampleService) {
  $scope.model = new SampleModel(sampleService.ping());
}

WelcomeController.$inject = ['$scope', 'sampleService'];

module.exports = WelcomeController;
