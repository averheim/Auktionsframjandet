angular.module("auctions").filter("auctionTimeFilter", function () {
    return function (allAuctions, completedAuctions) {
        var ret = [];

        console.log("filtret körs" + allAuctions + "och" + completedAuctions);


        angular.forEach(allAuctions, function (auction) {
            angular.forEach(completedAuctions, function (completed) {
                if(auction.id == completed.id){
                console.log("Hej");
                }else {
                    ret.push(auction);
                console.log("Nej");

                }
            });

        });

        console.log(ret);
        return ret;
    };
});