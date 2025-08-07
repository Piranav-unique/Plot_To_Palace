 angular.module('plotToPalaceApp.service', [])
.service('ProjectService', function() {
  this.getOverview = function() {
    return "PlotToPalace uses AI to transform raw land input into smart home designs, including layout and color planning.";
  };
});

