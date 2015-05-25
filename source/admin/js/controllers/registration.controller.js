myApp.controller('RegistrationController',
  function($scope, $rootScope, REST_URL, $location, $http) {
    $rootScope.active = { "home" : "", "users" : "", "registrations" : "active", "courseRequests" : "" };
    $scope.loadData = function() {
      $http({
        method: 'GET',
        url: REST_URL + '/registrations',
      }).then(function(dataResponse) {
        $scope.response = dataResponse.data;
        if($scope.response.meta.status == 2) {
          $location.path('/login')
        }
      });
      $scope.columns = [
          { "data": "email"},
          { "data": "name"},
          { "data": "createdAt" }
      ];

      $scope.order = [[ 2, "desc" ]];

      $scope.overrideOptions = {
      };
    }
  }
);
