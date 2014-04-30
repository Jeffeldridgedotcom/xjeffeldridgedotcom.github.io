var cvApp = angular.module("PortfolioApp", ['ngAnimate', 'ngRoute', 'PortfolioControllers']);

cvApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/audio', {
                templateUrl: 'partials/audio.html',
                controller: 'AudioController'
            }).
            when('/video', {
                templateUrl: 'partials/video.html',
                controller: 'VideoController'
            }).
            when('/graphics', {
                templateUrl: 'partials/graphics.html',
                controller: 'GraphicsController'
            }).
            when('/programming', {
                templateUrl: 'partials/programming.html',
                controller: 'ProgrammingController'
            }).
            otherwise({
                redirectTo: '/audio'
            });
    }]);

