angular.module("customer")
    .controller("customerCreateController", ["$scope", "$location", "$routeParams", "customerService","loginService",
        function($scope, $location, $routeParams, customerService, loginService){

            $scope.isAdmin = false;

            if (loginService.getAdmin()) {
                $scope.role = "Administrator";
                $scope.isAdmin = true;

            } else {
                $scope.role = "Customer";
            }



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
                    role: $scope.role
                };

                customerService.createCustomer(newCustomer).then(function(response){
                    $scope.showSuccess = true;
                    $scope.showFailure = false;
                    $location.path("/login");

                }, function(error){
                    $scope.showSuccess = false;
                    $scope.showFailure = true;

                });

            };
        }]);