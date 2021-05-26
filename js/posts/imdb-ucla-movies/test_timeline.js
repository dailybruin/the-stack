am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(100, 20, 50, 20);
    chart.levelCount = 3;
    chart.yAxisRadius = am4core.percent(20);
    chart.yAxisInnerRadius = am4core.percent(2);
    chart.maskBullets = false;

    var colorSet = new am4core.ColorSet();

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    chart.dateFormatter.dateFormat = "HH";

    chart.data = [{
        //Emergency! (EP: Nurse's Wild)
        "category": "",
        "start": "1972-03-04 12:00",
        "end": "1972-03-04 12:15",
        "color": colorSet.getIndex(0),
        "text": "Emergency! (Ep: Nurse's Wild)\nIMDB Rating = 8.0/10.0"
    }, {
        //The Godfather
        "category": "",
        "start": "1972-08-24 12:00",
        "end": "1972-08-24 12:15",
        "color": colorSet.getIndex(1),
        "text": "The Godfather (1972)\nIMDB Rating = 9.2/10.0"
    }, {
        //Barnaby Jones (EP: Sunday: Doomsday)
        "category": "",
        "start": "1973-02-25 12:00",
        "end": "1973-02-25 12:15",
        "color": colorSet.getIndex(2),
        "text": "Barnaby Jones (Ep: Sunday: Doomsday)\nIMDB Rating = 7.6/10.0"
    }];

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;

    var labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.4;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(15);

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 0.5;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.dy = -5;


    var textBullet = series.bullets.push(new am4charts.LabelBullet());
    textBullet.label.propertyFields.text = "text";
    textBullet.disabled = true;
    textBullet.propertyFields.disabled = "textDisabled";
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = - 100;
    textBullet.label.textAlign = "middle";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center"
    chart.scrollbarX.width = am4core.percent(75);
    chart.scrollbarX.opacity = 0.5;

    var cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;


    var label = chart.createChild(am4core.Label);
    label.text = "Another unlucky day in the office."
    label.isMeasured = false;
    label.y = am4core.percent(40);
    label.x = am4core.percent(50);
    label.horizontalCenter = "middle";
    label.fontSize = 20;

}); // end am4core.ready()

//am4core.ready(function () {

//Themes begin
//am4core.useTheme(am4themes_animated);
//Themes end

//Images and icons to be included here???

// am4core.ready(function () {
//     var chart = am4core.create("chartdiv", am4plugins_timeline.CurvecChart);
//     chart.CurveContainer.padding(100, 20, 50, 20);
//     chart.maskBullets = false;

//     var colorSet = new am4core.colorSet();

//     chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
//     chart.dateFormatter.dateFormat = "HH";

//     chart.data = [{
//         //Emergency! (EP: Nurse's Wild)
//         "category": "",
//         "start": "1972-03-04 12:00",
//         "end": "1972-03-04 12:15",
//         "color": colorSet.getIndex(0),
//         "text": "Emergency! (Ep: Nurse's Wild)\nIMDB Rating = 8.0/10.0"
//     }, {
//         //The Godfather
//         "category": "",
//         "start": "1972-08-24 12:00",
//         "end": "1972-08-24 12:15",
//         "color": colorSet.getIndex(1),
//         "text": "The Godfather (1972)\nIMDB Rating = 9.2/10.0"
//     }, {
//         //Barnaby Jones (EP: Sunday: Doomsday)
//         "category": "",
//         "start": "1973-02-25 12:00",
//         "end": "1973-02-25 12:15",
//         "color": colorSet.getIndex(2),
//         "text": "Barnaby Jones (Ep: Sunday: Doomsday)\nIMDB Rating = 7.6/10.0"
//     }];
//     //other movies yet to be included!!

//     chart.fontSize = 10;
//     chart.tooltipContainer.fontSize = 10;

//     var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
//     categoryAxis.dataFields.category = "category";
//     categoryAxis.renderer.grid.template.disabled = true;
//     categoryAxis.renderer.labels.template.paddingRight = 25;
//     categoryAxis.renderer.minGridDistance = 10;
//     categoryAxis.renderer.innerRadius = 10;
//     categoryAxis.renderer.radius = 30;

//     var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

//     dateAxis.renderer.points = getPoints();

//     dateAxis.renderer.autoScale = false;
//     dateAxis.renderer.autoCenter = false;
//     dateAxis.renderer.minGridDistance = 70;
//     dateAxis.baseInterval = { count: 1, timeUnit: "year" };
//     dateAxis.renderer.tooltipLocation = 0;
//     dateAxis.renderer.line.strokeDasharray = "1,4";
//     dateAxis.renderer.line.strokeOpacity = 0.5;
//     dateAxis.tooltip.background.fillOpacity = 0.2;
//     dateAxis.tooltip.background.cornerRadius = 5;
//     dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
//     dateAxis.tooltip.label.paddingTop = 7;
//     dateAxis.endLocation = 0;
//     dateAxis.startLocation = -0.5;
//     dateAxis.min = new Date(1971, 0, 1, 0, 0).getTime();
//     dateAxis.max = new Date(2021, 0, 1, 0, 0).getTime();

//     var labelTemplate = dateAxis.renderer.labels.template;
//     labelTemplate.verticalCenter = "middle";
//     labelTemplate.fillOpacity = 0.6;
//     labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
//     labelTemplate.background.fillOpacity = 1;
//     labelTemplate.fill = new am4core.InterfaceColorSet().getFor("text");
//     labelTemplate.padding(7, 7, 7, 7);

//     var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
//     series.columns.template.height = am4core.percent(30);

//     series.dataFields.openDateX = "start";
//     series.dataFields.dateX = "end";
//     series.dataFields.categoryY = "category";
//     series.baseAxis = categoryAxis;
//     series.columns.template.propertyFields.fill = "color"; // get color from data
//     series.columns.template.propertyFields.stroke = "color";
//     series.columns.template.strokeOpacity = 0;
//     series.columns.template.fillOpacity = 0.6;

//     var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
//     imageBullet1.background.radius = 18;
//     imageBullet1.locationX = 1;
//     imageBullet1.propertyFields.stroke = "color";
//     imageBullet1.background.propertyFields.fill = "color";
//     imageBullet1.image = new am4core.Image();
//     imageBullet1.image.propertyFields.href = "icon";
//     imageBullet1.image.scale = 0.7;
//     imageBullet1.circle.radius = am4core.percent(100);
//     imageBullet1.background.fillOpacity = 0.8;
//     imageBullet1.background.strokeOpacity = 0;
//     imageBullet1.dy = -2;
//     imageBullet1.background.pointerBaseWidth = 10;
//     imageBullet1.background.pointerLength = 10
//     imageBullet1.tooltipText = "{text}";

//     series.tooltip.pointerOrientation = "up";

//     imageBullet1.background.adapter.add("pointerAngle", (value, target) => {
//         if (target.dataItem) {
//             var position = dateAxis.valueToPosition(target.dataItem.openDateX.getTime());
//             return dateAxis.renderer.positionToAngle(position);
//         }
//         return value;
//     });

//     var hs = imageBullet1.states.create("hover")
//     hs.properties.scale = 1.3;
//     hs.properties.opacity = 1;

//     var textBullet = series.bullets.push(new am4charts.LabelBullet());
//     textBullet.label.propertyFields.text = "text";
//     textBullet.disabled = true;
//     textBullet.propertyFields.disabled = "textDisabled";
//     textBullet.label.strokeOpacity = 0;
//     textBullet.locationX = 1;
//     textBullet.dy = - 100;
//     textBullet.label.textAlign = "middle";

//     chart.scrollbarX = new am4core.Scrollbar();
//     chart.scrollbarX.align = "center"
//     chart.scrollbarX.width = am4core.percent(75);
//     chart.scrollbarX.parent = chart.curveContainer;
//     chart.scrollbarX.height = 300;
//     chart.scrollbarX.orientation = "vertical";
//     chart.scrollbarX.x = 128;
//     chart.scrollbarX.y = -140;
//     chart.scrollbarX.isMeasured = false;
//     chart.scrollbarX.opacity = 0.6;

//     var cursor = new am4plugins_timeline.CurveCursor();
//     chart.cursor = cursor;
//     cursor.xAxis = dateAxis;
//     cursor.yAxis = categoryAxis;
//     cursor.lineY.disabled = true;
//     cursor.lineX.disabled = true;

//     dateAxis.renderer.tooltipLocation2 = 0;
//     categoryAxis.cursorTooltipEnabled = false;

//     chart.zoomOutButton.disabled = true;

//     var previousBullet;

//     chart.events.on("inited", function () {
//         setTimeout(function () {
//             hoverItem(series.dataItems.getIndex(0));
//         }, 2000)
//     })

//     function hoverItem(dataItem) {
//         var bullet = dataItem.bullets.getKey(imageBullet1.uid);
//         var index = dataItem.index;

//         if (index >= series.dataItems.length - 1) {
//             index = -1;
//         }

//         if (bullet) {
//             if (previousBullet) {
//                 previousBullet.isHover = false;
//             }

//             bullet.isHover = true;

//             previousBullet = bullet;
//         }

//         setTimeout(
//             function () {
//                 hoverItem(series.dataItems.getIndex(index + 1))
//             }, 1000);
//     }

// });

// function getPoints() {
//     var points = [{ x: -1300, y: 200 }, { x: 0, y: 200 }];

//     var w = 400;
//     var h = 400;
//     var levelCount = 4;

//     var radius = am4core.math.min(w / (levelCount - 1) / 2, h / 2);
//     var startX = radius;

//     for (var i = 0; i < 25; i++) {
//         var angle = 0 + i / 25 * 90;
//         var centerPoint = { y: 200 - radius, x: 0 }
//         points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
//     }

//     for (var i = 0; i < levelCount; i++) {

//         if (i % 2 != 0) {
//             points.push({ y: -h / 2 + radius, x: startX + w / (levelCount - 1) * i })
//             points.push({ y: h / 2 - radius, x: startX + w / (levelCount - 1) * i })

//             var centerPoint = { y: h / 2 - radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
//             if (i < levelCount - 1) {
//                 for (var k = 0; k < 50; k++) {
//                     var angle = -90 + k / 50 * 180;
//                     points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
//                 }
//             }

//             if (i == levelCount - 1) {
//                 points.pop();
//                 points.push({ y: -radius, x: startX + w / (levelCount - 1) * i })
//                 var centerPoint = { y: -radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
//                 for (var k = 0; k < 25; k++) {
//                     var angle = -90 + k / 25 * 90;
//                     points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
//                 }
//                 points.push({ y: 0, x: 1300 });
//             }
//         }
//         else {
//             points.push({ y: h / 2 - radius, x: startX + w / (levelCount - 1) * i })
//             points.push({ y: -h / 2 + radius, x: startX + w / (levelCount - 1) * i })
//             var centerPoint = { y: -h / 2 + radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
//             if (i < levelCount - 1) {
//                 for (var k = 0; k < 50; k++) {
//                     var angle = -90 - k / 50 * 180;
//                     points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
//                 }
//             }
//         }

//     }
//     return points
// }

// //});