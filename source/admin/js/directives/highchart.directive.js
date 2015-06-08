myApp.directive('myChart', function($timeout) {
  return function(scope, element, attrs) {
    // apply the plugin
    scope.chart = element.highcharts(scope.options);

    scope.$watch(attrs.data, function(value) {
      var val = value || null;
      if (val) {
          // var complete = function (options) {
              scope.chart = element.highcharts(scope.options);
              // capture all available series
              // var allSeries = chart.series;
              // for (var i = 0; i < allSeries.length; i++) {
              //     allSeries[i].setData(options.series[i].data, false);
              // }

              //scope.chart.redraw();
          // };

          // doesn't work without the timeout
          // $timeout(function() {
          //     Highcharts.data({
          //         table: config.data.table,
          //         complete: complete
          //     });
          // }, 0);
      }
    });
  };
});
