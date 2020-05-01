var width = 600,
  height = 500;

var svg;

var data;
var infectedStudents = [];

// MODEL PARAMETERS
var p = 0.5; //probabilty of each exposed student of getting infected
var infectionLength = 1; //how many weeks a student is contagious for
var numExposed = 8; //how many others one student exposes per class

// statuses
var HEALTHY = 0;
var INFECTED = 1;
var RECOVERED = 2;

d3.json('/datasets/covid-model/nodes_links.json', function(json) {
  data = json;
  svg = d3
    .select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  var force = d3.layout
    .force()
    .gravity(0.05)
    .distance(50)
    .charge(-3)
    .size([width, height])
    .nodes(json.nodes)
    .links(json.links)
    .start();

  var link = svg
    .selectAll('.link')
    .data(json.links)
    .enter()
    .append('line')
    .attr('class', 'link')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .style('stroke-width', function(d) {
      return Math.sqrt(d.weight);
    });

  var node = svg
    .selectAll('.node')
    .data(json.nodes)
    .enter()
    .append('g')
    .attr('class', 'circle node')
    .attr('stroke', '#fff')
    .attr('stroke-width', 1);
  // .call(force.drag);

  d3.selectAll('.circle')
    .append('circle')
    .attr('r', 3)
    .attr('id', d => {
      return 's' + d.id;
    })
    .attr('fill', d => {
      if (d.status === 0) {
        //healthy
        return 'green';
      } else if (d.status === 1) {
        //infected
        return 'red';
      } else if (d.status === 2) {
        //immune
        return 'purple';
      }
    });

  node
    .append('text')
    .attr('dx', 12)
    .attr('dy', '.35em')
    .text(function(d) {
      return '';
    });

  var tooltip = d3
    .select('body')
    .append('div')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('color', 'white')
    .style('padding', '8px')
    .style('background-color', '#626D71')
    .style('border-radius', '6px')
    .style('text-align', 'center')
    .style('width', 'auto')
    .text('');

  node
    .on('mouseover', function(d) {
      tooltip.html(`${d.id}`);
      return tooltip.style('visibility', 'visible');
    })
    .on('mousemove', function() {
      return tooltip
        .style('top', d3.event.pageY - 10 + 'px')
        .style('left', d3.event.pageX + 10 + 'px');
    })
    .on('mouseout', function() {
      return tooltip.style('visibility', 'hidden');
    });

  force.on('tick', function() {
    link
      .attr('x1', function(d) {
        return d.source.x;
      })
      .attr('y1', function(d) {
        return d.source.y;
      })
      .attr('x2', function(d) {
        return d.target.x;
      })
      .attr('y2', function(d) {
        return d.target.y;
      });

    node.attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
  });

  var keys = ['Healthy', 'Infected', 'Recovered'];

  svg
    .append('circle')
    .attr('cx', 10)
    .attr('cy', 10)
    .attr('r', 5)
    .attr('fill', 'green');

  svg
    .append('circle')
    .attr('cx', 10)
    .attr('cy', 30)
    .attr('r', 5)
    .attr('fill', 'red');

  svg
    .append('circle')
    .attr('cx', 10)
    .attr('cy', 50)
    .attr('r', 5)
    .attr('fill', 'purple');

  //Add one dot in the legend for each name.
  svg
    .selectAll('mylabels')
    .data(keys)
    .enter()
    .append('text')
    .attr('x', 20)
    .attr('y', function(d, i) {
      return 10 + i * 20;
    })
    .text(function(d) {
      return d;
    })
    .attr('text-anchor', 'left')
    .style('alignment-baseline', 'middle');

  infect(0);
});
