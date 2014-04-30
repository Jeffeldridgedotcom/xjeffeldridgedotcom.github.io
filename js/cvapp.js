var cvApp = angular.module("CVApp", ['ngAnimate', 'ngRoute', 'portfolioControllers']);

cvApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/employment', {
                templateUrl: 'partials/employment.html',
                controller: 'EmploymentController',
            }).
            when('/portfolio', {
                templateUrl: 'partials/portfolio.html',
                controller: 'PortfolioController'
            }).
            when('/profile', {
                templateUrl: 'partials/profile.html',
                controller: 'ProfileController',
            }).
            when('/technology', {
                templateUrl: 'partials/technology.html',
                controller: 'TechnologyController',
            }).
            otherwise({
                redirectTo: '/profile'
            });
    }]);

