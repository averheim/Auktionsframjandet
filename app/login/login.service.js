angular.module("login")
    .factory("loginService", ["$http", "$location", function($http, $location) {

        var isLoggedIn = false;
        var user;
        var admin = false;

        return {
            doLogin: function(username, password) {
                var login = {
                    email: username,
                    password: password
                };

                return $http.post("http://nackademiska-api.azurewebsites.net/api/account/login", login);
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
                return user.id;
            },
            getAdmin: function() {
                return admin;
            },

            setLoginValue: function(loginStatus) {
                isLoggedIn = loginStatus;
            },
            setUserId: function(userId) {
                user.id = userId;
            },
            setAdmin: function(isAdmin) {
                admin = isAdmin;
            },
            setUserData: function(userData) {
              user = userData;
            }
        };
    }]);