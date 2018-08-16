'use strict';

angular.module('loginModule', [])

.controller('loginController', ['userData', '$location', 'Auth', function(userData, $location, Auth) {
  var current = this;

  current.submitForm = function(isValid) {

    if (isValid) {
      userData.getUserData().then(function(data) {

        var found = data.filter(function(item) {
          return (item.username === current.username && item.password === current.password);
        });

        if (angular.isArray(found) && angular.isObject(found[0])) {
          current.IsUserLoggedIn = true;
          Auth.setUserLoggedIn(true);
          Auth.setLoggedInUser(current.username, current.password);
          $location.url( "/home" );
        } else {
          current.message = 'Invalid User';
          current.IsUserLoggedIn = false;
        }
      });
    }
  }
}])

.controller('mainController', ['Auth', function(Auth) {
  var current = this;

  current.IsLoggedIn = function() {
    return Auth.isUserLoggedIn();
  }

  current.logout = function() {
    Auth.removeLoggedInUser();
  }
}]);