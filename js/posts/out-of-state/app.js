d3.csv("/datasets/out-of-state/data.csv", function(error, data) {
  if (error) throw error;
  
  initTable(data);
  initBubbleChart(data); 
  initStackedBarChart(data);

});
