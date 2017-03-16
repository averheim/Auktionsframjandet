angular.module("app").config(["$routeProvider", "$locationProvider",  function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl :   "app/auctions/auctions.admin.template.html",
            controller  :   "auctionsController"
        })
        .when("/login", {
            templateUrl: "app/login/login.admin.template.html",
            controller: "loginController"
        })
        .when("/new-user", {
        templateUrl: "app/create-new-user/newuser.admin.template.html",
        controller: "customerCreateController"
    })

        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);

