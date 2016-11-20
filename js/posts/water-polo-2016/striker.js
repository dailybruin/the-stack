var initStriker = function(data) {
  var w = 640, h = 640;
  var sideLength = 100;
  var numBoxes = 9;
  var svg = d3.select("#striker-chart")

  formatData(data, numBoxes);
  console.log(data);

  svg.selectAll("rect")
  .data(data[0].boxes)
  .enter()
  .append("rect")
  .attr("width", sideLength * 2)
  .attr("height", sideLength)
  .attr("x", function(data, index) {
    return (Math.floor(index / 3)) * (sideLength * 2 + 5)
  })
  .attr("y", function(data, index) {
    return (index % 3) * (sideLength + 5)
  })
  .attr("fill", "red");

  svg.selectAll("text")
  .data(data[0].boxes)
  .enter()
  .append("text")
  .attr("x", function(data, index) {
    return (Math.floor(index / 3)) * (sideLength * 2 + 5) + sideLength
  })
  .attr("y", function(data, index) {
    return (index % 3) * (sideLength + 5) + sideLength / 2
  })
  .text(function(data, index) {

  })
}
