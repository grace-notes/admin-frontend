myApp.controller('RegistrationController',
function($rootScope, $scope, $location, $http, Authentication) {

  // reset login status
  Authentication.logout();

  $scope.login = function() {
    $scope.dataLoading = true;
    var promise = Authentication.login($scope.user);
    $rootScope;
    promise.then(
    function(response) {
      if(response.meta.status == 2) {
        $scope.success = null;
        $scope.warning = response.meta.statusText;
        $scope.dataLoading = false;
      }
      if(response.meta.status == 1) {
        $scope.warning = null;
        $location.path('/home');
      }
    },
    function(error) {
      // report something
      //$scope.message = "test";
    },
    function(progress) {
      // report progress
      //$scope.message = "test";
    });

  }; //login

  $scope.signup = function() {
    var promise = Authentication.register($scope.user);

    promise.then(
    function(response) {
      // if there is a warning display it
      if(response.meta.status == 2) {
        $scope.warning = response.meta.statusText;
      }
      // if successful redirect to users
      if(response.meta.status == 1) {
        $scope.warning = null;
        $location.path('/home');
      }
    },
    function(error) {
      // report something
      //$scope.message = "test";
    },
    function(progress) {
      // report progress
      //$scope.message = "test";
    });
  }; //register
});
