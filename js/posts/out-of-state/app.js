var svg = d3.select("#viz"),
    width = +svg.attr("width");

var format = d3.format(",d");

var color = d3.scaleOrdinal(d3.schemeCategory20c);

var pack = d3.pack()
    .size([width/1.75, width/1.75])
    .padding(1.5);

d3.csv("/datasets/out-of-state/data.csv", function(error, data) {
  if (error) throw error;

  var root = d3.hierarchy({children: data})
      .sum(function(d) { 
        d.value = d["How many times more competitive state is than CA"];
        d.id = d["State"];
        return d.value;
      })
      .each(function(d) {
        if (id = d.data.id) {
          var id, i = id.lastIndexOf(".");
          d.id = id;
          d.package = id.slice(0, i);
          d.class = id.slice(i + 1);
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
      .style("fill", function(d) { return color(d.package); });

  node.append("clipPath")
      .attr("id", function(d) { return "clip-" + d.id; })
    .append("use")
      .attr("xlink:href", function(d) { return "#" + d.id; });

  node.append("text")
      .attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
    .selectAll("tspan")
    .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
    .enter().append("tspan")
      .attr("x", -20)
      .attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      .text(function(d) { return d; });

  node.append("title")
      .text(function(d) { return d.id + "\n" + format(d.value); });

	// console.dir(data);
	// console.table(data);

	var tbl     = document.createElement("table");
	var tblBody = document.createElement("tbody");

	for (var i = 0; i < data.length; i++) {
		var row = document.createElement("tr");

		for (var j in data[i]) {
			var cell = document.createElement("td");  
			var cellText = document.createTextNode(data[i][j]);
			cell.appendChild(cellText);
			row.appendChild(cell);
		}
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	document.getElementById("table").appendChild(tbl);
});
