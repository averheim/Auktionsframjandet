angular.module("auctions").controller("auctionDetailController", ["$scope", "$routeParams", "auctionsServiceFactory", function ($scope, $routeParams, auctionsServiceFactory) {

    auctionsServiceFactory.getAuctionById($routeParams.auctionId).then(function (response) {
        $scope.auction = response.data;
    });

    $scope.getSUpplier = function (id) {
        auctionsServiceFactory.getSupplierById(id).then(function (response) {
            $scope.auction.supplier = response.data;
            console.log($scope.auction.supplier.companyName);
        })
    }

}]);