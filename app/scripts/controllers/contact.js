'use strict';

angular.module('redmartApp')
  .controller('ContactCtrl', function ($scope, contactService, $location, $routeParams) {
  		$scope.contacts = contactService.contacts;
  		$scope.userData = {};
  		if('id' in $routeParams && $routeParams.id !== undefined){
  			$scope.userData = contactService.contacts[$routeParams.id];
  			$scope.userData.index = $routeParams.id;
  		}else{
  			$scope.userData.pic = '6.jpg';
  		}
     	// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {
			contactService.saveContact($scope.userData);
			$location.path('#/');
		};

  });
