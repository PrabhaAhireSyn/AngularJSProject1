'use strict';

angular.module('loginModule')

.factory('Auth', ['$cookieStore', function($cookieStore) {
  // Put cookie
  function setLoggedInUser(username, password) {
    $cookieStore.put('username', username);
    $cookieStore.put('password', password);
  }

  function setUserLoggedIn(value) {
    $cookieStore.put('UserLoggedIn', value);
  }

  function isUserLoggedIn() {
    return $cookieStore.get('UserLoggedIn');
  }

  function removeLoggedInUser() {
    $cookieStore.remove('username');
    $cookieStore.remove('password');
    $cookieStore.remove('UserLoggedIn');
  }

  // Removing a cookie
  function removeCookie(key) {
    $cookieStore.remove(key);
  }

  return {
    setLoggedInUser: setLoggedInUser,
    setUserLoggedIn: setUserLoggedIn,
    isUserLoggedIn: isUserLoggedIn,
    removeLoggedInUser: removeLoggedInUser
  }
}]);