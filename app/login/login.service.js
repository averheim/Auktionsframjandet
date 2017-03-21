angular.module("login")
    .factory("loginService", ["$http", "$location", function($http, $location) {

        var isLoggedIn = false;
        var user;
        var admin = false;
        var loginFaild = false;

        return {
            doLogin: function(username, password) {
                var login = {
                    email: username,
                    password: password
                };

                $http.post("http://nackademiska-api.azurewebsites.net/api/account/login", login).then(function(response){
                    user = response.data;
                    if (user.email == username) {
                        isLoggedIn = true;
                        $location.path("/");
                        if(user.role == "Administrator") {
                            admin = true;
                        }
                    }
                    return true;
                },function (response) {
                    return false;
                });
            },
            doLogOut : function() {
                isLoggedIn = false;
                admin = false;
                user = null;
            },

            getLoginValue: function() {
                return isLoggedIn;
            },
            getUserId: function() {
                return user;
            },
            getAdmin: function() {
                return admin;
            }
        };
    }]);