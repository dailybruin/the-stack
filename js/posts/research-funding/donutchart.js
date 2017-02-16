function initDonutChartDropdown(data) {
  let dropdown = document.getElementById('donutChartDropdown');

  data.forEach(function(s) {
    var option = document.createElement("option");
    option.value = s.year;
    option.text = s.year;
    dropdown.appendChild(option);
  });
}

function initDonutChart(data) {
	var width = 360;
	var height = 360;
	var radius = Math.min(width, height) / 2;

	var color = d3.scaleOrdinal(d3.schemeCategory20c);

  var select = document.getElementById('donutChartDropdown');
  select.addEventListener("change", function() {
    change(select.value);
  })

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
  	.value(function(d) { return d.total; })
  	.sort(null);

	var path = svg.selectAll('path')
  	.data(pie(data[0].sponsors))
  	.enter()
  	.append('path')
  	.attr('d', arc)
  	.attr('fill', function(d, i) {
  		return color(i);
  	});

  function change(year) {
    pie.value(function(d) { return d.total; });
    var newData = data.find(x => x.year == year).sponsors;
    path = path
      .data(pie(newData));

    path.transition().duration(400).ease(d3.easePolyInOut).attrTween("d", arcTween);
  }

  function arcTween(a) {
    var i = d3.interpolate(this._current, a);
    this._current = i(0);
    return function(t) {
      return arc(i(t));
    };
  }
}
