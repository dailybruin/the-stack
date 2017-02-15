function initDonutChartDropdown(data) {
  let dropdown = document.getElementById('donutChartDropdown');

  data.forEach(function(s) {
    var option = document.createElement("option");
    option.value = s.year;
    option.text = s.year;
    dropdown.appendChild(option);
  })
}

function initDonutChart(data) {
	var width = 360;
	var height = 360;
	var radius = Math.min(width, height) / 2;

	var color = d3.scaleOrdinal(d3.schemeCategory20c);

	var svg = d3.select('#donut-chart-wrapper')
	.append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate(' + (width / 2) +
		',' + (height / 2) + ')');

	var arc = d3.arc()
	.innerRadius(100)
	.outerRadius(radius);

	var pie = d3.pie()
	.value(function(d) { console.log(d); return d.total; })
	.sort(null);

	var path = svg.selectAll('path')
	.data(pie(data[0].sponsors))
	.enter()
	.append('path')
	.attr('d', arc)
	.attr('fill', function(d, i) {
		return color(i);
	});
}
