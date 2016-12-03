var initStriker = function(data) {
  // manfiest constants
  var w = 640,
    h = 640;
  var sideLength = 80;
  var numBoxes = 9;
  var svg = d3.select("#striker-chart")
  var goal = [{}]

  // red - blue gradiant
  var color = d3.scaleLinear().domain([0, 1]).range(["#2E94B9", "#FD5959"]);

  var allPlayers = {
    boxes: [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ]
  }

  // pull in data
  formatData(data, numBoxes);

  // add in ALL PLAYERS data
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < 9; j++) {
      allPlayers.boxes[j][0] += data[i].boxes[j][0];
      allPlayers.boxes[j][1] += data[i].boxes[j][1];
    }
  }
  data.push(allPlayers);

  // initialize tooltip
  var tooltip = d3.select("#goalkeeper-chart-wrapper")
    .append("div")
    .attr("class", "tooltip")
    .style('display', 'none');

  // Create Data Visualization
  svg.selectAll("rect")
    //create goal shapes
    .data(goal)
    .enter()
    .append("rect")
    // dimensions
    .attr("width", 40)
    .attr("height", sideLength)
    // position
    .attr("x", 45)
    .attr("y", sideLength)
    // other
    .style("fill", "black")
    .exit()
    // create field shapes
    .data(data[20].boxes)
    .enter()
    .append("rect")
    // dimensions
    .attr("width", function(data, index) {
      if (index < 3)
        return sideLength * 1.5;
      return sideLength * 2
    })
    .attr("height", sideLength)
    // position
    .attr("x", function(data, index) {
      var offset = 0;
      if (index > 2)
        offset = sideLength * 0.5;
      return (Math.floor(index / 3)) * (sideLength * 2) + sideLength - offset
    })
    .attr("y", function(data, index) {
      return (index % 3) * (sideLength)
    })
    // other
    .style("fill", function(data) {
      if (data[0] + data[1] == 0)
        return "grey";
      // return color from blue to red
      return color(data[0] / (data[0] + data[1]));
    })
    .on("mouseover", function(data) {
      tooltip.style('display', 'inline');
    })
    .on("mousemove", function(data, index) {
      var numScored = data[0]; // successfully blocked
      var total = data[0] + data[1]; // failed to block
      var range = " < 2m"
      if (index >= 6)
        range = " > 5m"
      else if (index >= 3)
        range = " 2m - 5m"
      var h =
        "<p>Range <b>" +
        range +
        "</b></p><p>Shots Scored: <b>" +
        numScored +
        "</b></p><p>Shots Attempted: <b>" +
        total +
        "</b></p>";

      tooltip
        .html(h)
        .style("left", (d3.event.pageX + 20) + "px")
        .style("top", (d3.event.pageY - 12) + "px");
    })
    .on("mouseout", function(d) {
      tooltip.style("display", "none");
    });
  // goal text
  svg.selectAll("text")
    .data(goal)
    .enter()
    .append("text")
    .attr("x", -138)
    .attr("y", 70)
    .text("Goal")
    .attr('fill', 'white')
    .attr("transform", "rotate(-90)")
    .exit()
    // field text
    .data(data[20].boxes)
    .enter()
    .append("text")
    .attr("x", function(data, index) {
      offset = 0;
      if (index < 3)
        offset = 48;
      else if (index < 6)
        offset = 10;
      else
        offset = -5;
      return (Math.floor(index / 3)) * (sideLength * 2.2) + sideLength + offset;
    })
    .attr("y", function(data, index) {
      return (index % 3) * (sideLength) + sideLength / 2 + 5
    })
    .text(function(data, index) {
      if ((data[1] + data[0]) == 0)
        return "NA"
      else
        return Math.round((data[0] / (data[0] + data[1])) * 100) + "%"
    })
    .attr('fill', 'white')
    .style('font-size', '20px')
    .style('pointer-events', 'none');


  // update graph based on selection
  function updateStrikerChart(player) {
    // remove rectangles in graph
    svg.selectAll('g').remove();
    svg.selectAll('text').remove();
    svg.selectAll('rect').remove();
    // create goal
    svg.selectAll("rect")
      //create goal shape
      .data(goal)
      .enter()
      .append("rect")
      // dimensions
      .attr("width", 40)
      .attr("height", sideLength)
      // position
      .attr("x", 45)
      .attr("y", sideLength)
      // other
      .style("fill", "black")
      .exit()

    // create field shapes
    .data(player.boxes)
      .enter()
      .append("rect")
      // dimensions
      .attr("width", function(data, index) {
        if (index < 3)
          return sideLength * 1.5;
        return sideLength * 2
      })
      .attr("height", sideLength)
      // position
      .attr("x", function(data, index) {
        var offset = 0;
        if (index > 2)
          offset = sideLength * 0.5;
        return (Math.floor(index / 3)) * (sideLength * 2) + sideLength - offset
      })
      .attr("y", function(data, index) {
        return (index % 3) * (sideLength)
      })
      // other
      .style("fill", function(data) {
        if (data[0] + data[1] == 0)
          return "grey";
        // return color from blue to red
        return color(data[0] / (data[0] + data[1]));
      })
      .on("mouseover", function(data) {
        tooltip.style('display', 'inline');
      })
      .on("mousemove", function(data, index) {
        var numScored = data[0]; // successfully blocked
        var total = data[0] + data[1]; // failed to block
        var range = " < 2m"
        if (index >= 6)
          range = " > 5m"
        else if (index >= 3)
          range = " 2m - 5m"
        var h =
          "<p>Range <b>" +
          range +
          "</b></p><p>Shots Scored: <b>" +
          numScored +
          "</b></p><p>Shots Attempted: <b>" +
          total +
          "</b></p>";

        tooltip
          .html(h)
          .style("left", (d3.event.pageX + 20) + "px")
          .style("top", (d3.event.pageY - 12) + "px");
      })
      .on("mouseout", function(d) {
        tooltip.style("display", "none");
      });

    // create text
    svg.selectAll("text")
    // create goal text
    .data(goal)
      .enter()
      .append("text")
      .attr("x", -138)
      .attr("y", 70)
      .text("Goal")
      .attr('fill', 'white')
      .attr("transform", "rotate(-90)")
      .exit()
      // field text
      .data(player.boxes)
      .enter()
      .append("text")
      .attr("x", function(data, index) {
        offset = 0;
        if (index < 3)
          offset = 48;
        else if (index < 6)
          offset = 10;
        else
          offset = -5;
        return (Math.floor(index / 3)) * (sideLength * 2.2) + sideLength + offset;
      })
      .attr("y", function(data, index) {
        return (index % 3) * (sideLength) + sideLength / 2 + 5
      })
      .text(function(data, index) {
        if ((data[1] + data[0]) == 0)
          return "NA"
        else
          return Math.round((data[0] / (data[0] + data[1])) * 100) + "%"
      })
      .attr('fill', 'white')
      .style('pointer-events', 'none');
  }

  // Dropdown function - invokes update
  $('#strikerDropdown').change(function(option) {
    var dataNumber = Number($('#strikerDropdown').val());
    updateStrikerChart(data[dataNumber]);
  });
}
