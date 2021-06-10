am4core.ready(function() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create('GenreChart', am4charts.XYChart);
  chart.padding(40, 40, 40, 40);

  var title = chart.titles.create();
  title.text = '[bold] Filmography at UCLA by Genre';
  title.wrap = true;
  title.fontSize = 20;
  title.marginBottom = 30;
  title.align = 'center';

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = 'network';
  categoryAxis.renderer.minGridDistance = 1;
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.disabled = true;

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 120;
  valueAxis.paddingTop = 15;
  valueAxis.title.text = 'Number of Titles';
  valueAxis.title.align = 'center';
  valueAxis.renderer.minGridDistance = 30;

  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryY = 'network';
  series.dataFields.valueX = 'MAU';
  series.tooltipText = '{valueX.value}';
  series.columns.template.strokeOpacity = 0;
  series.columns.template.column.cornerRadiusBottomRight = 5;
  series.columns.template.column.cornerRadiusTopRight = 5;

  var labelBullet = series.bullets.push(new am4charts.LabelBullet());
  labelBullet.label.horizontalCenter = 'left';
  labelBullet.label.dx = 10;
  labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#')}";
  labelBullet.locationX = 1;
  labelBullet.fontSize = 12;

  var label = chart.chartContainer.createChild(am4core.Label);
  label.paddingTop = 25;
  label.fontSize = 15;

  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  series.columns.template.adapter.add('fill', function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });

  categoryAxis.sortBySeries = series;
  chart.data = [
    {
      network: 'Action',
      MAU: 21,
    },
    {
      network: 'Adventure',
      MAU: 12,
    },
    {
      network: 'Animation',
      MAU: 5,
    },
    {
      network: 'Biography',
      MAU: 9,
    },
    {
      network: 'Comedy',
      MAU: 79,
    },
    {
      network: 'Crime',
      MAU: 25,
    },
    {
      network: 'Documentary',
      MAU: 23,
    },
    {
      network: 'Drama',
      MAU: 117,
    },
    {
      network: 'Family',
      MAU: 12,
    },
    {
      network: 'Fantasy',
      MAU: 11,
    },
    {
      network: 'History',
      MAU: 2,
    },
    {
      network: 'Horror',
      MAU: 20,
    },
    {
      network: 'Music',
      MAU: 16,
    },
    {
      network: 'Musical',
      MAU: 3,
    },
    {
      network: 'Mystery',
      MAU: 33,
    },
    {
      network: 'News',
      MAU: 2,
    },
    {
      network: 'Reality-TV',
      MAU: 12,
    },
    {
      network: 'Romance',
      MAU: 39,
    },
    {
      network: 'Sci-Fi',
      MAU: 10,
    },
    {
      network: 'Short',
      MAU: 89,
    },
    {
      network: 'Talk-Show',
      MAU: 4,
    },
    {
      network: 'Thriller',
      MAU: 15,
    },
    {
      network: 'War',
      MAU: 1,
    },
  ];
});
