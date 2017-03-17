angular.module("auctions").factory("auctionsServiceFactory", ["$http", function ($http) {
    return {
        getAllAuctions  :   function () {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/auction");
        },
        getAuctionById  :   function (id) {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/auction/" + id);
        },
        getSupplierById :   function (id) {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/supplier/" + id);
        },
        getBids : function (auctionID) {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/bid/" + auctionID )
        }
    }
}]);