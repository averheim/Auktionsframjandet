angular.module("auctions")
    .controller("auctionsController", ["$scope", "auctionsServiceFactory", "categoryService",
    function ($scope, auctionsServiceFactory, categoryService) {

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
}]);