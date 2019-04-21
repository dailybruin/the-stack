// Load and munge data, then make the visualization.
let landfillFileName = "/datasets/waste-audits/LandfillOther.csv";
let landfillFields = ["Landfill", "Construction", "OCC"];
let recyclingFileName = "/datasets/waste-audits/Recycling.csv";
let recyclingFields = ["Recycling", "Paper", "Plastic", "Metal", "Glass", "Straws & Utensils"];
let compostFileName = "/datasets/waste-audits/Compost.csv";
let compostFields = ["Compost", "Liquid", "Edible", "Non-edible", "Napkins"];

let dropdown = d3.select("#dropdown-menu")
  .insert("select", "svg");
let landfillMap = {};
let recyclingMap = {};
let compostMap = {};
let landfills;
let dropdownValue;
// Handler for dropdown value change
let DropdownChange = function () {
  dropdownValue = d3.select(this).property('value');
  makeLandfillVis(landfillMap);
  makeRecyclingVis(recyclingMap);
  makeCompostVis(compostMap);
};

dropdown
  .on("change", DropdownChange);

d3.csv(landfillFileName, function (error, data) { //landfill csv input
  data.forEach(function (d) {
    let place = d.place;
    landfillMap[place] = [];

    // { cerealName: [ bar1Val, bar2Val, ... ] }
    landfillFields.forEach(function (field) {
      landfillMap[place].push(+d[field]);
      //console.log(+d[field]);
    });
  });
  // Get names of places, for dropdown
  landfills = Object.keys(landfillMap).sort();
  dropdownValue = landfills[0];
  dropdown.selectAll("option")
    .data(landfills)
    .enter().append("option")
    .attr("value", function (d) { return d; })
    .text(function (d) {
      return d[0].toUpperCase() + d.slice(1, d.length); // capitalize 1st letter
    });
  makeLandfillVis(landfillMap);
});

d3.csv(recyclingFileName, function (error, data) { //recycling csv input
  data.forEach(function (d) {
    let place = d.place;
    recyclingMap[place] = [];

    // { cerealName: [ bar1Val, bar2Val, ... ] }
    recyclingFields.forEach(function (field) {
      recyclingMap[place].push(+d[field]);
      //console.log(+d[field]);
    });
  });
  makeRecyclingVis(recyclingMap);
});

d3.csv(compostFileName, function (error, data) { //compost csv input
  data.forEach(function (d) {
    let place = d.place;
    compostMap[place] = [];

    // { cerealName: [ bar1Val, bar2Val, ... ] }
    compostFields.forEach(function (field) {
      compostMap[place].push(+d[field]);
      //console.log(+d[field]);
    });
  });
  makeCompostVis(compostMap);
});



let makeLandfillVis = function (landfillMap) {
  // Define dimensions of vis
  let margin = { top: 30, right: 30, bottom: 70, left: 40 },
    width = 370 - margin.left - margin.right,
    height = 490 - margin.top - margin.bottom;

  // Make x scale
  let xScale = d3.scale.ordinal()
    .domain(landfillFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  let yScale = d3.scale.linear()
    .range([height, 0]);

  //trying to remove the old graphs
  /*let oldcanvas = document.getElementById("#landfillGraph");
  oldcanvas.innerHTML = "";*/

  // Delete old canvas and create new canvasas
  d3.select("#landfillGraph")
    .selectAll("*")
    .remove();
  let canvas = d3.select("#landfillGraph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Make x-axis and add to canvas
  let xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

  canvas.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("x", 90)
    .attr("y", 40)
    .text("Landfill Bins")
    .attr("font-size", "18px")
    .attr("font-weight", "bold");

  // Make y-axis and add to canvas
  let yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

  let yAxisHandleForUpdate = canvas.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  yAxisHandleForUpdate.append("text")
    .attr("y", -25)
    .attr("x", 60)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Percentage")
    .attr("font-weight", "bold")
    .attr("font-size", "18px");

  let updateLandfillBars = function (data) {
    // First update the y-axis domain to match data
    yScale.domain(d3.extent([0, 100]));
    yAxisHandleForUpdate.call(yAxis);

    let bars = canvas.selectAll(".bar").data(data);

    // Add bars for new data
    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d, i) { return xScale(landfillFields[i]); })
      .attr("width", xScale.rangeBand())
      .attr("y", function (d, i) { return yScale(d); })
      .attr("height", function (d, i) { return height - yScale(d); });

    //WORKING ON TEXT ON BARS
    bars.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function (d) { return d; });

    let isMobile = window.innerWidth <= 767 ? true : false;
    let tooltip = d3.select("body").append("div") //tooltip stuff
      .style("position", "absolute")
      .style("z-index", "10") //depth of the tooltip
      .style("visibility", "hidden") //makes the tooltip hidden
      .style("color", "white")
      .style("padding", "8px")
      .style("background-color", "rgba(0, 0, 0, 0.75)")
      .style("border-radius", "6px")
      .style("font", "12px sans-serif")
      .text("tooltip");
    //where tooltip code will go
    if (!isMobile) {
      bars.on("mouseover", function (d, i) {
        tooltip.html(d + '%'); //creates the text when you mouseover
        tooltip.style("visibility", "visible"); //makes the tooltip visible
      })
        .on("mousemove", function () {
          return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px"); //makes the tooltip next to the cursor
        })
        .on("mouseout", function () {
          return tooltip.style("visibility", "hidden") //makes the tooltip disappear when you cursor out
        });
    }
  };

  updateLandfillBars(landfillMap[dropdownValue]);
};




//---------------------------------------------------------------------------------------------------------
// Load and munge data, then make the visualization.



let makeRecyclingVis = function (recyclingMap) {
  // Define dimensions of vis
  let margin = { top: 30, right: 30, bottom: 70, left: 40 },
    width = 530 - margin.left - margin.right,
    height = 490 - margin.top - margin.bottom;

  // Make x scale
  let xScale = d3.scale.ordinal()
    .domain(recyclingFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  let yScale = d3.scale.linear()
    .range([height, 0]);

  // Delete old canvas and create new canvasas
  d3.select("#recyclingGraph")
    .selectAll("*")
    .remove();

  let canvas = d3.select("#recyclingGraph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Make x-axis and add to canvas
  let xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

  canvas.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("x", 180)
    .attr("y", 40)
    .text("Recycling Bins")
    .attr("font-size", "18px")
    .attr("font-weight", "bold");

  // Make y-axis and add to canvas
  let yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

  let yAxisHandleForUpdate = canvas.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  yAxisHandleForUpdate.append("text")
    .attr("y", -25)
    .attr("x", 60)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Percentage")
    .attr("font-weight", "bold")
    .attr("font-size", "18px");

  let updateRecyclingBars = function (data) {
    // First update the y-axis domain to match data
    yScale.domain(d3.extent([0, 100]));
    yAxisHandleForUpdate.call(yAxis);

    let bars = canvas.selectAll(".bar").data(data);

    // Add bars for new data
    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d, i) { return xScale(recyclingFields[i]); })
      .attr("width", xScale.rangeBand())
      .attr("y", function (d, i) { return yScale(d); })
      .attr("height", function (d, i) { return height - yScale(d); });

    let isMobile = window.innerWidth <= 767 ? true : false;
    let tooltip = d3.select("body").append("div") //tooltip stuff
      .style("position", "absolute")
      .style("z-index", "10") //depth of the tooltip
      .style("visibility", "hidden") //makes the tooltip hidden
      .style("color", "white")
      .style("padding", "8px")
      .style("background-color", "rgba(0, 0, 0, 0.75)")
      .style("border-radius", "6px")
      .style("font", "12px sans-serif")
      .text("tooltip");
    //where tooltip code will go
    if (!isMobile) {
      bars.on("mouseover", function (d, i) {
        tooltip.html(d + '%'); //creates the text when you mouseover
        tooltip.style("visibility", "visible"); //makes the tooltip visible
      })
        .on("mousemove", function () {
          return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px"); //makes the tooltip next to the cursor
        })
        .on("mouseout", function () {
          return tooltip.style("visibility", "hidden") //makes the tooltip disappear when you cursor out
        });
    }
  };

  updateRecyclingBars(recyclingMap[dropdownValue]);
};


//---------------------------------------------------------------------------------------------------------
// Load and munge data, then make the visualization.

let makeCompostVis = function (compostMap) {
  // Define dimensions of vis
  let margin = { top: 30, right: 30, bottom: 70, left: 40 },
    width = 500 - margin.left - margin.right,
    height = 490 - margin.top - margin.bottom;

  // Make x scale
  let xScale = d3.scale.ordinal()
    .domain(compostFields)
    .rangeRoundBands([0, width], 0.1);

  // Make y scale, the domain will be defined on bar update
  let yScale = d3.scale.linear()
    .range([height, 0]);

  // Delete old canvas and create new canvas
  d3.select("#compostGraph")
    .selectAll("*")
    .remove();

  let canvas = d3.select("#compostGraph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Make x-axis and add to canvas
  let xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

  canvas.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("x", 190)
    .attr("y", 40)
    .text("Compost Bins")
    .attr("font-size", "18px")
    .attr("font-weight", "bold");

  // Make y-axis and add to canvas
  let yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

  let yAxisHandleForUpdate = canvas.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  yAxisHandleForUpdate.append("text")
    .attr("y", -25)
    .attr("x", 60)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Percentage")
    .attr("font-weight", "bold")
    .attr("font-size", "18px");

  let updateCompostBars = function (data) {
    // First update the y-axis domain to match data
    yScale.domain(d3.extent([0, 100]));
    yAxisHandleForUpdate.call(yAxis);

    let bars = canvas.selectAll(".bar").data(data);

    // Add bars for new data
    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d, i) { return xScale(compostFields[i]); })
      .attr("width", xScale.rangeBand())
      .attr("y", function (d, i) { return yScale(d); })
      .attr("height", function (d, i) { return height - yScale(d); });

    let isMobile = window.innerWidth <= 767 ? true : false;
    let tooltip = d3.select("body").append("div") //tooltip stuff
      .style("position", "absolute")
      .style("z-index", "10") //depth of the tooltip
      .style("visibility", "hidden") //makes the tooltip hidden
      .style("color", "white")
      .style("padding", "8px")
      .style("background-color", "rgba(0, 0, 0, 0.75)")
      .style("border-radius", "6px")
      .style("font", "12px sans-serif")
      .text("tooltip");
    //where tooltip code will go
    if (!isMobile) {
      bars.on("mouseover", function (d, i) {
        tooltip.html(d + '%'); //creates the text when you mouseover
        tooltip.style("visibility", "visible"); //makes the tooltip visible
      })
        .on("mousemove", function () {
          return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px"); //makes the tooltip next to the cursor
        })
        .on("mouseout", function () {
          return tooltip.style("visibility", "hidden") //makes the tooltip disappear when you cursor out
        });
    }
  };

  updateCompostBars(compostMap[dropdownValue]);
};
