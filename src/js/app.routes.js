angular.module('routes', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/weekly-breakdown', {
        templateUrl: '../../views/weekly-breakdown.html',
        controller: 'weeklyBreakdownController'
      })
      .when('/your-class', {
        templateUrl: '../../views/your-class.html',
        controller: 'yourClassController'
      })
      .when('/most-minutes', {
        templateUrl: '../../views/most-minutes.html',
        controller: 'mostMinutesController'
      })
      .when('/most-stars', {
        templateUrl: '../../views/most-stars.html',
        controller: 'mostStarsController'
      })
      .when('/top-apps', {
        templateUrl: '../../views/top-apps.html',
        controller: 'topAppsController'
      })
      .otherwise({
        redirectTo: '/weekly-breakdown'
      });
  }]);
