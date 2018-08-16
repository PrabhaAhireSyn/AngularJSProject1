'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  /*'myApp.view1',
  'myApp.view2',
  'myApp.version',*/
  'loginModule',
  'homeModule'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginController',
    controllerAs: 'login'
  })
  .when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  .otherwise({redirectTo: '/login'});
}]);


/*app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeSuccess', function (event) {

      if (!Auth.isLoggedIn()) {
          console.log('DENY');
          event.preventDefault();
          $location.path('/login');
      }
      else {
          console.log('ALLOW');
          $location.path('/home');
      }
  });
}]);*/