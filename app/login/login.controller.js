angular.module("login").
controller("loginController", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {



    $scope.doLogin = function (username, password){

        loginService.doLogin(username,password).then(function succesCallback(response){

            var returnedUser = response.data;
                loginService.setUserData(returnedUser);
                loginService.setLoginValue(true);
                loginService.setUserId(returnedUser.id);
                if(returnedUser.role == "Administrator") {
                    loginService.setAdmin(true);
                }


                console.log(returnedUser.id);
                $location.path("/");

        },
            function whenFailed(response) {
                $scope.failedLogin = true;
            }

        );




};


}]);
