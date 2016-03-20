// utility: re-render circle & move it to front (https://gist.github.com/trtg/3922684)
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function() {
    return this.each(function() {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
};

var many = [35, 25, 20, 15, 5];
var few = [70, 20, 10];
var inBetween = [50, 30, 10, 10];
var one = [92, 8];
var smallberg = [57, 43];
var eggert = [35, 30, 25, 10];


var DATA = [
  {
    "name": "smallberg",
    "numbers": smallberg
  },
  {
    "name": "eggert",
    "numbers": eggert
  }
];

var verticalGap = 200;
var maxCircleRadius = 60;
var centerX = 300;
var firstCenterY = 150;

var radiusScale = d3.scale.linear().domain([0, 100]).range([0, maxCircleRadius]);
var colorScale = d3.scale.category10();

var cumRadius = 0;

for (var i = 0; i < DATA.length; i++) {
  var radius = [];
  DATA[i].numbers.map(function(d, i) {
    radius.push(radiusScale(d));
  });
  DATA[i].radius = radius;
}

var g = d3.select("#viz")
    .append("svg")
    .selectAll("g")
    .data(DATA, function(d) { return d.name })
    .enter()
    .append("g")
    .translate(function(d, i) { return [centerX, firstCenterY + i * verticalGap] });

var circles = g.selectAll("circle")
    .data(function(d) { return d.numbers })
    .enter()
    .append("circle");

circles.attr("r", function(d, i) {
      if (i == 0) {
        cumRadius = 0;
      }
      cumRadius = cumRadius + radiusScale(d);
      return cumRadius;
    })
    .attr("cx", 0)
    .attr("cy", 0)
    .style("stroke", "1px grey")
    .style("fill", function(d, i) { return colorScale(i) })
    .moveToBack()
    .on("mouseover", function(d, i) { return mouseOver(d, i) })
    .on("mouseleave", function(d, i) { return mouseLeave(d, i) })

g.append("text")
  .text(function(d) { return d.name })
  .attr("x", -200)
  .attr("y", 0)

var mouseOver = function(d, i) {
  console.log(d)
  console.log("mouseover");
  // d3.selectAll("g").selectAll("circle")
  //   .filter(function(p, j) { return i === j })
  //   .classed("selected-circle", true)
  //   .style("opacity", 1)
  //   .style("stroke", "2px black")
}

var mouseLeave = function(d, i) {
  // circles.classed("selected-circle", false)
  //   .style("opacity", 0.6)
  //   .style("stroke", "1px grey")
}
