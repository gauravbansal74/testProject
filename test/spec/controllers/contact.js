'use strict';

describe('Controller: ContactCtrl', function () {

  var contactCtrl, scope={}, routeParams={};
  routeParams.id = 1;
  scope.userForm = {};
  scope.userForm.$valid = true;
  scope.userData =  {};
  scope.userData.id =  '9';
  scope.userData.pic =  '9.jpg';
  scope.userData.name =  'Test Case';
  scope.userData.tel =  '9876543210';
  scope.userData.email =  'test@test.com';

  beforeEach(module('redmartApp'));

 

  beforeEach(inject(function ($controller, $rootScope, contactService) {
    scope = $rootScope.$new();
    contactCtrl = $controller('ContactCtrl', {
      $scope: scope,
      contactService: contactService,
      $routeParams:routeParams
    });
  }));


    it('Update record after that length should not modified', function(){
      routeParams.id = undefined;
      scope.submitForm();
      expect(scope.contacts.length).toBe(6);
    });

    it('Add new record after that length should increase by 1', function(){
      scope.submitForm();
      expect(scope.contacts.length).toBe(7);
    });
  
});
