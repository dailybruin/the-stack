function initBarChartDropdown(data) {
    var subcategories = data.reduce(function(acc, item) {
        item.subcategories.forEach(function(s) {
            if (acc.indexOf(s.name) == -1) {
                acc.push(s.name);
            }
        })
        return acc;
    }, [])

    var dropdown = document.getElementById('barChartDropdown');

    subcategories.forEach(function(s) {
        var option = document.createElement("option");
        option.value = s;
        option.text = formatDepartment(s);
        dropdown.appendChild(option);
    })
}

function initBarChart(data) {
    // Dropdown function - invokes update
    var select = document.getElementById('barChartDropdown');
    select.addEventListener("change", function() {
        updateData(select.value);
    });

    // initialize tooltip
    var tooltip = d3.select("#bar-chart-wrapper").append("div")
                      .attr("class", "tooltip")
                      .style('display', 'none');

    var color = d3.scaleOrdinal(d3.schemeCategory20c);

    // Dimensions of canvas/graph
    var margin = {top: 30, right: 20, bottom: 70, left: 70},
        width = 650 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;

    var svg = d3.select("#bar-chart-wrapper")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

    var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var x = d3.scaleBand().rangeRound([0, width]).padding(0.2);
    var y = d3.scaleLinear().rangeRound([height - 10, 0]);

    // Set domain for x and y variables
    x.domain(data.map(function(d) {return d.year}));

    y.domain(d3.extent(data, function(d) {
      return parseInt(d.total);
    }));

    let yAxis = function(y) {
      return d3.axisLeft(y).ticks(5).tickFormat(d3.format('.2s'))
    }

    let xAxis = function(x) {
      return d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")).tickSizeOuter(0)
    }

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "x-axis")
        .call(xAxis(x))
        .select(".domain");
    g.append("text")
      .attr("transform",
            "translate(" + (width/2) + " ," +
                           (height + margin.top + 10) + ")")
      .style("text-anchor", "middle")
      .text("Fiscal Year");

    g.append("g")
        .attr("class", "y-axis")
        .call(yAxis(y))
        .select(".domain")

    g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr("x",0 - height/2)
        .attr("dy", "1em")
        .style("text-anchor", "top")
        .text("Funding ($)");

    var bar = g.selectAll("rect")
      .data(data);

    g.selectAll('line.y')
      .data(y.ticks(5))
      .enter().append("line")
      .attr("class", "y-line")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", y)
      .attr("y2", y)
      .style("stroke", "#ccc");

    // let prevX = undefined;

    bar.enter()
      .append("rect")
      .attr("x", function(d) { return x(d.year) })
      .attr("y", function(d) { return y(d.total) })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.total) })
      .attr("fill", function(d,i) { return color(i); })
      .on("mouseover", function(d) {
        tooltip.style('display', 'inline');
        d3.select(this).style('opacity', 0.7);
      })
      .on("mousemove", function(d) {
        tooltip.html(fillTooltip(d))
          .style("left", (d3.event.pageX + 20) + "px")
          .style("top", function() {
            return (d3.event.pageY - (this.children.length / 2) * 15) + "px";
          });
      })
      .on("mouseout", function(d) {
        // prevX = d3.event.pageX;
        tooltip.style("display", "none");
        d3.select(this).style('opacity', 1);
      });

    // svg.on("mousemove", function(d) {
    //   // if
    // });

    function fillTooltip(d) {
      var select = document.getElementById('barChartDropdown');
      var h = '';
      if (select.value == '0') {
          h += '<p><b>All Research</b> (' + d.year + ')<span style="float: right; background: yellow;">$' + numberWithCommas(d.total) + '</span></p><hr />';

          if (d.year == '2015' || d.year == '2016') {
            h += '<p>Public data breaking down the funding by departments was not available for this year</p>';
          } else {
            var subcategories = d.subcategories;
            for (var k = 0; k < subcategories.length; k++)
                h += '<p><b>' + formatDepartment(subcategories[k].name) + ':</b> $' + numberWithCommas(subcategories[k].total) + '</p>';
          }
      }
      // subcategory selected
      else {
          var cat = d.subcategories.find(x => x.name === select.value);
          h += '<p><b>' + formatDepartment(select.value) + '</b> (' + d.year + ')</p><hr />';

          if (d.year == '2017') {
            h += '<p>Public data breaking down the funding by departments was not available for this year</p>';

          } else {
            var departments = cat.departments
            for (var k = 0; k < departments.length; k++)
                h += '<p><b>' + formatDepartment(departments[k].name) + ':</b> $' + numberWithCommas(departments[k].total) + '</p>';
          }

          h += '<p style="background: yellow;"><b>Total:</b> $' + numberWithCommas(cat.total) + '</p>';
      }
      return h;
    }

    function updateData(val) {

        // change domain of y axis
        y.domain(d3.extent(data, function (d) {
            if (val == '0')
                return d.total;
            return d.subcategories.find(x => x.name ===  val).total || 0;
        }));

        x.domain( data.map(d => d.year).filter(x => {
          if (val != '0') { return (x != '2015' && x != '2016') }
          else return true;
        }));

        // update y axis
        svg.select('.y-axis')
            .transition()
            .duration(400)
            .ease(d3.easePolyInOut)
            .call(yAxis(y));

        g.selectAll('.y-line')
          .data(y.ticks(5))
          .transition()
          .duration(400)
          .ease(d3.easePolyInOut)
          .attr("y1", y)
          .attr("y2", y)

        svg.select('.x-axis')
            .transition()
            .duration(400)
            .ease(d3.easePolyInOut)
            .call(xAxis(x));

        // modify rect height
        svg.selectAll('rect')
            // .exit().remove()
            .transition()
            .duration(400)
            .ease(d3.easePolyInOut)
            .attr("x", function(d) { return x(d.year) })
            .attr("width", x.bandwidth())
            .style("display", function(d) {
              if (val != '0' && (d.year == '2015' || d.year == '2016')) {
                return "none";
              }
              return "block";

            })

            .attr('y', function(d) {
                    if (val == '0')
                        return y(d.total);
                    let total = d.subcategories.find(x => x.name ===  val).total || 0;
                    return y(total);
                })
            .attr('height', function(d) {
                    if (val == '0')
                        return height - y(d.total);
                    let total = d.subcategories.find(x => x.name ===  val).total || 0;
                    return height - y(total);
                });
    }
}
