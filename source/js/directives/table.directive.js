myApp.directive('myTable', function() {
  return function(scope, element, attrs) {
    // apply DataTable options, use defaults if none specified by user
    scope.loadData();
    var options = {};
    if (attrs.myTable.length > 0) {
        options = scope.$eval(attrs.myTable);
    } else {
        options = {};
    }

    // Tell the dataTables plugin what columns to use
    if (attrs.columns) {
        options["columns"] = scope.$eval(attrs.columns);
    }

    // columnDefs is dataTables way of providing fine control over column config
    if (attrs.columnDefs) {
        options["columnDefs"] = scope.$eval(attrs.columnDefs);
    }

    if (attrs.rowCallback) {
        options["rowCallback"] = scope.$eval(attrs.rowCallback);
    }

    if (attrs.order) {
      options["order"] = scope.$eval(attrs.order);
    }

    // apply the plugin
    var dataTable = element.DataTable(options);

    // watch for any changes to our data, rebuild the DataTable
    scope.$watch(attrs.data, function(value) {
        var val = value || null;
        if (val) {
            dataTable.clear();
            dataTable.rows.add(scope.$eval(attrs.data).data).draw();
        }
    });
  };
});
