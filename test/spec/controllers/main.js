'use strict';

describe('Controller: MainCtrl', function () {

  var mainCtrl, scope={};

  beforeEach(module('redmartApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, contactService) {
    scope = $rootScope.$new();
    mainCtrl = $controller('MainCtrl', {
      $scope: scope,
      contactService: contactService
    });
  }));

    it('Should be greater than or equal to 0', function () {
       expect(scope.contacts.length).toBe(6);
    });

    it('After deletion one element from contacts array length should be minus 1', function(){
      //var currentLength = scope.contacts.length;
      scope.deleteContact(1);
      expect(scope.contacts.length).toBe(5);
    });

  
});
