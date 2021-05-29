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
    
    //Path for images: 
    let imagePath = "../../../img/imdb-ucla-movies/"

    chart.data = [{
        //Emergency! EP: Nurse's Wild
        "category": "",
        "start": "1972-03-04 12:00",
        "end": "1972-03-04 12:15",
        "color": colorSet.getIndex(0),
        "text": "Emergency! (Ep: Nurse's Wild)",
        "extra": "TV Series • 1972 - 1979",
        "rating": "IMDB Rating = 8.0 / 10.0"
    }, {
        //The Godfather
        "category": "",
        "start": "1972-03-14 12:00",
        "end": "1972-03-14 12:15",
        "color": colorSet.getIndex(1),
        "text": "The Godfather",
        "extra": "Film • 1972 • 2h 55 min",
        "rating": "IMDB Rating = 9.2 / 10.0"
    }, {
        //Barnaby Jones
        "category": "",
        "start": "1973-02-25 12:00",
        "end": "1973-02-25 12:15",
        "color": colorSet.getIndex(2),
        "text": "Barnaby Jones (Ep: Sunday: Doomsday)",
        "extra": "TV Series • 1973 - 1980",
        "rating": "IMDB Rating = 7.6 / 10.0"
    }, {
        //The Bolero
        "category": "",
        "start": "1973-10-15 12:00",
        "end": "1973-10-15 12:15",
        "color": colorSet.getIndex(3),
        "text": "The Bolero",
        "extra": "Short • Music • Documentary • 1973 • 26 min",
        "rating": "IMDB Rating = 7.6 / 10.0"
    }, {
        //Emergency! Ep; The Promise
        "category": "",
        "start": "1973-12-01 12:00",
        "end": "1973-12-01 12:15",
        "color": colorSet.getIndex(4),
        "text": "Emergency! (Ep: The Promise)",
        "extra": "TV Series • 1972 - 1979",
        "rating": "IMDB Rating = 8.1 / 10.0"
    }, {
        //Washington: Behind Closed Doors
        "category": "",
        "start": "1977-09-07 12:00",
        "end": "1977-09-07 12:15",
        "color": colorSet.getIndex(5),
        "text": "Washington: Behind Closed Doors (Part 2)",
        "extra": "TV Mini Series • 1977",
        "rating": "IMDB Rating = 9.2 / 10.0"
    }, {
        //The Rockford Files
        "category": "",
        "start": "1978-02-17 12:00",
        "end": "1978-02-17 12:15",
        "color": colorSet.getIndex(6),
        "text": "The Rockford Files (Ep: The Prisoner of Rosemont Hall)",
        "extra": "TV Series • 1974 - 1980",
        "rating": "IMDB Rating = 7.7 / 10.0"
    }, {
        //CHiPs Ep; Hot Wheels
        "category": "",
        "start": "1979-11-03 12:00",
        "end": "1979-11-03 12:15",
        "color": colorSet.getIndex(7),
        "text": "CHiPs (Ep: Hot Wheels)",
        "extra": "TV Series • 1977 - 1983",
        "rating": "IMDB Rating = 7.6 / 10.0"
    }, {
        //Charlie's Angels
        "category": "",
        "start": "1980-04-08 12:00",
        "end": "1980-04-08 12:15",
        "color": colorSet.getIndex(8),
        "text": "Charlie's Angels (Ep: Angels on Campus)",
        "extra": "TV Series • 1976 - 1981",
        "rating": "IMDB Rating = 7.5 / 10.0"
    }, {
        //CHiPs EP: E.M.T.
        "category": "",
        "start": "1980-10-19 12:00",
        "end": "1980-10-19 12:15",
        "color": colorSet.getIndex(9),
        "text": "CHiPs (Ep: E.M.T.)",
        "extra": "TV Series • 1977 - 1983",
        "rating": "IMDB Rating = 7.6 / 10.0"
    }, {
        //Simon & Simon - Love, Christy
        "category": "",
        "start": "1981-12-01 12:00",
        "end": "1981-12-01 12:15",
        "color": colorSet.getIndex(10),
        "text": "Simon & Simon (Ep: Love, Christy)",
        "extra": "TV Series • 1981 - 1989",
        "rating": "IMDB Rating = 7.5 / 10.0"
    }, {
        //CHiPs EP: A Threat of War
        "category": "",
        "start": "1982-03-21 12:00",
        "end": "1982-03-21 12:15",
        "color": colorSet.getIndex(11),
        "text": "CHiPs (Ep: A Threat of War)",
        "extra": "TV Series • 1977 - 1983",
        "rating": "IMDB Rating = 7.5 / 10.0"
    }, {
        //CHiPs EP: K-9-1
        "category": "",
        "start": "1982-05-09 12:00",
        "end": "1982-05-09 12:15",
        "color": colorSet.getIndex(12),
        "text": "CHiPs (Ep: K-9-1)",
        "extra": "TV Series • 1977 - 1983",
        "rating": "IMDB Rating = 7.9 / 10.0"
    }, {
        //Dallas EP: Eye of the Beholder
        "category": "",
        "start": "1984-02-14 12:00",
        "end": "1984-02-14 12:15",
        "color": colorSet.getIndex(13),
        "text": "Dallas (Ep: Eye of the Beholder)",
        "extra": "TV Series • 1978-1991",
        "rating": "IMDB Rating = 7.5 / 10.0"
    }, {
        //Paper Dolls 
        "category": "",
        "start": "1984-09-23 12:00",
        "end": "1984-09-23 12:15",
        "color": colorSet.getIndex(14),
        "text": "Paper Dolls (Ep: #1.1)",
        "extra": "TV Series • 1984",
        "rating": "IMDB Rating = 7.8 / 10.0"
    }, {
        //Highway to Heaven 
        "category": "",
        "start": "1986-10-01 12:00",
        "end": "1986-10-01 12:15",
        "color": colorSet.getIndex(15),
        "text": "Highway to Heaven (Ep: A Special Love: Part Two)",
        "extra": "TV Series • 1984 - 1989",
        "rating": "IMDB Rating = 8.7 / 10.0"
    }];

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 13;

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
    labelTemplate.background.fillOpacity = 0.90;
    labelTemplate.padding(10, 10, 10, 10);

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
    imageBullet1.background.radius = 20;
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 1;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.dy = -2;
    imageBullet1.background.pointerBaseWidth = 10;
    imageBullet1.background.pointerLength = 10
    imageBullet1.tooltipText = "[bold]{text}\n[normal]{extra}\n{rating}";
    imageBullet1.tooltipText.background = "color";

    series.tooltip.pointerOrientation = "up";

    imageBullet1.background.adapter.add("pointerAngle", (value, target) => {
        if (target.dataItem) {
            var position = dateAxis.valueToPosition(target.dataItem.openDateX.getTime());
            return dateAxis.renderer.positionToAngle(position);
        }
        return value;
    });

    var hs = imageBullet1.states.create("hover")
    hs.properties.scale = 5;
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
    chart.scrollbarX.opacity = 0.7;

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

    // chart.events.on("inited", function () {
    //     setTimeout(function () {
    //         hoverItem(series.dataItems.getIndex(0));
    //     }, 2000)
    // })

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
            function () {
                hoverItem(series.dataItems.getIndex(index + 1))
            }, 1000);
    }

    var label = chart.createChild(am4core.Label);
    label.text = "Fifty Years of Movies & Television at UCLA"
    label.isMeasured = false;
    label.y = am4core.percent(5);
    label.x = am4core.percent(50);
    label.horizontalCenter = "middle";
    label.fontSize = 25;

}); // end am4core.ready()

function getPoints() {

    var points = [{ x: -1000, y: 200 }, { x: 0, y: 200 }];

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