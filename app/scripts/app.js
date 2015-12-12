'use strict';

angular
  .module('redmartApp', [
    'ngRoute',
    'ngMock'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact/saveContact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/contact/:id', {
        templateUrl: 'views/contact/saveContact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
