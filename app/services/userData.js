angular.module('loginModule')
.factory('userData', ['$http', '$cacheFactory', '$q', function($http, $cacheFactory, $q) {
  var data = undefined;

  function getUserData () {

    var deferred = $q.defer();

    //Create cache object
    var dataCache = $cacheFactory.get('userDataCache');
    if (!dataCache) {
      dataCache = $cacheFactory('userDataCache');
    }

    //Check if login data exists in cache
    var loginDataFromCache = dataCache.get('loginData');
    if(loginDataFromCache) {  //If data in cache exists, use it

      //console.log('data from cache');

      deferred.resolve(loginDataFromCache);

    } else {

      //console.log('data from http');

      $http.get('data/users.json', {cache: true})
        .success(function (data) {
          dataCache.put('loginData', data);
          deferred.resolve(data);
      });

    }

    data = deferred.promise;
    return $q.when(data);
  }

  return {
    getUserData: getUserData
  }
}]);