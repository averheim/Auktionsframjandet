angular.module("customer")
    .controller("customerCreateController", ["$scope", "$location", "$routeParams", "customerService", //login?
        function($scope, $location, $routeParams, customerService){

            $scope.customer = {};

            $scope.createCustomer = function(){
                var newCustomer = {

                    firstName: $scope.customer.firstName,
                    lastName: $scope.customer.lastName,
                    email: $scope.customer.email,
                    password: $scope.customer.password,
                    phone: $scope.customer.phone,
                    address: $scope.customer.address,
                    postalcode: $scope.customer.postalcode,
                    city: $scope.customer.city,
                    role: Customer


                };

                customerService.createcustomer(newCustomer).then(function(response){

                    if(response.status) {
                        $location.path("/login");}
                });

            };
        }]);