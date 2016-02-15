
d3.csv("/datasets/grades-ge/ge-all.csv", stripChart);


function stripChart(allGrades) {

  var l = [];
  allGrades.map(function(d, i) {
          var c = count(l, Math.round(d.MedianA*100))
          d.count = c
          d.index = i;
          l.push(Math.round(d.MedianA*100))
      })

  filteredGrades = allGrades; // global variable
  grades = allGrades // global variable
  pickedTheme = "0" // global variable

  gradesExtent = d3.extent(allGrades, function(d) { return d.MedianA });
  gradesScale = d3.scale.linear().domain([0, 1]).range([900, 100]);
  colorScale = d3.scale.linear().domain(gradesExtent).range(["#D57728", "#28D577"])
          .interpolate(d3.interpolateHcl)
  totClassExtent = d3.extent(allGrades, function(d) { return d.TotClasses })
  totClassScale = d3.scale.pow().exponent(0.5).domain(totClassExtent).range([0, -70])


  $("select#pickCategory")
      .change(function() {
        var pickedCategory = $("select#pickCategory option:selected").val()
        switch(pickedCategory) {
          case "0":
            filteredGrades = allGrades;
            pickTheme(pickedTheme)
            break
          case "1":
            filteredGrades = allGrades.filter(function(d) { return d.GE === "Arts and Humanities-Literary and Cultural Analysis" })
            pickTheme(pickedTheme)
            break
          case "2":
            filteredGrades = allGrades.filter(function(d) { return d.GE === "Arts and Humanities-Philosophical and Linguistic Analysis" })
            pickTheme(pickedTheme)
            break
          case "3":
            filteredGrades = allGrades.filter(function(d) { return d.GE === "Arts and Humanities-Visual and Performance Arts Analysis and Practice" })
            pickTheme(pickedTheme)
            break
          case "4":
            filteredGrades = allGrades.filter(function(d) { return d.GE === "Society and Culture-Historical Analysis" })
            pickTheme(pickedTheme)
            break
          case "5":
            filteredGrades = allGrades.filter(function(d) { return d.GE === "Society and Culture-Social Analysis" })
            pickTheme(pickedTheme)
            break
          case "6":
            filteredGrades = allGrades.filter(function(d) { return d.GE === "Scientific Inquiry-Life Sciences" })
            pickTheme(pickedTheme)
            break
          case "7":
            filteredGrades = allGrades.filter(function(d) { return d.GE === "Scientific Inquiry-Physical Sciences" })
            pickTheme(pickedTheme)
            break
        }
    })

  var xAxis = d3.svg.axis()
      .scale(gradesScale)
      .orient("bottom")
      .tickValues([0, 0.25, 0.5, 0.75, 1])
      .outerTickSize(0.5)
      .tickPadding(10)
      .tickFormat(d3.format("%"))


  d3.select("svg#stripchart").append("g")
    .attr("transform", "translate(0, 320) rotate(21.5)")
    .attr("class", "axis")
    .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-21.5)")


  function pickTheme(theme) {
    switch (theme) {
      case "0":
        grades = filteredGrades;
        break;
      case "1":
        grades = filteredGrades.filter(function(d) { return d.TotClasses >= 5 & d.MedianA >= 0.6 });
        break;
      case "2":
        grades = filteredGrades.filter(function(d) { return d.TotClasses >= 5 & d.MedianA <= 0.3 });
        break;
      case "3":
        grades = filteredGrades.filter(function(d) { return d.ClassSize <= 40 & d.MedianA >= 0.6 });
        break;
      case "4":
        grades = filteredGrades.filter(function(d) { return d.ClassSize >= 100 & d.MedianA >= 0.6 });
        break;
      case "5":
        grades = filteredGrades.filter(function(d) { return d.ClassSize >= 200 });
    }
    updateChart(grades);
  }

  $("button").click(function() {
      pickedTheme = $(this).attr("value")
      pickTheme(pickedTheme)
  })

  // this renders initially once only
  updateChart(allGrades);
}


// update selection based on which combination of GE category and theme user chooses
function updateChart(grades) {

  var circles = d3.select("svg#stripchart")
    .selectAll("circle")
    .data(grades, function(d) { return d.index })


  circles.enter()
    .append("circle")
    .style("opacity", 0)
    .transition()
    .duration(200)
    .style("opacity", 1)
    .attr("r", 5)
    .attr("cx", function(d, i) { return gradesScale(d.MedianA) })
    .attr("cy", function(d, i) {
            return 300 + totClassScale(d.TotClasses) +  gradesScale(d.MedianA)*0.4 // d.count*13
      })
    .style("fill", function(d) { return colorScale(d.MedianA) })


    circles.on("mouseover", function(d, i) { return mouseOver(d, i) })
    .on("mouseleave", function(d, i) { return mouseLeave(d, i) })

  var classNameInfo = d3.select("svg#stripchart")
          .append("text")
          .attr("x", 150)
          .attr("y", 50)
  var classGradeInfo = d3.select("svg#stripchart")
          .append("text")
          .attr("x", 150)
          .attr("y", 100)
  var classOtherInfo = d3.select("svg#stripchart")
          .append("text")
          .attr("x", 150)
          .attr("y", 150)

  function mouseOver(d, i) {
    classNameInfo.text(d.Subject + " " + d.CatalogNo + " : " + d.Name);
    classGradeInfo.text("Typically, " + Math.round(d.MedianA*100) +
                    " percent of students get an A+, A or A- in this class.");
    classOtherInfo.text("This class has been taught " + d.TotClasses + (d.TotClasses > 1 ? " times" : " time") +
                    " since Fall 2012. A typical class has " + d.ClassSize + " students.")


    circles.filter(function(p, j) { return i === j })
        .attr("r", 7)
        .style("fill", "#3255A4")
  }

  function mouseLeave(d, i) {
    classNameInfo.text("");
    classGradeInfo.text("");
    classOtherInfo.text("");

    circles.attr("r", 5)
           .style("fill", function(d) { return colorScale(d.MedianA) })
  }

  // remove and transition out of existing selection to prep for new selection
  circles.exit().transition().style("opacity", 0).duration(200).remove();

}


// utility function to count number of targets in an array
function count(array, target) {
  var count = 0;
  for(var i = 0; i < array.length; ++i){
     if(array[i] == target)
         count++;
  }
  return count
}
