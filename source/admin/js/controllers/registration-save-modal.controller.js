myApp.controller('RegistrationSaveModalInstanceController',
    function (REST_URL, $scope, $modal, $modalInstance, $q, $http) {
        'use strict';
        if($scope.registration !== null && $scope.registration !== undefined) {
            $scope.title = "Edit Registration";
        } else {
            $scope.title = "New Registration";
        }

        $scope.updateRegistration = function() {
            var deferred = $q.defer();
            try {
                $http.put(REST_URL+'/registrations/'+$scope.registration.id, $scope.registration).success(function(result) {
                    deferred.resolve(result);
                });
            } catch(e) {
                deferred.reject(e);
            }
            return deferred.promise;
        };

        $scope.createRegistration = function() {
            var deferred = $q.defer();
            try {
                $scope.registration.createdDate = Date.now();
                $scope.registration.modifiedDate = Date.now();
                $http.post(REST_URL+'/registrations', $scope.registration).success(function(result) {
                    deferred.resolve(result);
                });
            } catch(e) {
                deferred.reject(e);
            }
            return deferred.promise;
        };

        $scope.submit = function () {
            if($scope.title == "Edit Registration") {
                $scope.updateRegistration().then(function(result) {
                    var index = $scope.registrations.indexOf($scope.registration);
                    $scope.registrations[index] = result;
                    $modalInstance.dismiss('cancel');
                }).catch(function() {
                    console.log('Error updating Registration');
                });
            } else {
                $scope.createRegistration().then(function(result) {
                    $scope.registrations.push(result.data);
                    $modalInstance.dismiss('cancel');
                }).catch(function() {
                    console.log('Error creating Registration');
                });
            }
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
);
