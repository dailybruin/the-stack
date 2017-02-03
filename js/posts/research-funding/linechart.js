function initLineChart (data) {
    console.log(data)
        
    // Set the dimensions of the canvas / graph
    var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 650 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;
    
    var svg = d3.select("#line-chart-wrapper")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var x = d3.scaleLinear()
              .rangeRound([0, width - 50]);
    
    var y = d3.scaleLinear()
              .rangeRound([height - 10, 0]);
    
    var line = d3.line()
        .x(function(d) {return x(d.year);})
        .y(function(d) {return y(d.total);});
    
    x.domain(d3.extent(data, function(d) {return d.year;}));
    y.domain(d3.extent(data, function(d) {return d.total;}));
    
    svg.append("g")
        .attr("transform", "translate(60," + height + ")")
        .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")))
        .select(".domain")
        .remove();
    
    svg.append("g")
        .attr("transform", "translate(50,5)")
      .call(d3.axisLeft(y).ticks(5))
        .select(".domain");

    
  svg.append("path")
     .attr("transform", "translate(60,0)")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
    
    // -----------------------------------------
    var svg = d3.select("#line-chart-wrapper")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    var x = d3.scaleLinear()
              .rangeRound([0, width - 50]);
    
    var y = d3.scaleLinear()
              .rangeRound([height - 10, 0]);
    
    var line = d3.line()
        .x(function(d) { return x(d.year); })
        .y(function(d) { return y(d.subcategories[0].departments[0].total); });
    
    x.domain(d3.extent(data, function(d) {return d.year;}));
    y.domain(d3.extent(data, function(d) {return d.subcategories[0].departments[0].total;}));
    
    svg.append("g")
        .attr("transform", "translate(60," + height + ")")
        .call(d3.axisBottom(x).ticks(3))
        .select(".domain")
        .remove();
    
    svg.append("g")
        .attr("transform", "translate(50,5)")
      .call(d3.axisLeft(y).ticks(5))
        .select(".domain");

    
  svg.append("path")
     .attr("transform", "translate(60,0)")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
}