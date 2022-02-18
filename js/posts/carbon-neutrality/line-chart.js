anychart.onDocumentReady(function() {
  // create a data set on our data
  var dataSet = anychart.data.set(getData());

  // map data for the first series,
  // take x from the zero column and value from the first column
  var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

  // map data for the second series,
  // take x from the zero column and value from the second column
  var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

  // map data for the third series,
  // take x from the zero column and value from the third column
  var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

  // create a line chart
  var chart = anychart.line('');

  // configure the chart title text settings
  chart.title('UCLA CO2e Emissions');

  // set the y axis title
  chart.yAxis().title('Total CO2e (metric tons)');

  // create the first series with the mapped data
  var firstSeries = chart.line(firstSeriesData);
  firstSeries.name('Scope 1 Direct Emissions: Total');

  // create the second series with the mapped data
  var secondSeries = chart.line(secondSeriesData);
  secondSeries.name('Scope 1 Direct Emissions: NetTotal');

  // create the third series with the mapped data
  var thirdSeries = chart.line(thirdSeriesData);
  thirdSeries.name('Scope 2 Indirect Emissions');

  // turn the legend on
  chart.legend().enabled(true);

  // set the container id for the line chart
  chart.container('CarbonEmission');

  // draw the line chart
  chart.draw();
});

function getData() {
  return [
    ['2006', 172442.15, 172442.15, 92703.48],
    ['2007', 180939.62, 180939.62, 108455.48],
    ['2009', 234096.24535, 234096.24535, 69870.24341],
    ['2010', 230210.73822, 230210.73822, 57675.43418],
    ['2011', 231337.95482, 231337.95482, 79720.05378],
    ['2012', 244235.62424, 244235.62424, 66246.72674],
    ['2013', 226171.94512, 226171.94512, 79179.28152],
    ['2014', 237885.356815, 180266.356815, 72983.448482],
    ['2015', 236051.712039, 171515.712039, 117753.587377],
    ['2016', 241727.814359, 182913.814359, 85290.838958],
    ['2017', 245912.134162, 173930.134162, 89989.171449],
    ['2018', 246783.233889, 168686.233889, 89945.067333],
    ['2019', 248825.773006, 182508.773006, 78366.044793],
  ];
}
