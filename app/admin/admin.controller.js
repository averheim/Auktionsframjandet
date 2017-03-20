angular.module("admin").

        controller("adminController", ["$scope","$filter", "adminService", "bidService", "auctionsServiceFactory", "suppliersFactoryService",
            function ($scope, $filter, adminService, bidService, auctionsServiceFactory, suppliersFactoryService) {


        console.log("test från admin Ctrl");

        var allSuppliers;
        var completedAuctions;

        var salesReport = [];
        var check = true;

        console.log("test från admin Ctrl");
        suppliersFactoryService.getAllSuppliers().then(function (response) {
            allSuppliers = response.data;
            console.log(allSuppliers);
            auctionsServiceFactory.getAllCompleted().then(function (response) {
                completedAuctions = response.data;
                    angular.forEach(completedAuctions, function (auction) {
                        angular.forEach(allSuppliers, function (supplier) {
                            if(auction.supplierId == supplier.id) {
                                auction.commisson = supplier.commission;
                            }
                        })
                    });
                angular.forEach(completedAuctions, function (auction) {
                    bidService.getBid(auction.id).then(function (response) {
                        var bids = response.data;
                        auction.highestBid = bids[bids.length-1].bidPrice;
                        auction.earnedCommission = auction.highestBid * auction.commisson;
                        var month = bids[bids.length-1];

                        month = $filter('date')(month.dateTime, "MMMM y");
                        // console.log(month);
                        var temp = {
                            month: month,
                            totalCommision : auction.highestBid
                        };
                        console.log(temp);

                        var monthFound = false;
                        if (salesReport.length == 0) {
                            salesReport.push(temp);

                        } else {
                            for (var i = 0; i < salesReport.length; i++) {
                                if (salesReport[i].month == temp.month) {
                                    monthFound = true;
                                    salesReport[i].totalCommision += temp.totalCommision;
                                    i = salesReport.length;
                                }
                            }
                            if (!monthFound) {
                                salesReport.push(temp);
                            }
                        }


                        console.log(salesReport);






                        // console.log(auction.earnedCommission);
                    })
                });
                $scope.completedAuctions = completedAuctions;
                $scope.salesReport = salesReport;
            });
        });

    }]);




