angular.module("admin").
controller("adminController", ["$scope", "adminService", "bidService", "auctionsServiceFactory", "suppliersFactoryService",
    function ($scope, adminService, bidService, auctionsServiceFactory, suppliersFactoryService) {


        console.log("test från admin Ctrl");

        // var allSuppliers;
        // var completedAuctions;
        // console.log("test från admin Ctrl");
        // suppliersFactoryService.getAllSuppliers().then(function (response) {
        //     allSuppliers = response.data;
        //     console.log(allSuppliers);
        //     auctionsServiceFactory.getAllCompleted().then(function (response) {
        //         completedAuctions = response.data;
        //             angular.forEach(completedAuctions, function (auction) {
        //                 angular.forEach(allSuppliers, function (supplier) {
        //                     if(auction.supplierId == supplier.id) {
        //                         auction.commisson = supplier.commission;
        //                     }
        //                 })
        //             });
        //         angular.forEach(completedAuctions, function (auction) {
        //             bidService.getBid(auction.id).then(function (response) {
        //                 var bids = response.data;
        //                 auction.highestBid = bids[bids.length-1].bidPrice;
        //                 auction.earnedCommission = auction.highestBid * auction.commisson;
        //                 console.log(earnedCommission);
        //             })
        //         });
        //         $scope.completedAuctions = completedAuctions;
        //     });
        // });







    }]);




