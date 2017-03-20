angular.module("auctions")
    .filter("auctionBidFilter", function () {
        return function (allAuctions, completedAuctions) {
            var ret = [];

            angular.forEach(allAuctions, function (auction) {
                angular.forEach(completedAuctions, function (completed) {
                    if (auction.fromDate > new Date() && auction.toDate < new Date()) {
                        ret.push(auction);
                    }
                })
            });
            return ret;
        };
    });