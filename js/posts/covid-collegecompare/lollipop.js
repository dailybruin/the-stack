//import * as d3 from "d3";

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 100},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


        // Parse the Data
d3.json("/datasets/covid-collegecompare/college_compare.json").then(function(data){
//console.log("HELLO")
//console.log(data);
//console.log(d3.keys(data));
schools = d3.keys(data);
var testkey = "cancelled_classes";
var cases = [];
var start = [];
for(var key in data)
{
    cases.push(parseInt(data[key].cancelled_classes.cases));
    start.push(0);
}

// Add X axis
var x = d3.scaleLinear()
    .domain([0, 500])
    .range([ 0, width]);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

//console.log(schools.map(function(d) { return data[d].cancelled_classes.cases;}));
//console.log(function(schools) { return y(schools);});

    // Y axis
var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(schools.map(function(schools) { return schools; }))
svg.append("g")
    .call(d3.axisLeft(y));
// Lines
//console.log("DATA");
//console.log(data);
/*svg.selectAll("myline")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", (function(d) { return data[d].cancelled_classes.cases;}))
    .attr("x2", x(0))
    .attr("y1", function(schools) { return schools; })
    .attr("y2", function(schools) { return schools; })
    .attr("stroke", "grey");*/
d3.selectAll("myline")
    .data(data.UCLA)
    .enter()
    .append("line")
    .attr("x1", function(d){
        var cases = [];
        console.log("here");
        console.log(d);
        for(var key in data)
        {
            console.log("D");
            console.log(d);
        cases.push(parseInt(data[key].cancelled_classes.cases));
        }
        return x(cases);
    })
    .attr("x2", function(d){
        var start = [];
        for(var key in data)
        {
        start.push(0);
        }
        return x(start);})
    .attr("y1", Object.keys(data).map(function(schools) { return y(schools); }))
    .attr("y2", Object.keys(data).map(function(schools) { return y(schools); }))
    .attr("stroke", "grey")
// Circles
var circles;
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", schools.map(function(d){ return x(data[d].cancelled_classes.cases);}))
    .attr("cy", schools.map(function(d) { return y(d); }))
    .attr("r", "4")
    .style("fill", "#69B3A2")
    .attr("stroke", "black")
})