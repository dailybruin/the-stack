var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2;

/* d3 tool tip */
var div = d3.select("#d3").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var outerColorScale = d3.scale.ordinal()
  .domain(["dem", "rep"])
  .range(["#232066", "#E91D0E"]);

var colorScale = d3.scale.category20();
// var color = d3.scale.ordinal()
//     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var outerArcRegion = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 30);

var innerArcRegion = d3.svg.arc()
    .outerRadius(radius - 32)
    .innerRadius(radius - 85);

var outerPie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.total; });

var innerPie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d["colleges_total"]; });

var svg2 = d3.select("#donutChart").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var parties = ["dem", "rep"];
d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {
  if (error) throw error;

  var outerArc;
  var innerArc;

  var nest = d3.nest()
    .key(function(d) { return d.party; })
    .entries(data);

  // drawOuterArc(outerArc, nest);

  /* draw Outer Arc */
  /* first entry of total is democrats and the second is Republicans */
  var total = [];
  var candEntries = [];

  for (var i = 0; i < 2; i++) {
    total[i] = 0;
    candidateList = nest[i].values;
    for (var j = 0; j < candidateList.length; j++) {
      candEntries.push(candidateList[j]);
      total[i] += candidateList[j]["colleges_total"];
    }
  }

  nest[0].total = total[0];
  nest[1].total = total[1];

  outerArcs = svg2.selectAll(".outerArc")
      .data(outerPie(nest))
    .enter().append("g")
      .attr("class", "outerArc");

  outerArcs.append("path")
      .attr("d", outerArcRegion)
      .style("fill", function(d, i) { return outerColorScale(parties[i]); })
      .on("mouseover", function(d) {
        d3.select(this)
          .attr("opacity", 0.5);
      })
      .on("mousemove", function(d, i) {
        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html(function() {
          var str = "Party: "+d.data.key+"</br>"+"College Total: "+parseInt(d.data.total)+"</br>";

            for (var i = 0; i < d.data.values.length; i++) {
              str += "Candiate: " + d.data.values[i]["name"] + ", College Total: " + parseInt(d.data.values[i]["colleges_total"]) + "</br>";
            }
              return str;
        })
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          d3.select(this)
           .attr("opacity", 1);
          div.transition()
            .duration(500)
            .style("opacity", 0);
      })

  innerArcs = svg2.selectAll(".innerArc")
      .data(innerPie(candEntries))
    .enter().append("g")
      .attr("class", "innerArc");

  innerArcs.append("path")
      .attr("d", innerArcRegion)
      .style("fill", function(d, i) { return colorScale(i); })
      .on("mouseover", function(d) {
        d3.select(this).attr("opacity", 0.5);
      })
      .on("mousemove", function(d) {
        div.transition()
          .duration(200)
          .style("opacity", .9);
        div.html(function() {
          var str = "Candidate: "+d.data["name"]+"</br>"+"College Total: "+parseInt(d.data["colleges_total"]);

          for (var i = 0; i < d.data.colleges.length; i++) {
            str += "College: " + d.data.colleges[i]["name"] + ", College Total: " + parseInt(d.data.colleges[i]["total"]) + "</br>";
          }
            return str;
          })
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
      })
      .on("mouseout", function(d) {
          d3.select(this)
           .attr("opacity", 1);
          div.transition()
            .duration(500)
            .style("opacity", 0);
      })
      .on("click", function(d) {
        transitionBarGraph(d.data);
      })
});

function drawOuterArc(outerArc, data) {


}
// function type(d) {
//   d.population = +d.population;
//   return d;
// }
