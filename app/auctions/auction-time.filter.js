angular.module("auctions")
    .filter("auctionTimeFilter", ["$filter", function ($filter) {
        return function (ongoingAuctions) {
            var ret = [];

            angular.forEach(ongoingAuctions, function (auction) {
                if(new Date($filter('date')(auction.startTime)) <= new Date() && new Date($filter('date')(auction.endTime)) >= new Date() &&
                    auction.highestBid != auction.buyNowPrice) {
                    console.log("Auktion nr: " + auction.id + " lades till");
                    ret.push(auction);
                } else {
                    console.log("Inget lades in")
                }
            });
            return ret;
        };
    }]);