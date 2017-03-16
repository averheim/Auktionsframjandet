angular.module("login")
    .factory("loginService", ["$http", function($http) {

        var isLoggedIn = false;
        var user;
        return {
            doLogin: function(username, password) {

                var login = {
                    email: username,
                    password: password
                }
                $http.post("http://nackademiska-api.azurewebsites.net/api/account/login", login).then(function(response){
                    user = response.data;
                    if (user.email == username) {
                        isLoggedIn = true;
                        console.log(isLoggedIn);
                        // console.log(user);
                    };
                });


            },
            getLoginValue: function() {
                return isLoggedIn;
            },
            getUserId: function() {
                return user;
            }
        };
    }]);
//whatever