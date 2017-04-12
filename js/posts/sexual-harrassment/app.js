// http://stackoverflow.com/questions/11088303/how-to-convert-to-d3s-json-format
d3.csv("/datasets/sexual-harrassment/uc-sexual-assault-reports.csv", function(error, data) {
  if (error) throw error;
  console.log(data);

  var nodesByName = "";

  data.forEach(function(d) {
  	// var parent = d.Position = nodeByNameTitle("Position",d.Position),
  	// 	child = nodeByName("position",d.Position,"UCB",d.UCB),
  	// 	child2 = nodeByName("position",d.Position,"UCD",d.UCD),
  	// 	child3 = nodeByName("position",d.Position,"UCI",d.UCI),
  	// 	child4 = nodeByName("position",d.Position,"UCLA",d.UCLA),
  	// 	child5 = nodeByName("position",d.Position,"UCM",d.UCM),
  	// 	child6 = nodeByName("position",d.Position,"UCR",d.UCR),
  	// 	child7 = nodeByName("position",d.Position,"UCSB",d.UCSB),
  	// 	child8 = nodeByName("position",d.Position,"UCSC",d.UCSC),
  	// 	child9 = nodeByName("position",d.Position,"UCSD",d.UCSD),
  	// 	child10 = nodeByName("position",d.Position,"UCSF",d.UCSF),
   //    //total = child.total+child2.total+child3.total+child4.total+child5.total+child6.total+child7.total+child8.total+child9.total+child10.total;
   //    total = nodeByName("position",parent,"total",parseInt(d.UCB + d.UCD + d.UCI + d.UCLA + d.UCM + d.UCR + d.UCSB + d.UCSC + d.UCSD + d.UCSF));
   //  //parent.breakdown = [child,child2,child3,child4,child5,child6,child7,child8,child9,child10];
    //parent.total = total;
    nodeByNameTitle("Position",d.Position),
    nodeByName("position",d.Position,"UCB",d.UCB),
    nodeByName("position",d.Position,"UCD",d.UCD),
    nodeByName("position",d.Position,"UCI",d.UCI),
    nodeByName("position",d.Position,"UCLA",d.UCLA),
    nodeByName("position",d.Position,"UCM",d.UCM),
    nodeByName("position",d.Position,"UCR",d.UCR),
    nodeByName("position",d.Position,"UCSB",d.UCSB),
    nodeByName("position",d.Position,"UCSC",d.UCSC),
    nodeByName("position",d.Position,"UCSD",d.UCSD),
    nodeByName("position",d.Position,"UCSF",d.UCSF),
    nodeByName("position",parent,"total",parseInt(d.UCB) + parseInt(d.UCD) + parseInt(d.UCI) + parseInt(d.UCLA) + parseInt(d.UCM) + parseInt(d.UCR) + parseInt(d.UCSB) + parseInt(d.UCSC) + parseInt(d.UCSD) + parseInt(d.UCSF));
   
  });

  var root = data[0].Position;
  var nodes = d3.values(nodesByName);

  function nodeByName(type,par,name,value) {
    //return (nodesByName[value] = {"college": name,"total": parseInt(value,10)});
    //var newparent = par.replace(" ","%");
    nodesByName += (type + "." + par + "." + name + "," + value + "\n");
  }

  function nodeByNameTitle(name,value) {
  	//return (nodesByName[value] = {[name]: value});
    var newvalue = value.replace(" ","%");
    nodesByName += name + "\n";
    nodesByName += name + "." + newvalue + "\n";
  }

  console.log(nodes);
  console.log(nodesByName);
  // console.log(root);
  // console.log(data);

  // initBubbleChart(data)
});
