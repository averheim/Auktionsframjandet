angular.module("auctions")
    .controller("auctionsController", ["$scope", "auctionsServiceFactory", "categoryService", "loginService",
    function ($scope, auctionsServiceFactory, categoryService, loginService) {

        var admin;
        $scope.admin = false;

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

                if(newValue !== oldValue){
                    $scope.admin = true;
                    console.log(admin + "Admin")
                }

            });


}]);