am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_timeline.CurveChart);
    chart.curveContainer.padding(100, 20, 50, 20);
    //chart.levelCount = 3;
    //chart.yAxisRadius = am4core.percent(20);
    //chart.yAxisInnerRadius = am4core.percent(2);
    chart.maskBullets = false;

    var colorSet = new am4core.ColorSet();

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    chart.dateFormatter.dateFormat = "yyyy";

    chart.data = [{
        //Emergency! (EP: Nurse's Wild)
        "category": "",
        "start": "1972-03-04 12:00",
        "end": "1972-03-04 12:15",
        "color": colorSet.getIndex(0),
        "text": "Emergency! (Ep: Nurse's Wild)\nIMDB Rating = 8.0/10.0",
        "icon": "img/imdb-ucla-movies/emergency.jpg"
    }, {
        //The Godfather
        "category": "",
        "start": "1972-08-24 12:00",
        "end": "1972-08-24 12:15",
        "color": colorSet.getIndex(1),
        "text": "The Godfather (1972)\nIMDB Rating = 9.2/10.0",
        "icon": "/img/imdb-ucla-movies/godfather.jpeg"
    }, {
        //Barnaby Jones (EP: Sunday: Doomsday)
        "category": "",
        "start": "1973-02-25 12:00",
        "end": "1973-02-25 12:15",
        "color": colorSet.getIndex(2),
        "text": "Barnaby Jones (EP: Sunday: Doomsday)\nIMDB Rating = 7.6/10.0",
        "icon": "/img/imdb-ucla-movies/barnaby_jones.jpg"
    }, {
        //In Concert (EP #1.15)
        "category": "",
        "start": "1973-08-17 12:00",
        "end": "1973-08-17 12:15",
        "color": colorSet.getIndex(3),
        "text": "In Concert (EP: #1.15)\nIMDB Rating = N/A",
        "icon": "/img/imdb-ucla-movies/in-concert.jpg"
    }, {
        //The Emergency! (EP: The Promise)
        "category": "",
        "start": "1973-12-01 12:00",
        "end": "1973-12-01 12:15",
        "color": colorSet.getIndex(4),
        "text": "The Emergency! (EP: The Promise)\nIMDB Rating = 8.1/10.0",
        "icon": "/img/imdb-ucla-movies/emergency.jpg"
    }, {
        //The Reincarnation of Peter Proud
        "category": "",
        "start": "1975-04-25 12:00",
        "end": "1975-04-25 12:15",
        "color": colorSet.getIndex(5),
        "text": "The Reincarnation of Peter Proud\nIMDB Rating = 6.5/10.0",
        "icon": "/img/imdb-ucla-movies/peter-proud.jpg"
    }, {
        //Washington: Behind Closed Doors
        "category": "",
        "start": "1977-09-07 12:00",
        "end": "1977-09-07 12:15",
        "color": colorSet.getIndex(6),
        "text": "Washington: Behind Closed Doors\nIMDB Rating = 9.2/10.0"
    }, {
        //The Rockford Files (EP: The Prisoner of Rosemont Hall)
        "category": "",
        "start": "1978-02-17 12:00",
        "end": "1978-02-17 12:15",
        "color": colorSet.getIndex(7),
        "text": "The Rockford Files (EP: The Prisoner of Rosemont Hall)\nIMDB Rating = 7.7/10.0"
    }, {
        //The Big Fix
        "category": "",
        "start": "1978-10-06 12:00",
        "end": "1978-10-06 12:15",
        "color": colorSet.getIndex(8),
        "text": "The Big Fix\nIMDB Rating = 6.3/10.0"
    }, {
        //America Alive (EP: Lucille Ball at UCLA)
        "category": "",
        "start": "1978-11-10 12:00",
        "end": "1978-11-10 12:15",
        "color": colorSet.getIndex(9),
        "text": "America Alive! (EP: Lucille Ball at UCLA)\nIMDB Rating = N/A"
    }, {
       //North Dallas Forty
       "category": "",
       "start": "1979-08-03 12:00",
       "end": "1979-08-03 12:15",
       "color": colorSet.getIndex(10),
       "text": "North Dallas Forty\nIMDB Rating = 7.0/10.0" 
    }, {
        //CHiPs EP: Hot Wheels
        "category": "",
        "start": "1979-11-03 12:00",
        "end": "1979-11-03 12:15",
        "color": colorSet.getIndex(11),
        "text": "CHiPs (EP: Hot Wheels)\nIMDB Rating = 7.6/10.0"
    }, {
        //Penitentiary
        "category": "",
        "start": "1979-12-01 12:00",
        "end": "1979-12-01 12:15",
        "color": colorSet.getIndex(12),
        "text": "Penitentiary\nIMDB Rating = 5.7/10.0"
    }, {
        //American Gigolo
        "category": "",
        "start": "1980-02-01 12:00",
        "end": "1980-02-01 12:15",
        "color": colorSet.getIndex(13),
        "text": "American Gigolo\nIMDB Rating = 6.2/10.0"
    }, {
        //Charlie's Angels EP: Angels on Campus
        "category": "",
        "start": "1980-04-08 12:00",
        "end": "1980-04-08 12:15",
        "color": colorSet.getIndex(14),
        "text": "Charlie's Angels (EP: Angels on Campus)\nIMDB Rating = 7.5/10.0"
    }, {
        //CHiPs (EP: E.M.T.)
        "category": "",
        "start": "1980-10-19 12:00",
        "end": "1980-10-19 12:15",
        "color": colorSet.getIndex(15),
        "text": "CHiPs (EP: E.M.T.)\nIMDB Rating = 7.6/10.0"
    }, {
        //CHiPs (EP: Satan's Angels)
        "category": "",
        "start": "1980-12-14 12:00",
        "end": "1980-12-14 12:15",
        "color": colorSet.getIndex(16),
        "text": "CHiPs (EP: Satan's Angels)\nIMDB Rating = 7.1/10.0"
    }, {
        //Simon & Simon (EP: Love, Christy)
        "category": "",
        "start": "1981-12-01 12:00",
        "end": "1981-12-01 12:15",
        "color": colorSet.getIndex(17),
        "text": "Simon & Simon (EP: Love, Christy)\nIMDB Rating = 7.5/10.0"
    }, {
        //McDonaldland (EP: How I Met Grimace)
        "category": "",
        "start": "1981-12-19 12:00",
        "end": "1981-12-19 12:15",
        "color": colorSet.getIndex(18),
        "text": "McDonaldland (EP: How I Met Grimace)\nIMDB Rating = N/A"
    }, {
        //The Kid from Nowhere
        "category": "",
        "start": "1982-01-04 12:00",
        "end": "1982-01-04 12:15",
        "color": colorSet.getIndex(19),
        "text": "The Kid from Nowhere\nIMDB Rating = 6.1/10.0"
    }, {
        //CHiPs (EP: Bright Flashes)
        "category": "",
        "start": "1982-01-17 12:00",
        "end": "1982-01-17 12:15",
        "color": colorSet.getIndex(20),
        "text": "CHiPs (EP: Bright Flashes)\nIMDB Rating = 7.0/10.0"
    }, {
        //Personal Best
        "category": "",
        "start": "1982-02-05 12:00",
        "end": "1982-02-05 12:15",
        "color": colorSet.getIndex(21),
        "text": "Personal Best\nIMDB Rating = 6.3/10.0"
    }, {
        //CHiPs EP: Silent Partner
        "category": "",
        "start": "1982-02-28 12:00",
        "end": "1982-02-28 12:15",
        "color": colorSet.getIndex(22),
        "text": "CHiPs (EP: Silent Partner)\nIMDB Rating = 6.9/10.0"
    }, {
        //CHiPs: A Threat of War
        "category": "",
        "start": "1982-03-21 12:00",
        "end": "1982-03-21 12:15",
        "color": colorSet.getIndex(23),
        "text": "CHiPs (EP: A Threat of War)\nIMDB Rating = 7.5/10.0"
    }, {
        //CHiPs EP: Trained for Trouble
        "category": "",
        "start": "1982-04-04 12:00",
        "end": "1982-04-04 12:15",
        "color": colorSet.getIndex(24),
        "text": "CHiPs (EP: Trained for Trouble)\nIMDB Rating = 6.5/10.0"
    }, {
        //Tag: The Assassinatin Game
        "category": "",
        "start": "1982-04-20 12:00",
        "end": "1982-04-20 12:15",
        "color": colorSet.getIndex(25),
        "text": "Tag: The Assassination Game\nIMDB Rating = 5.9/10.0"
    }, {
        //CHiPs EP: K-9-1
        "category": "",
        "start": "1982-05-09 12:00",
        "end": "1982-05-09 12:15",
        "color": colorSet.getIndex(26),
        "text": "CHiPs (EP: K-9-1)\nIMDB Rating = 7.9/10.0"
    }, {
        //Six Weeks
        "category": "",
        "start": "1982-12-17 12:00",
        "end": "1982-12-17 12:15",
        "color": colorSet.getIndex(27),
        "text": "Six Weeks\nIMDB Rating = 5.7/10.0"
    }];

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = 10;
    categoryAxis.renderer.radius = 30;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.points = getPoints();
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "year" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;
    //dateAxis.min = new Date(2021, 0, 1, 12, 10).getTime();
    dateAxis.min = new Date(1971, 0, 1, 12, 10).getTime();
    dateAxis.max = new Date(2021, 0, 1, 12, 10).getTime();

    var labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
    labelTemplate.fill = new am4core.InterfaceColorSet().getFor("text");
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(30);

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    var imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.background.radius = 18;
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 0.5;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.dy = -5;
    imageBullet1.background.pointerBaseWidth = 10;
    imageBullet1.background.pointerLength = 10
    imageBullet1.tooltipText = "{text}";

    series.tooltip.pointerOrientation = "up";

    imageBullet1.background.adapter.add("pointerAngle", (value, target) => {
        if (target.dataItem) {
            var position = dateAxis.valueToPosition(target.dataItem.openDateX.getTime());
            return dateAxis.renderer.positionToAngle(position);
        }
        return value;
    });

    var hs = imageBullet1.states.create("hover")
    hs.properties.scale = 1.3;
    hs.properties.opacity = 1;

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
    //chart.scrollbarX.parent = chart.curveContainer;
    //chart.scrollbarX.height = 300;
    //chart.scrollbarX.orientation = "vertical";
    chart.scrollbarX.opacity = 0.5;

    var cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.disables = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    var previousBullet;

    chart.events.on("inited", function() {
        setTimeout(function() {
            hoverItem(series.dataItems.getIndex(0));
        }, 2000)
    })

    function hoverItem(dataItem) {
        var bullet = dataItem.bullets.getKey(imageBullet1.uid);
        var index = dataItem.index;

        if (index >= series.dataItems.length - 1) {
            index = -1;
        }

        if (bullet) {

            if (previousBullet) {
                previousBullet.isHover = false;
            }

            bullet.isHover = true;

            previousBullet = bullet;
        }
        setTimeout(
            function() {
                hoverItem(series.dataItems.getIndex(index + 1))
            }, 1000);
    }
    
    var label = chart.createChild(am4core.Label);
    label.text = "Fifty Years of Hollywood at UCLA"
    label.isMeasured = false;
    label.y = am4core.percent(20);
    label.x = am4core.percent(50);
    label.horizontalCenter = "middle";
    label.fontSize = 20;

}); // end am4core.ready()

function getPoints() {

    var points = [{ x: -1500, y: 200 }, { x: 0, y: 200 }];

    var w = 650;
    var h = 400;
    var levelCount = 4;

    var radius = am4core.math.min(w / (levelCount - 1) / 2, h / 2);
    var startX = radius;

    for (var i = 0; i < 25; i++) {
        var angle = 0 + i / 25 * 90;
        var centerPoint = { y: 200 - radius, x: 0 }
        points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
    }

    for (var i = 0; i < levelCount; i++) {

        if (i % 2 != 0) {
            points.push({ y: -h / 2 + radius, x: startX + w / (levelCount - 1) * i })
            points.push({ y: h / 2 - radius, x: startX + w / (levelCount - 1) * i })

            var centerPoint = { y: h / 2 - radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
            if (i < levelCount - 1) {
                for (var k = 0; k < 50; k++) {
                    var angle = -90 + k / 50 * 180;
                    points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
                }
            }

            if (i == levelCount - 1) {
                points.pop();
                points.push({ y: -radius, x: startX + w / (levelCount - 1) * i })
                var centerPoint = { y: -radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
                for (var k = 0; k < 25; k++) {
                    var angle = -90 + k / 25 * 90;
                    points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
                }
                points.push({ y: 0, x: 1300 });
            }

        }
        else {
            points.push({ y: h / 2 - radius, x: startX + w / (levelCount - 1) * i })
            points.push({ y: -h / 2 + radius, x: startX + w / (levelCount - 1) * i })
            var centerPoint = { y: -h / 2 + radius, x: startX + w / (levelCount - 1) * (i + 0.5) }
            if (i < levelCount - 1) {
                for (var k = 0; k < 50; k++) {
                    var angle = -90 - k / 50 * 180;
                    points.push({ y: centerPoint.y + radius * am4core.math.cos(angle), x: centerPoint.x + radius * am4core.math.sin(angle) });
                }
            }
        }
    }

    return points;
}