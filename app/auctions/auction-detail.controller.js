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
        var highestBid = bidPrices[bidPrices.length-1];

        if(highestBid == undefined){
            highestBid = 0;
        }

        $scope.highestBid = highestBid;
        $scope.bids = bidPrices;
    });

    $scope.getSupplier = function (id) {
        auctionsServiceFactory.getSupplierById(id).then(function (response) {
            $scope.supplier = response.data;
        })
    };

    $scope.placeBid = function (auction) {
        if (!loginService.getLoginValue()){
            $location.path("/login");
        }
        var userId = loginService.getUserId();
        var bid = $scope.bid;
        var bidInfo = {
            auctionId   :   auction.id,
            customerId  :   userId,
            bidPrice    :   bid
        };
        bidService.placeBid(bidInfo).then(function (response) {
            $scope.highestBid = bid;
        })
    };

    $scope.buyNow = function (auction) {
        if (!loginService.getLoginValue()){
            $location.path("/login");
        }
        var userId = loginService.getUserId();
        var bidInfo = {
            auctionId   :   auction.id,
            customerId  :   userId,
            bidPrice    :   auction.buyNowPrice
        };
        bidService.placeBid(bidInfo).then(function (response) {
            $scope.highestBid = auction.buyNowPrice;
            $scope.bidMessage = "Du köpte varan för " + auction.buyNowPrice + " Kronor";
        });
    }
}]);