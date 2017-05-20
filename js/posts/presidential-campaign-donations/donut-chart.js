var width = 500,
    height = 500,
    radius = Math.min(width, height) / 2;

/* d3 tool tip */
var donutTip1 = d3.select("#donut-chart").append("div")
  .attr("class", "horizontal-tip")
  .style("opacity", 0);

var donutTip2 = d3.select("#donut-chart").append("div")
  .attr("class", "vertical-tip")
  .style("opacity", 0);

var outerColorScale = d3.scale.ordinal()
  .domain(["dem", "rep"])
  .range(["#1f77b4", "#E91D0E"]);

var colorList = [
  "#5f99ad",
  "#69caed",
  "#44a2d4",
  "#9ecade",
  "#fd6ca0",
  "#e74586",
  "#c85e7a",
  "#b41e55",
  "#d71f63",
  "#e39ba8",
  "#a13653",
  "#ea7c93",
  "#b07881",
  "#8d4a57",
  "#f83772",
  "#e34e6d",
  "#cc224d"
];

var colorScale = d3.scale.ordinal()
  .range(colorList);

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
      // this.style.opacity = "0.6";
      this.style.cursor = "pointer";

      var p = d.data.key == "dem" ? "Democratic" : "Republican";
      var h = '<div class="left"><p><b style="border-bottom: 2px solid ' + colorScale(i) + ';">' + p.toUpperCase() + '</b></p><p style="width:100%; background-color: yellow;"><b>TOTAL: </b>$' + numberWithCommas(Math.round(d.data.total)) + '</p></div>';

      var perc = (d.data.total/overallTotal)*100;
      h += '<div class="right">' + perc.toFixed(1) + '%</div>';

      donutTip1.style("display","block");
      donutTip1.transition()
        .duration(200)
        .style("opacity", .9);
      donutTip1.html(h)
        .style("left", (d3.event.pageX + 12) + "px")
        .style("top", (d3.event.pageY -10) + "px")
    })
    .on("mouseout", function(d) {
        d3.select(this).transition()
          .duration(300)
          .attr("opacity", 1)
          .attr("d", outerArcRegion);
        donutTip1.style("display", "none");
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
      .on("mousemove", function(d, i) {
        this.style.cursor = "pointer"
        ;
        donutTip2.style("display", "block");
        donutTip2.transition()
          .duration(200)
          .style("opacity", .9);

        var h = '<b style="width: 100%; border-bottom: 2px solid ' + colorScale(i) + ';">' + d.data["name"].toUpperCase() + '</b><br><br><p style="width:100%; background-color: yellow;"><b>TOTAL: </b>$' + numberWithCommas(Math.round(d.data["colleges_total"])) + '</p><br>';

        for (var j = 0; j < d.data.jobs.length; j++) {
          h += '<b>' + (d.data.jobs[j]["title"] + "</b>: $" + numberWithCommas(Math.round(d.data.jobs[j]["total"])) + "</br>");
        }

        donutTip2.html(h)
        .style("left", (d3.event.pageX + 12) + "px")
        .style("top", (d3.event.pageY - 10) + "px")
      })
      .on("mouseout", function(d) {
        d3.select(this)
         .attr("opacity", 1)
         .transition()
         .duration(300)
         .attr("d", innerArcRegion);
        donutTip2.transition()
          .style("opacity", 0);
        donutTip2.style("display", "none");
      })
      // .on("click", function(d) {
      //   transitionBarGraph(d.data);
      // })
});
