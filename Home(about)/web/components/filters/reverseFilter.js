app.filter('reverse', function() {
  return function(input) {
    return input.split('').reverse().join('');
  };
});