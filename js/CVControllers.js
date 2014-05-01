var cvControllers = angular.module('cvControllers', []);

function makeDate (o) {
    if (typeof(o) !== 'object') {
        return '';
    }
    return new Date (o[0], o[1]-1, o[2]);
}

cvControllers.controller('NavController', ['$scope', '$location',
    function ($scope, $location) {

        $scope.IsActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.Navigation = [
            {
                head : "CV",
                items : [
                    {
                        title : "Profile",
                        url : "/profile",
                        href : "#profile"
                    },
                    {
                        title : "Employment",
                        url : "/employment",
                        href : "#employment"
                    },
                    {
                        title : "Technology",
                        url : "/technology",
                        href : "#technology"
                    }
                ]
            },
            {
                head : "Portfolio",
                items : [
                    {
                        title : "Audio",
                        url : "/audio",
                        href : "#audio"
                    },
                    {
                        title : "Video",
                        url : "/video",
                        href : "#video"
                    },
                    {
                        title : "Art",
                        url : "/art",
                        href : "#art"
                    },
                    {
                        title : "Games",
                        url : "/games",
                        href : "#games"
                    }
                ]
            }
        ];

    }
]);

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

        $scope.Name = "Jeff Eldridge";
        $scope.Email = "jeff@rathmoreit.com";
        $scope.PhoneNumber = "+353 87 916 2652";


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

cvControllers.controller('AudioController', ['$scope', '$sce',
    function ($scope, $sce) {

        $scope.onPlay = function(i) {
            $scope.Track = $scope.Soundcloud[i].src;
        }

        $scope.Audios = [
            {
                head: "Soundscapes",
                items: [
                    {
                        title: "1960's Alien Invasion",
                        desc: "Inspired by the BBC's Radiophonic Workshop imagine yourself in swinging '60s London, when the aliens invade!",
                        track: "AlienInvasion"
                    },
                    {
                        title: "Alien Control Room",
                        desc: "Lorem ipsum...",
                        track: "Atmos"
                    }

                ]
            },
            {
                head: "Dialogues",
                items: [
                    {
                        title: "You Belong To Us...",
                        desc: "Aliens intent on converting humanity to be like them deliver a chilling warning",
                        track: "You Belong To Us"
                    },
                    {
                        title: "Coded Bomb Warning",
                        desc: "The phone rings in a busy newsroom. On the end of the line, terrorist or hoax?",
                        track: "Coded Bomb Warning"
                    },
                    {
                        title: "Damage Report",
                        desc: "Lorem ipsum...",
                        track: "Zen"
                    }

                ]
            },
            {
                head: "Foleys",
                items: [
                    {
                        title: "Switch On",
                        desc: "Throw a switch and power on a big electrical system",
                        track: "Switch-On"
                    },
                    {
                        title: "Switch Off",
                        desc: "Throw a switch and power down a big electrical system",
                        track: "Switch-Off"
                    },
                    {
                        title: "Death of an Artificial Intelligence",
                        desc: "Lorem ipsum...",
                        track: "Death of an AI"
                    },
                    {
                        title: "Cyborg Life Support System",
                        desc: "Lorem ipsum...",
                        track: "Cyborg Life Support System"
                    }

                ]
            }
        ];

        angular.forEach($scope.Audios, function (v) {
            angular.forEach (v.items, function (i) {
                var tr = i.track, url = 'assets/audio/';
                i.oggtrack = url + tr + ".ogg";
                i.mp3track = url + tr + ".mp3";
            });
        });


    }
]);

cvControllers.controller('VideoController', ['$scope', '$sce',
    function ($scope, $sce) {


        $scope.Videos = [
            {
                head: "Animations",
                items: [
                    {
                        title: "Cyber-minons",
                        desc: "A mash-up of Gru's Minions (Despicable Me) and Cybermen (Doctor Who)",
                        track: "assets/video/Cyberminion.mp4"

                    }
                ]
            }
        ];



        $scope.onPlay = function(i) {
            $scope.Track = $scope.YouTubeVideos[i].src;
        }

        $scope.YouTubeVideos = [
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

cvControllers.controller('GameController', ['$scope',
    function ($scope) {

    }
]);

cvControllers.controller('ArtController', ['$scope',
    function ($scope) {

    }
]);
