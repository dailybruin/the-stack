d3.csv("/datasets/profs-difficulty/profs-d3.csv", function(data) {

  var xRange = [50, 400];

  var dpmtNames = data.map(function(d) { return d.Subject });
  dpmtNames = d3.set(dpmtNames.sort()).values();

  d3.select("#pick-dpmt")
    .selectAll("option")
    .data(dpmtNames)
    .enter()
    .append("option")
    .attr("value", function(d) { return d })
    .html(function(d) { return d })

  $("#pick-dpmt").change(function() {
      var selectedDpmt = $(this).val();
      pickDpmt(selectedDpmt);
  }).change();

  function pickDpmt(dpmt) {
    var newData = data.filter(function(d) { return d.Subject === dpmt });
    var gradesExtent = d3.extent(newData, function(d) { return d.ProfGrade }); console.log(gradesExtent);
    var xScale = d3.scale.linear().domain(gradesExtent).range(xRange);

    var svg = d3.select("#viz")
      .selectAll("svg")
      .data(newData, function(d) { return d.Group })

    svg.enter()
      .append("svg");

    svg.exit()
      .remove()


    // var circles = svg.selectAll("circle")
    //   .data(newData, function(d) { return d.Instructor })
    //
    // circles.enter()
    //     .append("circle")
    //     .attr("class", "prof-circle")
    //     .attr("cx", function(d, i) { return xScale(d.ProfGrade) })
    //     .attr("cy", function(d, i) { return 60 })
    //     .attr("r", 6)
  }

});
