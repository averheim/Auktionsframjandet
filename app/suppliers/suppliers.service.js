angular.module("suppliers").factory("suppliersFactoryService", ["$http", function ($http) {
    return {
        getAllSuppliers: function () {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/supplier");
        },
        getSupplierDetails: function (supplier) {
            return $http.get("http://nackademiska-api.azurewebsites.net/api/supplier/" + supplier);
        }
    };
}]);