function initLineChart (data) {
    console.log(data)
    
    x.domain(d3.extent(data, function(d) {return d.year;}));
    y.domain(d3.extent(data, function(d) {return d.total;}));
    
    svg.append("g")
        .attr("transform", "translate(60," + height + ")")
        .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")))
        .select(".domain");
    
    svg.append("g")
        .attr("class", ".y.axis")
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

    
  svg.append("path")
     .attr("transform", "translate(60,5)")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
}

function updateData() {
    // Get the data again
    d3.json("/datasets/research-funding/dummy.json", function(err, data) {        
        // Scale the range of the data again 
        x.domain(d3.extent(data, function(d) { return d.year; }));
        y.domain([0, d3.max(data, function(d) {return d.subcategories[0].departments[0].total; })]);

        // Select the section we want to apply our changes to
        var svg = d3.select("#line-chart-wrapper svg");
        
        var xAxis = svg.append("g")
            .attr("transform", "translate(60," + height + ")")
            .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")))
            .select(".domain")
            .remove();

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
        svg.select(".line")
            .transition() // change the line
            .duration(750)
            .attr("d", line(data));
        svg.select(".x.axis") // change the x axis
            .transition()
            .duration(750)
            .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")));
        
        svg.select(".y.axis") // change the y axis
            .transition()
            .duration(750)
            .call(d3.axisLeft(y).ticks(5))

    });
}