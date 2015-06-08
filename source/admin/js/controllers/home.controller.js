myApp.controller('HomeController',
  function($scope, $rootScope, REST_URL, $location, $http) {
    $rootScope.active = { "home" : "active", "users" : "", "registrations" : "",  "courseRequests" : "" };
    //$scope.options = [[0, 3], [4, 8], [8, 5], [9, 13]];

    $http({
      method: 'GET',
      url: REST_URL + '/report/monthlyByDay',
    }).then(function(dataResponse) {
      $scope.response = dataResponse.data.data;
      console.log($scope.response);
      $scope.options = {
        title: {
          text: 'Daily Stats By Month',
        },
        subtitle: {
          text: $scope.response.subtitle,
        },
        xAxis: {
            title: { text: 'Days of Month' },
            categories: $scope.response.daysInMonth
        },
        yAxis: {
            min: 0,
            allowDecimals: false,
            title: {
                text: 'Total'
            }
        },
        series: [{
            name: 'Registrations By Day',
            data: $scope.response.registrationsByDay
        },{
            name: 'Course Requests By Day',
            data: $scope.response.courseRequestsByDay
        }]
      };
      console.log($scope.options);
    });
  }
);
