var cvControllers = angular.module('portfolioControllers', []);

function makeDate (o) {
    if (typeof(o) !== 'object') {
        return '';
    }
    return new Date (o[0], o[1]-1, o[2]);
}

cvControllers.controller('ProfileController', ['$scope',
    function ($scope) {

        var today = new Date();
        var birthDate = new Date(1970,11-1,2);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        $scope.Age = age;
        $scope.Experience = new Date().getUTCFullYear() - 1989;

    }
]);

cvControllers.controller('TechnologyController', ['$scope',
    function ($scope) {

    }
]);


cvControllers.controller('ContactController', ['$scope',
    function ($scope) {

    }
]);

cvControllers.controller('EmploymentController', ['$scope', '$http',
    function ($scope, $http) {

        $scope.History = [];

        $scope.ShowLast = 2;

        $scope.SeeingAll = function () {
            $scope.History.length === $scope.ShowLast;
        };

        $scope.onSeeAll = function () {
            $scope.ShowLast = $scope.History.length;
        };

        $http.jsonp ('data/employment.json?callback=JSON_CALLBACK', {cache:false}).success (function (data){
           $scope.History = data.employment;
           angular.forEach ($scope.History, function(v,k) {
               v.start = makeDate(v.start);
               v.end = makeDate(v.end);
           });
        }).error(function(data, status, headers, config) {
            console.log ("$$$");
        });


    }]);
