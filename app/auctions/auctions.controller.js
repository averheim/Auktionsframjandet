angular.module("auctions")
    .controller("auctionsController", ["$scope","$location","$filter", "auctionsServiceFactory", "categoryService", "loginService",
    function ($scope, $location, $filter, auctionsServiceFactory, categoryService, loginService) {

        var admin;
        var loggedIn;
        $scope.admin = false;
        $scope.loggedIn = false;

        $scope.$watch(function() {
            return loginService.getUser() },

            function(newValue) {
                $scope.text = newValue.firstName + " " + newValue.lastName;
            });

        var allAuctions = [];

    auctionsServiceFactory.getAllAuctions().then(function (response) {
        allAuctions = response.data;

        angular.forEach(allAuctions, function(auction) {
            auctionsServiceFactory.getHighestBid(auction.id).then(function (response) {
                var bids = response.data;
                auction.highestBid = bids[bids.length-1].bidPrice;
            })
        });
        $scope.auctions = allAuctions;
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
         loginService.doLogOut();
    };

}]);

