angular.module('plotToPalaceApp')
.controller('PlotToPalaceController', function(ProjectService, DesignFactory, PortfolioService) {
  var ptp = this;

  ptp.title = "plot to palace";
  ptp.description = ProjectService.getOverview();
  ptp.color = DesignFactory.getColorPattern();
  ptp.features = [
    "Blueprint generation based on land size input",
    "Automatic material and color requirement suggestions"
  ];

  ptp.portfolioItems = PortfolioService.getPortfolioItems();
  ptp.newPortfolioItem = { name: '', description: '', image: '' };

  ptp.addPortfolioItem = function() {
    if (ptp.newPortfolioItem.name && ptp.newPortfolioItem.description && ptp.newPortfolioItem.image) {
      ptp.portfolioItems.push(angular.copy(ptp.newPortfolioItem));
      ptp.newPortfolioItem = { name: '', description: '', image: '' };
    }
  };

  ptp.removePortfolioItem = function(index) {
    ptp.portfolioItems.splice(index, 1);
  };

  ptp.designFactory = DesignFactory;
});

