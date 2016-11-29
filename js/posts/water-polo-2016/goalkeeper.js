function initGoalkeeperChart(data) {
    formatData(data, 6);
    
    // red - blue gradiant
    var color = d3.scaleLinear().domain([0, 1]).range(["red", "blue"]);
    
    // global constants
    var labelLength = 60;
    var regionHeight = 100;
    var regionWidth = 100;
    
    // initialize tooltip
    var tooltip = d3.select("#goalkeeper-chart-wrapper").append("div")
                      .attr("class", "tooltip")
                      .style('display', 'none');
    
    // initial svg render
    var svg = d3.select("#goalkeeper-chart");
    
    var region = svg.selectAll("g")
                    .data(data[0].boxes)
                    .enter().append("g")
                    .attr("transform", function(d, i) {return "translate(" + xTransform(i) + "," + yTransform(i) + ")"});
    
    region.append("rect")
        .attr("width", regionWidth)
        .attr("height", regionHeight)
        .style("fill", function(d) {
                        var pct = d[1] / (d[0] + d[1]);
                        return color(pct);
                    })
        .on("mouseover", function(d) {
            tooltip.style('display', 'inline');
        })
        .on("mousemove", function(d) {
                            var numBlocked = d[1]; // successfully blocked
                            var numFailed = d[0]; // failed to block
                            var h = "<p>Successfully Blocked: " + numBlocked + "</p><p>Failed to Block: " + numFailed + "</p>";
        
                            tooltip
                                .html(h)
                                .style("left", (d3.event.pageX + 20) + "px")
                                .style("top", (d3.event.pageY - 12) + "px");
                        })
        .on("mouseout", function(d) { tooltip.style("display", "none"); });
    
    region.append("text")
        .attr("y", regionHeight / 2)
        .attr("dy", ".35em")
        .attr('x', (regionWidth - labelLength) / 2 )
        .attr('textLength', labelLength)
        .attr('fill', 'white')
        .text(function(d) {
                var percentage = Math.round(d[1] / (d[0] + d[1]) * 100 *10) / 10;
                return percentage + "%";
            })
        .style('font-size', '20px')
        .style('pointer-events', 'none');
    
    // Dropdown function - invokes update
    $('#goalkeeperDropdown').change(function(option) {
        var dataNumber = Number($('#goalkeeperDropdown').val());
        updateGoalkeeperChart(data[dataNumber]);
    });
    
    // Update Function
    function updateGoalkeeperChart(player) {
        // remove rectangles in 
        svg.selectAll('g').remove();

        console.log(player);
        
        var region = svg.selectAll("g")
                    .data(player.boxes)
                    .enter().append("g")
                    .attr("transform", function(d, i) {return "translate(" + xTransform(i) + "," + yTransform(i) + ")"});
        console.log(player.boxes);
    
        region.append("rect")
            .attr("width", regionWidth)
            .attr("height", regionHeight)
            .style("fill", function(d) {
                            var pct = d[1] / (d[0] + d[1]);
                            return color(pct);
                        })
            .on("mouseover", function(d) {
            tooltip.style('display', 'inline');
        })
        .on("mousemove", function(d) {
                            var numBlocked = d[1]; // successfully blocked
                            var numFailed = d[0]; // failed to block
                            var h = "<p>Successfully Blocked: " + numBlocked + "</p><p>Failed to Block: " + numFailed + "</p>";
        
                            tooltip
                                .html(h)
                                .style("left", (d3.event.pageX + 20) + "px")
                                .style("top", (d3.event.pageY - 12) + "px")
                        })
        .on("mouseout", function(d) { tooltip.style("display", "none"); });

        region.append("text")
            .attr("y", regionHeight / 2)
            .attr("dy", ".35em")
            .attr('x', (regionWidth - labelLength) / 2 )
            .attr('textLength', labelLength)
            .attr('fill', 'white')
            .text(function(d) {
                    var percentage = Math.round(d[1] / (d[0] + d[1]) * 100 *10) / 10;
                    return percentage + "%";
                })
            .style('font-size', '20px')
            .style('pointer-events', 'none');
    }
    
    // Calculation functions
    function xTransform(index) {
        // calculates x coordinate
        return (index % 3) * (regionWidth);
    }

    function yTransform(index) {
        // calculates y coordinate
        if (index > 2)
            return regionHeight;
        else
            return 0;
    }
}