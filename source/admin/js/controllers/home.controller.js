myApp.controller('HomeController',
  function($scope, $rootScope, REST_URL, $location, $http) {
    $rootScope.active = { "home" : "active", "users" : "", "registrations" : "",  "courseRequests" : "" };
    $scope.options = [[0, 3], [4, 8], [8, 5], [9, 13]];
  }
);
