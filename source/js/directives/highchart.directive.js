myApp.directive('myChart', function() {
  return function(scope, element, attrs) {

    var options = {
      title: {
        text: 'Total Registered by Day',
      },
      subtitle: {
        text: 'April 2015',
      },
      xAxis: {
          title: { text: 'Days of Month' },
          categories: ['1', '2', '3', '4', '5', '6',
          '7', '8', '9', '10', '11', '12', '13', '14',
          '15', '16', '17', '18', '19', '20', '21', '22',
          '23', '24', '25', '26', '27', '28', '29', '30']
      },
      yAxis: {
          title: {
              text: 'Total Registered'
          }
      },
      series: [{
          name: 'Total Registered Per Day',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2,
          null, null, null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null]
      }]
    };

    // apply the plugin
    var dataTable = element.highcharts(options);

  };
});
