// run this script once page is ready
$(document).ready(function() {
  // render wooden & bfit facility charts
  d3.csv('/datasets/gym-traffic/heat-chart-data.csv', function(error, data) {
    if (error) throw error;

    // process data
    data.forEach(d => {
      d.day_of_week = parseInt(d.day_of_week);
      d.hour = parseInt(d.hour);
      d.avg_n_people = parseInt(d.avg_n_people);
      d.avg_n_people_rel = Number(d.avg_n_people_rel);
      d.category = parseInt(d.category);
    })

    // render first time
    renderAllFacilityHeatCharts(data)

    // render upon window resize
    $(window).resize(function() {
      renderAllFacilityHeatCharts(data)
    })
  });

  // render comparison charts
  d3.csv('/datasets/gym-traffic/heat-chart-data.csv', function(error, data) {
    renderComparisonCharts(data)
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

  renderFacilityHeatChart(woodenData, '#wooden-heatmap');
  renderFacilityHeatChart(bfitData, '#bfit-heatmap');
}

// render comparison charts
function renderComparisonCharts(data) {
}

// render heat chart of a facility
function renderFacilityHeatChart(data, container, comparison = false) {
  // reset container content
  $(container).html('');

  // determine color of each heat circle
  let colorScale = d3.scaleOrdinal()
    .domain([0, 1, 2, 3, 4, 5])
    .range(['#EBEDEF', '#feedde','#fdbe85','#fd8d3c','#e6550d','#a63603']);

  // filter data to exclude hours from 2 to 4
  data = data.filter(d => {
    return d.hour != 2 & d.hour != 3 & d.hour != 4;
  })

  // store color of each circle
  let colors = data.map(d => {
    return colorScale(d.category);
  });

  // get data to render chart
  let chartData = data.map(d => {
      return {
        day_of_week: d.day_of_week,
        hour: d.hour
      };
    });

  renderHeatChart_(chartData, colors, container);

}

function renderHeatChart_(data, colors, container) {

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
          cHeight = 300 // FIX: use 400 for now, figure out later
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
    .append('g')
    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

  // get current time
  let currentTime = new Date,
      currentHour = currentTime.getHours(),
      currentDayOfWeek = recodeDayOfWeek(currentTime.getDay());

  // render day of week labels vertically
  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // render day of week labels vertically
  let dayLabels = chartG.selectAll(".day-label")
    .data(days)
    .enter()
    .append("text")
    .text(d => d)
    .attr("x", 10)
    .attr("y", (d, i) => {
      return 30 + i * gridHeight
    })
    .style("text-anchor", "middle")
    //.attr("transform", "translate(" + gridWidth * yScaleFactor + ", -6)")
    .attr("class", (d, i) => {
      return i + 1 == currentDayOfWeek ?
          'label day-label now now-label' :
          'label day-label not-now-label';
    })

  // render hour of day labels horizontally
  let times = [
    {label: 'Morning', centerDigit: 8},
    {label: 'Noon', centerDigit: 12},
    {label: 'Evening', centerDigit: 17},
    {label: 'Midnight', centerDigit: 0}
  ];
  let hours = [
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
    {label: '11', digit: 23},
    {label: '12', digit: 0},
    {label: '1', digit: 1}
  ];

  let timeLabelOffsetY = 0,
      hourLabelOffsetY = 18;

  let timeLabels = chartG.selectAll('.time-label')
    .data(times)
    .enter().append('text')
    .text(d => d.label)
    // FIX: center time label above specific hours
    .attr('x', (d, i) => {
      return 100 + i * 120;
    })
    .attr('y', timeLabelOffsetY)
    .style('text-anchor', 'end')
    .attr('class', 'time-label');

  let hourLabels = chartG.selectAll(".hour-label")
    .data(hours)
    .enter().append("text")
    .text(d => d.label)
    .attr("x", (d, i) => {
      return 50 + i * gridWidth
    })
    .attr("y", hourLabelOffsetY)
    .style("text-anchor", "end")
    //.attr("transform", "translate(0, 15)")
    .attr("class", (d, i) => {
      return d.digit == currentHour ? 'label hour-label now now-label' : 'label hour-label not-now-label';
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
      return (hour_index - 1) * gridWidth + 50;
    })
    .attr("cy", d => {
      return (d.day_of_week - 1) * gridHeight + 30;
    })
    .attr('r', circleRadius)
    .attr("class", d => {
      // if (d.category == 0) {
      //   return 'heat-circle closed-border';
      // }
     return (d.hour == currentHour & d.day_of_week == currentDayOfWeek) ?
        'heat-circle now now-border' : 'heat-circle not-now-border';
    })
    .style('fill', (d, i) => {
      return colors[i];
    })

}

// recode day of week from [Sunday = 0, ..., Saturday = 6] to [Monday = 1, ..., Sunday = 7]
function recodeDayOfWeek(day) {
  if (day == 0) {
    day = 7;
  }
  return day;
}
