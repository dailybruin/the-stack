// run script once page is loaded
$(document).ready(function() {
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
    renderHeatCharts(data)

    // render upon window resize
    $(window).resize(function() {
      renderHeatCharts(data)
    })
  });
})

// render wooden and bfit heat charts
function renderHeatCharts(data) {
  let woodenData = data.filter(d => d.facility == 'wooden');
  let bfitData = data.filter(d => d.facility == 'bfit');

  renderHeatChart(woodenData, '#wooden-heatmap');
  renderHeatChart(bfitData, '#bfit-heatmap');

    renderHeatChart_(woodenData, '#bfit-heatmap', woodenData.map(d => {
      return d.category;
    }))
}

// render heat chart of a facility
function renderHeatChart(data, container, comparison = false) {
  // reset container content
  $(container).html('');

  // margins
  let margins = {left: 20, right: 20, top: 20, bottom: 20};

  // get dimensions of container and determine dimensions of chart
  let containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight(),
      chartWidth = containerWidth - margins.left - margins.right,
          cHeight = 300 // FIX: use 400 for now, figure out later
      chartHeight = cHeight - margins.top - margins.bottom;

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

  // recode day of week so that week starts on Monday (= 1) rather than Sunday (= 1)
  function recodeDayOfWeek(day) {
    if (day == 0) {
      day = 7;
    }
    return day;
  }

  // get current time
  let currentTime = new Date,
      currentHour = currentTime.getHours(),
      currentDayOfWeek = recodeDayOfWeek(currentTime.getDay());

  // render day of week labels vertically
  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

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
  let hours = [
    {label: '5 AM', digit: 5, index: 1},
    {label: '6', digit: 6, index: 2},
    {label: '7', digit: 7, index: 3},
    {label: '8', digit: 8, index: 4},
    {label: '9', digit: 9, index: 5},
    {label: '10', digit: 10, index: 6},
    {label: '11', digit: 11, index: 7},
    {label: 'Noon', digit: 12, index: 8},
    {label: '1 PM', digit: 13, index: 9},
    {label: '2', digit: 14, index: 10},
    {label: '3', digit: 15, index: 11},
    {label: '4', digit: 16, index: 12},
    {label: '5', digit: 17, index: 13},
    {label: '6', digit: 18, index: 14},
    {label: '7', digit: 19, index: 15},
    {label: '8', digit: 20, index: 16},
    {label: '9', digit: 21, index: 17},
    {label: '10', digit: 22, index: 18},
    {label: '11', digit: 23, index: 19},
    {label: 'Midnight', digit: 0, index: 20},
    {label: '1 AM', digit: 1, index: 21}
  ];

  let hourLabels = chartG.selectAll(".hour-label")
    .data(hours)
    .enter().append("text")
    .text(d => d.digit)
    .attr("x", (d, i) => {
      return 50 + i * gridWidth
    })
    .attr("y", 5)
    .style("text-anchor", "end")
    //.attr("transform", "translate(0, 15)")
    .attr("class", (d, i) => {
      return d.digit == currentHour ? 'label hour-label now now-label' : 'label hour-label not-now-label';
    });

    // filter data to exclude hours from 2 to 4
    data = data.filter(d => {
      return d.hour != 2 & d.hour != 3 & d.hour != 4;
    })

    // render heat circles
    let colorScale = d3.scaleOrdinal()
      .domain([0, 1, 2, 3, 4, 5])
      .range(['#EBEDEF', '#feedde','#fdbe85','#fd8d3c','#e6550d','#a63603']);

    let circles = chartG.selectAll(".heat-circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => {
      let hour_index = -1;
      hours.forEach(hour => {
        if (hour.digit == d.hour) {
          hour_index = hour.index;
        }
      })
      return (hour_index - 1) * gridWidth + 50;
    })
    .attr("cy", d => {
      return (d.day_of_week - 1) * gridHeight + 30;
    })
    .attr('r', circleRadius)
    .attr("class", d => {
      if (d.category == 0) {
        return 'heat-circle closed-border';
      }
     return (d.hour == currentHour & d.day_of_week == currentDayOfWeek) ?
        'heat-circle now now-border' : 'heat-circle not-now-border';
    })
    .style('fill', d => {
      return colorScale(+d.category);
    })

}

function renderHeatChart_(data, container, colors) {
}
