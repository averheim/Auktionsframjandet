angular.module("auctions").factory("auctionsServiceFactory", ["$http", function ($http) {
    return {
        getAllAuctions  :   function () {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/auction");
        }
    }
}]);