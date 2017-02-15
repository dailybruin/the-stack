function initBarChartDropdown(data) {
  var subcategories = data.reduce(function(acc, item) {
    item.subcategories.forEach(function(s) {
      if (acc.indexOf(s.name) == -1) {
        acc.push(s.name);
      }
    })
    return acc;
  }, [])

  var dropdown = document.getElementById('barChartDropdown');

  subcategories.forEach(function(s) {
    var option = document.createElement("option");
    option.value = s;
    option.text = s;
    dropdown.appendChild(option);
  })
}

function initBarChart(data) {
  // Dropdown function - invokes update
  var select = document.getElementById('barChartDropdown');
  select.addEventListener("change", function() {
      updateData(select.value);
  })

  var color = d3.scaleOrdinal(d3.schemeCategory20c);

  // Dimensions of canvas/graph
  var margin = {top: 30, right: 20, bottom: 30, left: 50},
      width = 650 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom;

  var svg = d3.select("#bar-chart-wrapper")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)

  var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scaleBand().rangeRound([0, width]).padding(0.2);
  var y = d3.scaleLinear().rangeRound([height - 10, 0]);

  // Set domain for x and y variables
  x.domain(data.map(function(d) {return d.year}));
  //console.log(data.map(function(d) {return d.year}));

  y.domain(d3.extent(data, function(d) {return d.total;}));

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format("d")))
      .select(".domain");

  g.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y).ticks(5))
      .select(".domain")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0)
      .attr("dy", "0.71em")
      .text('hello, world');

  var bar = g.selectAll("rect")
      .data(data);

   bar.enter()
       .append("rect")
       .attr("x", function(d) { return x(d.year) })
       .attr("y", function(d) { return y(d.total) })
       .attr("width", x.bandwidth())
       .attr("height", function(d) { return height - y(d.total) })
       .attr("fill", function(d,i) {
         return color(i);
       });

  function updateData(val) {
      // change domain of y axis
      y.domain(d3.extent(data, function (d) {
          if (val == '0')
              return d.total;
          return d.subcategories.find(x => x.name ===  val).total || 0;
      }));
      // update y axis
      svg.select('.y-axis')
        .transition()
        .duration(400)
        .ease(d3.easePolyInOut)
        .call(d3.axisLeft(y).ticks(5));
      // modify rect height
      svg.selectAll('rect')
        .transition()
        .duration(400)
        .ease(d3.easePolyInOut)
        .attr('y', function(d) {
            if (val == '0')
              return y(d.total);
            let total = d.subcategories.find(x => x.name ===  val).total || 0;
            return y(total);
        })
        .attr('height', function(d) {
            if (val == '0')
              return height - y(d.total);
            let total = d.subcategories.find(x => x.name ===  val).total || 0;
            return height - y(total);
        });
    }
}
