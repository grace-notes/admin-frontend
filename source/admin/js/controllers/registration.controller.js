myApp.controller('RegistrationController',
  function($scope,
    $rootScope,
    REST_URL,
    $location,
    $http,
    $q,
    $modal,
    $log) {

  $rootScope.active = { "home" : "", "users" : "", "registrations" : "active", "courseRequests" : "" };

  $scope.registrations = [];

  $scope.dataLoaded = false;

  $scope.loadData = function() {
    var deferred = $q.defer();
    try {
      $http.get(REST_URL+'/registrations').success(function(result) {
        deferred.resolve(result);
      });
    } catch(e) {
      deferred.reject(e);
    }
    return deferred.promise;
  };

  $scope.dataLoaded = false;
  $scope.loadData().then(function(result) {
      $scope.registrations = result.data;
      $scope.dataLoaded = true;
  }).catch(function() {
      console.log('Error fetching registration list!');
  });

  $scope.gridOptions = {
    enableVerticalScrollbar: 1,
    enableHorizontalScrollbar: 0,
    data: 'registrations',
    enableFiltering: true,
    paginationPageSizes: [15, 25, 50, 100],
    paginationPageSize: 15,
    columnDefs: [
      {field: 'email'},
      {field: 'name'},
      {field: 'createdAt'},
      {
          field:'id',
          displayName:'Actions',
          width: 100,
          cellTemplate: '<div>'+
          '<button ng-click="grid.appScope.openRegistrationSaveModal(row.entity)" ' +
          'type="button" ' +
          'class="btn btn-warning btn-transparent btn-sm-trans" ' +
          'data-toggle="tooltip" data-placement="top" ' +
          'title="Edit registration details">View/Edit</a>'+
          '</div>'
      }
    ],
    onRegisterApi: function (gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  $scope.openRegistrationSaveModal = function(registration) {
    $scope.registration = registration;
    var modalInstance = $modal.open({
        templateUrl: 'js/partials/registration-save-modal.partial.html',
        controller: 'RegistrationSaveModalInstanceController',
        size: 'lg',
        scope: $scope
    });

    modalInstance.result.then(function () {
        $log.info('Modal closed at: ' + new Date());
    }, function () {
        $log.info('Modal dismissed at: ' + new Date());
    });
  };

}
);
