// http://stackoverflow.com/questions/11088303/how-to-convert-to-d3s-json-format
d3.csv("/datasets/sexual-harrassment/uc-sexual-assault-reports.csv", function(error, data) {
  if (error) throw error;
  console.log(data);

  var nodesByName = {};

  data.forEach(function(d) {
  	var parent = d.Position = nodeByNameTitle("Position",d.Position),
  		child = d.UCB = nodeByName("UCB",d.UCB),
  		child2 = d.UCD = nodeByName("UCD",d.UCD),
  		child3 = d.UCI = nodeByName("UCI",d.UCI),
  		child4 = d.UCLA = nodeByName("UCLA",d.UCLA),
  		child5 = d.UCM = nodeByName("UCM",d.UCM),
  		child6 = d.UCR = nodeByName("UCR",d.UCR),
  		child7 = d.UCSB = nodeByName("UCSB",d.UCSB),
  		child8 = d.UCSC = nodeByName("UCSC",d.UCSC),
  		child9 = d.UCSD = nodeByName("UCSD",d.UCSD),
  		child10 = d.UCSF = nodeByName("UCSF",d.UCSF);
  	parent.children = [child,child2,child3,child4,child5,child6,child7,child8,child9,child10];
  });

  var root = data[0].Position;
  var nodes = d3.values(nodesByName);

  function nodeByName(name,value) {
    return (nodesByName[value] = {"college": name,"total": value});
  }

  function nodeByNameTitle(name,value) {
  	return (nodesByName[value] = {[name]: value});
  }

  console.log(nodes);
  console.log(root);

  // initBubbleChart(data)
});
