function initBubbleChart(data) {

	currData = 0;

	var svg = d3.select("#bubble-chart"),
	    width = +svg.attr("width");

	var format = d3.format(",d");

	var color = d3.scaleOrdinal(d3.schemeCategory20c);

	var pack = d3.pack()
	    .size([width, width])
	    .padding(10);

	var horizontalTip = d3.select("body")
		  .append("div")
		  .attr("class", "horizontal-tip");

	var states = {
		"California" : "CA", 
		"Pennsylvania" : "PA",
		"New Hampshire" : "NH",
		"North Carolina" : "NC",
		"Colorado" : "CO",
		"Iowa" : "IA",
		"Arizona" : "AZ",
		"Ohio" : "OH",
		"Missouri" : "MO",
		"Nevada" : "NV",
		"Florida" : "FL"
	}

	var root = d3.hierarchy({children: data[currData]})
	      .sum(function(d) { 
	        d.value = d["How many times more competitive state is than CA"];
	        d.id = d["State"];
	        return Math.abs(d.value)
	      })
	      .each(function(d) {
	        if (id = d.data.id) {
	          d.id = id;
	        }
	      });

	  var node = svg.selectAll(".node")
	    .data(pack(root).leaves())
	    .enter().append("g")
	      .attr("class", "node")
	      .attr("transform", function(d) {
	      	return "translate(" + d.x + "," + d.y + ")"; 
	      });

	  node.append("circle")
	      .attr("id", function(d) { return d.id; })
	      .attr("r", function(d) { return d.r; })
	      .on("mousemove",function(d, i) {

	        this.style.opacity = "0.6";
	        this.style.cursor = "pointer";

	        var h = '<div class="left"><p><b style="border-bottom: 2px solid ' + color(i) + ';">' + d.id.toUpperCase() + 
	        				'</b></p><br/><p><b>' + "2016 Expected Turnout" + '</b>: ' + d.data["2016 expected turnout"] + 
	        				'</p><p><b>2016 Expected Margin</b>: ' + d.data["Margin 2016 P"] + 
	        				'</p><p><b>Power of Vote Compared to CA</b>: ' + d.data["How much more each vote contributes to winning than in CA"] + 'x</p></div>';

	        h += '<div class="right">';
	        if (d.data.value < 0) {
	        	 h += '<span style="color: rgb(214, 39, 40);">' + d.value + 'x</span>';
	        } else {
	        	h += '<span style="color: rgb(31, 119, 180);">' + d.value + 'x</span>';
	        } 
	        h += '</div>';

	        horizontalTip.style("display","none");
	        horizontalTip.html(h)
	          .style("left", (d3.event.pageX+12) + "px")
	          .style("top", (d3.event.pageY-10) + "px")
	          .style("opacity", 1)
	          .style("display","block")

	      })
	      .on('mouseout', function() {
	        this.style.opacity = "1";
	        horizontalTip.html("").style("display","none");
	      })
		    .style("fill", function(d) { return color(d.id); });

	  node.append("clipPath")
	      .attr("id", function(d) { return "clip-" + d.id; })
	    .append("use")
	      .attr("xlink:href", function(d) { return "#" + d.id; });

	  node.append("text")
	      .attr("clip-path", function(d) { 
	      	return "url(#clip-" + d.id + ")"; 
	      })
	    .selectAll("tspan")
	    .data(function(d) { 
	    	return [d.id];
	    	// return d.id.split(/(?=[A-Z][^A-Z])/g); 
	    })
	    .enter().append("tspan")
	      .attr("x", -15)
	      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
	      .text(function(d) { 
	      	return states[d]; 
	      });

	  // node.append("title")
	  //     .text(function(d) { return d.id + "\n" + format(d.value); });
}