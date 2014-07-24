'use strict';

describe('Controller: WelcomeController', function () {


    var controller,
        scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('WelcomeCtrl', {
            $scope: scope
        });
    }));

    it('should set a model onto the scope', function() {
        expect(scope.model).not.toBe(undefined);
    });

});
