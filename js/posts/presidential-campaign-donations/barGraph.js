var margin = {top: 30, right: 0, bottom: 50, left: 50},
	width = 630 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var xScale = d3.scale.linear()
	.range([0, width]);

var yScale = d3.scale.ordinal()
	.rangeRoundBands([height, 0], 0.1);

/* ADD BARCHART DIV TO HTML */
var barSVG = d3.select("#barChart").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var xAxis = barSVG.append("g")
	.attr("class", "x axis")
	.call(xScale.axis = d3.svg.axis().scale(xScale).orient("top"));

var yAxis = barSVG.append("g")
	.attr("class", "y axis")
	.call(yScale.axis = d3.svg.axis().scale(yScale).orient("left"));

var schoolRects;
var currMode = 1;

function initBarGraph(initData) {
	transitionyScale(initData);

	dataRects = barSVG.selectAll(".dataRect")
		.data(initData.colleges)
		.enter().append("g")
		.attr("class", function(d) { return "dataRect " + d.name;});

	dataRects.append("rect")
		.attr("x", 0)
		.attr("y", function(d) { return yScale(d.name); })
		.attr("width", function(d) { return xScale(d.total); })
		.attr("height", yScale.rangeBand())
		.style("fill", "#ff8c00");
}

function transitionyScale(transitionData) {
	// for (var i = 0; i < transitionData.colleges.length; i++)
	// 	console.log(transitionData.colleges[i].name);
	console.log(transitionData)
// ;	if (transitionData)
	var map;
	var newYDomain = [];
	var newXDomain = [];

	// map = transitionData.map(function(d) {
	// 	newYDomain.push(d["key"]);
	// });
	// newXDomain = [0, d3.max(transitionData, function(d) { return parseInt(d.values[0]["total"]); })];
	if (transitionData.colleges.length == 0)
		return;
	map = transitionData.colleges.map(function(d) {
		newYDomain.push(d["name"]);
	});
	newXDomain = [0, d3.max(transitionData.colleges, function(d) { return parseInt(d.total); })];

	yScale.domain(newYDomain);
	yScale.rangeRoundBands([newYDomain.length*50, 0], 0.1);

	yAxis.transition()
		.duration(500)
		.ease("linear")
		.call(yScale.axis);

	// console.log(newXDomain);
	xScale.domain(newXDomain);

	xAxis.transition()
		.duration(500)
		.ease("linear")
		.call(xScale.axis);

}

function transitionBarGraph(data) {
	transitionyScale(data);
	console.log(data);

	var dataRects = d3.selectAll(".dataRect").select("rect")
		.transition()
		.duration(500)
		.attr("width", 0);

	for (var i = 0; i < data.colleges.length; i++) {
		var specificSchoolRect = d3.select("." + data.colleges[i].name);

		// console.log(data.colleges[i]);
		// specificSchoolRect.data(data.colleges[i]);

		specificSchoolRect.select("rect").transition()
			.duration(500)
			.attr("y", function(d, i) {
				return yScale(d.name); })
			.attr("height", function(d) {
				// if (data.colleges.length < 4)
				// 	return 50;
				return yScale.rangeBand();
			})
			.attr("width", function(d) {
				// if (xScale(data.colleges[i].total) == NaN)
				// 	return 0;
				return xScale(data.colleges[i].total);
			});
	}
}


d3.json("/datasets/presidential-campaign-donations/result.json", function(data) {
	var nest = d3.nest()
   	 	.key(function(d) { return d.party; })
    	.entries(data);

    /* init Bar Graph with Hillary's data */
    initBarGraph(data[0]);
});
