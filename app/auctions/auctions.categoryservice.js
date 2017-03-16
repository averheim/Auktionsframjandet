angular.module("auctions")
    .factory ("categoryService", ["$http", function ($http) {

        return {
            getCategories: function () {
                return $http.get("http://nackademiska-api.azurewebsites.net/api/category");
            }
        };
    }]);