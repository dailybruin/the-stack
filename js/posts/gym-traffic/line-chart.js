// run this script once page is ready
$(document).ready(function() {
  d3.csv('/datasets/gym-traffic/facilities-daily-traffic.csv', function(error, data) {
    if (error) throw error;
    renderGraphics(data);
  })
})

function renderGraphics(data) {
  d3.select('#pick-facility')
    .on('change', e => updateLineChart(false))
  d3.select('#pick-scale')
    .on('change', e => updateLineChart(false));

  // populate dropdown menus for 1) week, and 2) day selections
  d3.select('#viz-selections')
    .append('select')
    .attr('id', 'pick-week')
    .on('change', e => updateLineChart(false))
    .selectAll('option')
    .data(d3.set(data, (d) => { return d.week }).values())
    .enter()
    .append('option')
    .text((d) => { return d })
    .attr('value', (d) => { return d });

  d3.select('#viz-selections')
    .append('select')
    .attr('id', 'pick-day')
    .on('change', e => updateLineChart(false))
    .selectAll('option')
    .data(d3.set(data, (d) => { return d.day }).values())
    .enter()
    .append('option')
    .text((d) => { return d })
    .attr('value', (d) => { return d })

  // render line chart using week and day selections
  function updateLineChart(firstRender) {
    let weekSelection = d3.select('#pick-week').property('value'),
        daySelection = d3.select('#pick-day').property('value'),
        scaleSelection = d3.select('#pick-scale').property('value'),
        facilitySelection = d3.select('#pick-facility').property('value');

    let filteredData = data.filter(d => {
      return facilitySelection == 'both' ?
        d.week == weekSelection & d.day == daySelection :
        d.week == weekSelection & d.day == daySelection & d.facility == facilitySelection;
    })

    renderLineChart(filteredData, facilitySelection, scaleSelection, firstRender);
  }

  // line chart code begin

  let windowHeight = $(window).height();
  let windowWidth = $(window).width();

  let svg = d3.select('#line-chart')
    .append('svg')
    .attr('width', windowWidth * 0.6)
    .attr('height', 400);

  let margin = { left: 50, right: 50, bottom: 30, top: 30 },
      width = svg.attr('width') - margin.left - margin.right,
      height = svg.attr('height') - margin.top - margin.bottom,
      g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  let parseHourMinute = d3.timeParse('%H:%M');

  data.forEach((d) => {
    d.hour_minute = parseHourMinute(Math.round(d.hour) + ':' + Math.round(d.minute))
    d.avg_n_people = +d.avg_n_people;
    d.avg_n_people_rel = parseInt(+d.avg_n_people_rel * 100);
  })

  let x_extent = d3.extent(data, d => d.hour_minute),
      y_absolute_extent = d3.extent(data, d => d.avg_n_people),
      y_relative_extent = d3.extent(data, d => d.avg_n_people_rel);

  let x_scale = d3.scaleTime().domain(x_extent).range([0, width]),
      y_absolute_scale = d3.scaleLinear().domain(y_absolute_extent).range([height, 0]),
      y_relative_scale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

  // render line chart
  function renderLineChart(data, facility, scale, firstRender) {
    if (!firstRender) {
      d3.select('.y-axis').remove();
      d3.selectAll('.time-line').remove();
    }

    let yScale = scale == 'absolute' ? y_absolute_scale : y_relative_scale;
    data.forEach(d => {
      d.y_value = scale == 'absolute' ? d.avg_n_people : d.avg_n_people_rel;
    })

    let voronoi = d3.voronoi()
      .x(d => x_scale(d.hour_minute))
      .y(d => yScale(d.y_value))
      //.extent([-margin.left, -margin.top], [width+margin.right, height+margin.bottom]);

    let line = d3.line()
      .x(d => x_scale(d.hour_minute))
      .y(d => yScale(d.y_value));

    g.append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x_scale));

    g.append('g')
        .attr('class', 'axis y-axis')
        .call(d3.axisLeft(yScale));

    if (facility == 'both') {
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
    } else {
      g.append('path')
        .datum(data)
        .attr('d', line)
        .attr('class', d => {
          if (facility == 'wooden') {
            return 'time-line wooden';
          } else if (facility == 'bfit') {
            return 'time-line bfit';
          }
        })
    }

    let focus = g.append('g')
      .attr('transform', 'translate(-100, -100)')
      .attr('class', 'focus');

    focus.append('circle')
      .attr('r', 4);

    focus.append('text')
      .attr('y', -10);

    let voronoiGroup = g.append('g')
      .attr('class', 'voronoi');

    let dat = voronoi.extent([[0, 0], [width, height]]).polygons(data)

    let selectedHourMinute = null;
    voronoiGroup.selectAll('path')
      .data(dat)
      .enter()
      .append('path')
      .attr('d', d => { return d ? ("M" + d.join("L") + "Z") : null; })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

    function mouseover(d) {
      selectedHourMinute = d.data.hour_minute;
      focus.attr("transform", "translate(" + x_scale(d.data.hour_minute) + "," + yScale(d.data.y_value) + ")");
      focus.select("text").text(d.data.y_value + ' at ' + d.data.hour + ':' + d.data.minute);
    }

    function mouseout(d) {
      selectedHourMinute = null;
      focus.attr("transform", "translate(-100,-100)");
    }
  }

  // render chart for the first time upon loading
  updateLineChart(true);

}
