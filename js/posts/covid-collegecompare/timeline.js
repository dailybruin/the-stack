$('select').chosen({
  width: 0.3 * screen.width,
});
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

var all_schools_event_data = [];
var all_schools_event_data = [];

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
        event: j,
        eventDate: new Date(2020, 02, data[i][j].date),
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
    start: new Date(2020, 02, start_date[num_school]),
    end: new Date(2020, 02, end_date[num_school]),
    color: colorSet.getIndex(num_school),
    task: `${schools[num_school]}`,
  };
  new_data.push(new_json);
  num_school++;
}

all_schools_data = new_data;
chart.data = new_data;
all_schools_event_data = event_data;
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

var eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
eventSeries.dataFields.dateX = 'eventDate';
eventSeries.dataFields.categoryY = 'school';
eventSeries.data = event_data;
eventSeries.strokeOpacity = 0;
//eventSeries.minBulletDistance = 1; // Bullets have to be at least X pixels away to appeear

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

var flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet());
flagBullet.label.propertyFields.text = 'school';
flagBullet.locationX = 1;
flagBullet.tooltipText =
  "{school}, {eventDate.formatDate('MMM d')}:\n {description}";
flagBullet.propertyFields.fill = 'color'; // Flags are same color as their school

var overlap = chart.plugins.push(new am4plugins_overlapBuster.OverlapBuster());
overlap.targets.push(flagBullet);
overlap.collapseDelay = 300;
overlap.revealRatio = 1;
overlap.tolerance = 3;

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

chart.responsive.enabled = true; //ness for mbile users
chart.responsive.useDefault = false;
chart.responsive.rules.push({
  relevant: function(target) {
    if (target.pixelWidth <= 400) {
      return true;
    }

    return false;
  },
  state: function(target, stateId) {
    if (target instanceof am4plugins_timeline.SerpentineChart) {
      var state = target.states.create(stateId);
      state.properties.paddingTop = 5;
      state.properties.paddingRight = 15;
      state.properties.paddingBottom = 5;
      state.properties.paddingLeft = 0;
      state.properties.levelCount = 7;
      state.properties.height = 1200;
      state.properties.yAxisRadius = am4core.percent(30);
      state.properties.yAxisInnerRadius = am4core.percent(-30);
      return state;
    }

    if (target instanceof am4charts.CategoryAxis()) {
      var state = target.states.create(stateId);
      state.properties.renderer.labels.template.paddingRight = 0;
      return state;
    }
    return null;
  },
});

function changeTimeline() {
  var school_names = $('#timeline_dropdown_school').val();
  var event_names = $('#timeline_dropdown_event').val();

  var school_data = [];
  var school_event_data = [];

  // if (school_names == null || school_names.includes('all')) { // SELECT ALL: uncomment and delete line below
    if (school_names == null) {
    school_data = all_schools_data;
    // if (event_names == null || event_names.includes('all')) { // SELECT ALL: uncomment and delete line below
      if (event_names == null) {
      school_event_data = all_schools_event_data;
    } else {
      for (var i in all_schools_event_data) {
        for (let e = 0; e < event_names.length; e++) {
          var event_name = event_names[e];
          if (all_schools_event_data[i].event == event_name) {
            school_event_data.push(all_schools_event_data[i]);
          }
        }
      }
    }
  } else {
    for (var s = 0; s < school_names.length; s++) {
      var school_name = school_names[s];
      for (var i in all_schools_data) {
        if (all_schools_data[i].school == school_name) {
          school_data.push(all_schools_data[i]);
        }
      }

      // if (event_names == null || event_names.includes('all')) { // SELECT ALL: uncomment and delete line below
      if(event_names == null) {
        for (var i in all_schools_event_data) {
          if (all_schools_event_data[i].school == school_name) {
            school_event_data.push(all_schools_event_data[i]);
          }
        }
      } else {
        for (var i in all_schools_event_data) {
          for (let e = 0; e < event_names.length; e++) {
            var event_name = event_names[e];
            if (
              all_schools_event_data[i].school == school_name &&
              all_schools_event_data[i].event == event_name
            ) {
              school_event_data.push(all_schools_event_data[i]);
            }
          }
        }
      }
    }
  }
  chart.data = school_data;
  eventSeries.data = school_event_data;
}
