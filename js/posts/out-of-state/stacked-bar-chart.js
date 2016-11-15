function initStackedBarChart(data) {
  currData = 0;

  var margin = {top: 50, right: 20, bottom: 10, left: 80},
      width = 740 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var y = d3.scaleBand().rangeRound([0, height]).padding(.3);

  var x = d3.scaleLinear().rangeRound([0, width]);

  var color = d3.scaleOrdinal(d3.schemeCategory20)
    // .range(["#c7001e", "#f6a580", "#cccccc", "#92c6db", "#086fad", "#086fad"]);

  var xAxis = d3.axisTop()
      .scale(x)

  var yAxis = d3.axisLeft()
      .scale(y)

  var svg = d3.select("#stacked-bar-chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("id", "d3-plot")
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var colleges = ["Berkeley", "Davis", "Irvine", "Los Angeles", "Merced", "Riverside"];

  color.domain(colleges);

  var verticalTip = d3.select("body")
    .append("div")
    .attr("class", "vertical-tip");

  data[currData].forEach(function(d) {
    d["Berkeley"] = +d["UCB P"];
    d["Davis"] = +d["UCD P"];
    d["Irvine"] = +d["UCI P"];
    d["Los Angeles"] = +d["UCLA P"];
    d["Merced"] = +d["UCM P"];
    d["Riverside"] = +d["UCR P"];
    var x0 = 0;
    var idx = 0;
    var colleges_arr = [];
    d.boxes = color.domain().map(function(name) { 
      var c = +d[colleges[idx]]; 
      colleges_arr.push(c); 
      var n = c || 0;
      idx++;
      return {name: name, x0: x0, x1: x0 += +d[name], state: d["State"], N: +d["UC P"], n: n, colleges: colleges_arr }; 
    });
  });

  var min_val = 0; // every stack starts at 0;

  var max_val = d3.max(data[currData], function(d) {
    return d.boxes["4"].x1;
  });

  x.domain([min_val, max_val]).nice();
  y.domain(data[currData].map(function(d) { return d.State; }));

  svg.append("g")
      .attr("class", "x axis")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  var vakken = svg.selectAll(".question")
      .data(data[currData])
    .enter().append("g")
      .attr("class", "bar")
      .attr("transform", function(d, i) { return "translate(0," + y(d.State) + ")"; });

  var bars = vakken.selectAll("rect")
      .data(function(d) { return d.boxes; })
    .enter().append("g").attr("class", "subbar");

  bars.append("rect")
      .attr("height", y.bandwidth())
      .attr("x", function(d) { return x(d.x0); })
      .attr("width", function(d) { return x(d.x1) - x(d.x0); })
      .style("fill", function(d) { return color(d.name); })
      .on("mousemove",function(d, i) {

        this.style.opacity = "0.6";
        this.style.cursor = "pointer";

        var h = '<b style="width: 100%; border-bottom: 2px solid ' + color(i) + ';">' + d.state + '</b><br><br>';

        h += '<p><b>Total</b>: ' + d.N +'%</p><br>'
 
        for (var j = d.colleges.length - 1; j >= 0; j--) { // start backwards
          var c = d.colleges[j]; 
          var name = colleges[i];
          if (name == colleges[j]) {
            h += '<p style="width:100%; background-color: yellow;"><b>' + colleges[j] + "</b>: " + d.colleges[j] + "%</p>";
          } else {
            h += "<p><b>" + colleges[j] + "</b>: " + d.colleges[j] + "%</p>";
          }
        }

        verticalTip.style("display","none");
        verticalTip.html(h)
          .style("left", (d3.event.pageX+12) + "px")
          .style("top", (d3.event.pageY-10) + "px")
          .style("opacity", 1)
          .style("display","block")

      })
      .on('mouseout', function() {
        this.style.opacity = "1";
        verticalTip.html("").style("display","none");
      });

  bars.append("text")
      .attr("x", function(d) { return x(d.x0); })
      .attr("y", y.bandwidth()/2)
      .attr("dy", "0.5em")
      .attr("dx", "0.5em")
      .style("font" ,"10px sans-serif")
      .style("text-anchor", "begin")
      .text(function(d) { return d.n !== 0 && (d.x1-d.x0)>3 ? d.n : "" });

  vakken.insert("rect",":first-child")
      .attr("height", y.bandwidth())
      .attr("x", "1")
      .attr("width", width)
      .attr("fill-opacity", "0.5")
      .style("fill", "#F5F5F5")
      .attr("class", function(d,index) { return index%2==0 ? "even" : "uneven"; });

  svg.append("g")
      .attr("class", "y axis")
  .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y2", height);

  var startp = svg.append("g").attr("class", "legendbox").attr("id", "mylegendbox");
  var legend_tabs = [0, 80, 140, 200, 290, 360]; // hardcoded
  var legend = startp.selectAll(".legend")
      .data(color.domain().slice())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(" + legend_tabs[i] + ",-45)"; });

  legend.append("rect")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", 22)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "begin")
      .style("font" ,"10px sans-serif")
      .text(function(d) { return d; });

  d3.selectAll(".axis path")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")

  d3.selectAll(".axis line")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")

  var movesize = width/2 - startp.node().getBBox().width/2;
  d3.selectAll(".legendbox").attr("transform", "translate(" + movesize  + ",0)");


}