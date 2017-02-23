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
    var color = d3.scaleLinear().domain([0, 1]).range(["#2E94B9", "#FD5959"]);

    // initial svg render
    var svg = d3.select("#goalkeeper-chart");

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

        var x = d3.scaleBand().rangeRound([0, 3 * regionWidth + 15]),
        y = d3.scaleBand().rangeRound([0, 2 * regionHeight + 10]),
        scaleX = d3.scaleBand().rangeRound([0, 3 * regionHeight + 10]);

        // goal borders
        svg.append('g')
            .attr('class', 'axis goal-border')
            .attr('transform', 'translate(50,5)')
            .call(d3.axisTop(x).tickSizeOuter(4));
        svg.append('g')
            .attr('class', 'axis goal-border')
            .attr('transform', 'translate(44,5)')
            .call(d3.axisLeft(y).tickSizeOuter(5));
        svg.append('g')
            .attr('class', 'axis goal-border')
            .attr('transform', 'translate(365, 5)')
            .call(d3.axisRight(y).tickSizeOuter(5));

        // goal scales
        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(50," + (35 + 2 * regionHeight) + ")")
            .call(d3.axisBottom(scaleX));

        svg.append("g")
            .attr("class", "axis axis--y")
            .attr("transform", "translate(385,10)")
            .call(d3.axisRight(y));

        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ 195 +","+ 260+")")  // text is drawn off the screen top left, move down and out and rotate
            .text("3 M");

        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(" + (3 * regionWidth + 100) + ","+ (regionHeight + 5) +")rotate(90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("90 CM");
    }

    // Helper Functions
    function xTransform(index) {
        return (index % 3) * (regionWidth) + 55;
    }

    function yTransform(index) {
        if (index > 2)
            return regionHeight + 15;
        else
            return 15;
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
