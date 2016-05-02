d3.csv("/datasets/profs-difficulty/profs-d3.csv", function(data) {

  var SvgHeight = 300,
      SvgWidth = 700,
      xAxisExtent = [100, 650],
      axisY = SvgHeight / 2,
      circleRadius = 8

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

    // create 18 intervals
    var xIntervals = _.range(xAxisExtent[0], xAxisExtent[1], 30)

    var newData = data.filter(function(d) { return d.Subject === dpmt }),
        gradesExtent = d3.extent(newData, function(d) { return d.AvgPercentile }),
        totClassesExtent = d3.extent(newData, function(d) { return d.TotClasses; }),
        xScale = d3.scale.quantize().domain(gradesExtent).range(xIntervals),
        colorScale = d3.scale.linear().domain(gradesExtent).range(['#B56F1F', '#3E782E'])
          .interpolate(d3.interpolateHcl)

    var axisValues = _.range(xAxisExtent[0], xAxisExtent[1], 120)
                       .map(function(d) {
                         var interval = xScale.invertExtent(d);
                         var mid = Math.round((interval[0] + interval[1]) / 2);
                         return mid;
                       });

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .tickValues(axisValues)
        .outerTickSize(0)

    var groups = newData.map(function(d) { return d.title });
    groups = d3.set(groups.sort()).values();

    var nestedData = d3.nest()
        .key(function(d) { return d.title }).sortKeys(function(a, b) { return a.TotStudents > b.TotStudents })
        .sortValues(function(a, b) { return a.AvgPercentile < b.AvgPercentile })
        .entries(newData);

    nestedData.forEach(function(d, i) {
      d.ClassAvg = 30 + Math.random() * 30 * (Math.random() < 0.5 ? 1 : -1);
      var bins = {}
      d.values.forEach(function(p, j) {
        p.x = xScale(p.AvgPercentile);
        if (bins[xScale.invertExtent(xScale(p.AvgPercentile))] === undefined) {
          bins[xScale.invertExtent(xScale(p.AvgPercentile))] = 1;
        } else {
          bins[xScale.invertExtent(xScale(p.AvgPercentile))] ++;
        }
        p.y = getCircleHeight(bins[xScale.invertExtent(xScale(p.AvgPercentile))])
      })
    })

    var svgData = d3.select('#dotchart')
      .selectAll('svg.svg-classes')
      .data(nestedData, function(d, i) { return Math.random(); })

    var svgGroups = svgData.enter()
        .append('svg')
        .attr('class', 'svg-classes')
        .attr('height', SvgHeight)
        .attr('width', SvgWidth);

    svgData.append('g')
      .translate([0, axisY + 80])
      .attr('class', 'x-axis')
      .call(xAxis)

    svgData.append('text')
        .attr('x', SvgWidth / 4)
        .attr('y', 80)
        .attr('class', 'group-label')
        .text(function(d, i) { return d.key; })

    var profData = svgGroups.selectAll("circle")
        .data(function(d) { return d.values });

    var circles = profData
      .enter()
      .append('circle')
      .attr('class', function(d, i) {
        if (d.TotClasses >= 5) {
          return 'frequent-prof-circle';
        } else {
          return 'prof-circle';
        }
      })
      .attr('r', function(d, i) { return circleRadius; })
      .attr('cx', function(d, i) { return d.x; })
      .attr('cy', function(d, i) { return d.y; })
      .on("mouseover", function(d, i) { return mouseOverCircle(d); })
      .on("mouseleave", function(d, i) { return mouseLeaveCircle(d); })

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

    var classAvgLineHeight = 60;
    var classAvgLines = svgData.append('path')
      .attr('d', function(d) { return 'M' + [xScale(d.ClassAvg), axisY - 30] +
          'L' + [xScale(d.ClassAvg), axisY + 80 + classAvgLineHeight] })
      // .attr("stroke-dasharray", '5, 5')
      .attr('class', 'class-line')

    function mouseOverCircle(d) {
      return; // for now
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
      return; // for now
      tooltip
        .transition()
        .style('opacity', 0)
    }

    svgData.exit().remove()
  }

  function getCircleHeight(nth) {
    var circlePadding = 0.3;
    if (nth < 1) return;
    var even = (nth % 2 === 0);
    var direction = (even == 1) ? -1 : 1;
    var pos = even === 1 ? (Math.round(nth / 2)) : (Math.round(nth / 3));
    return axisY + direction * pos * circleRadius * (2 + circlePadding);
  }

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
