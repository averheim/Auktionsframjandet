angular.module("auctions")
    .controller("auctionsController", ["$scope", "auctionsServiceFactory", "categoryService", "loginService",
    function ($scope, auctionsServiceFactory, categoryService, loginService) {

        var admin;
        var loggedIn;
        $scope.admin = false;
        $scope.loggedIn = false;

    auctionsServiceFactory.getAllAuctions().then(function (response) {
        $scope.auctions = response.data;
    });

    categoryService.getCategories().then(function (response) {
        $scope.categories = response.data;
    });


    $scope.closeM = function () {
        window.location.reload();
    }
    $scope.auctionSelected = function (auction) {
        $location.path("product/" + auction.id)

    }
    $scope.$watch(function() {return loginService.getAdmin()},
            function(newValue, oldValue) {

                $scope.admin = newValue;

            });

        $scope.$watch(function() {return loginService.getLoginValue()},
            function(newValue, oldValue) {

                    $scope.loggedIn = newValue;

            });
    $scope.logOut = function () {
        console.log("test")
         loginService.doLogOut();
    }

}]);

