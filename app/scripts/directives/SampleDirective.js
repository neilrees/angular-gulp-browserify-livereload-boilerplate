"use strict";

var template = require('../../templates/sample.html');

function SampleDirective() {
    return {
        restrict: 'E',
        template: template
    }
}

module.exports = SampleDirective;
