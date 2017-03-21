angular.module("auctions").controller("auctionDetailController", ["$scope", "$routeParams", "$location", "auctionsServiceFactory", "loginService", "bidService",
    function ($scope, $routeParams, $location, auctionsServiceFactory, loginService, bidService) {



    auctionsServiceFactory.getAuctionById($routeParams.auctionId).then(function (response) {
        $scope.auction = response.data;
        $scope.startTime = $scope.auction.startTime.substring(0, 10) + " Kl: " + $scope.auction.startTime.substring(11, 16);
        $scope.endTime = $scope.auction.endTime.substring(0, 10) + " Kl: " + $scope.auction.endTime.substring(11, 16);
    });

    auctionsServiceFactory.getHighestBid($routeParams.auctionId).then(function (response) {
        var bids = response.data;
        var bidPrices = [];
        angular.forEach(bids, function (bid) {
            bidPrices.push(bid.bidPrice);
        });
        var highestBid = Math.max.apply(Math, bidPrices);
        console.log(highestBid);
        $scope.highestBid = highestBid;
        $scope.bids = bidPrices;
    });

    $scope.getSupplier = function (id) {
        auctionsServiceFactory.getSupplierById(id).then(function (response) {
            $scope.supplier = response.data;
            console.log($scope.supplier.companyName);
        })
    };

    $scope.placeBid = function (auction) {
        var userId = loginService.getUserId();
        if (userId == undefined){
            $location.path("/login");
        }
        var bid = $scope.bid;
        var bidInfo = {
            auctionId   :   auction.id,
            customerId  :   userId,
            bidPrice    :   bid
        };
        console.log(bidInfo);
        bidService.placeBid(bidInfo).then(function (response) {
            console.log("Bud lades");
        })
    };

    $scope.buyNow = function (auction) {
        var userId = loginService.getUserId();
        if (userId == undefined){
            $location.path("/login");
        }
        var bidInfo = {
            auctionId   :   auction.id,
            customerId  :   userId,
            bidPrice    :   auction.buyNowPrice
        };
        console.log(bidInfo);
        bidService.placeBid(bidInfo).then(function (response) {
            console.log("Buy now pris köpt");
        });
    }
}]);