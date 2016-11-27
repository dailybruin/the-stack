function initGoalkeeperChart(data) {
    var svg = d3.select("#goalkeeper-chart");
    var percentColors = [
        { pct: 0.0, color: "#E52100" },
        { pct: 0.1, color: "#E10023" },
        { pct: 0.2, color: "#DD0064" },
        { pct: 0.3, color: "#D900A4" },
        { pct: 0.4, color: "#CA00D5" },
        { pct: 0.5, color: "#8700D2" },
        { pct: 0.6, color: "#4700CE" },
        { pct: 0.7, color: "#0900CA" },
        { pct: 0.8, color: "#0032C6" },
        { pct: 0.9, color: "#006BC2" },
        { pct: 1.0, color: "#00A2BF" }
    ];
    
    formatData(data, 6);
    
    console.log(data[0]);
    
    var tooltip = d3.select("#goalkeeper-chart-wrapper").append("div")
                      .attr("class", "tooltip")
                      .style("opacity", 0);
    
    var regionHeight = 100;
    var regionWidth = 100;
    
    var region = svg.selectAll("g")
                    .data(data[0].boxes)
                    .enter().append("g")
                    .attr("transform", function(d, i) {return "translate(" + xTransform(i) + "," + yTransform(i) + ")"});
    
    region.append("rect")
        .attr("width", regionWidth)
        .attr("height", regionHeight)
        .style("fill", function(d) {
                        var percentage = d[1] / (d[0] + d[1]);
                        return getColorForPercentage(percentage);
                    })
        .on("mouseover", function(d) {})
        .on("mousemove", function(d) {
                            var numBlocked = d[1]; // successfully blocked
                            var numFailed = d[0]; // failed to block
                            var h = "<div class='left'><p>Successfully Blocked: " + numBlocked + " Failed to Block: " + numFailed + "</p></div>";
        
                            tooltip.style("display","block");
                            tooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
                            tooltip.html(h)
                            .style("left", (d3.event.pageX + 12) + "px")
                            .style("top", (d3.event.pageY -10) + "px")
                        })
        .on("mouseout", function(d) { tooltip.style("display", "none"); });
    
    region.append("text")
        .attr("y", regionHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) {
                var percentage = Math.round(d[1] / (d[0] + d[1]) * 100 *100) / 100;
                return percentage + "%";
            });
    
    // Calculation functions
    function xTransform(index) {
        // calculates x coordinate
        return (index % 3) * (regionWidth + 10);
    }

    function yTransform(index) {
        // calculates y coordinate
        if (index > 2)
            return regionHeight + 10;
        else
            return 0;
    }

    function getColorForPercentage(pct) {
        for (var i = 0; i < percentColors.length; i++) {
            if (pct < percentColors[i].pct) {
                return percentColors[i].color;
            }
        }
    }  
}