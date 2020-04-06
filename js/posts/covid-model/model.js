var width = 600,
  height = 500;

function createJSON() {
  let json = {
    "nodes": [],
    "links": []
  };
  const LApop = 10160000;
  const uclapop = 53619;
  const over65 = 0.136;
  const atrisk = 0.10;
  const num_transmissions = 3.0;

  let both = over65 * atrisk;
  let num_nodes = LApop / uclapop;
  let num_both = num_nodes * both;
  let num_over65 = num_nodes * over65 - num_both;
  let num_atrisk = num_nodes * atrisk - num_both;
  let num_normal = num_nodes - num_both - num_over65 - num_atrisk;
  let num_links = num_transmissions * num_nodes / 2.0;

  for (let i = 0; i < num_nodes; i++) {
    let group;
    let type;
    if (i < num_both){
    	group = 1;
      type = "Both";
    }
    else if (i < num_both + num_over65){
    	group = 2;
      type = "65+";
    }
    else if (i < num_both + num_over65 + num_atrisk){
    	group = 3;
      type = "immunocompromised"
    }
    else{
    	group = 4;
      type = "normal";
    } 
    json["nodes"].push({
      "name": i,
      "group": group,
      "type": type
    })
  }
json["nodes"].push({
      "name": Math.floor(num_nodes + 1),
      "type": "UCLA",
      "group": 0
    })

for (let i = 0; i < num_links - 3; i++) {
    let s = Math.floor(Math.random() * num_nodes);
    let t = Math.floor(Math.random() * num_nodes);
    json["links"].push({
      "source": s,
      "target": t,
      "value": 1
    })
  }
  
for (let i = 0; i < num_transmissions; i++) {
  let t = Math.floor(Math.random() * num_nodes);
  json["links"].push({
  	"source": Math.floor(num_nodes + 1),
    "target": t,
    "value": 1
  })
  }

  return json;
}

let json = createJSON();

var svg = d3.select("#graph").append("svg")
  .attr("width", width)
  .attr("height", height);

var force = d3.layout.force()
  .gravity(0.05)
  .distance(150)
  .charge(-10)
  .size([width, height]);

force
  .nodes(json.nodes)
  .links(json.links)
  .start();

var link = svg.selectAll(".link")
  .data(json.links)
  .enter().append("line")
  .attr("class", "link")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .style("stroke-width", function(d) {
    return Math.sqrt(d.weight);
  });

var node = svg.selectAll(".node")
  .data(json.nodes)
  .enter().append("g")
  .attr("class", function(d){
  	if (d.group == 4)
    	return "circle node";
    else if (d.group == 1)
    	return "rect node";
    else if (d.group == 2)
    	return "tria node";
    else if (d.group == 0)
    	return "ucla node";
    else 
    	return "star node";
  })
  .attr("stroke", "#fff")
  .attr("stroke-width", 1)
  .call(force.drag);
  
d3.selectAll(".circle")
	.append("circle")
  .attr("r", function(d){
  if (d.group == 0)
  	return 10;
  else 
  	return 5;
  })
  .attr("class", function (d) {
    return "node type" + d.group;
	})
  
node.append("text")
  .attr("dx", 12)
  .attr("dy", ".35em")
  .text(function(d) {return "";
  });


d3.selectAll(".rect")
	.append("rect")
  .attr("width", 10)
  .attr("height", 10)
  .attr("class", function (d) {
    return "node type" + d.group;
	})
  
d3.selectAll(".tria")
	.append("polygon")
  .attr("points", '-5,8 3,-6 11,8')
  .attr("class", function (d) {
    return "node type" + d.group;
	})
  
d3.selectAll(".star")
	.append("polygon")
  .attr("points", "0, -8 2, 0 8, 0 4, 4 6, 10 0, 6 -6, 10 -4, 4 -8, 0 -2, 0")
  .attr("class", function (d) {
    return "node type" + d.group;
	})
  
d3.selectAll(".ucla")
	.append("image")
  .attr('x', -9)
	.attr('y', -12)
  .attr("xlink:href", "https://i.pinimg.com/originals/f6/60/77/f66077e62b390813c07d70f87dabc0fc.gif")
	.attr("width", 24)
	.attr("height", 36)
  

var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("color", "white")
    .style("padding", "8px")
    .style("background-color", "#626D71")
    .style("border-radius", "6px")
    .style("text-align", "center")
    .style("width", "auto")
    .text("");
    
node
    .on("mouseover", function(d){
                tooltip.html(`${d.type}`); 
                return tooltip.style("visibility", "visible");})
    .on("mousemove", function(){
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
/*
d3.select("body")
  .selectAll("div")
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; })
    .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
      .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
*/
force.on("tick", function() {
  link.attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });

  node.attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
});

function color(d) {
  switch (d.group) {
    case 0:
      return "blue";
    case 1:
      return "green";
    case 2:
      return "red";
    case 3:
      return "orange";
    case 4:
      return "purple";
  }
}

var keys = ["UCLA", "normal", "65+", "immunocomprised", "both"]

svg
	.append("image")
  	.attr("xlink:href", "https://i.pinimg.com/originals/f6/60/77/f66077e62b390813c07d70f87dabc0fc.gif")
		.attr("width", 18)
		.attr("height", 24)
  
svg
  .append("circle")
    .attr("cx", 10)
    .attr("cy", 30)
    .attr("r", 5)
    
svg
	.append("rect")
  	.attr("x", 5)
  	.attr("y", 45)
  	.attr("width", 10)
  	.attr("height", 10)


svg
	.append("polygon")
  .attr("cx", 100)
  .attr("cy", 700)
  .attr("points", '2,76 10,62 18,76')
  
  
svg
	.append("polygon")
  .attr("points", "10, 82 12, 90 18, 90 14, 94 16, 100 10, 96 4, 100 6, 94 2, 90 8, 90")
/*
svg.selectAll("mydots")
  .data(keys)
  .enter()
  .append("circle")
    .attr("cx", 10)
    .attr("cy", function(d,i){ return 10 + i*20}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 5)
*/
// Add one dot in the legend for each name.
svg.selectAll("mylabels")
  .data(keys)
  .enter()
  .append("text")
    .attr("x", 20)
    .attr("y", function(d,i){ return 10 + i*20})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")

/*
var legendRectSize = 18;
var legendSpacing = 4;

var legend = svg.selectAll('.legend')
  .data(color.domain())
  .enter()
  .append('g')
  .attr('class', 'legend');
  
  legend.append('rect')
  .attr('width', legendRectSize)
  .attr('height', legendRectSize);

legend.append('text')
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing)
  .text(function(d) { return d; });
  */