myApp.controller('CourseRequestController',
  function($scope, $rootScope, REST_URL, $location, $http) {
    $rootScope.active = { "home" : "", "users" : "", "registrations" : "", "courseRequests" : "active" };
    $scope.loadData = function() {
      $http({
        method: 'GET',
        url: REST_URL + '/courserequests',
      }).then(function(dataResponse) {
        $scope.response = dataResponse.data;
        if($scope.response.meta.status == 2) {
          $location.path('/login')
        }
      });
      $scope.columns = [
          { "data": "email"},
          { "data": "name"},
          { "data": "course"},
          { "data": "createdAt" }
      ];

      $scope.order = [[ 3, "desc" ]];

      $scope.overrideOptions = {
      };
    }
  }
);
