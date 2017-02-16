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

  data.push(all)
  
	var width = 400;
	var height = 400;
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
  	.innerRadius(130)
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
