var width = 1200,
  height = 700;

var svg;

var student_nodes;
var infectedStudents = [];

var healthy_count = 0;
var infected_count = 0;
var recovered_count = 0;

var sliderOldVal = 0;

// MODEL PARAMETERS
const p = 0.5; //probabilty of each exposed student of getting infected
const infectionLength = 1; //how many weeks a student is contagious for
const numExposed = 8; //how many others one student exposes per class
const initialCases = 2;

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
    // assign coordinates - generates randomly (sum of 2 uniform distributions) scaled to width/height
    let n = 3; 
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
      x += Math.random();
      y += Math.random();
    }
    x /= n;
    y /= n;
    d.x = (x * width);
    d.y = (y * height);
    d.vx = d.vy = 0;
  });
  console.log('assigned coordinates');

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
  initializeCases();

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

  updateCountDisplays();
});

const slider = d3
  .sliderHorizontal()
  .min(0)
  .max(11)
  .step(1)
  .width(500)
  .displayValue(false);

  slider.on('onchange', val => {
    if (val < sliderOldVal) {
      slider.silentValue(sliderOldVal);
      return;
    }
    runInfections();
    sliderOldVal = val;
  });

d3.select('#slider')
  .append('svg')
  .attr('width', width)
  .attr('height', 100)
  .append('g')
  .attr('transform', 'translate(30,30)')
  .call(slider);