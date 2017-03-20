angular.module("auctions").controller("auctionDetailController", ["$scope", "$routeParams", "auctionsServiceFactory", "loginService", "bidService", function ($scope, $routeParams, auctionsServiceFactory, loginService, bidService) {



    auctionsServiceFactory.getAuctionById($routeParams.auctionId).then(function (response) {
        $scope.auction = response.data;
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
        var bid = $scope.bid;
        var bidInfo = {
            auctionId   :   auction.id,
            customerId  :   userId.id,
            bidPrice    :   bid
        };
        console.log(bidInfo);
        bidService.placeBid(bidInfo).then(function (response) {
            console.log("hej");
        })
    }



}]);