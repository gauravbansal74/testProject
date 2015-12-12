'use strict';

angular.module('redmartApp')
  .controller('MainCtrl', function ($scope, contactService) {
    	
    	//list of contacts from contactService
    	$scope.contacts = contactService.contacts;

		// function to delete the contact 
		$scope.deleteContact = function(id){
			contactService.removeContact(id);
		};

  });
