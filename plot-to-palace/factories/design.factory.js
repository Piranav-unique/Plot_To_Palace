angular.module('plotToPalaceApp.factory', [])
.factory('DesignFactory', function() {
  return {
    getColorPattern: function() {
      return "vibrant hues";
    },
    getTechColor: function(tech) {
      var colors = {
        'AI': '#7e57c2',
        'AngularJS': '#e53935',
        'HTML5': '#ff7043',
        'CSS3': '#29b6f6'
      };
      return colors[tech] || '#bdbdbd';
    }
  };
});

