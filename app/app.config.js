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

        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);

