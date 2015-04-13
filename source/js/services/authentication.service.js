myApp.factory('Authentication', function(REST_URL, $rootScope, $location, $http, $cookieStore, $q) {

  var myObject = {

    login : function(user) {
      var deferred = $q.defer();
      try {
        $http({
          method: 'POST',
          url: REST_URL + '/users/login',
          data: user
        }).success(function(response) {
          var loginObj = {
            user: response.data.user,
            key: response.data.key
          };
          $rootScope.globals = loginObj;
          $http.defaults.headers.common['Authorization'] = $rootScope.globals.key;
          $cookieStore.put('globals', $rootScope.globals);
          deferred.resolve(response);
        });
      } catch(e) {
        deferred.reject(e);
      }
      return deferred.promise;
    }, //login

    register : function(user) {
      var deferred = $q.defer();
      try {
        $http({
          method: 'POST',
          url: REST_URL + '/users/signup',
          data: user
        }).success(function(response) {
          var loginObj = {
            user: response.data.user,
            key: response.data.key
          };
          $rootScope.globals = loginObj;
          $http.defaults.headers.common['Authorization'] = $rootScope.globals.key;
          $cookieStore.put('globals', $rootScope.globals);
          deferred.resolve(response);
        });
      } catch(e) {
        deferred.reject(e);
      }
      return deferred.promise;
    }, //register

    logout : function() {
      $rootScope.globals = {};
      $cookieStore.remove('globals');
      $http.defaults.headers.common.Authorization = 'none';
    }, //logout

  } // myObject

  return myObject;

}); // Authentication
