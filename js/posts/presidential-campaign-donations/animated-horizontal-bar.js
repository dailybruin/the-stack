var margin = {top: 50, right: 10, bottom: 50, left: 50},
	width = 630 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

var xScale = d3.scale.linear()
  .domain([0, 1])
	.range([0, width]);

var yScale = d3.scale.ordinal()
	.rangeRoundBands([height, 0], 0.1);

/* ADD BARCHART DIV TO HTML */
var barSVG = d3.select("#animated-horizontal-bar").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var xAxis2 = barSVG.append("g")
	.attr("class", "x axis")
	.call(xScale.axis = d3.svg.axis().scale(xScale).orient("top"))
  .append("text")
  .attr("x", 570)
  .attr("y", -20)
  .style("text-anchor", "end")
  .text("Percentage from UC schools (%)");

var yAxis2 = barSVG.append("g")
	.attr("class", "y axis")
	.call(yScale.axis = d3.svg.axis().scale(yScale).orient("left"));

var schoolRects;
var currMode = 1;

function initBarGraph(initData) {
	transitionyScale(initData);

  var colleges = [];
  initData.colleges.map(function(d) { colleges.push(d.name); });
  yScale.domain(colleges);

	dataRects = barSVG.selectAll(".dataRect")
		.data(initData.colleges)
		.enter().append("g")
		.attr("class", function(d) { return "dataRect " + d.name;});

	dataRects.append("rect")
		.attr("x", 0)
		.attr("y", function(d) { return yScale(d.name); })
		.attr("width", function(d) { return xScale(d.total/initData.colleges_total); })
		.attr("height", yScale.rangeBand())
		.style("fill", "#ff8c00");
}

function transitionyScale(transitionData) {
  	var map;
  	var newYDomain = [];

  	map = transitionData.colleges.map(function(d) {
  		newYDomain.push(d["name"]);
  	});

  	yScale.domain(newYDomain);
  	yScale.rangeRoundBands([newYDomain.length*50, 0], 0.1);

  	yAxis2.transition()
  		.duration(500)
  		.ease("linear")
  		.call(yScale.axis);
}

function transitionBarGraph(data) {
	transitionyScale(data);

	var dataRects = d3.selectAll(".dataRect").select("rect")
		.transition()
		.duration(500)
		.attr("width", 0);

	for (var i = 0; i < data.colleges.length; i++) {
		var specificSchoolRect = d3.select("." + data.colleges[i].name);

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
				return xScale(data.colleges[i].total/data.colleges_total);
			});
	}
}

d3.json("/datasets/presidential-campaign-donations/result.json", function(data) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  var curr_cand;
	console.log(data);
	$('#d3').dropdown({
    onChange: function (val) {

      console.log(val.split(' ')[0]);
      if (val.split(' ')[0] == 'martin') {
        val = "O'Malley";
      }
      else {
        val = capitalizeFirstLetter(val.split(' ')[1]);
      }

      var newData;

      data.map(function(d) { if (d.name == val) newData = d; });
      transitionBarGraph(newData);
    }
  });

	var nest = d3.nest()
   	 	.key(function(d) { return d.party; })
    	.entries(data);

    /* init Bar Graph with Hillary's data */
    initBarGraph(data[0]);
});
