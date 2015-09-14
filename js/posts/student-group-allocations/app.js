
var w = 800,
    h = 650,
    node,
    link,
    root;

var force = d3.layout.force()
    .on("tick", tick)
    .charge(function(d) { return d._children ? -d.size / 100 : -30; })
    .linkDistance(
      function(d) {
        if (d.target.size > 20000) {
            return 450;
          } else if (d.target.size > 15000) {
            return 400;
          } else if (d.target.size > 10000){
            return 350
          } else if (d.target.size > 5000) {
            return 300;
          } else if (d.target.size > 4000) {
            return 250;
          } else if (d.target.size > 3000) {
            return 200;
          } else if (d.target.size > 2000) {
            return 150;
          } else if (d.target.size > 1000) {
            return 100;
          } else if (d.target.size > 500) {
            return 50;
          } else if (d.target.size > 100) {
            return 25;
          } else {
            return 10;
          }
        })
    .size([w, h - 160]);

var vis = d3.select(".viz").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

d3.json("/datasets/student-group-allocations/data.json", function(json) {
  root = json;
  root.fixed = true;
  root.x = w / 2;
  root.y = h / 2;
  update();

  $(json.children).each(function() {
      option = "<option value=\"" + this.name + "\">" + this.name + "</option>";
      $('#search').append(option);
  });
});

tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d.name + " ($"+d.size.toFixed(2)+")"; });

vis.call(tip);

function update() {
  var nodes = flatten(root),
      links = d3.layout.tree().links(nodes);

  // Restart the force layout.
  force
      .nodes(nodes)
      .links(links)
      .start();

  // Update the links…
  link = vis.selectAll("line.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links.
  link.enter().insert("svg:line", ".node")
      .attr("class", "link")
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  // Exit any old links.
  link.exit().remove();

  // Update the nodes…
  node = vis.selectAll("circle.node")
      .data(nodes, function(d) { return d.id; })
      .style("fill", color);

  node.transition()
      .attr("r", function(d) { return d.children ? 4.5 : Math.sqrt(d.size) / 5; });

  // Enter any new nodes.
  var circle = node.enter().append("svg:circle")
      .attr("class", "node")
      .attr("cx", function(d) {
        var r =  d.children ? 4.5 : Math.sqrt(d.size) / 5;
        return d.x = Math.max(r, Math.min(w - r, d.x));
      })
      .attr("cy", function(d) {
        var r =  d.children ? 4.5 : Math.sqrt(d.size) / 5;
        return d.y = Math.max(r, Math.min(h - r, d.y));
      })
      .attr("r", function(d) { return d.children ? 4.5 : Math.sqrt(d.size) / 5; })
      .style("fill", color)
      .on("click", click)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .call(force.drag);

  // Exit any old nodes.
  node.exit().remove();
}

function tick() {
  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

  node.attr("cx", function(d) {
        var r =  d.children ? 4.5 : Math.sqrt(d.size) / 10;
        return d.x = Math.max(r, Math.min(w - r, d.x));
      })
      .attr("cy", function(d) {
        var r =  d.children ? 4.5 : Math.sqrt(d.size) / 10;
        return d.y = Math.max(r, Math.min(h - r, d.y));
      });
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
  return d._children ? "#4D8E79" : d.children ? "#B9CD6F" : "#85BB65";
}

// Toggle children on click.
function click(d) {
  // if (d3.event.defaultPrevented) return;
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update();
}

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) node.size = node.children.reduce(function(p, v) { return p + recurse(v); }, 0);
    if (!node.id) node.id = ++i;
    nodes.push(node);
    return node.size;
  }

  root.size = recurse(root);
  return nodes;
}

function search() {
  var value = $("#search_text").val();
  if (value == "") {
    node.style("fill", "#85BB65");
  }
  else {
    node.style("fill", function(d) {
      return d.name.toUpperCase().includes(value.toUpperCase()) ? "#85BB65" : "lightgrey";
    });
  }
}
