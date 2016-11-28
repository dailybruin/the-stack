$(document).ready(function() {
  d3.csv('/datasets/gym-traffic/linechart-data.csv', function(error, data) {
    if (error) throw error;

    data = processData(data);

    initGraphics(data);
  })
});

function initGraphics(data) {
  d3.select('#pick-scale')
    .on('change', e => updateLineChart(false));

  // populate dropdown menus for 1) week, and 2) day selections
  d3.select('#pick-week')
    .on('change', e => updateLineChart(false))
    .selectAll('option')
    .data(d3.set(data, (d) => { return d.week }).values())
    .enter()
    .append('option')
    .text((d) => { return d })
    .attr('value', (d) => { return d });

  d3.select('#pick-day')
    .on('change', e => updateLineChart(false))
    .selectAll('option')
    .data(d3.set(data, (d) => { return d.day }).values())
    .enter()
    .append('option')
    .text((d) => { return d })
    .attr('value', (d) => { return d })

  d3.select('#line-chart')
    .append('svg')
    .append('g');

  window.yAbsoluteExtent = d3.extent(data, d => d.n_people);

  // update line chart using week and day selections
  function updateLineChart(firstRender) {
    let weekSelection = d3.select('#pick-week').property('value'),
        daySelection = d3.select('#pick-day').property('value'),
        scaleSelection = d3.select('#pick-scale').property('value');

    let filteredData = data.filter(d => {
      return d.week == weekSelection & d.day == daySelection;
    });

    renderLineChart(filteredData, scaleSelection, firstRender);
  }

  // render chart for the first time upon loading
  updateLineChart(true);
}

// render line chart
function renderLineChart(data, scale, firstRender) {

  if (!firstRender) {
    d3.select('.y-axis').remove();
    d3.select('.x-axis').remove();
    d3.selectAll('.time-line').remove();
  }

  // determine size of container and append svg
  let containerWidth = $('#line-chart').outerWidth(),
      containerHeight = $('#line-chart').outerHeight();

  // detect mobile
  let isMobile = containerWidth < 400;

  let svg = d3.select('#line-chart')
    .select('svg')
    .attr('width', containerWidth)
    .attr('height', isMobile? 300 : 400);

  let margin = { left: 30, right: 30, bottom: 60, top: 30 },
      width = svg.attr('width') - margin.left - margin.right,
      height = svg.attr('height') - margin.top - margin.bottom,
      g = svg.select('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // scales and axes
  let xExtent = d3.extent(data, d => d.hour_minute);

  let xScale = d3.scaleTime()
        .domain(xExtent)
        .range([0, width]),
      yAbsoluteScale = d3.scaleLinear().domain(window.yAbsoluteExtent).range([height, 0]),
      yRelativeScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

  let yScale = scale == 'absolute' ? yAbsoluteScale : yRelativeScale;
  data.forEach(d => {
    d.y_value = scale == 'absolute' ? d.n_people : d.n_people_rel;
  })

  g.append('g')
    .attr('class', 'axis x-axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale).ticks(d3.timeHour.every(isMobile? 6 : 3)));

  g.append('g')
      .attr('class', 'axis y-axis')
      .call(d3.axisLeft(yScale));

  // remove year 1900 from scale
  $('.line-chart .x-axis .tick text').first().addClass('invisible');

  // tooltip
  let tip = d3.tip()
    .attr('class', 'heatchart-tip')
    .html(d => {
      let formatTime = d3.timeFormat('%I:%M %p');

      let timeTip = "<span class='bold'>" + formatTime(d.data.hour_minute) + (d.data.facility == 'wooden'? " | Wooden" : " | BFit") + "</span>" + "<br>";

      return d.data.n_people == 0? (
        timeTip +
        "<span class='bold'>" + "Closed" + "</span>"
      ) : (
        timeTip +
        "<span class='bold'>" + d.data.n_people_rel + "%" + "</span>" + " relative to peak" + "<br>" +
        "<span class='bold'>" + d.data.n_people + "</span>" + " people"
      );
    });

  g.call(tip);

  // lines
  let line = d3.line()
    .x(d => xScale(d.hour_minute))
    .y(d => yScale(d.y_value));

  g.append('path')
    .datum(data.filter(d => {
      return d.facility == 'wooden';
    }))
    .attr('d', line)
    .attr('class', 'time-line wooden')

  g.append('path')
    .datum(data.filter(d => {
      return d.facility == 'bfit';
    }))
    .attr('d', line)
    .attr('class', 'time-line bfit')

  // mouse interaction
  let voronoi = d3.voronoi()
    .x(d => xScale(d.hour_minute))
    .y(d => yScale(d.y_value));

  let focus = g.append('g')
    .attr('transform', 'translate(-100, -100)')
    .attr('class', 'focus');

  focus.append('circle')
    .attr('r', 4);

  let voronoiGroup = g.append('g')
    .attr('class', 'voronoi');

  let dat = voronoi.extent([[0, 0], [width, height]]).polygons(data);

  voronoiGroup.selectAll('path')
    .data(dat)
    .enter()
    .append('path')
    .attr('d', d => { return d ? ("M" + d.join("L") + "Z") : null; })
    .on("mouseover", mouseover)
    .on("mouseout", mouseout);

  function mouseover(d) {
    tip.show(d);
    focus.attr("transform", "translate(" + xScale(d.data.hour_minute) + "," + yScale(d.data.y_value) + ")");
  }

  function mouseout(d) {
    tip.hide(d);
    focus.attr("transform", "translate(-100,-100)");
  }

  // legend
  let facilityColors = d3.scaleOrdinal()
    .domain(['Wooden', 'BFit'])
    .range(['#008fd5', '#ffb81c']);

  let legend = d3.legendColor()
    .shape('rect')
    .shapeHeight(6)
    .shapeWidth(25)
    .shapePadding(25)
    .orient('horizontal')
    .scale(facilityColors);

  svg.append('g')
    .attr('class', 'line-legend')
    .attr('transform', () => {
      return 'translate(50,' + (isMobile? 270 : 370) + ')'
    });

  svg.select('.line-legend')
    .call(legend);

}

function processData(data) {
  let parseHourMinute = d3.timeParse('%H:%M');

  data.forEach((d) => {
    d.hour_minute = parseHourMinute(Math.round(d.hour) + ':' + Math.round(d.minute))
    d.n_people = parseInt(d.n_people);
    d.n_people_rel = parseInt(+d.n_people_rel * 100);
  })

  return (data)
}
