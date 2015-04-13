myApp.controller('UsersController',
  function($scope, $rootScope, REST_URL, $location, $http) {
    $rootScope.active = { "home" : "", "users" : "active" };
    $scope.loadData = function() {

      //$http.get("/test", config);
      //$http.get(REST_URL + '/users', config);

      $http({
        method: 'GET',
        url: REST_URL + '/users',
      }).then(function(dataResponse) {
        $scope.response = dataResponse.data;
        if($scope.response.meta.status == 2) {
          $location.path('/login')
        }
      });
      $scope.columns = [
          { "data": "hashedEmail", "searchable":false, "orderable":false,
          "width": "20px",
          "render":
          function ( data, type, full, meta ) {
            if(data != null) {
              return '<img src="http://www.gravatar.com/avatar/'+data+'?s=20" />'
            }
            return '';
          }},
          { "data": "role", "render":
          function(data, type, full, meta) {
            if(data === 'admin')
              return '<span class="label label-success">'+data+'</span>';
            return '<span class="label label-default">'+data+'</span>';
          }},
          { "data": "email" },
          { "data": "createdAt" }
      ];

      $scope.order = [[ 3, "desc" ]];

      $scope.overrideOptions = {
      };
    }
  }
);
