// Load and munge data, then make the visualization.
let landfillFileName = '/datasets/waste-audits/LandfillOther.csv';
let landfillFields = ['Landfill', 'Construction', 'Cardboard'];
let recyclingFileName = '/datasets/waste-audits/Recycling.csv';
let recyclingFields = [
  'Recycling',
  'Paper',
  'Plastic',
  'Metal',
  'Glass',
  'Utensils',
];
let compostFileName = '/datasets/waste-audits/Compost.csv';
let compostFields = ['Compost', 'Liquid', 'Edible', 'Non-edible', 'Napkins'];

let dropdown = d3.select('#dropdown-menu').insert('select', 'svg');
let landfillMap = {};
let recyclingMap = {};
let compostMap = {};
let landfills;
let dropdownValue;
let landfillCanvas;
let landfillxScale;
let landfillheight;
let landfillyScale;
let recycilngCanvas;
let compostCanvas;
let changeDuration = 300;
let delayDuration = 100;

// Handler for dropdown value change
let DropdownChange = function() {
  dropdownValue = d3.select(this).property('value');
  console.log(landfillMap[dropdownValue]);
  updateLandfillBars(landfillMap[dropdownValue]);
  makeRecyclingVis(recyclingMap);
  makeCompostVis(compostMap);
};

dropdown.on('change', DropdownChange);

d3.csv(landfillFileName, function(error, data) {
  //landfill csv input
  data.forEach(function(d) {
    let place = d.place;
    landfillMap[place] = [];

    // { cerealName: [ bar1Val, bar2Val, ... ] }
    landfillFields.forEach(function(field) {
      landfillMap[place].push(+d[field]);
      //console.log(+d[field]);
    });
  });
  // Get names of places, for dropdown
  landfills = Object.keys(landfillMap).sort();
  dropdown
    .selectAll('option')
    .data(landfills)
    .enter()
    .append('option')
    .attr('value', function(d) {
      return d;
    })
    .text(function(d) {
      return d[0].toUpperCase() + d.slice(1, d.length); // capitalize 1st letter
    });
  dropdownValue = landfills[0];
  makeLandfillVis(landfillMap);
});

d3.csv(recyclingFileName, function(error, data) {
  //recycling csv input
  data.forEach(function(d) {
    let place = d.place;
    recyclingMap[place] = [];

    // { cerealName: [ bar1Val, bar2Val, ... ] }
    recyclingFields.forEach(function(field) {
      recyclingMap[place].push(+d[field]);
      //console.log(+d[field]);
    });
  });
  makeRecyclingVis(recyclingMap);
});

d3.csv(compostFileName, function(error, data) {
  //compost csv input
  data.forEach(function(d) {
    let place = d.place;
    compostMap[place] = [];

    // { cerealName: [ bar1Val, bar2Val, ... ] }
    compostFields.forEach(function(field) {
      compostMap[place].push(+d[field]);
      //console.log(+d[field]);
    });
  });
  makeCompostVis(compostMap);
});

let updateLandfillBars = function(data) {
  let bars = landfillCanvas.selectAll('.bar').data(data);
  // Add bars for new data
  d3.select('.bar')
    .select('*')
    .remove();
  d3.selectAll('.values').remove();

  bars
    .enter()
    .append('rect')
    .attr('class', 'bar');
  bars
    .transition()
    .duration(changeDuration)
    .ease('linear')
    .attr('x', function(d, i) {
      return landfillxScale(landfillFields[i]);
    })
    .attr('width', landfillxScale.rangeBand())
    .attr('y', function(d, i) {
      return landfillyScale(d);
    })
    .attr('height', function(d, i) {
      return landfillheight - landfillyScale(d);
    });

  bars
    .enter()
    .append('text')
    .attr('class', 'values')
    .style('fill', 'black')
    .attr('text-anchor', 'middle')
    .attr('x', function(d, i) {
      return landfillxScale(landfillFields[i]);
    })
    .attr('dx', 43)
    .attr('y', function(d, i) {
      return landfillyScale(d);
    })
    .attr('dy', -3)
    .attr('font-weight', 'bold')
    .text(function(d) {
      return d;
    });
};

let makeLandfillVis = function(landfillMap) {
  // Define dimensions of vis
  let margin = { top: 30, right: 30, bottom: 70, left: 40 },
    width = 360 - margin.left - margin.right;
  landfillheight = 490 - margin.top - margin.bottom;

  // Make x scale
  landfillxScale = d3.scale
    .ordinal()
    .domain(landfillFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  landfillyScale = d3.scale
    .linear()
    .range([landfillheight, 0])
    .domain(d3.extent([0, 100]));

  // Delete old canvas and create new canvasas

  /*d3.select('#landfillGraph')
    .selectAll('*')
    .remove(); */

  landfillCanvas = d3
    .select('#landfillGraph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', landfillheight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Make x-axis and add to canvas
  let xAxis = d3.svg
    .axis()
    .scale(landfillxScale)
    .orient('bottom');

  landfillCanvas
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + landfillheight + ')')
    .call(xAxis)
    .append('text')
    .attr('x', 90)
    .attr('y', 40)
    .text('Landfill Bins')
    .attr('font-size', '18px')
    .attr('font-weight', 'bold');

  // Make y-axis and add to canvas
  let yAxis = d3.svg
    .axis()
    .scale(landfillyScale)
    .orient('left');

  let yAxisHandleForUpdate = landfillCanvas
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  yAxisHandleForUpdate
    .append('text')
    .attr('y', -25)
    .attr('x', 60)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Percentage')
    .attr('font-weight', 'bold')
    .attr('font-size', '18px');

  updateLandfillBars(landfillMap[dropdownValue]);
};

//---------------------------------------------------------------------------------------------------------
// Load and munge data, then make the visualization.

let makeRecyclingVis = function(recyclingMap) {
  // Define dimensions of vis
  let margin = { top: 30, right: 30, bottom: 70, left: 40 },
    width = 530 - margin.left - margin.right,
    height = 490 - margin.top - margin.bottom;

  // Make x scale
  let xScale = d3.scale
    .ordinal()
    .domain(recyclingFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  let yScale = d3.scale.linear().range([height, 0]);

  // Delete old canvas and create new canvasas
  d3.select('#recyclingGraph')
    .selectAll('*')
    .remove();

  let canvas = d3
    .select('#recyclingGraph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Make x-axis and add to canvas
  let xAxis = d3.svg
    .axis()
    .scale(xScale)
    .orient('bottom');

  canvas
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
    .append('text')
    .attr('x', 180)
    .attr('y', 40)
    .text('Recycling Bins')
    .attr('font-size', '18px')
    .attr('font-weight', 'bold');

  // Make y-axis and add to canvas
  let yAxis = d3.svg
    .axis()
    .scale(yScale)
    .orient('left');

  let yAxisHandleForUpdate = canvas
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  yAxisHandleForUpdate
    .append('text')
    .attr('y', -25)
    .attr('x', 60)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Percentage')
    .attr('font-weight', 'bold')
    .attr('font-size', '18px');

  let updateRecyclingBars = function(data) {
    // First update the y-axis domain to match data
    yScale.domain(d3.extent([0, 100]));
    yAxisHandleForUpdate.call(yAxis);

    let bars = canvas.selectAll('.bar').data(data);
    console.log('recycling bars: ' + bars);
    // Add bars for new data
    bars
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d, i) {
        return xScale(recyclingFields[i]);
      })
      .attr('width', xScale.rangeBand())
      .attr('y', function(d, i) {
        return yScale(d);
      })
      .attr('height', function(d, i) {
        return height - yScale(d);
      });

    bars
      .enter()
      .append('text')
      .attr('x', function(d, i) {
        return xScale(recyclingFields[i]);
      })
      .attr('dx', 34)
      .attr('text-anchor', 'middle')
      .attr('y', function(d, i) {
        return yScale(d);
      })
      .attr('dy', -3)
      .attr('font-weight', 'bold')
      .text(function(d) {
        return d;
      });
  };

  updateRecyclingBars(recyclingMap[dropdownValue]);
};

//---------------------------------------------------------------------------------------------------------
// Load and munge data, then make the visualization.

let makeCompostVis = function(compostMap) {
  // Define dimensions of vis
  let margin = { top: 30, right: 30, bottom: 70, left: 40 },
    width = 450 - margin.left - margin.right,
    height = 490 - margin.top - margin.bottom;

  // Make x scale
  let xScale = d3.scale
    .ordinal()
    .domain(compostFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  let yScale = d3.scale.linear().range([height, 0]);

  // Delete old canvas and create new canvas

  d3.select('#compostGraph')
    .selectAll('*')
    .remove();

  let canvas = d3
    .select('#compostGraph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Make x-axis and add to canvas
  let xAxis = d3.svg
    .axis()
    .scale(xScale)
    .orient('bottom');

  canvas
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
    .append('text')
    .attr('x', 190)
    .attr('y', 40)
    .text('Compost Bins')
    .attr('font-size', '18px')
    .attr('font-weight', 'bold');

  // Make y-axis and add to canvas
  let yAxis = d3.svg
    .axis()
    .scale(yScale)
    .orient('left');

  let yAxisHandleForUpdate = canvas
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  yAxisHandleForUpdate
    .append('text')
    .attr('y', -25)
    .attr('x', 60)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Percentage')
    .attr('font-weight', 'bold')
    .attr('font-size', '18px');

  let updateCompostBars = function(data) {
    // First update the y-axis domain to match data
    yScale.domain(d3.extent([0, 100]));
    yAxisHandleForUpdate.call(yAxis);

    let bars = canvas.selectAll('.bar').data(data);

    // Add bars for new data
    bars
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function(d, i) {
        return xScale(compostFields[i]);
      })
      .attr('width', xScale.rangeBand())
      .attr('y', function(d, i) {
        return yScale(d);
      })
      .attr('height', function(d, i) {
        return height - yScale(d);
      });

    bars
      .enter()
      .append('text')
      .attr('x', function(d, i) {
        return xScale(compostFields[i]);
      })
      .attr('dx', 38)
      .attr('text-anchor', 'middle')
      .attr('y', function(d, i) {
        return yScale(d);
      })
      .attr('dy', -3)
      .attr('font-weight', 'bold')
      .text(function(d) {
        return d;
      });
  };

  updateCompostBars(compostMap[dropdownValue]);
};
