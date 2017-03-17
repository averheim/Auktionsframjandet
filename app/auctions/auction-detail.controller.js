angular.module("auctions").controller("auctionDetailController", ["$scope", "$routeParams", "auctionsServiceFactory", function ($scope, $routeParams, auctionsServiceFactory) {



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



}]);