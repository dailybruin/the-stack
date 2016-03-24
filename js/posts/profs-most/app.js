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
var mcdevitt = [29, 19, 16, 10, 10, 6, 3, 3, 3];
var sproul = [80, 20];
var almohalwas = [17, 13, 13, 13, 9, 9, 9, 9, 4, 4];
var gould = [50, 14, 9, 9, 9, 5, 5];

var DATA = [
  {
    "name": "smallberg",
    "numbers": smallberg
  },
  {
    "name": "eggert",
    "numbers": eggert
  },
  {
    "name": "mcdevitt",
    "numbers": mcdevitt
  },
  {
    "name": "sproul",
    "numbers": sproul
  }
];

var TREE_DATA = {
  "prof": "mcdevitt",
  "classes": [
    {"name": 1, "number": 29},
    {"name": 2, "number": 19},
    {"name": 3, "number": 16},
    {"name": 4, "number": 10},
    {"name": 5, "number": 10},
    {"name": 6, "number": 6},
    {"name": 7, "number": 6},
    {"name": 8, "number": 3},
    {"name": 9, "number": 3}
  ]
};


var horizontalGap = 0;
var verticalGap = 200;
var maxRectWidth = 400;
var rectHeight = 30;
var centerX = 300;
var firstCenterY = 150;

var maxCircleArea = 10000;

var percentAreaScale = d3.scale.linear().domain([0, 100]).range([0, 1]);
var widthScale = d3.scale.linear().domain([0, 100]).range([0, maxRectWidth]);
var cornerScale = d3.scale.linear().domain([0, 100]).range([2, 30]);
var colorScale = d3.scale.category10();

var cumWidth = 0;
var cumPercentArea = 0;

var g = d3.select("#viz")
    .append("svg")
    .selectAll("g")
    .data(DATA, function(d) { return d.name })
    .enter()
    .append("g")
    .translate(function(d, i) { return [centerX, firstCenterY + i * verticalGap] });

var node = d3.select("#viz")
    .append("div")
    .style("width", 600)
    .style("height", 600)


var circles = g.selectAll("circle")
    .data(function(d) { return d.numbers })
    .enter()
    .append("circle");

// circles.attr("r", function(d, i) {
//     if (i == 0) {
//       cumPercentArea = 0;
//     }
//     cumPercentArea = cumPercentArea + percentAreaScale(d);
//     var radius = Math.sqrt(cumPercentArea * maxCircleArea / Math.PI);
//     return radius;
//   })
//     .attr("cx", 0)
//     .attr("cy", 0)
//     .style("stroke", "1px grey")
//     .style("fill", function(d, i) { return colorScale(i) })
//     .moveToBack()

// var rects = g.selectAll("rect")
//     .data(function(d) { return d.numbers })
//     .enter()
//     .append("rect");
//
// rects.attr("x", function(d, i) {
//     if (i === 0) {
//       cumWidth = widthScale(d) + horizontalGap;
//       return 0;
//     } else {
//       var oldPos = cumWidth;
//       cumWidth = cumWidth + widthScale(d) + horizontalGap;
//       return oldPos;
//     }
//   })
//     .attr("y", 0)
//     .attr("height", rectHeight)
//     .attr("width", function(d, i) { return widthScale(d) })
//     .style("fill", function(d, i) { return colorScale(i) })

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
