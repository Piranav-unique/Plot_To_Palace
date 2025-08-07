angular.module('plotToPalaceApp.directive', [])
.directive('highlight', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      element.css({
        color: '#2e7d32',
        fontWeight: 'bold'
      });
    }
  };
});

// Portfolio card directive for modularity
angular.module('plotToPalaceApp.directive')
.directive('portfolioCard', function() {
  return {
    restrict: 'E',
    scope: {
      project: '='
    },
    template: `
      <div class="portfolio-item">
        <h3 highlight>{{ project.title | capitalize }}</h3>
        <p>{{ project.description }}</p>
        <img ng-src="images/{{ project.image }}" alt="{{ project.title }}">
        <div class="details">
          <p><strong>Tech:</strong> <span ng-repeat="tech in project.tech" ng-style="{'color': getTechColor(tech)}">{{ tech }}{{$last ? '' : ', '}}</span></p>
          <p><strong>Highlights:</strong> {{ project.highlights.join(', ') }}</p>
          <a ng-href="{{ project.link }}" target="_blank">View Project</a>
        </div>
      </div>
    `,
    controller: function($scope, DesignFactory) {
      $scope.getTechColor = function(tech) {
        return DesignFactory.getTechColor(tech);
      };
    }
  };
});

