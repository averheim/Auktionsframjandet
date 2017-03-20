angular.module("bid")
    .factory("bidService", ["$http", "$location", function($http, $location) {

        return {
            getBid : function (id) {
                return $http.get("http://nackademiska-api.azurewebsites.net/api/bid/" + id);
            },
            placeBid    :   function (bidInfo) {
                return $http.post("http://nackademiska-api.azurewebsites.net/api/bid/", bidInfo);
            }
        };



    }]);