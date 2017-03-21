angular.module("login")
    .factory("loginService", ["$http", "$location", function($http, $location) {

        var isLoggedIn = false;
        var user = {};
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
                user = {
                    firstName: "",
                    lastName: ""
                }
            },

            getLoginValue: function() {
                return isLoggedIn;
            },
            getUserId: function() {
                return user.id;
            },
            getUser: function() {
                if(user == undefined) {
                    user.firstName = "";
                    user.lastName = "";
                }
                return user;
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