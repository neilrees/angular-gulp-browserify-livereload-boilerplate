'use strict';

describe('Service: SampleService', function () {

    var service;

    beforeEach(module('myApp'));

    beforeEach(inject(function (sampleService) {
        service = sampleService;
    }));

    it('should return pong from ping method', function() {
        expect(service.ping()).toBe('pong');
    });

});

