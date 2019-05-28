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
let compostFields = [
  'Compost',
  'Liquid',
  'Edible',
  'Inedible',
  'Napkins',
];

let dropdown = d3.select('#dropdown-menu').insert('select', 'svg');
let landfillMap = {};
let recyclingMap = {};
let compostMap = {};
let places;
let dropdownValue = 'Hedrick Lounges';
let landfillCanvas;
let landfillxScale;
let landfillheight;
let landfillyScale;
let recyclingCanvas;
let recyclingxScale;
let recyclingheight;
let recyclingyScale;
let compostCanvas;
let compostxScale;
let compostheight;
let compostyScale;
let changeDuration = 300;
let delayDuration = 100;

// Handler for dropdown value change
let DropdownChange = function() {
  dropdownValue = d3.select(this).property('value');
  updateLandfillBars(landfillMap[dropdownValue]);
  updateRecyclingBars(recyclingMap[dropdownValue]);
  updateCompostBars(compostMap[dropdownValue]);
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
    });
  });
  // Get names of places, for dropdown
  places = Object.keys(landfillMap);
  dropdown
    .selectAll('option')
    .data(places)
    .enter()
    .append('option')
    .attr('value', function(d) {
      return d;
    })
    .text(function(d) {
      return d[0].toUpperCase() + d.slice(1, d.length); // capitalize 1st letter
    });
  dropdownValue = places[0];
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
    });
  });
  makeCompostVis(compostMap);
});

let updateLandfillBars = function(data) {
  let bars = landfillCanvas.selectAll('.bar').data(data);
  // Add bars for new data
  landfillCanvas
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
    .attr('x', function(d, i) {
      return landfillxScale(landfillFields[i]);
    })
    .attr('width', landfillxScale.rangeBand())
    .attr('y', function(d, i) {
      return landfillyScale(d);
    })
    .attr('height', function(d, i) {
      return landfillheight - landfillyScale(d);
    })
    .text(function(d) {
      return d;
    });

  let values = landfillCanvas.selectAll('.text').data(data);
  landfillCanvas.selectAll('.label').remove();
  values
    .enter()
    .append('text')
    .attr('class', 'label')
    .transition()
    .delay(changeDuration)
    .style('fill', 'black')
    .attr('text-anchor', 'middle')
    .attr('x', function(d, i) {
      return landfillxScale(landfillFields[i]);
    })
    .attr('dx', 42)
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
  let margin = { top: 50, right: 30, bottom: 70, left: 40 },
    width = 360 - margin.left - margin.right;
  landfillheight = 500 - margin.top - margin.bottom;

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
    .attr('x', 111)
    .attr('y', 50)
    .text('Landfill')
    .attr('font-size', '24px')
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
    .attr('y', -35)
    .attr('x', 88)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Percentage')
    .attr('font-weight', 'bold')
    .attr('font-size', '22px');

  updateLandfillBars(landfillMap[dropdownValue]);
};

//---------------------------------------------------------------------------------------------------------
// Load and munge data, then make the visualization.
let updateRecyclingBars = function(data) {
  let bars = recyclingCanvas.selectAll('.bar').data(data);
  // Add bars for new data
  recyclingCanvas
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
    .attr('x', function(d, i) {
      return recyclingxScale(recyclingFields[i]);
    })
    .attr('width', recyclingxScale.rangeBand())
    .attr('y', function(d, i) {
      return recyclingyScale(d);
    })
    .attr('height', function(d, i) {
      return recyclingheight - recyclingyScale(d);
    })
    .text(function(d) {
      return d;
    });

  let values = recyclingCanvas.selectAll('.text').data(data);
  recyclingCanvas.selectAll('.label').remove();
  values
    .enter()
    .append('text')
    .attr('class', 'label')
    .transition()
    .delay(changeDuration)
    .style('fill', 'black')
    .attr('text-anchor', 'middle')
    .attr('x', function(d, i) {
      return recyclingxScale(recyclingFields[i]);
    })
    .attr('dx', 31)
    .attr('y', function(d, i) {
      return recyclingyScale(d);
    })
    .attr('dy', -3)
    .attr('font-weight', 'bold')
    .text(function(d) {
      return d;
    });
};

let makeRecyclingVis = function(recyclingMap) {
  // Define dimensions of vis
  let margin = { top: 50, right: 30, bottom: 70, left: 40 },
    width = 450 - margin.left - margin.right;
  recyclingheight = 500 - margin.top - margin.bottom;

  // Make x scale
  recyclingxScale = d3.scale
    .ordinal()
    .domain(recyclingFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  recyclingyScale = d3.scale
    .linear()
    .range([recyclingheight, 0])
    .domain(d3.extent([0, 100]));

  recyclingCanvas = d3
    .select('#recyclingGraph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', recyclingheight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Make x-axis and add to canvas
  let xAxis = d3.svg
    .axis()
    .scale(recyclingxScale)
    .orient('bottom');

  recyclingCanvas
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + recyclingheight + ')')
    .call(xAxis)
    .append('text')
    .attr('x', 167)
    .attr('y', 50)
    .text('Recycling')
    .attr('font-size', '24px')
    .attr('font-weight', 'bold');

  // Make y-axis and add to canvas
  let yAxis = d3.svg
    .axis()
    .scale(recyclingyScale)
    .orient('left');

  let yAxisHandleForUpdate = recyclingCanvas
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  /*yAxisHandleForUpdate
    .append('text')
    .attr('y', -25)
    .attr('x', 60)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Percentage')
    .attr('font-weight', 'bold')
    .attr('font-size', '18px');*/

  updateRecyclingBars(recyclingMap[dropdownValue]);
};
let updateCompostBars = function(data) {
  let bars = compostCanvas.selectAll('.bar').data(data);
  // Add bars for new data
  compostCanvas
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
    .attr('x', function(d, i) {
      return compostxScale(compostFields[i]);
    })
    .attr('width', compostxScale.rangeBand())
    .attr('y', function(d, i) {
      return compostyScale(d);
    })
    .attr('height', function(d, i) {
      return compostheight - compostyScale(d);
    })
    .text(function(d) {
      return d;
    });

  let values = compostCanvas.selectAll('.text').data(data);
  compostCanvas.selectAll('.label').remove();
  values
    .enter()
    .append('text')
    .attr('class', 'label')
    .transition()
    .delay(changeDuration)
    .style('fill', 'black')
    .attr('text-anchor', 'middle')
    .attr('x', function(d, i) {
      return compostxScale(compostFields[i]);
    })
    .attr('dx', 37)
    .attr('y', function(d, i) {
      return compostyScale(d);
    })
    .attr('dy', -3)
    .attr('font-weight', 'bold')
    .text(function(d) {
      return d;
    });
};

let makeCompostVis = function(compostMap) {
  // Define dimensions of vis
  let margin = { top: 50, right: 30, bottom: 70, left: 40 },
    width = 450 - margin.left - margin.right;
  compostheight = 500 - margin.top - margin.bottom;

  // Make x scale
  compostxScale = d3.scale
    .ordinal()
    .domain(compostFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  compostyScale = d3.scale
    .linear()
    .range([compostheight, 0])
    .domain(d3.extent([0, 100]));

  compostCanvas = d3
    .select('#compostGraph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', compostheight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Make x-axis and add to canvas
  let xAxis = d3.svg
    .axis()
    .scale(compostxScale)
    .orient('bottom');

  compostCanvas
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + compostheight + ')')
    .call(xAxis)
    .append('text')
    .attr('x', 165)
    .attr('y', 50)
    .text('Compost')
    .attr('font-size', '24px')
    .attr('font-weight', 'bold');

  // Make y-axis and add to canvas
  let yAxis = d3.svg
    .axis()
    .scale(compostyScale)
    .orient('left');

  let yAxisHandleForUpdate = compostCanvas
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  /*yAxisHandleForUpdate
    .append('text')
    .attr('y', -25)
    .attr('x', 60)
    .attr('dy', '.71em')
    .style('text-anchor', 'end')
    .text('Percentage')
    .attr('font-weight', 'bold')
    .attr('font-size', '18px');*/

  updateCompostBars(compostMap[dropdownValue]);
};
