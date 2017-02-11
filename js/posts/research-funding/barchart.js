function initBarChart (data) {
  // Dropdown function - invokes update
  document.getElementById("lineChartDropdown").addEventListener("change", function() {
    updateData();
  })
  // Set the dimensions of the canvas / graph

  var margin = {top: 30, right: 20, bottom: 30, left: 50},
      width = 650 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom;

  var svg = d3.select("#bar-chart-wrapper")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

  var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // var x = d3.scaleLinear()
  //   .rangeRound([0, width - 50]);

  var x = d3.scaleBand().rangeRound([0, width]).padding(0.2);

  var y = d3.scaleLinear()
    .rangeRound([height - 10, 0]);

  // var line = d3.line()
  //   .x(function(d) {return x(d.year);})
  //   .y(function(d) {return y(d.total);});

  console.log(data)

  x.domain(["2013", "2014", "2015", "2016", "2017"]);
  y.domain(d3.extent(data, function(d) {return d.total;}));

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")))
    .select(".domain");

  g.append("g")
    .attr("class", ".y.axis")
    // .attr("transform", "translate(50,5)")
    .call(d3.axisLeft(y).ticks(5))
    .select(".domain")
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")

  g.selectAll("rect")
    .data(data)
    .enter()
      .append("rect")
      .attr("x", function(d) { return x(d.year) })
      .attr("y", function(d) { return y(d.total) })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.total) })
      .attr("fill", "red");


  // svg.append("path")
  //   .attr("transform", "translate(60,5)")
  //   .datum(data)
  //   .attr("fill", "none")
  //   .attr("stroke", "steelblue")
  //   .attr("stroke-linejoin", "round")
  //   .attr("stroke-linecap", "round")
  //   .attr("stroke-width", 1.5)
  //   .attr("d", line);

  var g = svg.append("g") ;

  function updateData() {
    // Get the data again
    d3.json("/datasets/research-funding/dummy.json", function(err, data) {
      // Scale the range of the data again
      // x.domain(d3.extent(data, function(d) { return d.year; }));
      y.domain([0, d3.max(data, function(d) {return d.subcategories[0].departments[0].total; })]);

      // Select the section we want to apply our changes to
      var svg = d3.select("#bar-chart-wrapper svg")

      // var xAxis = svg.append("g")
      //   .attr("transform", "translate(60," + height + ")")
      //   .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")))
      //   .select(".domain")
      //   .remove();

      var yAxis = svg.append("g")
        .attr("transform", "translate(50,5)")
        .call(d3.axisLeft(y).ticks(5))
        .select(".domain")
        .append("text")
        //      .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        //      .attr("text-anchor", "end")
        .text("Price ($)");

      // Make the changes
      // svg.select(".line")
      //   .transition() // change the line
      //   .duration(750)
      //   .attr("d", line(data));
      // svg.select(".x.axis") // change the x axis
      //   .transition()
      //   .duration(750)
      //   .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")));

      svg.select(".y.axis") // change the y axis
        .transition()
        .duration(750)
        .call(d3.axisLeft(y).ticks(5))

    });
  }
}
