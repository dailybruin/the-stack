// Load and munge data, then make the visualization.
let precovidFileName = '/datasets/covid-grade-inflation/LG_19sum.csv';
let precovidFields = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
let postcovidFileName = '/datasets/covid-grade-inflation/LG_20sum.csv';
let postcovidFields = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];



let dropdown = d3.select('#dropdown-menu').insert('select', 'svg');
let precovidMap = {};
let postcovidMap = {};

let CLASSES;
let dropdownValue = 'Choose a Class';
let precovidCanvas;
let precovidxScale;
let precovidheight;
let precovidyScale;
let postcovidCanvas;
let postcovidxScale;
let postcovidheight;
let postcovidyScale;

let changeDuration = 300;
let delayDuration = 100;

// Handler for dropdown value change
let DropdownChange = function () {
  dropdownValue = d3.select(this).property('value');
  updateprecovidBars(precovidMap[dropdownValue]);
  updatepostcovidBars(postcovidMap[dropdownValue]);
};

dropdown.on('change', DropdownChange);

d3.csv(precovidFileName, function (error, data) {
  //precovid csv input
  data.forEach(function (d) {
    let CLASS = d.CLASS;
    precovidMap[CLASS] = [];
    // { cerealName: [ bar1Val, bar2Val, ... ] }
    precovidFields.forEach(function (field) {
      precovidMap[CLASS].push(+d[field]);
    });
  });
  // Get names of CLASSES, for dropdown
  CLASSES = Object.keys(precovidMap);
  dropdown
    .selectAll('option')
    .data(CLASSES)
    .enter()
    .append('option')
    .attr('value', function (d) {
      return d;
    })
    .text(function (d) {
      return d[0].toUpperCase() + d.slice(1, d.length); // capitalize 1st letter
    });
  dropdownValue = CLASSES[0];
  makePrecovidVis(precovidMap);
});


let updatePrecovidBars = function (data) {
  let bars = precovidCanvas.selectAll('.bar').data(data);
  // Add bars for new data
  precovidCanvas
    .selectAll('.bar')
    .select('*')
    .remove();

  bars
    .enter()
    .append('rect')
    .attr('class', 'bar');
  bars
    .transition()
    .duration(changeDuration)
    .ease('linear')
    .attr('x', function (d, i) {
      return precovidxScale(precovidFields[i]);
    })
    .attr('width', precovidxScale.rangeBand())
    .attr('y', function (d, i) {
      return precovidyScale(d);
    })
    .attr('height', function (d, i) {
      return precovidheight - precovidyScale(d);
    })
    .text(function (d) {
      return d;
    });

  let values = precovidCanvas.selectAll('.text').data(data);
  precovidCanvas.selectAll('.label').remove();
  values
    .enter()
    .append('text')
    .attr('class', 'label')
    .transition()
    .delay(changeDuration)
    .style('fill', 'black')
    .attr('text-anchor', 'middle')
    .attr('x', function (d, i) {
      return precovidxScale(precovidFields[i]);
    })
    .attr('dx', 42)
    .attr('y', function (d, i) {
      return precovidyScale(d);
    })
    .attr('dy', -3)
    .attr('font-weight', 'bold')
    .text(function (d) {
      return d;
    });
};

let makePrecovidVis = function (precovidMap) {
  // Define dimensions of vis
  let margin = { top: 50, right: 30, bottom: 70, left: 40 },
    width = 360 - margin.left - margin.right;
  precovidheight = 500 - margin.top - margin.bottom;

  // Make x scale
  precovidxScale = d3.scale
    .ordinal()
    .domain(precovidFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  precovidyScale = d3.scale
    .linear()
    .range([precovidheight, 0])
    .domain(d3.extent([0, 100]));

  precovidCanvas = d3
    .select('#precovidGraph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', precovidheight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  //Make x - axis and add to canvas
  let xAxis = d3.svg
    .axis()
    .scale(precovidxScale)
    .orient('bottom');

  precovidCanvas
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + precovidheight + ')')
    .call(xAxis)
    .append('text')
    .attr('x', 111)
    .attr('y', 50)
    .text('pre-COVID')
    .attr('font-size', '24px')
    .attr('font-weight', 'bold');

  // Make y-axis and add to canvas
  let yAxis = d3.svg
    .axis()
    .scale(precovidyScale)
    .orient('left');

  let yAxisHandleForUpdate = precovidCanvas
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  yAxisHandleForUpdate
    .append('text')
    .attr('y', -35)
    .attr('x', 88)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Percentage')
    .attr('font-weight', 'bold')
    .attr('font-size', '22px');

  updatePrecovidBars(precovidMap[dropdownValue]);
};

//---------------------------------------------------------------------------------------------------------
// Load and munge data, then make the visualization.
// let updatePostcovidBars = function (data) {
//   let bars = postcovidCanvas.selectAll('.bar').data(data);
//   // Add bars for new data
//   postcovidCanvas
//     .selectAll('.bar')
//     .select('*')
//     .remove();

//   bars
//     .enter()
//     .append('rect')
//     .attr('class', 'bar');
//   bars
//     .transition()
//     .duration(changeDuration)
//     .ease('linear')
//     .attr('x', function (d, i) {
//       return postcovidxScale(postcovidFields[i]);
//     })
//     .attr('width', postcovidxScale.rangeBand())
//     .attr('y', function (d, i) {
//       return postcovidyScale(d);
//     })
//     .attr('height', function (d, i) {
//       return postcovidheight - postcovidyScale(d);
//     })
//     .text(function (d) {
//       return d;
//     });

//   let values = postcovidCanvas.selectAll('.text').data(data);
//   postcovidCanvas.selectAll('.label').remove();
//   values
//     .enter()
//     .append('text')
//     .attr('class', 'label')
//     .transition()
//     .delay(changeDuration)
//     .style('fill', 'black')
//     .attr('text-anchor', 'middle')
//     .attr('x', function (d, i) {
//       return postcovidxScale(postcovidFields[i]);
//     })
//     .attr('dx', 31)
//     .attr('y', function (d, i) {
//       return postcovidyScale(d);
//     })
//     .attr('dy', -3)
//     .attr('font-weight', 'bold')
//     .text(function (d) {
//       return d;
//     });
// };

// let makePostcovidVis = function (postcovidMap) {
//   // Define dimensions of vis
//   let margin = { top: 50, right: 30, bottom: 70, left: 40 },
//     width = 450 - margin.left - margin.right;
//   postcovidheight = 500 - margin.top - margin.bottom;

//   // Make x scale
//   postcovidxScale = d3.scale
//     .ordinal()
//     .domain(postcovidFields)
//     .rangeRoundBands([0, width], 0.1);

//   // Make y scale, the domain will be defined on bar update
//   postcovidyScale = d3.scale
//     .linear()
//     .range([postcovidheight, 0])
//     .domain(d3.extent([0, 100]));

//   postcovidCanvas = d3
//     .select('#postcovidGraph')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', postcovidheight + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//   // Make x-axis and add to canvas
//   let xAxis = d3.svg
//     .axis()
//     .scale(postcovidxScale)
//     .orient('bottom');

//   postcovidCanvas
//     .append('g')
//     .attr('class', 'x axis')
//     .attr('transform', 'translate(0,' + postcovidheight + ')')
//     .call(xAxis)
//     .append('text')
//     .attr('x', 167)
//     .attr('y', 50)
//     .text('Post-COVID')
//     .attr('font-size', '24px')
//     .attr('font-weight', 'bold');

//   // Make y-axis and add to canvas
//   // let yAxis = d3.svg
//   //   .axis()
//   //   .scale(postcovidScale)
//   //   .orient('left');

//   let yAxisHandleForUpdate = postcovidCanvas
//     .append('g')
//     .attr('class', 'y axis')
//     .call(yAxis);

//   /*yAxisHandleForUpdate
//     .append('text')
//     .attr('y', -25)
//     .attr('x', 60)
//     .attr('dy', '.71em')
//     .style('text-anchor', 'end')
//     .text('Percentage')
//     .attr('font-weight', 'bold')
//     .attr('font-size', '18px');*/

//   updatePostcovidBars(postcovidMap[dropdownValue]);
// };


