d3.csv("/datasets/profs-difficulty/profs-d3.csv", function(data) {

  var xRange = [50, 600],
      circleRadius = 8,
      y = 200,
      height = 300,
      width = 800,
      padding = 2; // separation between circles

  var dpmtNames = data.map(function(d) { return d.Subject });
  dpmtNames = d3.set(dpmtNames.sort()).values();

  // convert strings to integers
  data.forEach(function(d) {
    d.AvgPercentile = +d.AvgPercentile;
    d.TotClasses = +d.TotClasses;
    d.TotStudents = +d.TotStudents;
  });

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
    var newData = data.filter(function(d) { return d.Subject === dpmt }),
        gradesExtent = d3.extent(newData, function(d) { return d.AvgPercentile }),
        totClassesExtent = d3.extent(newData, function(d) { return d.TotClasses; }),
        xScale = d3.scale.linear().domain(gradesExtent).range(xRange)

    // set initial positions
    newData.forEach(function(d, i) {
      d.x = xScale(d.AvgPercentile);
      d.y = y;
      d.cx = xScale(d.AvgPercentile);
      d.cy = y;
      d.radius = circleRadius;
    })

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(4)
        .outerTickSize(2)

    var groups = newData.map(function(d) { return d.title });
    groups = d3.set(groups.sort()).values();

    var nestedData = d3.nest()
        .key(function(d) { return d.title }).sortKeys(function(a, b) { return a.TotStudents > b.TotStudents })
        .sortValues(function(a, b) { return a.AvgPercentile < b.AvgPercentile })
        .entries(newData);
    console.log(nestedData);

      var force = d3.layout.force()
      .nodes(newData)
      .size([width, height])
      .charge(-1)
      .gravity(0)
      .chargeDistance(3)
      .on("tick", tick)
      .start()

    var svgData = d3.select("#viz-container")
      .selectAll("svg.svg-classes")
      .data(nestedData, function(d, i) { return Math.random(); })

    var svgGroups = svgData.enter()
        .append("svg")
        .attr("class", "svg-classes")
        .attr("height", height)
        .attr("width", width);

    svgData.append("g")
      .translate([0, y + circleRadius * 1.5 ])
      .attr("class", "axis")
      .call(xAxis)

    svgData.append("text")
        .attr("x", width / 3)
        .attr("y", 80)
        .attr("class", "group-label")
        .text(function(d, i) { return d.key; })

    var profData = svgGroups.selectAll("circle")
        .data(function(d) { return d.values });

    var circles = profData
      .enter()
      .append("circle")
      .attr("class", function(d, i) {
        if (d.TotClasses >= 5) {
          return "frequent-prof-circle";
        } else {
          return "prof-circle";
        }
      })
      .attr("r", function(d, i) { return circleRadius; })
      .attr("cx", function(d, i) { return d.cx; })
      .attr("cy", function(d, i) { return d.cy; })
      .on("mouseover", function(d, i) { return mouseOverCircle(d); })
      .on("mouseleave", function(d, i) { return mouseLeaveCircle(d); })


    function tick(e) {
      circles
        .each(moveCircle(0.4 * e.alpha))
        .each(collide(0.5))
        .attr("cx", function(d, i) { return d.x })
        .attr("cy", function(d, i) { return d.y })
    }

    function moveCircle(alpha) {
      return function(d) {
        d.x += (d.cx - d.x) * alpha;
        d.y += (d.cy - d.y) * alpha;
      }
    }

    function collide(alpha) {
      var quadtree = d3.geom.quadtree(newData);
      return function(d) {
        var r = d.radius * 1.3 + padding,
            nx1 = d.x - r,
            nx2 = d.x + r,
            ny1 = d.y - r,
            ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
                y = d.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = d.radius * 1.3;
            if (l < r) {
              l = (l - r) / l * alpha
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }

    var tooltip = d3.select('body')
      .append('div')
      .style('position','absolute')
      .style('padding','0 10px')
      .style('opacity',0)
      .attr('class','tooltip')

    function mouseOverCircle(d) {
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
      tooltip
        .transition()
        .style('opacity', 0)
    }

    svgData.exit().remove()
  }

});


function getInitials(fullName) {
  var firstNameInitial = fullName.split(", ")[1] === undefined ? "" : fullName.split(", ")[1].split("")[0];
  var lastNameInitial = fullName.split("")[0]
  return firstNameInitial + lastNameInitial;
}

// test collision detection ====================================================


// test enter update exit pattern ==============================================
d3.select("#viz-test").append("svg").attr("width", 500).attr("height", 100)

function update(data) {
  var g = d3.select("#viz-test svg").selectAll("g")
  .data(data, function(d) { return d; })

  g.enter()
    .append("g")
    .translate(function(d) { return [d * 50 + 60, 80]; })

  g.append("circle")
    .style("fill", "indianred")
    .attr("r", 8)
    .attr("cx", 0)
    .attr("cy", 0)
    .style("opacity", 0)
    .transition()
    .duration(300)
    .style("opacity", 0.8)

  g.exit().transition().duration(300).style("opacity", 0).remove()
}

var data =  [5, 6, 7, 8, 9, 10].map(function(d) { return d * Math.random() });
update(data);
setInterval(function() {
  var data =  [5, 6, 7, 8, 9, 10].map(function(d) { return d * Math.random() });
  update(data);
}, 2000);
