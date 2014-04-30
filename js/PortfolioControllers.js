var portfolioControllers = angular.module('PortfolioControllers', []);

portfolioControllers.controller('AudioController', ['$scope', '$sce',
    function ($scope, $sce) {

        $scope.onPlay = function(i) {
            $scope.Track = $scope.Soundcloud[i].src;
        }


        $scope.Soundcloud = [
            {
                head: "1960's Alien Invasion",
                desc: "Inspired by the BBC's Radiophonic Workshop imagine yourself in swinging '60s London, when the aliens invade!",
                track : "147215198"
            },
            {
                head: "Coded Bomb Warning",
                desc: "The phone rings in a busy newsroom. On the end of the line, terrorist or hoax?",
                track : "147220124"
            }
        ];

        angular.forEach($scope.Soundcloud, function(v) {
            var src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + v.track + "&amp;color=ff9900&amp;auto_play=true&amp;hide_related=true&amp;show_artwork=false";
            v.src = $sce.trustAsResourceUrl(src);
        });



    }
]);

portfolioControllers.controller('VideoController', ['$scope', '$sce',
    function ($scope, $sce) {

        $scope.onPlay = function(i) {
            $scope.Track = $scope.Videos[i].src;
        }

        $scope.Videos = [
            {
                // <iframe width="420" height="315" src="//www.youtube.com/embed/pdTgocquLgI" frameborder="0" allowfullscreen></iframe>
                head : "Rathmore National School Fashion Show DVD Trailer",
                desc : "Lorem ipsum...",
                track: "pdTgocquLgI"
            },
            {
                // <iframe width="420" height="315" src="//www.youtube.com/embed/pdTgocquLgI" frameborder="0" allowfullscreen></iframe>
                head : "Rathmore National School Fashion Show DVD Teaser",
                desc : "Lorem ipsum...",
                track: "zgNIccPet4s"
            }

        ];

        angular.forEach($scope.Videos, function(v) {
            var src = "//www.youtube.com/embed/" + v.track;
            v.src = $sce.trustAsResourceUrl(src);
        });

        $scope.Track = $scope.Videos[0].src;

    }
]);

portfolioControllers.controller('GraphicsController', ['$scope',
    function ($scope) {

    }
]);

portfolioControllers.controller('ProgrammingController', ['$scope',
    function ($scope) {

    }
]);
