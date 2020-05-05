var width = 1200,
  height = 700;

var svg;

var student_nodes;
var infectedStudents = [];

var healthy_count = 0;
var infected_count = 0;
var recovered_count = 0;

// MODEL PARAMETERS
const p = 0.2; //probabilty of each exposed student of getting infected
const infectionLength = 2; //how many weeks a student is contagious for
const numExposed = 5; //how many others one student exposes per class

// statuses
var HEALTHY = 0;
var INFECTED = 1;
var RECOVERED = 2;

d3.json('/datasets/covid-model/nodes_links.json').then(function(json) {
  console.log('loaded json');
  student_nodes = json.nodes;
  svg = d3
    .select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  student_nodes.forEach(function(d) {
    let phi = Math.random() * 2 * Math.PI;
    let rho = Math.random();
    let x = Math.sqrt(rho) * Math.cos(phi);
    let y = Math.sqrt(rho) * Math.sin(phi);
    d.x = (x * width) / 2 + width / 2;
    d.y = (y * height) / 2 + height / 2;
    d.vx = d.vy = 0;
  });
  console.log('assigned coordinates');

  // const simulation = d3.forceSimulation(json.nodes)
  //   // .force("link", d3.forceLink(json.links).strength(0))
  //   // .force("charge", d3.forceManyBody().strength(20))
  //   // .force("center", d3.forceCenter(width / 2, height / 2))
  //   .alphaMin(1)
  //   .alphaDecay(.2);

  // const link = svg.append("g")
  //   .attr("stroke", "#999")
  //   .attr("stroke-opacity", 0.2)
  // .selectAll("line")
  // .data(json.links)
  // .join("line")
  //   .attr("stroke-width", .1);

  const node = svg
    .append('g')
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(student_nodes)
    .join('circle')
    .attr('r', 3)
    .attr('id', d => {
      return 's' + d.id;
    })
    .attr('fill', d => {
      switch (d.status) {
        case 0: //healthy
          healthy_count++;
          return 'green';
        case 1: //infected
          infected_count++;
          infectedStudents.push(d.id);
          return 'red';
        case 2: //recovered
          recovered_count++;
          return 'purple';
      }
    })
    .attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
  // .call(drag(simulation));
  console.log('created node elements');

  // var tooltip = d3
  //   .select('body')
  //   .append('div')
  //   .style('position', 'absolute')
  //   .style('visibility', 'hidden')
  //   .style('color', 'white')
  //   .style('padding', '8px')
  //   .style('background-color', '#626D71')
  //   .style('border-radius', '6px')
  //   .style('text-align', 'center')
  //   .style('width', 'auto')
  //   .text('');

  // node
  //   .on('mouseover', function(d) {
  //     tooltip.html(`${d.id}`);
  //     return tooltip.style('visibility', 'visible');
  //   })
  //   .on('mousemove', function() {
  //     return tooltip
  //       .style('top', d3.event.pageY - 10 + 'px')
  //       .style('left', d3.event.pageX + 10 + 'px');
  //   })
  //   .on('mouseout', function() {
  //     return tooltip.style('visibility', 'hidden');
  //   });

  // simulation.on('tick', function() {
  //   link
  //     .attr('x1', function(d) {
  //       return d.source.x;
  //     })
  //     .attr('y1', function(d) {
  //       return d.source.y;
  //     })
  //     .attr('x2', function(d) {
  //       return d.target.x;
  //     })
  //     .attr('y2', function(d) {
  //       return d.target.y;
  //     });

  //   node.attr('transform', function(d) {
  //     return 'translate(' + d.x + ',' + d.y + ')';
  //   });
  // });

  let keys = ['Healthy', 'Infected', 'Recovered'];

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

  d3.select('#healthy').text(healthy_count + ' students never infected');
  d3.select('#infected').text(infected_count + ' students infected');
  d3.select('#recovered').text(recovered_count + ' students recovered');
});

const slider = d3
  .sliderHorizontal()
  .min(0)
  .max(10)
  .step(1)
  .width(500)
  .displayValue(false)
  .on('onchange', val => {
    runInfections();
  });

d3.select('#slider')
  .append('svg')
  .attr('width', width)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)')
  .call(slider);
