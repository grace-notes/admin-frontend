var myApp = angular.module('myApp', ['ngRoute', 'ngCookies'])
  .constant('REST_URL','http://localhost:8080');

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/login', { templateUrl: 'views/login.html', controller: 'SessionController' }).
    when('/signup', { templateUrl: 'views/signup.html', controller: 'SessionController' }).
    when('/users', { templateUrl: 'views/users.html', controller: 'UsersController' }).
    when('/home', { templateUrl: 'views/home.html', controller: 'HomeController' }).
    when('/profile', { templateUrl: 'views/profile.html', controller: 'ProfileController' }).
    when('/registrations', { templateUrl: 'views/registrations.html', controller: 'RegistrationController' }).
    when('/courserequests', { templateUrl: 'views/course-requests.html', controller: 'CourseRequestController' }).
    otherwise({ templateUrl: 'views/login.html', controller: 'SessionController' });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
}]);

myApp.run(
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.key) {
            $http.defaults.headers.common['Authorization'] = $rootScope.globals.key; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if (($location.path() !== '/login' && $location.path() !== '/signup') && !$rootScope.globals.key) {
                $location.path('/login');
            }
        });
    }
);
