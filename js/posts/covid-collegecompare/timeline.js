am4core.ready(function() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create('timeline', am4plugins_timeline.SerpentineChart); // Create div called timeline for the chart
  chart.curveContainer.padding(50, 20, 50, 20);
  chart.levelCount = 4;
  chart.yAxisRadius = am4core.percent(25);
  chart.yAxisInnerRadius = am4core.percent(-25);
  chart.maskBullets = false;

  var colorSet = new am4core.ColorSet();
  colorSet.saturation = 0.5;

  // Getting the JSON file  --------------------------------------------------
  var data;
  $.ajaxSetup({
    async: false,
  });
  $.getJSON(
    '../../../../datasets/covid-collegecompare/college_compare.json',
    function(json) {
      data = json;
    }
  );
  $.ajaxSetup({
    async: true,
  });
  // ---------------------------------------------------------------------------

  // Turning the json file into the right format -------------------------
  var schools = [];
  var start_date = [];
  var end_date = [];
  var start;
  var end;
  var num_school = 0;

  var new_data = [];
  var new_json = {};

  var event_data = [];
  var new_event_json = {};
  for (var i in data) {
    schools.push(i);
    start = 32;
    end = -1;
    for (var j in data[i]) {
      if (Number(data[i][j].date) != 0) {
        start = Math.min(Number(data[i][j].date), start); //finding the first action the university took

        new_event_json = {
          //adding a new event
          school: i,
          eventDate: `2020-03-${data[i][j].date}`,
          description: data[i][j].description,
          color: colorSet.getIndex(num_school),
        };
        event_data.push(new_event_json);
      }
      end = Math.max(Number(data[i][j].date), end);
    }
    start_date.push(start);
    end_date.push(end);

    new_json = {
      // timeline of action for each school
      school: schools[num_school],
      start: `2020-03-${start_date[num_school]}`,
      end: `2020-03-${end_date[num_school]}`,
      color: colorSet.getIndex(num_school),
      task: `${schools[num_school]}`,
    };
    new_data.push(new_json);
    num_school++;
  }

  chart.data = new_data;
  // ---------------------------------------------------------------------------

  chart.dateFormatter.dateFormat = 'yyyy-MM-d';
  chart.dateFormatter.inputDateFormat = 'yyyy-MM-d';
  chart.fontSize = 11;

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'school';
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.labels.template.paddingRight = 25;
  categoryAxis.renderer.minGridDistance = 10;
  categoryAxis.renderer.innerRadius = -60;
  categoryAxis.renderer.radius = 60;

  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 70;
  dateAxis.baseInterval = {
    count: 1,
    timeUnit: 'day',
  };
  dateAxis.renderer.tooltipLocation = 0;
  dateAxis.startLocation = -0.5;
  dateAxis.renderer.line.strokeDasharray = '1,4';
  dateAxis.renderer.line.strokeOpacity = 0.6;
  dateAxis.tooltip.background.fillOpacity = 0.2;
  dateAxis.tooltip.background.cornerRadius = 5;
  dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
    'alternativeBackground'
  );
  dateAxis.tooltip.label.paddingTop = 7;

  var labelTemplate = dateAxis.renderer.labels.template;
  labelTemplate.verticalCenter = 'middle';
  labelTemplate.fillOpacity = 0.7;
  labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
    'background'
  );
  labelTemplate.background.fillOpacity = 1;
  labelTemplate.padding(7, 7, 7, 7);

  var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
  series.columns.template.height = am4core.percent(20);
  series.columns.template.tooltipText =
    "{task}: [bold]{openDateX.formatDate('MMM d')}[/] - [bold]{dateX.formatDate('MMM d')}[/]";

  series.dataFields.openDateX = 'start';
  series.dataFields.dateX = 'end';
  series.dataFields.categoryY = 'school';
  series.columns.template.propertyFields.fill = 'color'; // get color from data
  series.columns.template.propertyFields.stroke = 'color';
  series.columns.template.strokeOpacity = 0;

  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.radius = 3;
  bullet.circle.strokeOpacity = 0;
  bullet.propertyFields.fill = 'color';
  bullet.locationX = 0;

  var bullet2 = series.bullets.push(new am4charts.CircleBullet());
  bullet2.circle.radius = 3;
  bullet2.circle.strokeOpacity = 0;
  bullet2.propertyFields.fill = 'color';
  bullet2.locationX = 1;

  var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
  imageBullet1.disabled = true;
  imageBullet1.propertyFields.disabled = 'disabled1';
  imageBullet1.locationX = 1;
  imageBullet1.circle.radius = 20;
  imageBullet1.propertyFields.stroke = 'color';
  imageBullet1.background.propertyFields.fill = 'color';
  imageBullet1.image = new am4core.Image();
  imageBullet1.image.propertyFields.href = 'image1';

  var imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
  imageBullet2.disabled = true;
  imageBullet2.propertyFields.disabled = 'disabled2';
  imageBullet2.locationX = 0;
  imageBullet2.circle.radius = 20;
  imageBullet2.propertyFields.stroke = 'color';
  imageBullet2.background.propertyFields.fill = 'color';
  imageBullet2.image = new am4core.Image();
  imageBullet2.image.propertyFields.href = 'image2';

  var eventSeries = chart.series.push(
    new am4plugins_timeline.CurveLineSeries()
  );
  eventSeries.dataFields.dateX = 'eventDate';
  eventSeries.dataFields.categoryY = 'school';
  eventSeries.data = event_data;
  eventSeries.strokeOpacity = 0;

  var flagBullet = eventSeries.bullets.push(
    new am4plugins_bullets.FlagBullet()
  );
  flagBullet.label.propertyFields.text = 'school';
  flagBullet.locationX = 1;
  flagBullet.tooltipText =
    "{school}, {eventDate.formatDate('MMM d')}:\n {description}";
  flagBullet.propertyFields.fill = 'color';

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarX.align = 'center';
  chart.scrollbarX.width = am4core.percent(85);

  var cursor = new am4plugins_timeline.CurveCursor();
  chart.cursor = cursor;
  cursor.xAxis = dateAxis;
  cursor.yAxis = categoryAxis;
  cursor.lineY.disabled = true;
  cursor.lineX.strokeDasharray = '1,4';
  cursor.lineX.strokeOpacity = 1;

  dateAxis.renderer.tooltipLocation2 = 0;
  categoryAxis.cursorTooltipEnabled = false;
}); // end am4core.ready()
