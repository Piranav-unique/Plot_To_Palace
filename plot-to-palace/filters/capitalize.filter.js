 
angular.module('plotToPalaceApp.filter', [])
.filter('capitalize', function() {
  return function(input) {
    if (!input) return '';
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
});

// Truncate filter for project descriptions
angular.module('plotToPalaceApp.filter')
.filter('truncate', function() {
  return function(input, length) {
    if (!input) return '';
    if (input.length <= length) return input;
    return input.substring(0, length) + '...';
  };
});
