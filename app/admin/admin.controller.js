angular.module("admin").
controller("adminController", ["$scope", "adminService", "bidService", "auctionsServiceFactory",
    function ($scope, adminService, bidService, auctionsServiceFactory) {

    var completedAuctions;
    var highestBid;
    var bids;
    var test = [];


    auctionsServiceFactory.getCompletedAuctions().then(function (response) {
        var check = false;
        completedAuctions = response.data;
        //console.log(completedAuctions[0].id);

        angular.forEach(completedAuctions, function (auction) {

            bidService.getBid(auction.id).then(function (response) {



                bids = response.data;
                //console.log(bids)
                var tempBid = 0;
                    if(bids > tempBid) {
                        tempBid = bids;
                    }
                    angular.forEach(bids, function (bid) {
                        for(var i = 0; i < test.length; i++) {
                            if (bid.auctionId == test[i].auctionID) {
                                check = true;
                                if(bid.bidPrice > test[i].bidPrice)
                                test[i].bidPrice = bid.bidPrice;
                                
                            }
                                }
                                if(!check) {
                                    test.push(bid)
                                }

                    });
                    angular.forEach(test, function (x) {
                        console.log(x);
                    })

                //console.log(bid);
                            // for(var i = 0; i < bid.length; i++) {
                            //     if(bid.auctionId)
                            // }




                        // angular.forEach(bid, function (higherBid) {
                        //     if(tempBid < higherBid.bidPrice) {
                        //         tempBid = higherBid.bidPrice;
                        //         console.log(tempBid)
                        //     }
                        // })




                // console.log(bids);
                // console.log(bids[0].bidPrice);
            });

        })


    })

}]);