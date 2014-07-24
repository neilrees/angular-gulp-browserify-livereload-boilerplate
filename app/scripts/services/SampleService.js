'use strict'

function SampleService() {
}

SampleService.$inject = [];

SampleService.prototype = {
    ping: function() {
        return 'pong';
    }
};

module.exports = SampleService;
