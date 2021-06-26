// Load and munge data, then make the visualization.
let precovidFileName =
  '../../../../datasets/covid-grade-inflation/LGFALL19ZERO.csv';
let postcovidFileName = '../../../../datasets/covid-grade-inflation/LGFALL20ZERO.csv';

precovidMap = {};

let dropdownValue = 'All Classes';

// let changeDuration = 300;
// let delayDuration = 100;
let choice = 'A&O SCI 1 - BIANCHI, D.';
loadCSVData(choice);

d3
  .csv('/datasets/covid-grade-inflation/LGFALL19ZERO.csv', function (d) {
    return { CLASS: d.CLASS };
  })
  .then(function (data) {
    initDropdown(data);
  });

function initDropdown(classNames) {
  d3
    .select('#dropdown-menu')
    .on('change', function () {
      dropdownValue = d3.select(this).property('value');
      //MainChart.update();
      let choice = $('#dropdown-menu option:selected').text();
      loadCSVData(choice)
    })
    .selectAll('option')
    .data(classNames)
    .enter()
    .append('option')
    .attr('value', function (d) {
      return d.CLASS;
    })
    .text(function (d) {
      return d.CLASS;
      //[0].toUpperCase() + d.CLASS.slice(1, d.length); // capitalize 1st letter
    });
}

//let choice = $('#dropdown-menu option: selected').text();
console.log(choice);

const labels = [
  'A+',
  'A',
  'A-',
  'B+',
  'B',
  'B-',
  'C+',
  'C',
  'C-',
  'D+',
  'D',
  'D-',
  'F',
];

function loadCSVData(choice) {
  return new Promise(resolve => {
    d3.csv(precovidFileName).then(function (csv) {
      csv = csv.filter(function (row) {
        return row['CLASS'] == choice;
      });
      csv_conv = Array(csv)
      console.log(csv_conv)
      console.log(Object.keys(csv_conv));
      let precovidData = [csv_conv['A+'], csv['A']];
      console.log(precovidData)
      console.log('Inside csv function')
      resolve(csv);
    });
  });
}



let precovidData = [csv['A+'], csv['A']];
console.log(precovidData)
console.log('Made it to line 82')

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Grades During Online Learning',
      data: [65, 59, 12, 150, 98, 14, 18, 23, 10, 8, 5, 13, 8],
      backgroundColor: [
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
      ],
      // borderColor: [
      //     'purple',
      // ],
      borderWidth: 1,
      index: 1,
    },
    {
      label: 'Grades During On-Campus Learning',
      data: [80, 56, 43, 100, 25, 12, 25, 100, 10, 8, 5, 12, 32],
      backgroundColor: [
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
        'teal',
      ],
      // borderColor: [
      //     'teal',
      // ],
      index: 2,
    },
  ],
};

var ctxMain = document.getElementById('main-chart').getContext('2d');
var MainChart = new Chart(ctxMain, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: false,
  },
});

// let updatePrecovidBars = function (data) {
//   let bars = precovidCanvas.selectAll('.bar').data(data);
//   // Add bars for new data
//   precovidCanvas
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
//       return precovidxScale(precovidFields[i]);
//     })
//     .attr('width', precovidxScale.rangeBand())
//     .attr('y', function (d, i) {
//       return precovidyScale(d);
//     })
//     .attr('height', function (d, i) {
//       return precovidheight - precovidyScale(d);
//     })
//     .text(function (d) {
//       return d;
//     });

//   let values = precovidCanvas.selectAll('.text').data(data);
//   precovidCanvas.selectAll('.label').remove();
//   values
//     .enter()
//     .append('text')
//     .attr('class', 'label')
//     .transition()
//     .delay(changeDuration)
//     .style('fill', 'black')
//     .attr('text-anchor', 'middle')
//     .attr('x', function (d, i) {
//       return precovidxScale(precovidFields[i]);
//     })
//     .attr('dx', 42)
//     .attr('y', function (d, i) {
//       return precovidyScale(d);
//     })
//     .attr('dy', -3)
//     .attr('font-weight', 'bold')
//     .text(function (d) {
//       return d;
//     });
// };

// let makePrecovidVis = function (precovidMap) {
//   // Define dimensions of vis
//   let margin = { top: 50, right: 30, bottom: 70, left: 40 },
//     width = 360 - margin.left - margin.right;
//   precovidheight = 500 - margin.top - margin.bottom;

//   // Make x scale
//   precovidxScale = d3.scale
//     .ordinal()
//     .domain(precovidFields)
//     .rangeRoundBands([0, width], 0.1);

//   // Make y scale, the domain will be defined on bar update
//   precovidyScale = d3.scale
//     .linear()
//     .range([precovidheight, 0])
//     .domain(d3.extent([0, 100]));

//   precovidCanvas = d3
//     .select('#precovidGraph')
//     .append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', precovidheight + margin.top + margin.bottom)
//     .append('g')
//     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//   //Make x - axis and add to canvas
//   let xAxis = d3.svg
//     .axis()
//     .scale(precovidxScale)
//     .orient('bottom');

//   precovidCanvas
//     .append('g')
//     .attr('class', 'x axis')
//     .attr('transform', 'translate(0,' + precovidheight + ')')
//     .call(xAxis)
//     .append('text')
//     .attr('x', 111)
//     .attr('y', 50)
//     .text('pre-COVID')
//     .attr('font-size', '24px')
//     .attr('font-weight', 'bold');

//   // Make y-axis and add to canvas
//   let yAxis = d3.svg
//     .axis()
//     .scale(precovidyScale)
//     .orient('left');

//   let yAxisHandleForUpdate = precovidCanvas
//     .append('g')
//     .attr('class', 'y axis')
//     .call(yAxis);

//   yAxisHandleForUpdate
//     .append('text')
//     .attr('y', -35)
//     .attr('x', 88)
//     .attr('dy', '.71em')
//     .style('text-anchor', 'end')
//     .text('Percentage')
//     .attr('font-weight', 'bold')
//     .attr('font-size', '22px');

//   updatePrecovidBars(precovidMap[dropdownValue]);
// };

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
