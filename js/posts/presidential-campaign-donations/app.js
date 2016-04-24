var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

// var tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-10, 0])
//   .html(function(d) {
//     return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
//   })

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// svg.call(tip);

d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {
	data = data[0];

  x.domain(d3.range(data["colleges"][0]["jobs"].length));
  y.domain([0, 200]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    // .append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", 6)
    //   .attr("dy", ".71em")
    //   .style("text-anchor", "end")
    //   .text("Frequency");

  svg.selectAll(".bar")
      .data(function(){
      	return data["colleges"][0]["jobs"]
      })
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d, i) { 
      	return x(i); 
      })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { 
      	console.log(d.donators);
      	return y(d.donators); 
      })
      .attr("height", function(d) { return height - y(d.donators); })
      // .on('mouseover', tip.show)
      // .on('mouseout', tip.hide)

});