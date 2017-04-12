// http://stackoverflow.com/questions/11088303/how-to-convert-to-d3s-json-format
d3.csv("/datasets/sexual-harrassment/uc-sexual-assault-reports.csv", function(error, data) {
  if (error) throw error;
  console.log(data);

  var nodesByName = {};

  data.forEach(function(d) {
  	var parent = d.Position = nodeByNameTitle("Position",d.Position),
  		child = nodeByName("UCB",d.UCB),
  		child2 = nodeByName("UCD",d.UCD),
  		child3 = nodeByName("UCI",d.UCI),
  		child4 = nodeByName("UCLA",d.UCLA),
  		child5 = nodeByName("UCM",d.UCM),
  		child6 = nodeByName("UCR",d.UCR),
  		child7 = nodeByName("UCSB",d.UCSB),
  		child8 = nodeByName("UCSC",d.UCSC),
  		child9 = nodeByName("UCSD",d.UCSD),
  		child10 = nodeByName("UCSF",d.UCSF),
      total = child.total+child2.total+child3.total+child4.total+child5.total+child6.total+child7.total+child8.total+child9.total+child10.total;
  	parent.breakdown = [child,child2,child3,child4,child5,child6,child7,child8,child9,child10];
    parent.total = total;
  });

  var root = data[0].Position;
  var nodes = d3.values(nodesByName);

  function nodeByName(name,value) {
    return (nodesByName[value] = {"college": name,"total": parseInt(value,10)});
  }

  function nodeByNameTitle(name,value) {
  	return (nodesByName[value] = {[name]: value});
  }

  console.log(nodes);
  console.log(root);
  console.log(data);

  // initBubbleChart(data)
});
