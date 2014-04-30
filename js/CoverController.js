function CoverController ($scope, $timeout) {

    var
        backgrounds = [
            "Close Up.png",
            "Final 1.png",
            "Final 3.png",
            "Group Blurred.png",
            "PopArt1.png"
        ],

        nb = 0,
        delay = 10000,
        cycleBackground = function () {
            nb++;
            $scope.Background = backgrounds[nb % backgrounds.length];
            $timeout (cycleBackground, delay);
        }

    $scope.bg = function () {
        return nb % 2 === 0;
    }

    backgrounds = _.shuffle(backgrounds);
    backgrounds = _.shuffle(backgrounds);
    backgrounds = _.shuffle(backgrounds);

    $scope.Background = backgrounds[0];

    $timeout (cycleBackground, delay);

    $scope.Availability = "mid-August 2014";


}