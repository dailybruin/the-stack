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







// set the dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

console.log('Chart accessed')

// Initialize the X axis
const x = d3.scaleBand()
    .range([0, width])
    .padding(0.2);
const xAxis = svg.append("g")
    .attr("transform", `translate(0,${height})`);

// Initialize the Y axis
const y = d3.scaleLinear()
    .range([height, 0]);
const yAxis = svg.append("g")
    .attr("class", "myYaxis");


// A function that create / update the plot for a given variable:
function update(selectedVar) {

    // Parse the Data
    d3.csv(precovidFileName).then(function (data) {

        // X axis
        x.domain(data.map(d => d.group));
        xAxis.transition().duration(1000).call(d3.axisBottom(x));

        // Add Y axis
        y.domain([0, d3.max(data, d => +d[selectedVar])]);
        yAxis.transition().duration(1000).call(d3.axisLeft(y));

        // variable u: map data to existing bars
        const u = svg.selectAll("rect")
            .data(data)

        // update bars
        u.join("rect")
            .transition()
            .duration(1000)
            .attr("x", d => x(d.group))
            .attr("y", d => y(d[selectedVar]))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d[selectedVar]))
            .attr("fill", "#69b3a2")
    })

}

// Initialize plot
update('var1')