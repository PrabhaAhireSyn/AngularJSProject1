'use strict';

angular.module('loginModule', [])

.controller('loginController', ['userData', '$location', function(userData, $location) {
  var current = this;

  current.submitForm = function(isValid) {

    if (isValid) {
      userData.getUserData().then(function(data) {

        var found = data.filter(function(item) {
          return (item.username === current.username && item.password === current.password);
        });

        if (angular.isArray(found) && angular.isObject(found[0])) {
          $location.url( "/home" );
        } else {
          current.message = 'Invalid User';
        }
      });
    }
  }
}])