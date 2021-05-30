am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(20, 20, 20, 20);
    chart.levelCount = 8;
    chart.orientation = "horizontal";
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
        "color": colorSet.getIndex(4),
        "text": "[bold]Emergency! [normal]Episode: Nurse's Wild",
        "extra": "TV Series • 1972 - 1979",
        "rating": "IMDB Rating = 7.9 / 10"
    }, {
        //The Godfather
        "category": "",
        "start": "1972-03-24 12:00",
        "end": "1972-03-24 12:15",
        "color": colorSet.getIndex(17),
        "text": "[bold]The Godfather",
        "extra": "[normal]Film • 2h 55 min",
        "rating": "IMDB Rating = 9.2 / 10"
    }, {
        //Barnaby Jones
        "category": "",
        "start": "1973-02-25 12:00",
        "end": "1973-02-25 12:15",
        "color": colorSet.getIndex(1),
        //"text": "[bold]Barnaby Jones [normal](TV Series • 1973 - 1980)\nEpisode: Sunday: Doomsday\nIMDB Rating = 7.6 / 10",
        "text": "[bold]Barnaby Jones [normal]Episode: Sunday: Doomsday",
        "extra": "TV Series • 1973 - 1980",
        "rating": "IMDB Rating = 7.6 / 10"
    }, {
        //The Bolero
        "category": "",
        "start": "1973-10-15 12:00",
        "end": "1973-10-15 12:15",
        "color": colorSet.getIndex(2),
        //"text": "[bold]The Bolero\n[normal]Short • Music • Documentary • 1973 • 26 min\nIMDB Rating = 7.6 / 10",
        "text": "[bold]The Bolero",
        "extra": "[normal]Short • Music • Documentary • 26 min",
        "rating": "IMDB Rating = 7.7 / 10"
    }, {
        //Emergency! Ep; The Promise
        "category": "",
        "start": "1973-12-01 12:00",
        "end": "1973-12-01 12:15",
        "color": colorSet.getIndex(5),
        //"text": "[bold]Emergency! [normal](TV Series • 1972 - 1979)\nEpisode: The Promise\nIMDB Rating = 8.1 / 10",
        "text": "[bold]Emergency! [normal]Episode: The Promise",
        "extra": "TV Series • 1972 - 1979",
        "rating": "IMDB Rating = 8.0 / 10"
    }, {
        //Washington: Behind Closed Doors
        "category": "",
        "start": "1977-09-07 12:00",
        "end": "1977-09-07 12:15",
        "color": colorSet.getIndex(17),
        //"text": "[bold]Washington: Behind Closed Doors [normal](TV Mini Series • 1977)\nEpisode: Part 2\nIMDB Rating = 9.2 / 10"
        "text": "[bold]Washington: Behind Closed Doors [normal]Episode: Part 2",
        "extra": "TV Mini Series • 1977",
        "rating": "IMDB Rating = 9.2 / 10"
    }, {
        //The Rockford Files
        "category": "",
        "start": "1978-02-17 12:00",
        "end": "1978-02-17 12:15",
        "color": colorSet.getIndex(2),
        //"text": "[bold]The Rockford Files [normal](TV Series • 1974 - 1980)\nEpisode: The Prisoner of Rosemont Hall\nIMDB Rating = 7.6 / 10"
        "text": "[bold]The Rockford Files [normal]Episode: The Prisoner of Rosemont Hall",
        "extra": "TV Series • 1974 - 1980",
        "rating": "IMDB Rating = 7.7 / 10"
    }, {
        //Simon & Simon EP: Love, Christy
        "category": "",
        "start": "1981-12-01 12:00",
        "end": "1981-12-01 12:15",
        "color": colorSet.getIndex(0),
        "text": "[bold]Simon & Simon [normal]Episode: Love, Christy",
        "extra": "TV Series • 1981 - 1989",
        //"episode": "",
        "rating": "IMDB Rating = 7.5 / 10"
    }, {
        //CHiPs EP: K-9-1
        "category": "",
        "start": "1982-05-09 12:00",
        "end": "1982-05-09 12:15",
        "color": colorSet.getIndex(2),
        "text": "[bold]CHiPs [normal]Episode: K-9-1",
        "extra": "TV Series • 1977 - 1983",
        //"episode": "Episode: K-9-1",
        "rating": "IMDB Rating = 7.7 / 10"
    }, {
        //Dallas EP: Eye of the Beholder
        "category": "",
        "start": "1984-02-14 12:00",
        "end": "1984-02-14 12:15",
        "color": colorSet.getIndex(0),
        "text": "[bold]Dallas [normal]Episode: Eye of the Beholder",
        "extra": "TV Series • 1978-1991",
        //"episode": "Episode: Eye of the Beholder",
        "rating": "IMDB Rating = 7.5 / 10"
    }, {
        //Paper Dolls EP 1.1
        "category": "",
        "start": "1984-09-23 12:00",
        "end": "1984-09-23 12:15",
        "color": colorSet.getIndex(3),
        "text": "[bold]Paper Dolls [normal]Episode: #1.1",
        "extra": "TV Series • 1984",
        //"episode": "Episode: #1.1",
        "rating": "IMDB Rating = 7.8 / 10"
    }, {
        //Highway to Heaven EP: A Special Love: Part Two
        "category": "",
        "start": "1986-10-01 12:00",
        "end": "1986-10-01 12:15",
        "color": colorSet.getIndex(12),
        "text": "[bold]Highway to Heaven [normal]Episode: A Special Love: Part 2",
        "extra": "TV Series • 1984 - 1989",
        "rating": "IMDB Rating = 8.7 / 10"
    }, {
        //The Colbys
        "category": "",
        "start": "1987-05-22 12:00",
        "end": "1987-05-22 12:15",
        "color": colorSet.getIndex(11),
        "text": "[bold]The Colbys [normal]Episode: Reaching Out",
        "extra": "TV Series • 1985 - 1987",
        //"episode": "Episode: Reaching Out",
        "rating": "IMDB Rating = 8.6 / 10"
    }, {
        //Melrose Place EP Bye Bye Billy
        "category": "",
        "start": "1993-02-17 12:00",
        "end": "1993-02-17 12:15",
        "color": colorSet.getIndex(1),
        "text": "[bold]Melrose Place [normal]Episode: Bye Bye Billy",
        "extra": "TV Series • 1992 - 1999",
        //"episode": "Episode: Bye Bye Billy",
        "rating": "IMDB Rating = 7.6 / 10"
    }, {
        //The Rockford Files: Friends and Foul play
        "category": "",
        "start": "1996-04-25 12:00",
        "end": "1996-04-25 12:15",
        "color": colorSet.getIndex(1),
        "text": "[bold]The Rockford Files: Friends and Foul Play",
        "extra": "[normal]TV Movie • 2h",
        //"episode": "",
        "rating": "IMDB Rating = 7.6 / 10"
    }, {
        //Buffy the Vampire Slayer
        "category": "",
        "start": "1997-03-10 12:00",
        "end": "1997-03-10 12:15",
        "color": colorSet.getIndex(7),
        "text": "[bold]Buffy the Vampire Slayer",
        "extra": "[normal]TV Series • 1997 - 2003",
        //"episode": "",
        "rating": "IMDB Rating = 8.2 / 10"
    }, {
        //Prey
        "category": "",
        "start": "1998-01-15 12:00",
        "end": "1998-01-15 12:15",
        "color": colorSet.getIndex(1),
        "text": "[bold]Prey",
        "extra": "[normal]TV Series • 1998",
        //"episode": "",
        "rating": "IMDB Rating = 7.6 / 10"
    }, {
        //Gilmore Girls
        "category": "",
        "start": "2000-10-05 12:00",
        "end": "2000-10-05 12:15",
        "color": colorSet.getIndex(6),
        "text": "[bold]Gilmore Girls",
        "extra": "[normal]TV Series • 2000 - 2007",
        //"episode": "",
        "rating": "IMDB Rating = 8.1 / 10.0"
    }, {
        //CSI: Crime Scene Investigation
        "category": "",
        "start": "2000-10-26 12:00",
        "end": "2000-10-26 12:15",
        "color": colorSet.getIndex(1),
        "text": "[bold]CSI: Crime Scene Investigation",
        "extra": "[normal]TV Series • 2000 - 2015",
        //"episode": "",
        "rating": "IMDB Rating = 7.6 / 10"
    }, {
        //Undeclared
        "category": "",
        "start": "2001-09-25 12:00",
        "end": "2001-09-25 12:15",
        "color": colorSet.getIndex(4),
        "text": "[bold]Undeclared",
        "extra": "[normal]TV Series • 2001 - 2003",
        //"episode": "",
        "rating": "IMDB Rating = 7.9 / 10"
    }, {
        //Alias EP: Reckoning
        "category": "",
        "start": "2001-11-18 12:00",
        "end": "2001-11-18 12:15",
        "color": colorSet.getIndex(2),
        "text": "[bold]Alias [normal]Episode: Reckoning",
        "extra": "TV Series • 2001 - 2006",
        //"episode": "",
        "rating": "IMDB Rating = 7.7 / 10"
    }, {
        //Alias EP: Truth Be Told
        "category": "",
        "start": "2002-01-23 12:00",
        "end": "2002-01-23 12:15",
        "color": colorSet.getIndex(9),
        "text": "[bold]Alias [normal]Truth Be Told",
        "extra": "TV Series • 2001 - 2006",
        //"episode": "",
        "rating": "IMDB Rating = 8.4 / 10"
    }, {
        //Rock n' Roll Cops
        "category": "",
        "start": "2002-04-22 12:00",
        "end": "2002-04-22 12:15",
        "color": colorSet.getIndex(4),
        "text": "[bold]Rock n' Roll Cops",
        "extra": "[normal]Video",
        //"episode": "",
        "rating": "IMDB Rating = 7.9 / 10"
    }, {
        //Christopher Titus: Norman Rockwell Is Bleeding
        "category": "",
        "start": "2004-06-06 12:00",
        "end": "2004-06-06 12:15",
        "color": colorSet.getIndex(14),
        "text": "[bold]Christopher Titus: Norman Rockwell Is Bleeding",
        "extra": "[normal]TV Special • 1h 30 min",
        //"episode": "",
        "rating": "IMDB Rating = 8.9 / 10"
    }, {
        //He Set the Trend
        "category": "",
        "start": "2005-05-26 12:00",
        "end": "2005-05-26 12:15",
        "color": colorSet.getIndex(8),
        "text": "[bold]He Set the Trend",
        "extra": "[normal]Short • 6 min",
        //"episode": "",
        "rating": "IMDB Rating = 8.3 / 10"
    }, {
        //The Recorder
        "category": "",
        "start": "2005-07-11 12:00",
        "end": "2005-07-11 12:15",
        "color": colorSet.getIndex(13),
        "text": "[bold]The Recorder",
        "extra": "[normal]Short • 7 min",
        //"episode": "",
        "rating": "IMDB Rating = 8.8 / 10"
    }, {
        //The West Wing EP: The Ticket
        "category": "",
        "start": "2005-09-15 12:00",
        "end": "2005-09-15 12:15",
        "color": colorSet.getIndex(5),
        "text": "[bold]The West Wing [normal]Episode: The Ticket",
        "extra": "TV Series • 1999 - 2006",
        //"episode": "",
        "rating": "IMDB Rating = 8.0 / 10"
    }, {
        //The West Wing EP: The Mommy Problem
        "category": "",
        "start": "2005-10-02 12:00",
        "end": "2005-10-02 12:15",
        "color": colorSet.getIndex(3),
        "text": "[bold]The West Wing [normal]Episode: The Mommy Problem",
        "extra": "TV Series • 1999 - 2006",
        //"episode": "",
        "rating": "IMDB Rating = 7.8 / 10"
    }, {
        //The West Wing EP: Mr. Frost
        "category": "",
        "start": "2005-11-01 12:00",
        "end": "2005-11-01 12:15",
        "color": colorSet.getIndex(4),
        "text": "[bold]The West Wing [normal]Episode: Mr. Frost",
        "extra": "TV Series • 1999 - 2006",
        //"episode": "",
        "rating": "IMDB Rating = 7.9 / 10"
    }, {
        //House M.D. EP: Meaning
        "category": "",
        "start": "2007-03-22 12:00",
        "end": "2007-03-22 12:15",
        "color": colorSet.getIndex(14),
        "text": "[bold]House M.D. [normal]Episode: Meaning",
        "extra": "TV Series • 2004 - 2012",
        //"episode": "",
        "rating": "IMDB Rating = 8.9 / 10"
    }, {
        //Greek
        "category": "",
        "start": "2007-07-09 12:00",
        "end": "2007-07-09 12:15",
        "color": colorSet.getIndex(1),
        "text": "[bold]Greek [normal]Episode: Pilot",
        "extra": "TV Series • 2007 - 2011",
        //"episode": "",
        "rating": "IMDB Rating = 7.6 / 10"
    }, {
        //Broken English
        "category": "",
        "start": "2008-01-21 12:00",
        "end": "2008-01-21 12:15",
        "color": colorSet.getIndex(1),
        "text": "[bold]Broken English",
        "extra": "[normal]Short • 10 min",
        //"episode": "",
        "rating": "IMDB Rating = 7.6 / 10"
    }, {
        //Moonlight EP: No Such Thing as Vampires
        "category": "",
        "start": "2008-02-19 12:00",
        "end": "2008-02-19 12:15",
        "color": colorSet.getIndex(2),
        "text": "[bold]Moonlight [normal]Episode: No Such Thing as Vampires",
        "extra": "TV Series • 2007 - 2008",
        //"episode": "",
        "rating": "IMDB Rating = 7.7 / 10"
    }, {
        //VH1 Rock Honors: The Who
        "category": "",
        "start": "2008-07-17 12:00",
        "end": "2008-07-17 12:15",
        "color": colorSet.getIndex(7),
        "text": "[bold]VH1 Rock Honors: The Who",
        "extra": "[normal]TV Special • Music • 2h",
        //"episode": "",
        "rating": "IMDB Rating = 8.2 / 10"
    }, {
        //Dear Jack
        "category": "",
        "start": "2009-10-08 12:00",
        "end": "2009-10-08 12:15",
        "color": colorSet.getIndex(11),
        "text": "[bold]Dear Jack",
        "extra": "[normal]Documentary • 1h 7 min",
        //"episode": "",
        "rating": "IMDB Rating = 8.6 / 10"
    }, {
        //Grapple!
        "category": "",
        "start": "2010-06-30 12:00",
        "end": "2010-06-30 12:15",
        "color": colorSet.getIndex(10),
        "text": "[bold]Grapple!",
        "extra": "[normal]Short • 13 min",
        //"episode": "",
        "rating": "IMDB Rating = 8.5 / 10"
    }, {
        //Destroy the Alpha Gammas
        "category": "",
        "start": "2013-08-21 12:00",
        "end": "2013-08-21 12:15",
        "color": colorSet.getIndex(4),
        "text": "[bold]Destroy the Alpha Gammas",
        "extra": "[normal]TV Series • Musical • 2013 - ",
        //"episode": "",
        "rating": "IMDB Rating = 7.9 / 10"
    }, {
        //UCLA Pranks
        "category": "",
        "start": "2014-06-30 12:00",
        "end": "2014-06-30 12:15",
        "color": colorSet.getIndex(10),
        "text": "[bold]UCLA Pranks",
        "extra": "[normal]Short",
        //"episode": "",
        "rating": "IMDB Rating = 8.5 / 10"
    }, {
        //Blue and Gold
        "category": "",
        "start": "2015-06-30 12:00",
        "end": "2015-09-30 12:15",
        "color": colorSet.getIndex(20),
        "text": "[bold]Blue and Gold",
        "extra": "[normal]Short",
        //"episode": "",
        "rating": "IMDB Rating = 9.6 / 10"
    }, {
        //Wet Hot American Summer: First Day of Camp
        "category": "",
        "start": "2015-07-31 12:00",
        "end": "2015-07-31 12:15",
        "color": colorSet.getIndex(2),
        "text": "[bold]Wet Hot American Summer: First Day of Camp [normal]Episode: Auditions",
        "extra": "TV Series • 2015",
        //"episode": "",
        "rating": "IMDB Rating = 7.7 / 10"
    }, {
        //Heja Sverige!
        "category": "",
        "start": "2015-10-05 12:00",
        "end": "2015-10-05 12:15",
        "color": colorSet.getIndex(20),
        "text": "[bold]Heja Sverige!",
        "extra": "[normal]TV Mini Series • Documentary • 2015 -",
        //"episode": "",
        "rating": "IMDB Rating = 9.6 / 10"
    }, {
        //Jackie Robinson
        "category": "",
        "start": "2016-04-11 12:00",
        "end": "2016-04-11 12:15",
        "color": colorSet.getIndex(7),
        "text": "[bold]Jackie Robinson",
        "extra": "[normal]TV Mini Series • Documentary • 2016",
        //"episode": "",
        "rating": "IMDB Rating = 8.2 / 10"
    }, {
        //A Financial Engagement
        "category": "",
        "start": "2016-05-10 12:00",
        "end": "2016-05-10 12:15",
        "color": colorSet.getIndex(7),
        "text": "[bold]A Financial Engagement",
        "extra": "[normal]Short • 8 min",
        //"episode": "",
        "rating": "IMDB Rating = 8.2 / 10"
    }, {
        //UCLA Baseball Intro
        "category": "",
        "start": "2017-02-18 12:00",
        "end": "2017-02-18 12:15",
        "color": colorSet.getIndex(20),
        "text": "[bold]UCLA Baseball Intro",
        "extra": "[normal]Video • Short • 1 min",
        //"episode": "",
        "rating": "IMDB Rating = 9.6 / 10"
    }, {
        //Be Natural: The Untold Story of Alice Guy-Blaché
        "category": "",
        "start": "2018-08-31 12:00",
        "end": "2018-08-31 12:15",
        "color": colorSet.getIndex(2),
        "text": "[bold]Be Natural: The Untold Story of Alice Guy-Blaché",
        "extra": "[normal]Documentary • 1h 43 min",
        //"episode": "",
        "rating": "IMDB Rating = 7.7 / 10"
    }, {
        //Brené Brown: The Call to Courage
        "category": "",
        "start": "2019-04-19 12:00",
        "end": "2019-04-19 12:15",
        "color": colorSet.getIndex(2),
        "text": "[bold]Brené Brown: The Call to Courage",
        "extra": "[normal]Documentary • 1h 16 min",
        //"episode": "",
        "rating": "IMDB Rating = 7.7 / 10"
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

    var imageBullet = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet.background.radius = 5;
    imageBullet.locationX = 1;
    imageBullet.propertyFields.stroke = "color";
    imageBullet.background.propertyFields.fill = "color";
    imageBullet.image = new am4core.Image();
    imageBullet.image.propertyFields.href = "icon";
    imageBullet.image.scale = 1;
    imageBullet.circle.radius = am4core.percent(100);
    imageBullet.dy = -2;
    imageBullet.background.pointerBaseWidth = 10;
    imageBullet.background.pointerLength = 10
    imageBullet.tooltipText = "{text}\n{extra}\n{rating}";
    imageBullet.tooltipText.background = "color";

    series.tooltip.pointerOrientation = "up";

    imageBullet.background.adapter.add("pointerAngle", (value, target) => {
        if (target.dataItem) {
            var position = dateAxis.valueToPosition(target.dataItem.openDateX.getTime());
            return dateAxis.renderer.positionToAngle(position);
        }
        return value;
    });

    var hs = imageBullet.states.create("hover")
    hs.properties.scale = 2;
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
        var bullet = dataItem.bullets.getKey(imageBullet.uid);
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