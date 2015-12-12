'use strict';

angular
  .module('redmartApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
