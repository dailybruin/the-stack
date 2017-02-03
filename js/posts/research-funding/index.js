d3.json("/datasets/research-funding/dummy.json", function(err, data) {
    initLineChart(data);
})