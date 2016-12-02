function initGoalkeeperChart(data) {
    // Initialize Data
    formatData(data, 6);
    
    var allGoalkeepers = {
        boxes: []
    };
    for (var k = 0; k < 6; k += 1) {
        allGoalkeepers.boxes.push([0,0]);
    }
    for (var k = 0; k < data.length; k += 1) {
        for (var j = 0; j < data[k].boxes.length; j += 1) {
            allGoalkeepers.boxes[j][0] += data[k].boxes[j][0];
            allGoalkeepers.boxes[j][1] += data[k].boxes[j][1];
        }
    }
    data.push(allGoalkeepers);
    
    // red - blue gradiant
    var color = d3.scaleLinear().domain([0, 1]).range(["#962D3E", "#348899"]);
    
    // global constants
    var labelLength = 37;
    var regionHeight = 100;
    var regionWidth = 100;
    
    // initialize tooltip
    var tooltip = d3.select("#goalkeeper-chart-wrapper").append("div")
                      .attr("class", "tooltip")
                      .style('display', 'none');
    
    // initial svg render
    var svg = d3.select("#goalkeeper-chart");
    updateGoalkeeperChart(data[2]);
    
    // Dropdown function - invokes update
    $('#goalkeeperDropdown').change(function(option) {
        var dataNumber = Number($('#goalkeeperDropdown').val());
        svg.selectAll('g').remove();
        updateGoalkeeperChart(data[dataNumber]);
    });
    
    function updateGoalkeeperChart(player) {
        
        var region = svg.selectAll("g")
                    .data(player.boxes)
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
        .on("mousemove", function(d, i) {
                            var numBlocked = d[1]; // Shots blocked
                            var numFailed = d[0]; // Shots Missed
                            var h = "<p><b>" + goalSection(i) + "</b></p><p>Shots Blocked: <b>" + numBlocked + "</b></p><p>Shots Missed: <b>" + numFailed + "</b></p>";
        
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
            .attr('fill', 'white')
            .text(function(d) {
                    var percentage = Math.round(d[1] / (d[0] + d[1]) * 100 );
                    return percentage + "%";
                })
            .style('font-size', '20px')
            .style('pointer-events', 'none');
    }
    
    // Helper Functions
    function xTransform(index) {
        return (index % 3) * (regionWidth);
    }

    function yTransform(index) {
        if (index > 2)
            return regionHeight;
        else
            return 0;
    }
    
    function goalSection(index) {
        switch (index) {
            case 0: return "Top Left";
            case 1: return "Top Center";
            case 2: return "Top Right";
            case 3: return "Bottom Left";
            case 4: return "Bottom Center";
            case 5: return "Bottom Right";
            default: return "Error in goalSection function";
        }
    }
}