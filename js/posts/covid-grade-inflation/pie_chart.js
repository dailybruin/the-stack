anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Letter Grade", value: 128521},
        {x: "Pass/No Pass", value: 5527}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Percentage for Letter Grade and Pass/No Pass Before and After COVID-19");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('pie-chart');
    chart.draw();
  
  });