d3.csv("/datasets/profs-difficulty/profs-d3.csv", function(data) {

  var SvgHeight = 200,
      SvgWidth = 500,
      xMargin = 50,
      xAxisExtent = [xMargin, SvgWidth-xMargin],
      titleY = 30,
      axisY = SvgHeight / 2,
      circleRadius = 8,
      circlePadding = 1.5

  // get all department names
  var dpmtNames = data.map(function(d) { return d.Subject });
  dpmtNames = d3.set(dpmtNames.sort()).values();

  // convert strings to integers
  data.forEach(function(d) {
    d.AvgPercentile = +d.AvgPercentile;
    d.TotClasses = +d.TotClasses;
    d.TotStudents = +d.TotStudents;
    d.MinPercentile = 5 // for now
    d.MaxPercentile = 50 // for now
  });

  // add department selection
  d3.select("#pick-dpmt")
    .selectAll("option")
    .data(dpmtNames)
    .enter()
    .append("option")
    .attr("value", function(d) { return d })
    .html(function(d) { return d })

  // get department selection
  $("#pick-dpmt").change(function() {
      var selectedDpmt = $(this).val();
      pickDpmt(selectedDpmt);
  }).change();

  function pickDpmt(dpmt) {

    var newData = data.filter(function(d) { return d.Subject === dpmt }),
        gradesExtent = d3.extent(newData, function(d) { return d.AvgPercentile }),
        totClassesExtent = d3.extent(newData, function(d) { return d.TotClasses; }),
        xScale = d3.scaleLinear().domain(gradesExtent).range(xAxisExtent)

    var xAxis = d3.axisBottom(xScale)
        .tickSizeOuter(0)

    // var groups = newData.map(function(d) { return d.title });
    // groups = d3.set(groups.sort()).values();

    var nestedData = d3.nest()
        .key(function(d) { return d.title }).sortKeys(function(a, b) { return a.TotStudents > b.TotStudents })
        .sortValues(function(a, b) { return a.AvgPercentile < b.AvgPercentile })
        .entries(newData);

    nestedData.forEach(function(d, i) {
      d.ClassAvg = 30 + Math.random() * 30 * (Math.random() < 0.5 ? 1 : -1);
    })

    var svgData = d3.select('#dotchart')
      .selectAll('svg.svg-classes')
      .data(nestedData, function(d, i) { return Math.random(); })

    var svgGroups = svgData.enter()
        .append('div')
        .attr('class', 'svg-container')
        .append('svg')
        .attr('class', 'svg-classes')
        .attr('height', SvgHeight)
        .attr('width', SvgWidth);

    // class title
    svgGroups.append('text')
        .attr('x', SvgWidth / 4)
        .attr('y', titleY)
        .attr('class', 'group-label')
        .text(function(d, i) { return d.key; })

    // horizontal axis of each class
    // svgGroups.append('g')
    //   .attr('class', 'x-axis')
    //   .call(xAxis)

    var classSvg = d3.select('#dotchart')
      .selectAll('svg.svg-classes')

    var profData = svgGroups.selectAll("g.prof-g")
        .data(function(d) { return d.values });

    function simulateClass(index) {
      var simulation = d3.forceSimulation(nestedData[index].values)
        .force("x", d3.forceX(function(d) { return xScale(d.AvgPercentile); }).strength(1))
        .force("y", d3.forceY(axisY).strength(0.15))
        .force("collide", d3.forceCollide(circleRadius+circlePadding))
        .stop();

      var nTicks = 30;
      for (var i = 0; i < nTicks; ++i) {
        simulation.tick();
      }
    }

    nestedData.forEach(function(d, i) { return simulateClass(i); })

    var cell = profData.enter()
      .append("g")
      .attr('class', 'prof-g')
      .each(function(d, i) { console.log(d);} )

    cell.append("circle")
      .attr('class', function(d, i) {
          if (d.TotClasses < 3) return 'prof-circle';
          else if (d.TotClasses >= 3 & d.TotClasses <= 6) return 'med-prof-circle';
          else return 'frequent-prof-circle';
        })
      .attr("r", circleRadius)
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .on('mouseover', mouseOverCircle)
      .on('mouseleave', mouseLeaveCircle)

    // var circles = profData
    //   .enter()
    //   .append('circle')
    //   .attr('class', function(d, i) {
    //     if (d.TotClasses >= 5) {
    //       return 'frequent-prof-circle';
    //     } else {
    //       return 'prof-circle';
    //     }
    //   })
    //   .attr('r', function(d, i) { return circleRadius; })
    //   .attr('cx', function(d, i) { return d.x; })
    //   .attr('cy', function(d, i) { return d.y; })
    //   .on("mouseover", function(d, i) { return mouseOverCircle(d); })
    //   .on("mouseleave", function(d, i) { return mouseLeaveCircle(d); })

    // var labels = svgGroups.selectAll(".prof-label")
    //   .data(function(d) { return d.values })
    //   .enter()
    //   .append('text')
    //   .attr('class', 'prof-label')
    //   .attr('text-anchor', 'middle')
    //   .attr('x', function(d, i) { return d.x; })
    //   .attr('y', function(d, i) { return d.y - 50; })
    //   .text(function(d, i) { if (d.TotClasses >= 5) return d.Instructor; })

    var tooltip = d3.select('body')
      .append('div')
      .style('position','absolute')
      .style('padding','0 10px')
      .style('opacity',0)
      .attr('class','tooltip')

    // var classAvgLineHeight = 60;
    // var classAvgLines = svgData.append('path')
    //   .attr('d', function(d) { return 'M' + [xScale(d.ClassAvg), axisY - 30] +
    //       'L' + [xScale(d.ClassAvg), axisY + 80 + classAvgLineHeight] })
    //   // .attr("stroke-dasharray", '5, 5')
    //   .attr('class', 'class-line')

    function mouseOverCircle(d) {
      //return; // for now
      tooltip
        .transition()
        .style('opacity', .9)
        .style('background', 'lightsteelblue')
      tooltip
        .html( d.Instructor + ": " + d.AvgPercentile)
        .style('left',(d3.event.pageX - 35) + 'px')
        .style('top', (d3.event.pageY - 30) + 'px')
    }

    function mouseLeaveCircle(d) {
      //return; // for now
      tooltip
        .transition()
        .style('opacity', 0)
    }

    svgData.exit().remove()
  }

  // function getCircleHeight(nth) {
  //   var circlePadding = 0.3;
  //   if (nth < 1) return;
  //   var even = (nth % 2 === 0);
  //   var direction = (even == 1) ? -1 : 1;
  //   var pos = even === 1 ? (Math.round(nth / 2)) : (Math.round(nth / 3));
  //   return axisY + direction * pos * circleRadius * (2 + circlePadding);
  // }

});


// function getInitials(fullName) {
//   var firstNameInitial = fullName.split(", ")[1] === undefined ? "" : fullName.split(", ")[1].split("")[0];
//   var lastNameInitial = fullName.split("")[0]
//   return firstNameInitial + lastNameInitial;
// }


// ========================================================================
// enter update exit pattern ==============================================
// d3.select("#viz-test").append("svg").attr("width", 500).attr("height", 100)
//
// function update(data) {
//   var g = d3.select("#viz-test svg").selectAll("g")
//   .data(data, function(d) { return d; })
//
//   g.enter()
//     .append("g")
//     .translate(function(d) { return [d * 50 + 60, 80]; })
//
//   g.append("circle")
//     .style("fill", "indianred")
//     .attr("r", 8)
//     .attr("cx", 0)
//     .attr("cy", 0)
//     .style("opacity", 0)
//     .transition()
//     .duration(300)
//     .style("opacity", 0.8)
//
//   g.exit().transition().duration(300).style("opacity", 0).remove()
// }
//
// var data =  [5, 6, 7, 8, 9, 10].map(function(d) { return d * Math.random() });
// update(data);
// setInterval(function() {
//   var data =  [5, 6, 7, 8, 9, 10].map(function(d) { return d * Math.random() });
//   update(data);
// }, 2000);
