// run script once page is ready
$(document).ready(function() {

  // store current time in global namespace
  window.currentTime_ = getCurrentDayAndHour();

  // render wooden & bfit facility charts
  d3.csv('/datasets/gym-traffic/facility-heat-chart-data.csv', function(error, data) {
    if (error)  throw error;

    // process data
    data = processFacilityData(data);

    // render charts when page is loaded for the first time
    renderAllFacilityHeatCharts(data);

    // render upon window resize
    $(window).resize(function() {
      renderAllFacilityHeatCharts(data);
    })
  });

  // render comparison charts
  d3.csv('/datasets/gym-traffic/comparison-chart-data.csv', function(error, data) {
    if (error)  throw error;

    // process data
    data = processComparisonData(data);

    // render chart when page is loaded for the first time
    renderComparisonChart(data);

    // render upon window resize
    $(window).resize(function() {
      renderComparisonChart(data);
    })
  })

      // FIX: render opening traffic text
      d3.select('#wooden-traffic-text')
        .text("very busy")
        .attr('class', 'wooden traffic-text')

      d3.select('#bfit-traffic-text')
        .text("moderately busy")
        .attr('class', 'bfit traffic-text')

})

// render wooden and bfit heat charts
function renderAllFacilityHeatCharts(data) {
  let woodenData = data.filter(d => d.facility == 'wooden');
  let bfitData = data.filter(d => d.facility == 'bfit');

  renderFacilityHeatChart(woodenData, '#wooden-heatmap', 'wooden');
  renderFacilityHeatChart(bfitData, '#bfit-heatmap', 'bfit');
}


// render comparison charts
function renderComparisonChart(data) {

  let blueColors = ['#008FD5', '#9FD5EF']; // [darker, less dark] http://htmlcolorcodes.com/color-picker/
  let yellowColors = ['ffb81c', '#FFE4AA']; // [darker, less dark]
  let neutralColor = ['#CFDDCC']; // http://www.colorhexa.com/80a478
  let closedColor = ['#EBEDEF'];

  // filter data to exclude hours from 2 to 4
  data = data.filter(d => {
    return d.hour != 2 & d.hour != 3 & d.hour != 4;
  })

  // get color of each data point
  let colorScale = d3.scaleOrdinal().domain([0, 1, 2, 3, 4, 5])
    .range(closedColor.concat(yellowColors).concat(neutralColor).concat(blueColors.reverse()));

  let colors = data.map(d => {
    return colorScale(d.category);
  })

  renderHeatChart(data, colors, '#comparison-heatmap');

}


// prepare data & render heat chart of a facility
function renderFacilityHeatChart(data, container, facility) {

  // reset container content
  $(container).html('');

  // determine color of each heat circle
  let sequentialColors = ['#feedde','#fdbe85','#fd8d3c','#d94701']; // http://colorbrewer2.org/#type=sequential&scheme=Oranges&n=4
  let closedColor = ['lightgrey'];//['#EBEDEF'];
  let colorScale = d3.scaleOrdinal()
    .domain([0, 1, 2, 3, 4, 5])
    .range(closedColor.concat(sequentialColors));

  // filter data to exclude hours from 2 to 4
  data = data.filter(d => {
    return d.hour != 2 & d.hour != 3 & d.hour != 4;
  })

  // store color of each circle
  let colors = data.map(d => {
    return colorScale(d.category);
  });

  // render chart
  renderHeatChart(data, colors, container);

}


function renderHeatChart(data, colors, container) {

  // validate data input
  let validDataLength = 21 * 7;
  if (data.length != validDataLength| colors.length != validDataLength) {
    console.log('Check data length');
  }
  data.forEach(d => {
    if (d.hour == null | d.day_of_week == null) {
      console.log('Check data type');
    }
  })

  // margins applied to svg container
  let margins = {left: 20, right: 20, top: 20, bottom: 20};

  // get dimensions of container and determine dimensions of chart
  let containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight(),
      chartWidth = containerWidth - margins.left - margins.right,
          cHeight = 250; // FIX: use 400 for now, figure out later
      chartHeight = cHeight - margins.top - margins.bottom;

  // determine size of circles / grids
  let circleRadius = 8,
      circlePaddings = {vertical: 5, horizontal: 5},
      gridHeight = circleRadius * 2 + circlePaddings.vertical,
      gridWidth = circleRadius * 2 + circlePaddings.horizontal;

  // render SVG container and g element using container dimensions
  let chartG = d3.select(container)
    .append('svg')
    .attr('width', chartWidth + margins.left + margins.right)
    .attr('height', chartHeight + margins.top + margins.bottom)
    .attr('class', 'heat-chart-svg-container')
    .append('g')
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

  // render day of week labels vertically
  let days = ['Mon to Thur', 'Fri', 'Sat', 'Sun'];

  // render day of week labels vertically
  let dayLabels = chartG.selectAll(".day-label")
    .data(days)
    .enter()
    .append("text")
    .text(d => d)
    .attr("x", 15)
    .attr("y", (d, i) => {
      return 30 + i * gridHeight
    })
    .style("text-anchor", "middle")
    //.attr("transform", "translate(" + gridWidth * yScaleFactor + ", -6)")
    .attr("class", (d, i) => {
      return i + 1 == window.currentTime_.day_of_week ?
          'label day-label now now-label' :
          'label day-label not-now-label';
    })

  // render hour of day labels horizontally
  let times = [
    {label: 'AM', centerDigit: 6},
    {label: 'Noon', centerDigit: 12},
    {label: 'PM', centerDigit: 18}
  ],

  hours = [
    {label: '0', digit: 0},
    {label: '1', digit: 1},
    {label: '5', digit: 5},
    {label: '6', digit: 6},
    {label: '7', digit: 7},
    {label: '8', digit: 8},
    {label: '9', digit: 9},
    {label: '10', digit: 10},
    {label: '11', digit: 11},
    {label: '12', digit: 12},
    {label: '1', digit: 13},
    {label: '2', digit: 14},
    {label: '3', digit: 15},
    {label: '4', digit: 16},
    {label: '5', digit: 17},
    {label: '6', digit: 18},
    {label: '7', digit: 19},
    {label: '8', digit: 20},
    {label: '9', digit: 21},
    {label: '10', digit: 22},
    {label: '11', digit: 23}
  ];

  let timeLabelOffsetY = 0,
      hourLabelOffsetY = 18;

  let timeLabels = chartG.selectAll('.time-label')
    .data(times)
    .enter().append('text')
    .text(d => d.label)
    // FIX: center time label above specific hours
    .attr('x', (d, i) => {
      return 100 + i * 150;
    })
    .attr('y', timeLabelOffsetY)
    .style('text-anchor', 'end')
    .attr('class', 'time-label');

  let hourLabels = chartG.selectAll(".hour-label")
    .data(hours)
    .enter().append("text")
    .text(d => d.label)
    .attr("x", (d, i) => {
      return 70 + i * gridWidth
    })
    .attr("y", hourLabelOffsetY)
    .style("text-anchor", "end")
    //.attr("transform", "translate(0, 15)")
    .attr("class", (d, i) => {
      return d.digit == window.currentTime_.hour ? 'label hour-label now now-label' : 'label hour-label not-now-label';
    });

    // render heat circles
    let circles = chartG.selectAll(".heat-circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => {
      let hour_index = -1;
      hours.forEach((hour, i) => {
        if (hour.digit == d.hour) {
          hour_index = i + 1;
        }
      })
      return (hour_index - 1) * gridWidth + 70;
    })
    .attr("cy", (d, i) => {
      return getHourIndexY(d.day_of_week) * gridHeight + 30;
    })
    .attr('r', circleRadius)
    .attr("class", d => {
     return (d.hour == window.currentTime_.hour & d.day_of_week == window.currentTime_.day_of_week) ?
        'heat-circle now now-border' : 'heat-circle not-now-border';
    })
    .style('fill', (d, i) => {
      return colors[i];
    })
    .on('mouseover', showHeatchartTooltip)
    .on('mouseout', hideHeatchartTooltip)

}


// display mouseover tooltip
function showHeatchartTooltip(d) {
  console.log('mouseover');
}


// hide mouseover tooltip
function hideHeatchartTooltip(d) {
  console.log('mouseout');
}


// recode day of week from [Sunday = 0, ..., Saturday = 6] to [Monday = 1, ..., Sunday = 7]
function recodeDayOfWeek(day) {
  if (day == 0) {
    day = 7;
  }
  return day;
}

// process data upon loading
function processFacilityData(data) {
  data.forEach(d => {
    d.day_of_week = parseInt(d.day_of_week);
    d.hour = parseInt(d.hour);
    d.avg_n_people = parseInt(d.avg_n_people);
    d.avg_n_people_rel = Number(d.avg_n_people_rel);
    d.category = parseInt(d.category);
  });
  return data;
}

function processComparisonData(data) {
  data.forEach(d => {
    d.day_of_week = parseInt(d.day_of_week);
    d.hour = parseInt(d.hour);
    d.wooden_n_people = parseInt(d.wooden_n_people);
    d.bfit_n_people = parseInt(d.bfit_n_people);
    d.traffic_ratio = Number(d.traffic_ratio);
    d.category = parseInt(d.category);
  });
  return data;
}

// get hour's position
function getHourIndexY(hour) {
  switch (hour) {
    case 1:
      return 0;
    case 5:
      return 1;
    case 6:
      return 2;
    case 7:
      return 3;
  }
}

// get current day and hour
function getCurrentDayAndHour() {
  let currentTime = new Date;
  return {
    hour: currentTime.getHours(),
    day_of_week: recodeDayOfWeek(currentTime.getDay())
  };
}
