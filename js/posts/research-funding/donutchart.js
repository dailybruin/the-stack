function initDonutChartDropdown(data) {

	//old dropdown code
  let dropdown = document.getElementById('donutChartDropdown');

  data.forEach(function(s) {
    var option = document.createElement("option");
    option.value = s.year;
    option.text = s.year;
    dropdown.appendChild(option);
  });
}

let currData = undefined;

function initDonutChart(data) {
  var all = data.reduce(function(acc, item) {
    acc["total"] += item.total;
    acc["sponsors"].forEach(function(s,i) {
      s.total += item.sponsors[i].total
    })
    return acc;
  }, {
    "year" : 0,
    "total": 0,
    "sponsors" : [
      {
        "name" : "Federal Government",
        "total": 0
      },
      {
        "name" : "Business & For-Profit",
        "total" : 0
      },
      {
        "name" : "State & Other Government",
        "total" : 0
      },
      {
        "name" : "Higher Education",
        "total" : 0
      },
      {
        "name" : "Charitable & Non-Profit Organizations",
        "total" : 0
      }
    ]
  });

  data.push(all);

  var width = 400;
  var height = 400;

  var radius = Math.min(width, height) / 2;

  var color = d3.scaleOrdinal(d3.schemeCategory20c);

  var select = document.getElementById('donutChartDropdown');
  select.addEventListener("input", function() {
    change(select.value);
  })
  //for IE10 and other browsers that don't support oninput listener
   select.addEventListener("change", function() {
    change(select.value);
  })

  // initialize tooltip
  var tooltip = d3.select("#donut-chart-wrapper").append("div")
                    .attr("class", "tooltip")
                    .style('display', 'none');

	var svg = d3.select('#donut-chart-wrapper')
  	.append('svg')
  	.attr('width', width)
  	.attr('height', height)
  	.append('g')
  	.attr('transform', 'translate(' + (width / 2) +
  		',' + (height / 2) + ')');

	var arc = d3.arc()
  	.innerRadius(130)
  	.outerRadius(radius);

	var pie = d3.pie()
  	.value(function(d) { return d.total; })
  	.sort(null);

  currData = data.find(x => x.year == select.value)

	var path = svg.selectAll('path')
  	.data(currData.sponsors)
  	.enter()
  	.append('path')
  	.attr('d', arc)
  	.attr('fill', function(d, i) {
  		return color(i);
  	})
    .on("mouseover", function(d) {
        tooltip.style('display', 'inline');
        d3.select(this).style('opacity', 0.7);
    })
    .on("mousemove", function(d) {
        tooltip.html(fillTooltip(d))
        .style("left", (d3.event.pageX + 20) + "px")
        .style("top", (d3.event.pageY - 12) + "px");
    })
    .on("mouseout", function(d) {
        tooltip.style("display", "none");
        d3.select(this).style('opacity', 1);
    });

    function fillTooltip(d) {
      var select = document.getElementById('donutChartDropdown');

      var h = '';

      if (select.value == '0') {
          let perc = (d.data.total/currData.total)*100;
          h += '<p><b>ALL</b><span class="perc">' + perc.toFixed(1) + '%</span></p><hr />';
          h += '<p><b>' + d.data.name + ':</b> $' + numberWithCommas(d.data.total) + '</p></div>';
      }
      else {
        var sponsor = d.data;
        let perc = (sponsor.total/currData.total)*100;
        h += '<p><b>' + select.value + '</b><span class="perc">' + perc.toFixed(1) + '%</span></p><hr />';
        h += '<p><b>' + sponsor.name + ':</b> $' + numberWithCommas(sponsor.total) + '</p>';
      }

      return h;
    }

  function change(year) {
    currData = data.find(x => x.year == year);
    path = path
      .data(pie(currData.sponsors));

    path.transition().duration(400).ease(d3.easePolyInOut).attrTween("d", arcTween);
  }

  change(0)

  function arcTween(a) {
    var i = d3.interpolate(this._current, a);
    this._current = i(0);
    return function(t) {
      return arc(i(t));
    };
  }

  legendRectSize = 18;
  legendSpacing = 4;
  var legend = svg.selectAll('.legend')
    .data(data[0].sponsors)
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', function(d, i) {
      var height = legendRectSize + legendSpacing;
      var offset =  height * color.domain().length / 2;
      var horz = -3 * legendRectSize;
      var vert = i * height - offset;
      return 'translate(' + horz + ',' + vert + ')';
    });

  legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', function(d,i) { return color(i);});
    //.style('stroke', color);

  legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function(d) {
    		//hacky switch statement
    		if (d.name == "Federal Government") {
    			return "Federal Govt.";
    		}
    		else if (d.name == "Business & For-Profit") {
    			return "Business & Profit";
    		}
    		else if (d.name == "State & Other Government") {
    			return "State & Other Govt.";
    		}
    		else if (d.name == "Higher Education") {
    			return "Higher Education";
    		}
    		else if (d.name == "Charitable & Non-Profit Organizations") {
    			return "Non-Profit";
    		}
    		else {
    			return d.name;
    		}
    });

}
