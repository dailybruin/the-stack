function initBubbleChart(csvURI) {
  var svg = d3.select("#bubble-chart"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

  var format = d3.format(",d");

  var color = d3.scaleOrdinal(d3.schemeCategory20c);

  var pack = d3.pack()
              .size([width, height])
              .padding(1.5);

  d3.csv(csvURI, function(d) {
    d.value = +d.value;
    if (d.value) return d;
  }, function(error, classes) {
    if (error) throw error;

    var root = d3.hierarchy({children: classes})
                .sum(function(d) { return d.value; })
                .each(function(d) {
                  if (id = d.data.id) {
                    var id, i = id.lastIndexOf(".");
                    d.id = id;
                    d.package = id.slice(0, i);
                    d.class = id.slice(i + 1);
                  }
                });

    var node = svg.selectAll(".node")
                  .data(pack(root).leaves())
                  .enter().append("g")
                  .attr("class", "node")
                  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
                  .on('mousemove', function(d) {
                    this.style.opacity = 0.7;
                    tooltip.html(fillTooltip(d))
                           .style('display', 'inline')
                           .style('left', (d3.event.pageX + 10) + 'px')
                           .style('top', (d3.event.pageY + 10) + 'px');
                  })
                  .on('mouseout', function() {
                    d3.select(this).style('opacity', 1);
                    tooltip.style('display', 'none');
                  })

    node.append("circle")
        .attr("id", function(d) { return d.id; })
        .attr("r", function(d) { return d.r; })
        .style("fill", function(d) { return color(d.package); });

    node.append("clipPath")
        .attr("id", function(d) { return "clip-" + d.id; })
        .append("use")
        .attr("xlink:href", function(d) { return "#" + d.id; });

    node.append("text")
        .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
        .selectAll("tspan")
        .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
        .enter().append("tspan")
        .attr("x", -15) // <== HARD CODED VALUE -- jeffrey
        .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
        .text(function(d) { return d; });
  });
}

function updateBubbleChart (value) {
  d3.selectAll('.node').remove();
  initBubbleChart(dataList[value]);
}

function fillTooltip (d) {
  var html = '';
  
  // SCHOOL NAME
  html += '<h1><u>'
  switch (d.class) {
    case 'ucla': html += 'UC Los Angeles'; break;
    case 'ucb': html += 'UC Berkeley'; break;
    case 'ucm': html += 'UC Merced'; break;
    case 'ucsd': html += 'UC San Diego'; break;
    case 'ucsb': html += 'UC Santa Barbara'; break;
    case 'ucsf': html += 'UC San Francisco'; break;
    case 'ucd': html += 'UC Davis'; break;
    case 'ucsc': html += 'UC Santa Cruz'; break;
    case 'uci': html += 'UC Irvine'; break;
    case 'ucr': html += 'UC Riverside'; break;
  }
  html += '</u></h1>'

  // PACKAGE
  html += '<p>'
  html += d.package.split('.')[1];
  html += '</p>'

  return html;
}