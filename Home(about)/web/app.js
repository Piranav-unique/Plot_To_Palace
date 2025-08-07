var app = angular.module('plottopalaceApp', ['ngRoute', 'customModule', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false); // Ensure HTML5 mode is disabled
    $locationProvider.hashPrefix('');

    $routeProvider
    .when('/', {
        templateUrl: '/home.html',
        controller: 'mainController'
    })
    .when('/generate', {
        templateUrl: '/generate.html',
        controller: 'generateController'
    })
    .when('/contact', {
        templateUrl: '/contact.html',
        controller: 'contactController'
    })
    .when('/about', {
        templateUrl: '/about.html',
        controller: 'aboutController'
    })
    .when('/login', {
        templateUrl: '/login.html',
        controller: 'loginController'
    })
    .when('/register', {
        templateUrl: '/register.html',
        controller: 'registerController'
    })
    .otherwise({ redirectTo: '/' });
});

app.run(function($rootScope, $route) {
    $rootScope.$route = $route;
});

app.controller('mainController', function($scope, dataService, plottoFactory, moduleMessage, $location) {
    $scope.pageTitle = 'Home';
    $scope.homeData = dataService.getHomeData();
    $scope.plottoInfo = plottoFactory.getPlottoInfo();
    $scope.moduleMessage = moduleMessage;
    
    $scope.redirectToGenerate = function() {
        $location.path('/generate');
    };
});

app.controller('generateController', function($scope) {
    $scope.pageTitle = 'Generate';
    $scope.message = 'Generate new plot ideas here!';
});

app.controller('contactController', function($scope) {
    $scope.pageTitle = 'Contact';
    $scope.message = 'Contact us!';
});

app.controller('aboutController', function($scope, dataService, plottoFactory, moduleMessage) {
    $scope.pageTitle = 'About Us';
    $scope.aboutData = dataService.getAboutData();
    $scope.plottoInfo = plottoFactory.getPlottoInfo();
    $scope.moduleMessage = moduleMessage;
});

app.controller('loginController', function($scope) {
    $scope.pageTitle = 'Login';
    $scope.message = 'Login to your account.';
});

app.controller('registerController', function($scope) {
    $scope.pageTitle = 'Register';
    $scope.message = 'Register for a new account.';
});

// Custom filter to convert text to uppercase
app.filter('uppercaseFilter', function() {
    return function(text) {
        return text ? text.toUpperCase() : '';
    };
});