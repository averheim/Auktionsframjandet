angular.module("customer")
    .factory("customerService", ["$http", function($http){

        return {
            createCustomer: function(customer){
                return $http.get("http://nackademiska.azurewebsites.net/api/customer", customer); //AJAX post
            }
        };
        function createCustomer(customer){

            var input = customer;

            return $http.post('http://nackademiska.azurewebsites.net/api/account', input)
                .then(
                    function successCallback(response){
                        appServiceFactory.createCustomer(true);
                        appServiceFactory.createCustomer(response.input);
                        return {
                            status : true,
                            input : response.input
                        }
                    },
                    function errorCallback(response){
                        return {
                            status : false,
                        }
                    });
        }
    }]);