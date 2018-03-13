var dataset = [
  { label: "Apple", count: "10"},
  { label: "Blueberry", count: "20"},
  { label: "Pecan", count: "30"},
  { label: "Pumpkin", count: "40"},
  { label: "Lemon", count: "15"},
  { label: "Mathematical", count: "31.4"}
];
 
// Donut chart constants
const donutWidth = 300;
const donutHeight = 300;
const donutRadius = Math.min(donutWidth, donutHeight) / 2;

// SVG constants
const donutSvgWidth = donutWidth + 300;
const donutSvgHeight = donutHeight + 200;
 
// Donut-ness constants
const donutRadDiff = 50;
const padAngle = 0.02;
const cornerRadius = 5;
 
// Label constants
const labelRadius = donutRadius + 25;
//const labelArcDist = 25;
//const hoverArcDist = 2;

// Legend constants
const legendRectSize = 18;
const legendSpacing = 4;
 
let midAngle = d => { return d.startAngle + (d.endAngle - d.startAngle) / 2; };
 
const sum = d3.sum(dataset.map(d => { return d.count; }));
 
var donutColor = d3.scaleOrdinal(d3.schemeCategory10);
 
 // TODO PERCENTAGE?
var donutTip = d3.tip()
  .attr("class", "d3-tip")
  .html(d => {return d.data.label + "<br>" + d.data.count + " pies";})
 
var donutSvg = d3.select("#donut-chart")
  .append("svg")
    .attr("width", donutSvgWidth)
    .attr("height", donutSvgHeight)
  .append("g")
    .attr("transform", "translate(" + (donutSvgWidth / 2) + ", " + (donutSvgHeight / 2) + ")")
  .call(donutTip);
 
  donutSvg.append("g").attr("class", "slices");
  donutSvg.append("g").attr("class", "labels");
  donutSvg.append("g").attr("class", "lines");
 
var arc = d3.arc()
  .innerRadius(donutRadius - donutRadDiff)
  .outerRadius(donutRadius)
  .cornerRadius(cornerRadius);

var labelArc = d3.arc()
  .outerRadius(labelRadius)
  .innerRadius(labelRadius);

/*
var hoverArc = d3.arc()
  .outerRadius(radius + hoverArcDist)
  .innerRadius(radius + hoverArcDist);
*/
 
var pie = d3.pie()
  .value(d => { return d.count; })
  .sort(null)
  .padAngle(padAngle);
 
var path = donutSvg.select(".slices")
  .selectAll("path")
  .data(pie(dataset))
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", d => {
    return donutColor(d.data.label);
  });
 
var labels = donutSvg.select(".labels")
  .selectAll("text")
  .data(pie(dataset))
  .enter()
  .append("text")
  .text(d => {
    return d.data.label + ": " + Math.round(10000 * d.data.count / sum) / 100 + "%";
  })
  .attr("dy", "0.35em")
  .attr("transform", d => {
    var pos = labelArc.centroid(d);
    pos[0] = labelRadius * (midAngle(d) < Math.PI ? 1 : -1);
    return "translate(" + pos + ")";
  })
  .style("text-anchor", d => {
    return (midAngle(d) < Math.PI) ? "start" : "end";
  });

var polylines = donutSvg.select(".lines")
  .selectAll("polyline")
  .data(pie(dataset))
  .enter()
  .append("polyline")
  .attr("points", d => {
    var pos = labelArc.centroid(d);
    pos[0] = (labelRadius - 5) * (midAngle(d) < Math.PI ? 1 : -1);
    return [arc.centroid(d), labelArc.centroid(d), pos];
  })
 
// labels inside chart
/*
  .each((d, i, nodes) => {
    var centroid = arc.centroid(d);
    d3.select(nodes[i])
      .attr("x", centroid[0])
      .attr("y", centroid[1])
      .attr("dy", "0.33em")
      //.text(Math.round(10000 * d.data.count / sum) / 100 + "%");
  })*/

//path.call(tip);


path.on("mouseover", (d, i, nodes) => {
  console.log("mouse on " + d.data.label);
  donutTip.style("left", (d3.event.pageX + 10) + "px")
    .style("top", (d3.event.pageY + 10) + "px")
    .show(d);
    
  // darken donutColor
  var currentColor = d3.hsl(d3.select(nodes[i]).attr("fill"))
  d3.select(nodes[i])
    .attr("fill", d => {
      currentColor.l -= 0.15;
      return currentColor;
    });
})

path.on("mousemove", d => {
  console.log("mouse move");
  donutTip.style("left", (d3.event.pageX + 10) + "px")
    .style("top", (d3.event.pageY + 10) + "px");
})

path.on("mouseout", (d, i, nodes) => {
  console.log("mouse off " + d.data.label);
  donutTip.hide(d);
  d3.select(nodes[i])
    .attr("fill", (d, i) => {
      return donutColor(d.data.label);
    });
})

/*
var legend = svg.selectAll(".legend")
  .data(donutColor.domain())
  .enter()
  .append("g")
  .attr("class", "legend")
  .attr("transform", (d, i) => {
    var height = legendRectSize + legendSpacing;
    var offset = donutHeight * donutColor.domain().length / 2;
    var horiz = -2 * legendRectSize;
    var vert = i * donutHeight - offset;
    return "translate(" + horiz + ", " + vert + ")";
  })

legend.append("rect")
  .attr("width", legendRectSize)
  .attr("height", legendRectSize)
  .style("fill", donutColor)
  .style("stroke", donutColor)

legend.append("text")
  .attr("x", legendRectSize + legendSpacing)
  .attr("y", legendRectSize - legendSpacing)
  .text(d => { return d; });
  */
    

