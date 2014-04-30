function SideNavController ($scope, $location) {

    $scope.IsActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}