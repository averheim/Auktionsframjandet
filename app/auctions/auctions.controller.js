angular.module("auctions")
    .controller("auctionsController", ["$scope","$location","$filter", "auctionsServiceFactory", "categoryService", "loginService",
    function ($scope, $location, $filter, auctionsServiceFactory, categoryService, loginService) {

        var admin;
        var loggedIn;
        $scope.admin = false;
        $scope.loggedIn = false;

        var completedAuctions;
        var allAuctions = [];
        var ongoingAuctions = [];



    auctionsServiceFactory.getAllAuctions().then(function (response) {
        allAuctions = response.data;

        auctionsServiceFactory.getAllCompleted().then(function (response) {
            completedAuctions = response.data;
            $scope.auctions = $filter("auctionTimeFilter")(allAuctions, completedAuctions);
        });


    });







    categoryService.getCategories().then(function (response) {
        $scope.categories = response.data;
    });

    $scope.auctionSelected = function (auction) {
        $location.path("/auction-detail/" + auction.id);
    };

    $scope.$watch(function() {return loginService.getAdmin()},
        function(newValue) {
                $scope.admin = newValue;
        });

    $scope.$watch(function() {return loginService.getLoginValue()},
        function(newValue) {
                $scope.loggedIn = newValue;
            });

    $scope.logOut = function () {
        console.log("test");
         loginService.doLogOut();
    };

}]);

