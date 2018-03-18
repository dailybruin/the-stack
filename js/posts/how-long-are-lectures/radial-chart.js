var width = 1150,
    height = 1000,
    barHeight = height / 2 - 80;

var formatNumber = d3.format("s");

var color = d3.scale.ordinal()
    .range(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

d3.csv("/Users/dinkar/the_stack/the-stack/datasets/how-long-are-lectures/data.csv", function(error, data) {

  var extent = d3.extent(data, function(d) { return d.value; });
  var barScale = d3.scale.linear()
      .domain(extent)
      .range([0, barHeight]);

  var keys = data.map(function(d,i) { return d.name; });
  var numBars = keys.length;

  var x = d3.scale.linear()
      .domain(extent)
      .range([0, -barHeight]);

  var xAxis = d3.svg.axis()
      .scale(x).orient("left")
      .ticks(3)
      .tickFormat(formatNumber);

  var circles = svg.selectAll("circle")
          .data(x.ticks(3))
        .enter().append("circle")
          .attr("r", function(d) {return barScale(d);})
          .style("fill", "none")
          .style("stroke", "#00a5ff")
          .style("stroke-dasharray", "2,2")
          .style("stroke-width",".5px");

  var arc = d3.svg.arc();

  var segments = svg.selectAll("path")
          .data(data)
        .enter().append("path")
          .each(function(d,i) {
            d.innerRadius = 0;
            d.outerRadius = barScale(+d.value);
            d.startAngle = (i * 2 * Math.PI) / numBars;
            d.endAngle = ((i + 1) * 2 * Math.PI) / numBars;
          })
          .style("fill", function (d) { return color(d.name); })
          .attr("d", arc);

  svg.append("circle")
      .attr("r", barHeight)
      .classed("outer", true)
      .style("fill", "none")
      .style("stroke", "black")
      .style("stroke-width","1.5px");

  var lines = svg.selectAll("line")
      .data(keys)
    .enter().append("line")
      .attr("y2", -barHeight - 20)
      .style("stroke", "black")
      .style("stroke-width",".5px")
      .attr("transform", function(d, i) { return "rotate(" + (i * 360 / numBars) + ")"; });

  svg.append("g")
    .attr("class", "x axis")
    .call(xAxis);

  // Labels
  var labels = svg.append("g")
      .classed("labels", true);

  labels.selectAll("text")
        .data(data)
      .enter().append("text")
        .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
        .attr("dy", ".35em")
        .attr("class","textpath")
        .attr("transform", function(d) {
          return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
              + "translate(" + (d.innerRadius + (barHeight*1.025)) + ")"
              + (d.angle > Math.PI ? "rotate(180)" : "");
              })
        .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
        .text(function(d) {return d.name.toUpperCase(); });

  d3.select("input").on("change", change);

  function change() {

    if (this.checked) {
     labels.selectAll(".textpath").sort(function(a,b) { return b.value - a.value; });
     segments.sort(function(a,b) { return b.value - a.value; });

    }else {
      labels.selectAll(".textpath").sort(function(a,b) { return d3.ascending(a.name, b.name) });
      segments.sort(function(a,b) { return d3.ascending(a.name, b.name); });
    };

    segments.transition().duration(2000).delay(100)
            .attrTween("d", function(d,index) {
              var i = d3.interpolate(d.startAngle, (index * 2 * Math.PI) / numBars );
              var u = d3.interpolate(d.endAngle, ((index + 1) * 2 * Math.PI) / numBars );
              return function(t) { d.endAngle = u(t); d.startAngle = i(t); return arc(d,index); };
            });

   labels.selectAll(".textpath").transition().duration(2000).delay(100)
      .attr("startOffset", function(d,i) {return i * 100 / numBars + 50 / numBars + '%'; })
  }


});
