var sorted = false;

const schools_used = [
    'David Geffen School of Medicine',
    'Fielding School of Public Health',
    'Luskin School of Public Affairs',
    'School of Education and Information Studies',
    'School of Engineering and Applied Science',
    'School of Theater, Film and Television',
    'School of the Arts and Architecture',
    'The College of Letters and Science',
  ]

var radialSelections = {
  selected_quarter: 'all',
  selected_div: 'all',
  selected_campus: 'all',
  selected_school: 'all',
  selected_filter: 'avg_lecture_length_day',
};

var scatterSelections = {
  selected_quarter: 'all',
  selected_div: 'all',
  selected_campus: 'all',
  selected_school: 'all',
  selected_filter1: 'avg_lecture_size',
  selected_filter2: 'avg_lecture_length_week',
};

// depending on filter, render chart description and axis accordingly
var filter_map = {
  avg_lecture_size: 'Lecture Size',
  avg_lecture_length_day: 'Lecture Length (Minutes/Day)',
  avg_lecture_length_week: 'Lecture Length (Minutes/Week)',
  avg_num_lectures_week: 'Number of Lectures',
};

// depending on filter, alter the max bounds of the axis
var dynamic_bounds = {
  avg_lecture_size: 400,
  avg_lecture_length_day: 250,
  avg_lecture_length_week: 400,
  avg_num_lectures_week: 5,
};

window.onAllChange = function() {
  document.getElementById('checkboxTwoInput').checked = false;
  sorted = false;
  var svg = d3.selectAll('svg');
  svg.remove();
  reload();
};

window.onRadialChange = function(field, value) {
  radialSelections[field] = value.toString();
  onAllChange();
};

window.onScatterChange = function(field, value) {
  scatterSelections[field] = value;
  onAllChange();
};

function calculateValue(d, chart) {
  var selected_quarter = radialSelections['selected_quarter'];
  var selected_div = radialSelections['selected_div'];
  var selected_campus = radialSelections['selected_campus'];
  var selected_school = radialSelections['selected_school'];
  var selected_filter = radialSelections['selected_filter'];

  quarters =
    selected_quarter === 'all'
      ? ['Fall', 'Winter', 'Spring']
      : [selected_quarter];
  divs = selected_div === 'all' ? ['Upper', 'Lower'] : [selected_div];
  campuses = selected_campus === 'all' ? ['North', 'South'] : [selected_campus];
  schools =
    selected_school === 'all'
      ? [
          'David Geffen School of Medicine',
          'Fielding School of Public Health',
          'Luskin School of Public Affairs',
          'School of Education and Information Studies',
          'School of Engineering and Applied Science',
          'School of Theater, Film and Television',
          'School of the Arts and Architecture',
          'The College of Letters and Science',
        ]
      : [selected_school];

  var output = [];
  quarters.forEach(quarter => {
    divs.forEach(div => {
      campuses.forEach(campus => {
        schools.forEach(school => {
          if (d.NorthOrSouth == campus && d.School == school) {
            if (d[quarter][div][selected_filter] !== 0) {
              output.push(d[quarter][div][selected_filter]);
            }
          }
        });
      });
    });
  });

  if (output.length !== 0)
    var average = output.reduce((a, b) => a + b, 0) / output.length;
  else var average = 0;
  return average;
}

function calculateAverage(d) {
  var selected_quarter = scatterSelections['selected_quarter'];
  var selected_div = scatterSelections['selected_div'];
  var selected_campus = scatterSelections['selected_campus'];
  var selected_school = scatterSelections['selected_school'];
  var selected_filter1 = scatterSelections['selected_filter1'];
  var selected_filter2 = scatterSelections['selected_filter2'];

  quarters =
    selected_quarter === 'all'
      ? ['Fall', 'Winter', 'Spring']
      : [selected_quarter];
  divs = selected_div === 'all' ? ['Upper', 'Lower'] : [selected_div];
  campuses = selected_campus === 'all' ? ['North', 'South'] : [selected_campus];
  schools =
    selected_school === 'all'
      ? [
          'David Geffen School of Medicine',
          'Fielding School of Public Health',
          'Luskin School of Public Affairs',
          'School of Education and Information Studies',
          'School of Engineering and Applied Science',
          'School of Theater, Film and Television',
          'School of the Arts and Architecture',
          'The College of Letters and Science',
        ]
      : [selected_school];

  var output1 = [];
  var output2 = [];
  quarters.forEach(quarter => {
    divs.forEach(div => {
      campuses.forEach(campus => {
        schools.forEach(school => {
          if (d.NorthOrSouth == campus && d.School == school) {
            if (d[quarter][div][selected_filter1] !== 0) {
              output1.push(d[quarter][div][selected_filter1]);
            }
            if (d[quarter][div][selected_filter2] !== 0) {
              output2.push(d[quarter][div][selected_filter2]);
            }
            //console.log(d[quarter][div][selected_filter1])
          }
        });
      });
    });
  });

  if (output1.length !== 0)
    var average1 = output1.reduce((a, b) => a + b, 0) / output1.length;
  else var average1 = 0;

  if (output2.length !== 0)
    var average2 = output2.reduce((a, b) => a + b, 0) / output2.length;
  else var average2 = 0;

  return [[selected_filter1, average1], [selected_filter2, average2]];
}

function filterScatter(d, filter) {
  var selected_quarter = scatterSelections['selected_quarter'];
  var selected_div = scatterSelections['selected_div'];
  var selected_campus = scatterSelections['selected_campus'];
  var selected_school = scatterSelections['selected_school'];
  var selected_filter;
  if (filter == 1) {
    selected_filter = scatterSelections['selected_filter1'];
  }
  if (filter == 2) {
    selected_filter = scatterSelections['selected_filter2'];
  }

  quarters =
    selected_quarter === 'all'
      ? ['Fall', 'Winter', 'Spring']
      : [selected_quarter];
  divs = selected_div === 'all' ? ['Upper', 'Lower'] : [selected_div];
  campuses = selected_campus === 'all' ? ['North', 'South'] : [selected_campus];
  schools =
    selected_school === 'all'
      ? [
          'David Geffen School of Medicine',
          'Fielding School of Public Health',
          'Life Sciences',
          'Luskin School of Public Affairs',
          'School of Education and Information Studies',
          'School of Engineering and Applied Science',
          'School of Theater, Film and Television',
          'School of the Arts and Architecture',
          'The College of Letters and Science',
        ]
      : [selected_school];

  var output = [];
  quarters.forEach(quarter => {
    divs.forEach(div => {
      campuses.forEach(campus => {
        schools.forEach(school => {
          if (d.NorthOrSouth == campus && d.School == school) {
            if (d[quarter][div][selected_filter] !== 0) {
              output.push(d[quarter][div][selected_filter]);
            }
          }
        });
      });
    });
  });

  if (output.length !== 0)
    var average = output.reduce((a, b) => a + b, 0) / output.length;
  else var average = 0;
  return average;
}

function compare(a, b) {
  return d3.ascending(a.major, b.major);
}

function hashCode(str){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash<<7)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function color(name) {
  var colors = ['#C9A0DC', '#BEE64B', '#EDED44', '#50BFE6', '#F79A8F', '#AAF0D1', '#FFCC33', '#BF8FCC', '#00CCCC', '#DEA681']
  var num=Math.abs(hashCode(name));
  num=num%colors.length;
  return (colors[num])
}

function reload() {
  var width = 750,
    height = 750,
    barHeight = height / 2 - 80;

  var formatNumber = d3.format('s');

  // function hashCode(str) {
  //   return str.split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  // }

  var svg = d3
    .select('#radial-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('preserveAspectRatio', 'xMidYMin')
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  d3.json('/datasets/how-long-are-lectures/FINAL_DATA.json', function(
    error,
    data
  ) {
    if (sorted) {
      data = data.sort((a, b) => calculateValue(b) - calculateValue(a));
    } else {
      data = data.sort(compare);
    }

    data = data.filter((d, index) => calculateValue(d) !== 0);
    barCharts(data);

    var dummy = {
      Winter: {
        Upper: {
          avg_lecture_size: 0,
          avg_lecture_length_day: 0,
          avg_lecture_length_week: 0,
          avg_num_lectures_week: 0,
        },
        Lower: {
          avg_lecture_size: 0,
          avg_lecture_length_day: 0,
          avg_lecture_length_week: 0,
          avg_num_lectures_week: 0,
        },
      },
      Spring: {
        Upper: {
          avg_lecture_size: 0,
          avg_lecture_length_day: 0,
          avg_lecture_length_week: 0,
          avg_num_lectures_week: 0,
        },
        Lower: {
          avg_lecture_size: 0,
          avg_lecture_length_day: 0,
          avg_lecture_length_week: 0,
          avg_num_lectures_week: 0,
        },
      },
      major: '',
      Fall: {
        Upper: {
          avg_lecture_size: 0,
          avg_lecture_length_day: 0,
          avg_lecture_length_week: 0,
          avg_num_lectures_week: 0,
        },
        Lower: {
          avg_lecture_size: 0,
          avg_lecture_length_day: 0,
          avg_lecture_length_week: 0,
          avg_num_lectures_week: 0,
        },
      },
    };
    data.push(dummy);

    var extent = d3.extent(data, function(d) {
      return calculateValue(d);
    });

    var barScale = d3.scale
      .linear()
      .domain(extent)
      .range([0, barHeight]);

    var keys = data.map(function(d, i) {
      return d.major;
    });
    var numBars = keys.length;

    var x = d3.scale
      .linear()
      .domain(extent)
      .range([0, -barHeight]);

    var xAxis = d3.svg
      .axis()
      .scale(x)
      .orient('left')
      .ticks(3)
      .tickFormat(formatNumber);

    var circles = svg
      .selectAll('circle')
      .data(x.ticks(3))
      .enter()
      .append('circle')
      .attr('r', function(d) {
        return barScale(d);
      })
      .style('fill', 'none')
      .style('stroke', '#00a5ff')
      .style('stroke-dasharray', '2,2')
      .style('stroke-width', '.5px');

    var arc = d3.svg.arc();

    var segments = svg
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .each(function(d, i) {
        d.innerRadius = 0;
        d.outerRadius = barScale(+calculateValue(d));
        d.startAngle = i * 2 * Math.PI / numBars;
        d.endAngle = (i + 1) * 2 * Math.PI / numBars;
      })
      .style('fill', function(d) {
        // console.log(color(d.major))
        return color(d.major);
      })
      .attr('d', arc);

    svg
      .append('circle')
      .attr('r', barHeight)
      .classed('outer', true)
      .style('fill', 'none')
      .style('stroke', 'black')
      .style('stroke-width', '1.5px');

    var lines = svg
      .selectAll('line')
      .data(keys)
      .enter()
      .append('line')
      .attr('y2', -barHeight - 20)
      .style('stroke', 'black')
      .style('stroke-width', '.5px')
      .attr('transform', function(d, i) {
        return 'rotate(' + i * 360 / numBars + ')';
      });

    svg
      .append('g')
      .attr('class', 'x axis radial')
      .call(xAxis);

    var labelRadius = barHeight * 1.025;

    // Labels
    var labels = svg.append('g').classed('labels', true);

    // labels.append("def")
    //     .append("path")
    //     .attr("id", "label-path")
    //     .attr("d", "m0 " + -labelRadius + " a" + labelRadius + " " + labelRadius + " 0 1,1 -0.01 0");

    labels
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .each(function(d) {
        d.angle = (d.startAngle + d.endAngle) / 2;
      })
      .each(function(d, i) {
        d.rot_angle = d.angle * 180 / Math.PI - 90;
      })
      .style('text-anchor', function(d) {
        return d.angle > Math.PI ? 'end' : null;
      })
      .style('font-weight', 'bold')
      .style('fill', function(d, i) {
        return '#3e3e3e';
      })
      .attr('class', 'text_lab')
      .attr('dy', '.35em')
      .attr('rot_angle', function(d, i) {
        return d.angle * 180 / Math.PI - 90;
      })
      .attr('transform', function(d) {
        return (
          'rotate(' +
          d.rot_angle +
          ')' +
          'translate(' +
          (d.innerRadius + barHeight * 1.025) +
          ')' +
          (d.angle > Math.PI ? 'rotate(180)' : '')
        );
      })
      .text(function(d) {
        return d.major.toUpperCase();
      });

    d3.select('.checkboxTwo').on('click', function(e) {
      d3.event.preventDefault();
      sorted = !sorted;
      change(sorted);
      d3.select('input').property('checked', sorted);
    });

    // scatterplot
    d3.json('/datasets/how-long-are-lectures/FINAL_DATA.json', function(
      error,
      data
    ) {
      if (error) return;
      makeVis(data);
    });

    function change(sorted) {
      if (sorted) {
        labels.selectAll('.text_lab').sort(function(a, b) {
          return calculateValue(b) - calculateValue(a);
        });
        segments.sort(function(a, b) {
          return calculateValue(b) - calculateValue(a);
        });
      } else {
        labels.selectAll('.text_lab').sort(function(a, b) {
          return d3.ascending(a.major, b.major);
        });
        segments.sort(function(a, b) {
          return d3.ascending(a.major, b.major);
        });
      }

      segments
        .transition()
        .duration(2000)
        .delay(100)
        .attrTween('d', function(d, index) {
          var i = d3.interpolate(d.startAngle, index * 2 * Math.PI / numBars);
          var u = d3.interpolate(
            d.endAngle,
            (index + 1) * 2 * Math.PI / numBars
          );
          return function(t) {
            d.endAngle = u(t);
            d.startAngle = i(t);
            return arc(d, index);
          };
        });

      labels
        .selectAll('text')
        .transition()
        .duration(2000)
        .delay(100)
        .each(function(d, i) {
          d.rot_angle =
            i * (360 / numBars) - (180 / 2 + (90 - 360 / numBars)) / 2;
        })
        .attr('transform', function(d) {
          return (
            'rotate(' +
            d.rot_angle +
            ')' +
            'translate(' +
            (d.innerRadius + barHeight * 1.025) +
            ')' +
            (d.angle > Math.PI ? 'rotate(180)' : '')
          );
        });
      // .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
      // labels.selectAll("text").exit().remove()

      setTimeout(function() {
        var svg = d3.selectAll('svg');
        svg.remove();
        reload();
      }, 2000);
    }
  });
}

function makeVis(data) {
  var x_filter = scatterSelections['selected_filter1'];
  var y_filter = scatterSelections['selected_filter2'];

  var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    width = 750 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  var canvas = d3
    .select('#scatterplot')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Define scales
  var colorScale = d3.scale.category10();
  var xScale = d3.scale
    .linear()
    .domain([0, dynamic_bounds[x_filter]]) // TODO: set a better bound through the max function
    .range([0, width]);
  var yScale = d3.scale
    .linear()
    .domain([0, dynamic_bounds[y_filter]]) // TODO: set a better bound through the max function
    .range([height, 0]); // y-axis is upper left downwards

  // Define axes
  var xAxis = d3.svg
    .axis()
    .scale(xScale)
    .orient('bottom');
  var yAxis = d3.svg
    .axis()
    .scale(yScale)
    .orient('left');

  // Add x-axis to canvas
  canvas
    .append('g')
    .attr('class', 'x axis')
    // move axis to bottom of canvas
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
    .append('text')
    .attr('class', 'label')
    .attr('x', width) // x-offset from xAxis
    .attr('y', -6) // y-offset from xAxis
    .style('text-anchor', 'end') // right-justify
    .text(filter_map[x_filter]);
  //.text('Lecture Size');

  // Add y-axis to canvas
  canvas
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .append('text')
    .attr('class', 'label')
    .attr('transform', 'rotate(-90)') // rotate text
    .attr('y', 15) // y-offset from yAxis
    .style('text-anchor', 'end')
    .text(filter_map[y_filter]);
  //.text('Lecture Length');

  // Add tooltip to scatterplot div, visible on mouseover
  var tooltip = d3
    .select('#scatterplot')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  // Tooltip mouseover event handler
  var tipMouseover = function(d) {
    var arr = calculateAverage(d);
    var color = colorScale(d.School);
    var x_label =
      'Average ' + filter_map[arr[0][0]] + ': ' + Math.round(arr[0][1]);
    var y_label =
      'Average ' + filter_map[arr[1][0]] + ': ' + Math.round(arr[1][1]);
    var html =
      "<div class='tooltip-box' style='background-color: " +
      color +
      ";'> Department: " +
      d.major +
      '<br/>' +
      x_label +
      '<br/>' +
      y_label +
      '</div>';
    tooltip
      .html(html)
      .style('left', d3.event.pageX + 15 + 'px')
      .style('top', d3.event.pageY - 28 + 'px')
      .transition()
      .duration(200) // 200ms
      .style('opacity', 0.9);
  };

  // Tooltip mouseout event handler
  var tipMouseout = function(d) {
    tooltip
      .transition()
      .duration(300)
      .style('opacity', 0);
  };

  // Add data points
  canvas
    .selectAll('dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('r', 5.5) // radius size
    .attr('cx', function(d) {
      // remove 0s
      var valx = filterScatter(d, 1);
      return (
        (750 - margin.left - margin.right) / dynamic_bounds[x_filter] * valx
      );
      //x_filter != "avg_num_lectures_week" ? 960 / (dynamic_bounds[x_filter] + margin.right) * valx : 960 / 5 * valx - margin.right / 2;
    }) // 960px wide, but adjust data point properly to the corresponding x-axis value
    .attr('cy', function(d) {
      var valy = filterScatter(d, 2);
      return (
        (600 - margin.top - margin.bottom) /
        dynamic_bounds[y_filter] *
        (dynamic_bounds[y_filter] - valy)
      );
    }) // 600px wide, adjust data point to corresponding y-axis value
    .style('fill', function(d) {
      if (schools_used.includes(d.School)) {
        return colorScale(d.School);
      }
    })
    .style('display', function(d) {
      var valx = filterScatter(d, 1);
      var valy = filterScatter(d, 2);
      return Math.round(valx) == 0 || Math.round(valy) == 0 ? 'none' : null;
    })
    .on('mouseover', tipMouseover)
    .on('mouseout', tipMouseout);

  var legend = canvas.selectAll('.legend')
    .data(colorScale.domain())
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
      var height = 12;
      var offset = height * colorScale.domain().length / 2;
      var horiz = 750;
      var vert = i * height - offset + 75;
      return 'translate(' + horiz + ',' + vert + ')';
    });
  legend.append('rect')
    .attr('width', 8)
    .attr('height', 8)
    .style('fill', colorScale)
    .style('stroke', colorScale);
  legend.append('text')
    .attr('x', 12)
    .attr('y', 8)
    .text(function(d) {
      if (schools_used.includes(d)) {
        return d;
      }
    });
}

function barCharts(data) {
  var data_new = data.slice()
  data_new_bottom = data_new.sort((a, b) => calculateValue(a) - calculateValue(b));
  data_new_bottom = data_new_bottom.slice(0,19)
  width = 800
  height = 500

  var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
    .range([height, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>Frequency:</strong> <span style='color:steelblue'>" + calculateValue(d) + "</span>";
    })

  var svg = d3.select("#barBottom").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")

  svg.call(tip);

  x.domain(data_new_bottom.map(function(d) { return (d.major); }));
  y.domain([0, d3.max(data_new_bottom, function(d) { return (calculateValue(d)); })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(filter_map[radialSelections['selected_filter']]);

  svg.selectAll(".barBottom")
      .data(data_new_bottom)
    .enter().append("rect")
      .attr("fill", "#004e79")
      .attr("class", "barBottom")
      .attr("x", function(d) { return x(d.major); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(calculateValue(d)); })
      .attr("height", function(d) { return height - y(calculateValue(d)); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

  data_new_top = data_new.sort((a, b) => calculateValue(b) - calculateValue(a));
  data_new = data_new.slice(0,19)
  width = 800
  height = 500

  var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
    .range([height, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>Frequency:</strong> <span style='color:steelblue'>" + calculateValue(d) + "</span>";
    })

  var svg = d3.select("#barTop").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")

  svg.call(tip);

  x.domain(data_new.map(function(d) { return (d.major); }));
  y.domain([0, d3.max(data_new, function(d) { return (calculateValue(d)); })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(filter_map[radialSelections['selected_filter']]);

  svg.selectAll(".barTop")
      .data(data_new)
    .enter().append("rect")
      .attr("fill", "#004e79")
      .attr("class", "barTop")
      .attr("x", function(d) { return x(d.major); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(calculateValue(d)); })
      .attr("height", function(d) { return height - y(calculateValue(d)); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

  function type(d) {
    calculateValue(d) = +calculateValue(d);
    return d;
  }
}

reload();
document.getElementById('checkboxTwoInput').checked = false;
