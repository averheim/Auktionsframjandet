angular.module("app").config(["$routeProvider", "$locationProvider",  function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl :   "app/auctions/auctions.template.html",
            controller  :   "auctionsController"
        })
        .when("/login", {
            templateUrl: "app/login/login.template.html",
            controller: "loginController"
        })
        .when("/new-user", {
        templateUrl: "app/create-new-user/newuser.template.html",
        controller: "customerCreateController"
    })

        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);

