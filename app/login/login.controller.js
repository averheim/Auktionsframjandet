angular.module("login").
controller("loginController", ["$scope", "$location", "loginService", function ($scope, $location, loginService) {

    $scope.faildLogin = false;

    $scope.doLogin = function (username, password){
        loginService.doLogin(username,password).then(function () {
            
        });

        // ,function () {
        //     faildLogin = true;
        // });
        // $scope.isLoggedIn = function () {
        //     return loginService.getLoginValue();
        // }
    };

}]);
