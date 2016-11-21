function initGoalkeeperChart(data) {
    var svg = d3.select("#goalkeeper-chart");
    
    formatData(data, 6);
    
    console.log(data[0])

    svg.selectAll("rect")
        .data(data[0].boxes)
        .enter()
             .append("rect")
             .attr("x", function (d, i) { return (i % 3) * 110 })
             .attr("y", function (d, i) { return i > 2 ? 110 : 0;})
             .attr("width", 100)
             .attr("height", 100)
             .attr("fill", "red");
}