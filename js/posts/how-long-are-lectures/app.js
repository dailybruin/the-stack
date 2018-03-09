console.log("RUNNING APP.JS")

var width = 960,
    height = 500,
    barHeight = height / 2 - 40;

var formatNumber = d3.format("s");

var color = d3.scale.ordinal()
    .range(["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]);

var svg = d3.select("#radial-chart").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

d3.csv("/datasets/how-long-are-lectures/data.csv", function(error, data) {

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
          .style("stroke", "black")
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
  var labelRadius = barHeight * 1.025;

  var labels = svg.append("g")
      .classed("labels", true);

  labels.append("def")
        .append("path")
        .attr("id", "label-path")
        .attr("d", "m0 " + -labelRadius + " a" + labelRadius + " " + labelRadius + " 0 1,1 -0.01 0");

  labels.selectAll("text")
        .data(data)
      .enter().append("text")
        .style("text-anchor", "middle")
        .style("font-weight","bold")
        .style("fill", function(d, i) {return "#3e3e3e";})
        .append("textPath")
        .attr("class","textpath")
        .attr("xlink:href", "#label-path")
        .attr("startOffset", function(d,i) {return i * 100 / numBars + 50 / numBars + '%';})
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