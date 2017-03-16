angular.module("login")
    .factory("loginService", ["$http", function($http) {

        var isLoggedIn = false;
        var user;
        var admin = false;
        return {
            doLogin: function(username, password) {
                console.log(admin);
                console.log(isLoggedIn);
                var login = {
                    email: username,
                    password: password
                }
                $http.post("http://nackademiska-api.azurewebsites.net/api/account/login", login).then(function(response){
                    user = response.data;
                    if (user.email == username) {
                        isLoggedIn = true;
                        if(user.role == "Administrator") {
                            admin = true;
                        }
                        console.log(admin);
                        console.log(isLoggedIn);
                        // console.log(user);
                    };
                });


            },
            doLogOut : function() {
                console.log("mums");
                isLoggedIn = false;
                admin = false;
                user = null;
                console.log(isLoggedIn);
                console.log(admin);
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
//whatever