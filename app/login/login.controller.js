angular.module("login").
controller("loginController", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {

$scope.failedLogin = false

    $scope.doLogin = function (username, password){

        loginService.doLogin(username,password).then(function(response){

            var returnedUser = response.data;
                loginService.setUserData(returnedUser);
                loginService.setLoginValue(true);
                loginService.setUserId(returnedUser.id);
                if(returnedUser.role == "Administrator") {
                    loginService.setAdmin(true);
                }
                console.log(returnedUser.id);
                $location.path("/");
        })
    if (loginService.getLoginValue()==false){
            $scope.failedLogin=true;
    }
};


}]);
