d3.csv("/datasets/out-of-state/president.csv", function(error, pres) {
  if (error) throw error;

  d3.csv("/datasets/out-of-state/senate.csv", function(error, sen) {
    if (error) throw error;
    
    initTable([pres, sen]);
    initBubbleChart([pres, sen]); 
    initStackedBarChart([pres, sen]);

  });
});
