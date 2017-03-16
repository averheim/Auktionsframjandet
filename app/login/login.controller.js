angular.module("login").
controller("loginController", ["$scope", "loginService", function ($scope, loginService) {


    $scope.doLogin = function (username, password){
        loginService.doLogin(username,password);
    };



}]);
