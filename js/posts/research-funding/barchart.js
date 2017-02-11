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

  var x = d3.scaleBand().rangeRound([0, width]).padding(0.2);
  var y = d3.scaleLinear()
    .rangeRound([height, 0]);

  x.domain(["2013", "2014", "2015", "2016", "2017"]);
  y.domain([0, d3.max(data, function(d) { return d.total })])

  var yAxis = d3.axisLeft(y);

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")))

  g.append("g")
    .attr("class", ".y.axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")

  g.selectAll("rect")
    .data(data)
    .enter()
      .append("rect")
      .attr("x", function(d) { return x(d.year) })
      .attr("y", function(d) { return y(d.total) })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.total) })
      .attr("fill", "red")


  function updateData() {
    console.log("updating!");
    // Get the data again
    y.domain([0, d3.max(data, function(d) {return d.subcategories[0].departments[0].total; })]);

    g.select("g.y.axis")
      .transition()
      .duration(500)
      .ease(d3.easeSinInOut)
      .call(yAxis)

    g.selectAll("rect")
      // .transition()
      // .duration(500)
      .data(data)
      .enter()
  }
}
