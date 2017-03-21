angular.module("auctions").factory("auctionsServiceFactory", ["$http", function ($http) {

    return {
        getAllAuctions: function () {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/auction");
        },

        getAllCompleted: function () {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/auction/completed");
        },

        getAuctionById  :   function (id) {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/auction/" + id);
        },

        getSupplierById :   function (id) {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/supplier/" + id);
        },

        getHighestBid   :   function (id) {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/bid/" + id);
        },

        getAuctionTimeString    :   function (timeString) {
            var time = new Date(timeString);
            return (time.getTime());
        }
    }
}]);