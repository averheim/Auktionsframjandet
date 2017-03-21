angular.module("customer")
    .factory("customerService", ["$http", function($http){

        return {
            createCustomer: function(customer){
                return $http.post("http://nackademiska-api.azurewebsites.net/api/account", customer); //AJAX post
            }
        };

    }]);