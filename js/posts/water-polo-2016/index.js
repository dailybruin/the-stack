d3.csv("/datasets/water-polo-2016/striker.csv", function(err, striker) {
    d3.csv('/datasets/water-polo-2016/goalkeeper.csv', function(err, goalkeeper) {
        initStriker(striker);
        initGoalkeeperChart(goalkeeper);
    })
})
