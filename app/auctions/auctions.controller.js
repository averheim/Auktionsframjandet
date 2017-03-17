angular.module("auctions")
    .controller("auctionsController", ["$scope","$location", "auctionsServiceFactory", "categoryService", "loginService",
    function ($scope, $location, auctionsServiceFactory, categoryService, loginService) {

        var admin;
        var loggedIn;
        $scope.admin = false;
        $scope.loggedIn = false;

        var completedAuctions;
        var allAuctions;
        var ongoingAuctions = [];

    auctionsServiceFactory.getAllCompleted().then(function (response) {
        $scope.completedAuctions = response.data;
    });

    auctionsServiceFactory.getAllAuctions().then(function (response) {
        $scope.auctions = response.data;
    });

        (function(){
            angular.forEach(allAuctions, function (auction) {
                angular.forEach(completedAuctions, function (completedAuction) {
                    if(!auction.id == completedAuction.id){
                        ongoingAuctions.push(auction);
                    }
                })
            })
        })();

        $scope.auctions = ongoingAuctions;

    categoryService.getCategories().then(function (response) {
        $scope.categories = response.data;
    });

        auctionsServiceFactory.getBids($scope.ID).then(function (response) {
            var bids = response.data;
            var highestbid = bids[0].bidPrice;

            for (var i = 1; i < bids.length; i++){
                if (bids[i].bidPrice > bids[i-1].bidPrice){
                    highestbid = bids[i].bidPrice;
                }
            }
            $scope.highestbid = highestbid;
            console.log(highestbid);

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
    }

}]);

