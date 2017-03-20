angular.module("login").
controller("loginController", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {


    $scope.doLogin = function (username, password){
        loginService.doLogin(username,password);
        $scope.loginFailed = function () {
            return loginService.getLoginValue();
        }
    };

}]);
