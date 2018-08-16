'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'loginModule',
  'homeModule',
  'phonesModule'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginController',
    controllerAs: 'login'
  })
  .when('/logout', {
    controller: 'loginController',
    controllerAs: 'login'
  })
  .when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeController',
    controllerAs: 'home'
  })
  .when('/phones', {
    templateUrl: 'phones/phones.html',
    controller: 'phonesController',
    controllerAs: 'phones'
  })
  .otherwise({redirectTo: '/login'});
}]);

app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (event) {

    if (!Auth.isUserLoggedIn()) {
      //event.preventDefault();
      $location.url( "/login" );
    }/*
    else {
      console.log( $location.$$url);
      $location.url( "/home" );
    }*/
  });
}]);