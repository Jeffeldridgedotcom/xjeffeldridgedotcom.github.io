var cvApp = angular.module("CVApp", ['ngAnimate', 'ngRoute', 'cvControllers']);

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
            when('/audio', {
                templateUrl: 'partials/audio.html',
                controller: 'AudioController'
            }).
            when('/video', {
                templateUrl: 'partials/video.html',
                controller: 'VideoController'
            }).
            when('/games', {
                templateUrl: 'partials/games.html',
                controller: 'GamesController'
            }).
            when('/art', {
                templateUrl: 'partials/art.html',
                controller: 'ArtController'
            }).
            otherwise({
                redirectTo: '/profile'
            });
    }]);

