var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 720 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);



var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Donators:</strong> <span style='color:red'>" + d.y + "</span>\n<strong>College:</strong> <span style='color:red'>" + d.name.toUpperCase() + "</span>";
  })

var svg = d3.select("#viz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

// stacked bar chart colors
var color = d3.scale.category20();

d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {
	if (error)
		throw error

	data = data[0];

  // data["jobs"] = {};
  // var jobs = d3.nest()
  // .key(function(d) { return d.title })
  // .entries(data)

  var colleges = data.colleges.map(function(c) { return c.name });
  // console.log(colleges);

  var layers = d3.layout.stack()(colleges.map(function(c) {


    return data.jobs.map(function(d, i) {
      if (typeof d.colleges[c] == 'undefined') {
        return( { x : i, y : 0 })
      }
      return( { x : i, y : d.colleges[c].donators, name : c } );
    });
  }));

  console.log(layers)

  // x.domain(d3.range(data["jobs"].length));
  x.domain(layers[0].map(function(d) { return d.x }));
  y.domain([0, 500]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  var layer = svg.selectAll(".layer")
      .data(layers)
    .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) { return color(i); });

  layer.selectAll("rect")
      .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d) { 
        return x(d.x); 
      })
      .attr("y", function(d) { 
        console.log(d)
        
        // console.log("Y = " + d.y0);
        // return 0;
        return y(d.y + d.y0); 
      })
      .attr("height", function(d) { return y(d.y0) - y(d.y + d.y0); })
      .attr("width", x.rangeBand() - 1)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  // svg.selectAll(".bar")
  //     .data(function(){
  //       return data["jobs"]
  //     	// return data["colleges"][0]["jobs"]
  //     })
  //   .enter().append("rect")
  //     .attr("class", "bar")
  //     .attr("x", function(d, i) {
  //     	return x(i);
  //     })
  //     .attr("width", x.rangeBand())
  //     .attr("y", function(d) {
  //     	return y(d.donators);
  //     })
  //     .attr("height", function(d) { return height - y(d.donators); })
  

});

// Horizontal Bar Chart

var colors = ['#0000b4','#0082ca','#0094ff','#0d4bcf','#0066AE','#074285','#00187B','#285964','#405F83'];

d3.json("/datasets/presidential-campaign-donations/result.json", function(error, data) {
  if (error)
    throw error

  var candidate_total = data[0].total;
  data = data[0].colleges;
  y.domain(d3.range(data.length));
  
  var grid = d3.range(25).map(function(i){
    return {'x1':0,'y1':0,'x2':0,'y2':480};
  });

  var tickVals = grid.map(function(d,i){
    if(i>0){ return i*.0005; }
    else if(i===0){ return "0";}
  });

  var xscale = d3.scale.linear()
        .domain([0, 0.004])
        .range([0, 722]);

  var yscale = d3.scale.linear()
        .domain([0,data.length])
        .range([0,480]);

  var colorScale = d3.scale.quantize()
        .domain([0,data.length])
        .range(colors);

  var canvas = d3.select('#horizontal-bar')
        .append('svg')
        .attr({'width':900,'height':550});

  var grids = canvas.append('g')
          .attr('id','grid')
          .attr('transform','translate(150,10)')
          .selectAll('line')
          .data(grid)
          .enter()
          .append('line')
          .attr({'x1':function(d,i){ return i*30; },
                 'y1':function(d){ return d.y1; },
                 'x2':function(d,i){ return i*30; },
                 'y2':function(d){ return d.y2; },
          })
          .style({'stroke':'#adadad','stroke-width':'1px'});

  var xAxis2 = d3.svg.axis();
    xAxis2
      .orient('bottom')
      .scale(xscale)
      .tickValues(tickVals);

  var yAxis2 = d3.svg.axis();
    yAxis2
      .orient('left')
      .scale(yscale)
      .tickSize(2)
      .tickFormat(function(d,i){ return data[i].name; })
      .tickValues(d3.range(data.length));

  var y_xis = canvas.append('g')
          .attr("transform", "translate(150,0)")
          .attr('id','yaxis')
          .call(yAxis2);

  var x_xis = canvas.append('g')
          .attr("transform", "translate(150,480)")
          .attr('id','xaxis')
          .call(xAxis2);

  var chart = canvas.append('g')
          .attr("transform", "translate(150,0)")
          .attr('id','bars')
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('height',19)
          .attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
          .style('fill',function(d,i){ return colorScale(i); })
          .attr('width',function(d){ return 0; });

  var transit = d3.select("g#bars").selectAll("rect")
            .data(data)
            .transition()
            .duration(1000) 
            .attr('width', function(d) { return xscale(d.total/candidate_total); });

  var transitext = d3.select('#bars')
          .selectAll('text')
          .data(data)
          .enter()
          .append('text')
          .attr({'x':function(d) {return xscale(d)-200; },'y':function(d,i){ return yscale(d)+35; }})
          .text(function(d){ return d+"$"; }).style({'fill':'#fff','font-size':'14px'});

});
