var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2;

/* d3 tool tip */
var div = d3.select("#donut-chart").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

var outerColorScale = d3.scale.ordinal()
  .domain(["dem", "rep"])
  .range(["#232066", "#E91D0E"]);

var colorScale = d3.scale.category20();

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

var arcOverInner = d3.svg.arc()
    .startAngle(function(d){ return d.startAngle; })
    .endAngle(function(d){ return d.endAngle; })
    .innerRadius(radius - 90)
    .outerRadius(radius - 32);

var arcOverOuter = d3.svg.arc()
    .startAngle(function(d){ return d.startAngle; })
    .endAngle(function(d){ return d.endAngle; })
    .innerRadius(radius)
    .outerRadius(radius - 30);

var svg2 = d3.select("#donut-chart").append("svg")
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
  var overallTotal = nest[0].total + nest[1].total;

  outerArcs = svg2.selectAll(".outerArc")
      .data(outerPie(nest))
    .enter().append("g")
      .attr("class", "outerArc");

  outerArcs.append("path")
      .attr("d", outerArcRegion)
      .style("fill", function(d, i) { return outerColorScale(parties[i]); })
      .on("mouseover", function(d) {
        d3.select(this)
          .attr("opacity", 0.5)
          .transition()
          .duration(300)
          .attr("d", arcOverOuter);
      })
      .on("mousemove", function(d, i) {
        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html(function() {
          var party;
          switch(d.data.key){
            case "dem":
              party = "Democrats";
              break;
            case "rep":
              party = "Republicans";
              break;
          }
          var percentage = (d.data.total/overallTotal)*100;
          var str = "<div class='left'><b>"+party+"</b></div>"+"<div class='right'>Total Donation: "+ parseInt(d.data.total)
            + "<br>" + percentage.toFixed(1)+"% </br></div>";

            // for (var i = 0; i < d.data.values.length; i++) {
            //   str += "Candiate: " + d.data.values[i]["name"] + ", College Total: " + parseInt(d.data.values[i]["colleges_total"]) + "</br>";
            // }
              return str;
        })
        .style("left", (d3.event.pageX + 12) + "px")
        .style("top", (d3.event.pageY -10) + "px")
        .style("width", "150px");
      })
      .on("mouseout", function(d) {
          d3.select(this)
           .attr("opacity", 1)
           .transition()
           .duration(300)
           .attr("d", outerArcRegion);
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
        d3.select(this)
          .attr("opacity", 0.5)
          .transition()
          .duration(300)
          .attr("d", arcOverInner);
      })
      .on("mousemove", function(d) {
        div.transition()
          .duration(200)
          .style("opacity", .9);
        div.html(function() {
          var str = "Candidate: "+d.data["name"]+"</br>"+"Total Donation: "+parseInt(d.data["colleges_total"]);

          for (var i = 0; i < d.data.jobs.length; i++) {
            // var percentage = (d.data.jobs[i]["total"]/d.data.total)*100;
            str += "<br> Job Type: " + d.data.jobs[i]["title"] + ", Donation: " + parseInt(d.data.jobs[i]["total"]) + "</br>";
          }
            return str;
          })
        .style("left", (d3.event.pageX + 12) + "px")
        .style("top", (d3.event.pageY - 10) + "px")
      })
      .on("mouseout", function(d) {
          d3.select(this)
           .attr("opacity", 1)
           .transition()
           .duration(300)
           .attr("d", innerArcRegion);
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
