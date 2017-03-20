angular.module("customer")
    .factory("customerService", ["$http", function($http){
        // var customers = [];
        return{
            getcustomers    : getcustomers,
            getcustomerById : getcustomerById,
            createcustomer  : createcustomer
        }
        function getcustomers(){
            return $http.get("http://nackbutik.azurewebsites.net/api/customer/");
        }
        function getcustomerById(customerId){
            return $http.get("http://nackbutik.azurewebsites.net/api/customer/" + customerId);
        }
        function createcustomer(customer) {
            var data = customer;
            var config = {
                header : {
                    'Content-Type': 'application/json; charset=utf-8',
                }
            };
            return $http.post('http://nackbutik.azurewebsites.net/api/account', data, config)
                .then(
                    function successCallback(response){
                        return {
                            status : true,
                        }
                    },
                    function errorCallback(response){
                        return {
                            status : false,
                        }
                    });
        }
    }])
