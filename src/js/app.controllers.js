angular.module('controllers', [])

  .controller('weeklyBreakdownController', function($scope) {
    $scope.heading = "Your weekly breakdown";
    $scope.$on('$viewContentLoaded', function() {
      new Chartist.Bar('.ct-chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
          [3, 1, 2, 3, 4, 3, 3], //19
          [1, 1.5, 1, 2, 2, 4, 1] //12.5
        ]
      }, {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
          offset: 70
        }
      });
    });
  })

  .controller('yourClassController', function($scope) {
    $scope.heading = "Your class compaired to the rest of your school";
    $scope.$on('$viewContentLoaded', function() {
      new Chartist.Bar('.ct-your-class', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
          [3 * 20, 1 * 20, 2 * 20, 3 * 20, 4 * 20, 3 * 20, 3 * 20], //380
          [1 * 20, 1.5 * 20, 1 * 20, 2 * 20, 2 * 20, 4 * 20, 1 * 20] //250
        ]
      }, {
        seriesBarDistance: 10,
        reverseData: true,
        axisY: {
          offset: 70
        }
      });
    });
  })

  .controller('topAppsController', function($scope) {
    $scope.heading = "Top 5 apps used this week";
    var data = {
      labels: ['Mathletics', 'Minecraft', 'Google Chrome', 'WPS Office', 'Duolingo'],
      series: [117, 204, 80, 20, 150]
    };
    var options = {
      labelInterpolationFnc: function(value) {
        return value[0]
      }
    };
    var responsiveOptions = [
      ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 100,
        labelDirection: 'explode',
        labelInterpolationFnc: function(value) {
          return value;
        }
      }],
      ['screen and (min-width: 1024px)', {
        labelOffset: 150,
        chartPadding: 50
      }]
    ];
    new Chartist.Pie('.ct-top-apps', data, options, responsiveOptions);
  })

  .controller('mostStarsController', function($scope) {
    $scope.heading = "Your students with the most stars";
    $scope.$on('$viewContentLoaded', function() {
      new Chartist.Bar('.ct-most-stars', {
        labels: ['Elise', 'Liam', 'Nicolas', 'Justine', 'Olga'],
        series: [
          [1 * 5, 2 * 5, 2 * 5, 1.5 * 5, 3 * 5]
        ]
      }, {
        seriesBarDistance: 10,
        reverseData: true,
        axisY: {
          offset: 70
        }
      });
    });
  })

  .controller('mostMinutesController', function($scope) {
    $scope.heading = "Your students with the most minutes";
    $scope.$on('$viewContentLoaded', function() {
      new Chartist.Bar('.ct-most-minutes', {
        labels: ['Casey', 'Olivia', 'Max', 'Peter', 'Darren'],
        series: [
          [8 * 60, 12 * 60, 11 * 60, 15 * 60, 7 * 60]
        ]
      }, {
        seriesBarDistance: 10,
        reverseData: true,
        axisY: {
          offset: 70
        }
      });
    });
  });
