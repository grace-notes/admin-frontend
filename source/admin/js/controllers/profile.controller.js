myApp.controller('ProfileController',
  function($scope, $rootScope, REST_URL, $location, $http) {
    $rootScope.active = { "home" : "", "users" : "", "registrations" : "", "courseRequests" : "" };
  }
);
