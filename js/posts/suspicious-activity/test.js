var svg = d3.select("#test"),
    margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv('/datasets/suspicious-activity/data.csv', function(err, data) {
  // var mf = {"M":0,"F":0};
  var mf = [0, 0]; // M = 0, F = 1
  var formattedData = data.forEach(function(d) {
    console.log(d);
    if (d.Sex=="M") {
      mf[0] +=1;
    }
    else if (d.Sex=="F") {
      mf[1] +=1;
     }
     console.log (mf);
  })

  if (err) throw err;

  x.domain(['M', 'F']);
  y.domain([0, 300]);

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

  g.selectAll(".bar")
    .data(mf)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d, i) {
        return i == 0 ? x('M') : x('F');
        // return x('M');
      })
      .attr("y", function(d) {
        return y(d);
      })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d); });
});
