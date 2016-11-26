$(document).ready(function() {
  // store current time in global namespace
  window.currentTime_ = getCurrentDayAndHour();

  // render wooden & bfit facility charts
  d3.csv('/datasets/gym-traffic/facility-heatchart-data.csv', function(error, data) {
    if (error)  throw error;

    // process data
    data = processFacilityData(data);

    // render traffic text
    renderTrafficText(data);

    // render charts
    renderBothFacilityHeatCharts(data);

    $(window).resize(function() {
      renderBothFacilityHeatCharts(data);
    });
  });

  // render comparison chart
  d3.csv('/datasets/gym-traffic/comparison-chart-data.csv', function(error, data) {
    if (error)  throw error;

    // process data
    data = processComparisonData(data);

    let container = '#comparison-heatmap';

    // render chart
    renderComparisonChart(data, container);

    $(window).resize(function() {
      renderComparisonChart(data, container);
    });
  });
});

function renderTrafficText(data) {
  let facilityData = filterFacilityData(data);

  let woodenTraffic = null;
  facilityData.wooden.forEach(d => {
    if (d.hour == currentTime_.hour & d.day_of_week == currentTime_.day_of_week) {
      woodenTraffic = d.category;
    }
  });

  let bfitTraffic = null;
  facilityData.bfit.forEach(d => {
    if (d.hour == currentTime_.hour & d.day_of_week == currentTime_.day_of_week) {
      bfitTraffic = d.category;
    }
  });

  d3.select('#wooden-traffic-text')
    .text(labelTrafficCategory(woodenTraffic))
    .attr('class', 'italic')

  d3.select('#bfit-traffic-text')
    .text(labelTrafficCategory(bfitTraffic))
    .attr('class', 'italic')
}

// render wooden and bfit heat charts
function renderBothFacilityHeatCharts(data) {
  let facilityData = filterFacilityData(data);

  let sequentialColors = ['#feedde','#fdbe85','#fd8d3c','#d94701'], // http://colorbrewer2.org/#type=sequential&scheme=Oranges&n=4
      sequentialLabels = ['Not Busy', '', '', 'Very Busy'];

  configAndRenderChart(facilityData.wooden, '#wooden-heatmap', 'wooden', sequentialColors, sequentialLabels);
  configAndRenderChart(facilityData.bfit, '#bfit-heatmap', 'bfit', sequentialColors, sequentialLabels);
}

// render comparison charts
function renderComparisonChart(data, container) {
  let blueColor = ['#008FD5'],
      yellowColor = ['#ffb81c'], // [darker, less dark]
      neutralColor = ['#CFDDCC'], // http://www.colorhexa.com/80a478
      scaleColors = blueColor.concat(neutralColor).concat(yellowColor),
      scaleLabels = ['Wooden', '"Same"', 'BFit'];

  configAndRenderChart(data, container, null, scaleColors, scaleLabels);
}

function configAndRenderChart(data, container, facility, scaleColors, scaleLabels) {
  // reset container content
  $(container).html('');

  let closedColor = ['#CCD1D1'],
      allColors = closedColor.concat(scaleColors),
      allLabels = ['Closed'].concat(scaleLabels),
      colorScale = d3.scaleOrdinal().domain(d3.range(0, allColors.length, 1))
        .range(allColors);

    // filter data to exclude hours from 1 to 4
    data = data.filter(d => {
      return d.hour < 1 | d.hour > 4;
    })

    // store color of each circle
    let colors = data.map(d => {
      return colorScale(d.category);
    });

    // legend
    let legendCircles = allColors.map((d, i) => {
      return {
        color: d,
        text: allLabels[i]
      };
    });

    // render chart
    renderHeatChart(data, colors, container, legendCircles);
}

function renderHeatChart(data, colors, container, legendCircles = null) {

  // get browser container width
  let containerWidth = $(container).outerWidth(),
      containerHeight = $(container).outerHeight();

  // mobile threshold
  let mobileThreshold = 650,
      windowWidth = $(window).width(),
      isMobile = windowWidth <= mobileThreshold ? true : false;

  // margins applied to svg container
  let margins = isMobile?
      {left: 0, right: 0, top: 5, bottom: 5} :
      {left: 20, right: 20, top: 10, bottom: 10};

  // get dimensions of container and determine dimensions of chart
  let chartWidth = containerWidth - margins.left - margins.right,
        cHeight = isMobile? 85 : 140,
      chartHeight = cHeight - margins.top - margins.bottom;

  // dimension and size configs
  let circleRadius = isMobile? (chartWidth * 0.018) : 9,
      circlePaddings = isMobile? {vertical: 2, horizontal: 1} : {vertical: 8, horizontal: 4},
      dayLabelOffsetX = isMobile? 15 : 22,
      firstCircleOffsetX = isMobile? 40 : 75,
      firstCircleOffsetY = isMobile? 21 : 35,
      timeLabelOffsetY = isMobile? 2 : 4,
      hourLabelOffsetY = isMobile? 12 : 20,
      circleLegendDistance = isMobile? 8 : 8;

  // determine size of circles / grids
  let gridHeight = circleRadius * 2 + circlePaddings.vertical,
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
  let days = isMobile? ['Mo~Th', 'Fri', 'Sat', 'Sun'] : ['Mon to Thur', 'Fri', 'Sat', 'Sun'];

  let dayLabels = chartG.selectAll(".day-label")
    .data(days)
    .enter()
    .append("text")
    .text(d => d)
    .attr("x", dayLabelOffsetX)
    .attr("y", (d, i) => {
      return firstCircleOffsetY + (circleRadius/2) + (i * gridHeight);
    })
    .style("text-anchor", "middle")
    .attr("class", 'chart-label')

  // render time and hour of day labels horizontally

  let times = [
    {label: 'AM'},
    {label: 'Noon'},
    {label: 'PM'}
  ],

  hours = isMobile?
    [
      {label: '0', digit: 0}, {label: '5', digit: 5},
      {label: '6', digit: 6}, {label: '', digit: 7}, {label: '', digit: 8},
      {label: '9', digit: 9}, {label: '', digit: 10}, {label: '', digit: 11},
      {label: '12', digit: 12}, {label: '', digit: 13}, {label: '', digit: 14},
      {label: '3', digit: 15}, {label: '', digit: 16}, {label: '', digit: 17},
      {label: '6', digit: 18}, {label: '', digit: 19}, {label: '', digit: 20},
      {label: '9', digit: 21}, {label: '', digit: 22}, {label: '11', digit: 23}
    ] :

    [
      {label: '0', digit: 0}, {label: '5', digit: 5},
      {label: '6', digit: 6}, {label: '7', digit: 7}, {label: '8', digit: 8},
      {label: '9', digit: 9}, {label: '10', digit: 10}, {label: '11', digit: 11},
      {label: '12', digit: 12}, {label: '1', digit: 13}, {label: '2', digit: 14},
      {label: '3', digit: 15}, {label: '4', digit: 16}, {label: '5', digit: 17},
      {label: '6', digit: 18}, {label: '7', digit: 19}, {label: '8', digit: 20},
      {label: '9', digit: 21}, {label: '10', digit: 22}, {label: '11', digit: 23}
    ];

  hours.forEach((d, i) => {
    d.x = firstCircleOffsetX + (i * gridWidth);

    if (d.digit == 6) {
      times[0]['x'] = d.x;
    } else if (d.digit == 12) {
      times[1]['x'] = d.x;
    } else if (d.digit == 18) {
      times[2]['x'] = d.x;
    }
  })

  let timeLabels = chartG.selectAll('.time-label')
    .data(times)
    .enter().append('text')
    .text(d => d.label)
    .attr('x', d => d.x)
    .attr('y', timeLabelOffsetY)
    .style('text-anchor', 'middle')
    .attr('class', 'chart-label');

  let hourLabels = chartG.selectAll(".hour-label")
    .data(hours)
    .enter().append("text")
    .text(d => d.label)
    .attr("x", d => d.x)
    .attr("y", hourLabelOffsetY)
    .style("text-anchor", "middle")
    .attr("class", 'chart-label');

    // tooltip
    let tip = d3.tip().attr('class', 'heatchart-tip')
      .html(d => {
        let hourStr = formatHour(d.hour),
            dayStr = d.day_of_week == 1? "Mon to Thur" :
                     d.day_of_week == 5? "Fri" :
                     d.day_of_week == 6? "Sat" : "Sun";

        let timeTip = "<span class='bold'>" + dayStr + "</span>" + " | " +
            "<span class='bold'>" + hourStr + "</span>" + "<br>";

        if (d.n_people_rel <= 0 | d.traffic_ratio <= 0) {
          return (
            timeTip +
            "<span class='bold'>" + "Closed" + "</span>"
          );
        }

        return d.type == 'comparison'? (
          timeTip +
          "Wooden is " + "<span class='bold'>" + d.traffic_ratio + "</span>" + " times" + "<br>" + "as busy as BFit"
        ) : (
          timeTip +
          "<span class='bold'>" + parseInt(d.n_people_rel * 100) + "%" + "</span>" + " relative to peak" + "<br>"
        );
      });

    chartG.call(tip);

    // render heat circles
    let circles = chartG.selectAll(".heat-circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => {
      let position = -1;
      hours.forEach((hour, i) => {
        if (d.hour == hour.digit) {
          position = i;
        }
      })
      return firstCircleOffsetX + position * gridWidth;
    })
    .attr("cy", (d, i) => {
      return getHourIndexY(d.day_of_week) * gridHeight + firstCircleOffsetY;
    })
    .attr('r', circleRadius)
    .attr("class", d => {
     return (d.hour == window.currentTime_.hour & d.day_of_week == window.currentTime_.day_of_week) ?
        'heat-circle black-stroke' : 'heat-circle no-border';
    })
    .style('fill', (d, i) => {
      return colors[i];
    })
    .on('mouseover', (d, i) => {
      tip.show(d);
    })
    .on('mouseout', (d, i) => {
      tip.hide(d);
    })


    // append divider between chart and legend
    let divider = d3.select(container)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', 4)
      .append('line')
      .attr('x1', 0)
      .attr('x2', chartWidth)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('stroke-dasharray', '5, 5')
      .style('stroke', 'black')
      .style('stroke-width', '1px')

    // append legend
    legendCircles.forEach(d => {
      d.stroke = 'none';
      d.stroke_width = '0px';
    });
    legendCircles = legendCircles.concat([{
      color: 'white',
      text: 'Now',
      stroke: 'black',
      stroke_width: '2.5px'
    }]);

    let legendSvg = d3.select(container)
      .append('svg')
      .attr('width', chartWidth + margins.left + margins.right)
      .attr('height', 32)

    let legendG = legendSvg.append('g')
      .attr('transform', 'translate(' + 10 + ',' + 5 + ')')
      .attr('class', 'circle-legend-svg');

    legendG.selectAll('circle')
      .data(legendCircles)
      .enter()
      .append('circle')
      .attr('r', circleRadius * 0.8)
      .attr('cx', (d, i) => {
        return 10 + i * circleRadius * circleLegendDistance;
      })
      .attr('cy', 5)
      .attr('fill', d => d.color)
      .attr('stroke', d => d.stroke)
      .attr('stroke-width', d => d.stroke_width)

    legendG.selectAll('text')
      .data(legendCircles)
      .enter()
      .append('text')
      .text(d => d.text)
      .attr('x', (d, i) => {
        return 10 + i * circleRadius * circleLegendDistance;
      })
      .attr('y', 15 + circleRadius * 0.8 * 1.2)
      .attr('class', 'legend-label')

}

// recode day of week from [Sunday = 0, ..., Saturday = 6] to [Monday ~ Thursday = 1, Friday = 5, Saturday = 6, Sunday = 7]
function recodeDayOfWeek(day) {
  if (day == 0) {
    day = 7;
  } else if (day >= 1 & day <= 4) {
    day = 1;
  }

  return day;
}

// process data upon loading
function processFacilityData(data) {
  data.forEach(d => {
    d.day_of_week = parseInt(d.day_of_week);
    d.hour = parseInt(d.hour);
    d.n_people = parseInt(d.n_people);
    d.n_people_rel = Number(d.n_people_rel);
    d.category = parseInt(d.category);
    d.type = 'facility';
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
    d.type = 'comparison';
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

function filterFacilityData (data) {
  let woodenData = data.filter(d => d.facility == 'wooden'),
      bfitData = data.filter(d => d.facility == 'bfit');

  return {
    wooden: woodenData,
    bfit: bfitData
  };
}

// turn traffic category into display text
function labelTrafficCategory(code) {
  switch (code) {
    case 0:
      return "closed";
    case 1:
      return "not busy";
    case 2:
      return "not too busy";
    case 3:
      return "somewhat busy";
    case 4:
      return "very busy";
    default:
      return null;
  }
}

// format tooltip time
function formatHour(hourStr) {
  let parseHour = d3.timeParse('%H'),
      formatHour_ = d3.timeFormat('%I'),
      formatAPM = d3.timeFormat('%p');

  let hour = parseHour(hourStr),
      hourDisplay = formatHour_(hour),
      apmDisplay = formatAPM(hour);

  return parseInt(hourDisplay) + " " + apmDisplay;
}

// get current day and hour
function getCurrentDayAndHour() {
  let localTime = new Date,
      localMoment = moment(localTime).tz(moment.tz.guess()),
      laMoment = localMoment.clone().tz('America/Los_Angeles');

  return {
    hour: laMoment.hour(),
    day_of_week: recodeDayOfWeek(laMoment.day())
  };
}
