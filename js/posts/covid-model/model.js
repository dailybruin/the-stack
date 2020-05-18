var width = window.innerWidth * .9,
  height = window.innerHeight * .75;

// GENERAL CASE VIZ
var viz = {
  'id' : 2,
  'svg' : null,
  'slider' : null,
  'r0slider' : null,
  'PLAYING': false,

  'student_nodes' : null,
  'infectedStudents' : [],
  'healthy_count' : 0,
  'infected_count' : 0,
  'recovered_count' : 0,
  'sliderOldVal' : 0,
  'datasetPath' : '/datasets/covid-model/general_case.json'
}


// statuses
const HEALTHY = 0;
const INFECTED = 1;
const RECOVERED = 2;
const healthy_color = '#7CA5B8';
const infected_color = '#622580';
const recovered_color = '#F2BAC9';

// MODEL ASSUMPTIONS
const SIMULATION_WEEKS = 12;
var r0 = 0.0; 
const infectionLength = 1; //how many weeks a student is contagious for
const initialCases = 1;

loadNodes(initViz);
// loadNodes(calcChartData); 


// load node data from json and init counts
function loadNodes(callback) {
  d3.json(viz.datasetPath).then(function(json) {
    viz.student_nodes = json.nodes;
    viz.student_nodes.forEach(function(d) {
      switch (d.status) {
        case 0: //healthy
          viz.healthy_count++;
          break;
        case 1: //infected
          viz.infected_count++;
          viz.infectedStudents.push(d.id);
          break;
        case 2: //recovered
          viz.recovered_count++;
          break;
      }
    });
    // console.log(averageConnections(viz.student_nodes));
    callback();
  });  
}

// set up viz elements including sliders & buttons
function initViz() {
  viz.svg = d3
      .select('.graph')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

  // assign coordinates - generates randomly (sum of 2 uniform distributions) scaled to width/height
  viz.student_nodes.forEach(function(d) {
    let n = 3;
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
      x += Math.random();
      y += Math.random();
    }
    d.x = x/n * width;
    d.y = y/n * height;
  });

  const node = viz.svg
    .append('g')
    .attr('stroke', '#fff')
    .attr('stroke-width', 1)
    .selectAll('circle')
    .data(viz.student_nodes)
    .join('circle')
    .attr('r', 3)
    .attr('id', d => {
      return 's' + d.id;
    })
    .attr('fill', d => {
      switch (d.status) {
        case 0: //healthy
          return healthy_color;
        case 1: //infected
          return infected_color;
        case 2: //recovered
          return recovered_color;
      }
    })
    .attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });

  // init legend
  let keys = ['Healthy', 'Infected', 'Recovered'];

  viz.svg
    .append('circle')
    .attr('cx', 10)
    .attr('cy', 10)
    .attr('r', 5)
    .attr('fill', healthy_color);

  viz.svg
    .append('circle')
    .attr('cx', 10)
    .attr('cy', 30)
    .attr('r', 5)
    .attr('fill', infected_color);

  viz.svg
    .append('circle')
    .attr('cx', 10)
    .attr('cy', 50)
    .attr('r', 5)
    .attr('fill', recovered_color);

  //Add one dot in the legend for each name.
  viz.svg
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
  
  // init slider
  let w1 = width * .6 * .9;
  let w2 = width * .6;
  if (width < 480) {  //phone
    w1 = width * .9 * .8;
    w2 = width * .9;
  }
  viz.slider = d3
    .sliderHorizontal()
    .min(0)
    .max(11)
    .step(1)
    .fill('blue')
    .width(w1)
    .displayValue(true);
  
  viz.slider.on('onchange', val => {
    if (val < viz.sliderOldVal || viz.PLAYING) {
      viz.slider.silentValue(viz.sliderOldVal);
      return;
    }
    runInfections();
    viz.sliderOldVal = val;
  });
  
  d3.select('.slider')
    .append('svg')
    .attr('width', w2)
    .attr('height', 80)
    .append('g')
    .attr('transform', 'translate(30,30)')
    .call(viz.slider);

  d3.select('.r0slider')
    .on('input', function() {
      r0 = this.value;
      d3.select('.r0val')
        .html("R<sub>0</sub> = " + Number(r0).toFixed(1));
    });
  
  // init buttons
  d3.select('.restart.button')
    .on('click', () => restart());
  
  d3.select('.play.button')
    .on('click', () => {
      let background_color = '#008CBA';
      let color = 'white';
      if (viz.PLAYING) {
        background_color = 'white';
        color = 'black';
      }
      d3.select('.play.button')
        .style("background-color", background_color)
        .style("color", color);
      playSimulation();
    });

  // start running
  initializeCases();
  updateCountDisplays();
  showVis();
}

// hide loading graphic and show viz
function showVis() {
  d3.select('.loader-wrapper').style('display', 'none');
  d3.select('#viz').style('display', 'block');
}

// run X times for each value of r0 and take averages, download to csv
function calcChartData() {
  let numRuns = 100;

  let r0_arr = [1, 2, 2.5, 3, 4, 5.7];
  let res = [];

  for (r of r0_arr) {
    r0 = r;

    let totals = []; 
    for (let i = 0; i < SIMULATION_WEEKS; i++) {
      totals.push([0, 0, 0]);
    }

    for (let i = 0; i < numRuns; i++) {
      let single = runSiumulation();  
      for (let j = 0; j < SIMULATION_WEEKS; j++) {
        totals[j][0] += single[j][0];
        totals[j][1] += single[j][1];
        totals[j][2] += single[j][2];
      }
    }
    //compute averages
    for (let j = 0; j < SIMULATION_WEEKS; j++) {
      totals[j][0] /= numRuns;
      totals[j][1] /= numRuns;
      totals[j][2] /= numRuns;
      totals[j].push(totals[j][1] + totals[j][2]);
    }
    res.push(totals);
    
  }
  let str = 'r0,week,healthy,infected,recovered,total_cases\n';
  for (let i = 0; i < r0_arr.length; i++) {
    for (let j = 0; j < SIMULATION_WEEKS; j++) {
      str += r0_arr[i] + ',' + j + ',' + res[i][j][0] + ',' + res[i][j][1] + ',' + res[i][j][2] + ',' + res[i][j][3] + '\n'; 
    }
  }
  
  console.log(str);
  let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/results;charset=utf-8,' + encodeURI(str);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'curve_data.csv';
    hiddenElement.click();
}

// for testing & collecting data purposes - doesn't show viz
function runSiumulation() {
  let results = [];
  results.push(restart(true));
  for (let i = 1; i < SIMULATION_WEEKS; i++) {
    results.push(runInfections(true));
  }
  return results;
}

// to automatically run with the play button 
async function playSimulation() {
  if (viz.PLAYING) {
    viz.PLAYING = false;  //stop play
    return;
  }
  // at end of slider -> restart to week 0 before playing
  if (viz.sliderOldVal === SIMULATION_WEEKS-1) {
    restart();
    d3.select('.play.button')
      .style("background-color", '#008CBA')
      .style("color", 'white');
    await sleep(1400);
  }
  viz.PLAYING = true;

  for (let i = viz.sliderOldVal+1; i < SIMULATION_WEEKS; i++) {
    if (!viz.PLAYING)
      return;
    viz.slider.silentValue(i);
    viz.sliderOldVal = i;
    runInfections();
    await sleep(1400);
  }
  viz.PLAYING = false;
  d3.select('.play.button')
    .style("background-color", 'white')
    .style("color", 'black');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// calculate average number connections a student has
function averageConnections(nodes) {
  let totConnections = 0;
  let totNodes = nodes.length;
  for (n of nodes) {
    totConnections += n.connections.length;
  }
  return totConnections / totNodes;
}
