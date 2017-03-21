angular.module("customer")
    .controller("customerCreateController", ["$scope", "$location", "$routeParams", "customerService", //login?
        function($scope, $location, $routeParams, customerService){

            $scope.customer = {};
            $scope.showSuccess = false;
            $scope.showFailure = false;

            $scope.createCustomer = function(){
                var newCustomer = {

                    firstName: $scope.customer.firstName,
                    lastName: $scope.customer.lastName,
                    email: $scope.customer.email,
                    password: $scope.customer.password,
                    phone: $scope.customer.phone,
                    address: $scope.customer.address,
                    postalCode: $scope.customer.postalCode,
                    city: $scope.customer.city,
                    role: "Customer"


                };

                customerService.createCustomer(newCustomer).then(function(response){
                    $scope.showSuccess = true;
                    $scope.showFailure = false;

                    $scope.customer.firstName = "";
                    $scope.customer.lastName = "";
                    $scope.customer.email = "";
                    $scope.customer.password = "";
                    $scope.customer.phone = "";
                    $scope.customer.address = "";
                    $scope.customer.postalCode = "";
                    $scope.customer.city = "";




                }, function(error){
                    $scope.showSuccess = false;
                    $scope.showFailure = true;

                });

            };
        }]);