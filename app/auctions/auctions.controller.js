angular.module("auctions")
    .controller("auctionsController", ["$scope","$location", "auctionsServiceFactory", "categoryService", "loginService",
    function ($scope, $location, auctionsServiceFactory, categoryService, loginService) {

        var admin;
        var loggedIn;

        $scope.admin = false;
        $scope.loggedIn = false;
        $scope.name;


    auctionsServiceFactory.getAllAuctions().then(function (response) {
        $scope.auctions = response.data;
    });

    categoryService.getCategories().then(function (response) {
        $scope.categories = response.data;
    });

    $scope.auctionSelected = function (auction) {
        $location.path("/auction-detail/" + auction.id);
    };

    // Skapa ny controller "auction-detail.controller.js
    // Importera den i index och ändra i config så /auction-detail får den nya controllern
    // Config pathen ska vara :auctionID där ni skickar med auction id
    // I nya controllern, hämta id:t från url:en och skicka ett nytt request där ni hämtar auktionen på id
    // Detta gör så att ni delar upp logiken, så att inte controllern blir förvirrad över vilket scope du syftar på

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

