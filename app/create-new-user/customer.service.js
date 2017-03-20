angular.module("customer")
        .factory("customerService", ["$http", function($http) {
            // var customers = [];
            return {
                createCustomer: function (customer) {
                    return $http.post('http://nackademiska-api.azurewebsites.net/api/account/', customer);
                },
                getcustomers: function () {
                    return $http.get("http://nackbutik.azurewebsites.net/api/customer/");
                },

                getcustomerById: function (customerId) {
                    return $http.get("http://nackbutik.azurewebsites.net/api/customer/" + customerId);
                }
            };
        }]);
