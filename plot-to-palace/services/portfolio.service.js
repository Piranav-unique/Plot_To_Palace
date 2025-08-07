angular.module('plotToPalaceApp.service')
.service('PortfolioService', function() {
  this.getPortfolioItems = function() {
    return [
      {
        id: 1,
        title: 'Smart Villa AI Design',
        description: 'A luxury villa designed by AI, featuring energy-efficient systems and open living spaces.',
        image: 'villa.svg',
        tech: ['AI', 'AngularJS', 'HTML5', 'CSS3'],
        highlights: ['Solar panels', 'Smart lighting', 'Voice-controlled rooms'],
        link: 'https://example.com/villa',
        date: '2023-10-01',
        status: 'Completed'
      },
      {
        id: 2,
        title: 'Urban Apartment Makeover',
        description: 'AI-driven renovation of a city apartment, maximizing space and natural light.',
        image: 'apartment.svg',
        tech: ['AI', 'AngularJS', 'HTML5'],
        highlights: ['Space optimization', 'Automated blinds', 'Eco-friendly materials'],
        link: 'https://example.com/apartment',
        date: '2023-08-15',
        status: 'In Progress'
      },
      {
        id: 3,
        title: 'Tiny House Concept',
        description: 'Compact, sustainable tiny house designed for modern living using AI recommendations.',
        image: 'tinyhouse.svg',
        tech: ['AI', 'CSS3', 'HTML5'],
        highlights: ['Rainwater harvesting', 'Modular furniture', 'Passive cooling'],
        link: 'https://example.com/tinyhouse',
        date: '2023-07-10',
        status: 'Completed'
      },
      {
        id: 4,
        title: 'Eco Mansion Project',
        description: 'A sprawling eco-mansion with AI-optimized energy and water usage, and smart home integration.',
        image: 'villa.svg',
        tech: ['AI', 'AngularJS', 'HTML5', 'CSS3'],
        highlights: ['Geothermal heating', 'Greywater recycling', 'Automated security'],
        link: 'https://example.com/ecomansion',
        date: '2023-09-05',
        status: 'Planned'
      },
      {
        id: 5,
        title: 'Suburban Family Home',
        description: 'A family home design with AI-driven safety features and flexible living spaces.',
        image: 'apartment.svg',
        tech: ['AI', 'HTML5', 'CSS3'],
        highlights: ['Child-safe automation', 'Flexible room dividers', 'Smart kitchen'],
        link: 'https://example.com/familyhome',
        date: '2023-06-20',
        status: 'Completed'
      }
    ];
  };
});