am4core.ready(function() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create('chartdiv', am4plugins_timeline.SerpentineChart);
  chart.curveContainer.padding(90, 25, 25, 25);
  if (window.matchMedia('(min-width: 480px)').matches) {
    chart.levelCount = 5;
    chart.height = am4core.percent(85);
  } else {
    chart.levelCount = 7;
    chart.height = am4core.percent(100);
  }
  chart.orientation = 'vertical';
  chart.width = am4core.percent(95);

  chart.maskBullets = false;

  var colorSet = new am4core.ColorSet();

  chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd HH:mm';
  chart.dateFormatter.dateFormat = 'yyyy';

  //Path for images:
  let imagePath = '../../../img/imdb-ucla-movies/';

  chart.data = [
    {
      //Emergency! EP: Nurse's Wild - done
      category: '',
      start: '1972-03-01 12:00',
      end: '1972-03-01 12:15',
      color: colorSet.getIndex(2),
      text: "[bold]Emergency! [normal]Episode: Nurse's Wild",
      extra: 'TV Series • 1972 - 1979',
      rating: '8.0',
    },
    {
      //The Godfather - done
      category: '',
      start: '1972-03-30 12:00',
      end: '1972-03-30 12:15',
      color: colorSet.getIndex(11),
      text: '[bold]The Godfather',
      extra: '[normal]Film• 2h 55 min',
      rating: '9.2',
    },
    {
      //Barnaby Jones - done
      category: '',
      start: '1973-02-25 12:00',
      end: '1973-02-25 12:15',
      color: colorSet.getIndex(0),
      //"text": "[bold]Barnaby Jones [normal](TV Series • 1973 - 1980)\nEpisode: Sunday: Doomsday\nIMDB Rating = 7.6 / 10",
      text: '[bold]Barnaby Jones [normal]Episode: Sunday: Doomsday',
      extra: 'TV Series • 1973 - 1980',
      rating: '7.6',
    },
    {
      //The Bolero - done
      category: '',
      start: '1973-10-15 12:00',
      end: '1973-10-15 12:15',
      color: colorSet.getIndex(0),
      //"text": "[bold]The Bolero\n[normal]Short • Music • Documentary • 1973 • 26 min\nIMDB Rating = 7.6 / 10",
      text: '[bold]The Bolero',
      extra: '[normal]Short • Music • Documentary • 26 min',
      rating: '7.6',
    },
    {
      //Emergency! Ep; The Promise - done
      category: '',
      start: '1973-12-01 12:00',
      end: '1973-12-01 12:15',
      color: colorSet.getIndex(2),
      //"text": "[bold]Emergency! [normal](TV Series • 1972 - 1979)\nEpisode: The Promise\nIMDB Rating = 8.1 / 10",
      text: '[bold]Emergency! [normal]Episode: The Promise',
      extra: 'TV Series • 1972 - 1979',
      rating: '8.1',
    },
    {
      //Washington: Behind Closed Doors: Part Two - done
      category: '',
      start: '1977-09-07 12:00',
      end: '1977-09-07 12:15',
      color: colorSet.getIndex(11),
      //"text": "[bold]Washington: Behind Closed Doors [normal](TV Mini Series • 1977)\nEpisode: Part 2\nIMDB Rating = 9.2 / 10"
      text: '[bold]Washington: Behind Closed Doors [normal]Episode: Part 2',
      extra: 'TV Mini Series • 1977',
      rating: '9.2',
    },
    {
      //The Rockford Files - done
      category: '',
      start: '1978-02-17 12:00',
      end: '1978-02-17 12:15',
      color: colorSet.getIndex(0),
      //"text": "[bold]The Rockford Files [normal](TV Series • 1974 - 1980)\nEpisode: The Prisoner of Rosemont Hall\nIMDB Rating = 7.6 / 10"
      text:
        '[bold]The Rockford Files [normal]Episode: The Prisoner of Rosemont Hall',
      extra: 'TV Series • 1974 - 1980',
      rating: '7.7',
    },
    {
      //CHiPs - Hot Wheels - done
      category: '',
      start: '1979-11-03 12:00',
      end: '1979-11-03 12:15',
      color: colorSet.getIndex(0),
      //"text": "[bold]The Rockford Files [normal](TV Series • 1974 - 1980)\nEpisode: The Prisoner of Rosemont Hall\nIMDB Rating = 7.6 / 10"
      text: '[bold]CHiPs [normal]Episode: Hot Wheels',
      extra: 'TV Series • 1977 - 1983',
      rating: '7.6',
    },
    {
      //Charlie's Angels
      category: '',
      start: '1979-11-28 12:00',
      end: '1979-11-28 12:15',
      color: colorSet.getIndex(0),
      //"text": "[bold]The Rockford Files [normal](TV Series • 1974 - 1980)\nEpisode: The Prisoner of Rosemont Hall\nIMDB Rating = 7.6 / 10"
      text: "[bold]Charlie's Angels [normal]Episode: Angels on Campus",
      extra: 'TV Series • 1976 - 1981',
      rating: '7.5',
    },
    {
      //CHiPs - EMT - done
      category: '',
      start: '1980-10-19 12:00',
      end: '1980-10-19 12:15',
      color: colorSet.getIndex(0),
      //"text": "[bold]The Rockford Files [normal](TV Series • 1974 - 1980)\nEpisode: The Prisoner of Rosemont Hall\nIMDB Rating = 7.6 / 10"
      text: '[bold]CHiPs [normal]Episode: E.M.T.',
      extra: 'TV Series • 1977 - 1983',
      rating: '7.6',
    },
    {
      //Simon & Simon EP: Love, Christy - done
      category: '',
      start: '1981-12-01 12:00',
      end: '1981-12-01 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Simon & Simon [normal]Episode: Love, Christy',
      extra: 'TV Series • 1981 - 1989',
      //"episode": "",
      rating: '7.5',
    },
    {
      //CHiPs EP: A Threat of War - done
      category: '',
      start: '1982-03-21 12:00',
      end: '1982-03-21 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]CHiPs [normal]Episode: A Threat of War',
      extra: 'TV Series • 1977 - 1983',
      //"episode": "Episode: K-9-1",
      rating: '7.5',
    },
    {
      //CHiPs EP: K-9-1 - done
      category: '',
      start: '1982-05-09 12:00',
      end: '1982-05-09 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]CHiPs [normal]Episode: K-9-1',
      extra: 'TV Series • 1977 - 1983',
      //"episode": "Episode: K-9-1",
      rating: '7.9',
    },
    {
      //Dallas EP: Eye of the Beholder
      category: '',
      start: '1984-02-14 12:00',
      end: '1984-02-14 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Dallas [normal]Episode: Eye of the Beholder',
      extra: 'TV Series • 1978-1991',
      //"episode": "Episode: Eye of the Beholder",
      rating: '7.5',
    },
    {
      //Paper Dolls EP 1.1 - done
      category: '',
      start: '1984-09-23 12:00',
      end: '1984-09-23 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Paper Dolls [normal]Episode: #1.1',
      extra: 'TV Series • 1984',
      //"episode": "Episode: #1.1",
      rating: '7.8',
    },
    {
      //Highway to Heaven EP: A Special Love: Part Two - done
      category: '',
      start: '1986-10-01 12:00',
      end: '1986-10-01 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]Highway to Heaven [normal]Episode: A Special Love: Part 2',
      extra: 'TV Series • 1984 - 1989',
      rating: '8.7',
    },
    {
      //The Colbys - done
      category: '',
      start: '1986-12-18 12:00',
      end: '1986-12-18 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]The Colbys [normal]Episode: Reaching Out',
      extra: 'TV Series • 1985 - 1987',
      //"episode": "Episode: Reaching Out",
      rating: '8.6',
    },
    {
      //Melrose Place EP Bye Bye Billy - done
      category: '',
      start: '1993-02-17 12:00',
      end: '1993-02-17 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Melrose Place [normal]Episode: Bye Bye Billy',
      extra: 'TV Series • 1992 - 1999',
      //"episode": "Episode: Bye Bye Billy",
      rating: '7.5',
    },
    {
      //The Rockford Files: Friends and Foul play - done
      category: '',
      start: '1996-04-25 12:00',
      end: '1996-04-25 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]The Rockford Files: Friends and Foul Play',
      extra: '[normal]TV Movie • 2h',
      //"episode": "",
      rating: '7.6',
    },
    {
      //Buffy the Vampire Slayer - done
      category: '',
      start: '1997-03-10 12:00',
      end: '1997-03-10 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]Buffy the Vampire Slayer',
      extra: '[normal]TV Series • 1997 - 2003',
      //"episode": "",
      rating: '8.2',
    },
    {
      //Prey - done
      category: '',
      start: '1998-01-15 12:00',
      end: '1998-01-15 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Prey',
      extra: '[normal]TV Series • 1998',
      //"episode": "",
      rating: '7.6',
    },
    {
      //Gilmore Girls - done
      category: '',
      start: '2000-10-01 12:00',
      end: '2000-10-01 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]Gilmore Girls',
      extra: '[normal]TV Series • 2000 - 2007',
      //"episode": "",
      rating: '8.1',
    },
    {
      //CSI: Crime Scene Investigation - done
      category: '',
      start: '2000-10-30 12:00',
      end: '2000-10-30 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]CSI: Crime Scene Investigation',
      extra: '[normal]TV Series • 2000 - 2015',
      //"episode": "",
      rating: '7.6',
    },
    {
      //Undeclared - done
      category: '',
      start: '2001-09-01 12:00',
      end: '2001-09-01 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Undeclared',
      extra: '[normal]TV Series • 2001 - 2003',
      //"episode": "",
      rating: '7.9',
    },
    {
      //Alias EP: Reckoning - done
      category: '',
      start: '2001-11-18 12:00',
      end: '2001-11-18 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Alias [normal]Episode: Reckoning',
      extra: 'TV Series • 2001 - 2006',
      //"episode": "",
      rating: '7.7',
    },
    {
      //Alias EP: Truth Be Told - done
      category: '',
      start: '2001-09-30 12:00',
      end: '2001-09-30 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]Alias [normal]Truth Be Told',
      extra: 'TV Series • 2001 - 2006',
      //"episode": "",
      rating: '8.4',
    },
    {
      //Rock n' Roll Cops - done
      category: '',
      start: '2002-04-22 12:00',
      end: '2002-04-22 12:15',
      color: colorSet.getIndex(0),
      text: "[bold]Rock n' Roll Cops",
      extra: '[normal]Video',
      //"episode": "",
      rating: '7.9',
    },
    {
      //Christopher Titus: Norman Rockwell Is Bleeding - done
      category: '',
      start: '2004-06-06 12:00',
      end: '2004-06-06 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]Christopher Titus: Norman Rockwell Is Bleeding',
      extra: '[normal]TV Special • 1h 30 min',
      //"episode": "",
      rating: '8.9',
    },
    {
      //He Set the Trend - done
      category: '',
      start: '2005-05-26 12:00',
      end: '2005-05-26 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]He Set the Trend',
      extra: '[normal]6 min • Short',
      //"episode": "",
      rating: '8.3',
    },
    {
      //The Recorder - done
      category: '',
      start: '2005-07-11 12:00',
      end: '2005-07-11 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]The Recorder',
      extra: '[normal]7 min • Short',
      //"episode": "",
      rating: '8.8',
    },
    {
      //The West Wing EP: The Ticket - done
      category: '',
      start: '2005-09-05 12:00',
      end: '2005-09-05 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]The West Wing [normal]Episode: The Ticket',
      extra: 'TV Series • 1999 - 2006',
      //"episode": "",
      rating: '8.0',
    },
    {
      //The West Wing EP: The Mommy Problem - done
      category: '',
      start: '2005-10-02 12:00',
      end: '2005-10-02 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]The West Wing [normal]Episode: The Mommy Problem',
      extra: 'TV Series • 1999 - 2006',
      //"episode": "",
      rating: '7.8',
    },
    {
      //The West Wing EP: Mr. Frost - done
      category: '',
      start: '2005-10-26 12:00',
      end: '2005-10-26 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]The West Wing [normal]Episode: Mr. Frost',
      extra: 'TV Series • 1999 - 2006',
      //"episode": "",
      rating: '7.9',
    },
    {
      //House EP: Meaning - done
      category: '',
      start: '2006-09-05 12:00',
      end: '2006-09-05 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]House M.D. [normal]Episode: Meaning',
      extra: 'TV Series • 2004 - 2012',
      //"episode": "",
      rating: '8.9',
    },
    {
      //Greek - done
      category: '',
      start: '2007-07-09 12:00',
      end: '2007-07-09 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Greek [normal]Episode: Pilot',
      extra: 'TV Series • 2007 - 2011',
      //"episode": "",
      rating: '7.5',
    },
    {
      //Broken English - done
      category: '',
      start: '2008-01-21 12:00',
      end: '2008-01-21 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Broken English',
      extra: '[normal]10 min • Short',
      //"episode": "",
      rating: '7.6',
    },
    {
      //Moonlight EP: No Such Thing as Vampires - done
      category: '',
      start: '2008-02-19 12:00',
      end: '2008-02-19 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Moonlight [normal]Episode: No Such Thing as Vampires',
      extra: 'TV Series • 2007 - 2008',
      //"episode": "",
      rating: '7.6',
    },
    {
      //VH1 Rock Honors: The Who - done
      category: '',
      start: '2008-07-17 12:00',
      end: '2008-07-17 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]VH1 Rock Honors: The Who',
      extra: '[normal]TV Special • Music • 2h',
      //"episode": "",
      rating: '8.1',
    },
    {
      //Dear Jack
      category: '',
      start: '2009-11-03 12:00',
      end: '2009-11-03 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]Dear Jack',
      extra: '[normal]1h 7 min • Documentary',
      //"episode": "",
      rating: '8.6',
    },
    {
      //Grapple! - done
      category: '',
      start: '2010-06-30 12:00',
      end: '2010-06-30 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]Grapple!',
      extra: '[normal]13 min • Short',
      //"episode": "",
      rating: '8.5',
    },
    {
      //Destroy the Alpha Gammas - done
      category: '',
      start: '2013-08-21 12:00',
      end: '2013-08-21 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Destroy the Alpha Gammas',
      extra: '[normal]TV Series • Musical • 2013 - ',
      //"episode": "",
      rating: '7.9',
    },
    {
      //UCLA Pranks - done
      category: '',
      start: '2014-06-30 12:00',
      end: '2014-06-30 12:15',
      color: colorSet.getIndex(6),
      text: '[bold]UCLA Pranks (2014)',
      extra: '[normal]Short',
      //"episode": "",
      rating: '8.5',
    },
    {
      //Blue and Gold - done
      category: '',
      start: '2015-04-13 12:00',
      end: '2015-04-13 12:15',
      color: colorSet.getIndex(14),
      text: '[bold]Blue and Gold',
      extra: '[normal]Short',
      //"episode": "",
      rating: '9.6',
    },
    {
      //Wet Hot American Summer: First Day of Camp - done
      category: '',
      start: '2015-07-31 12:00',
      end: '2015-07-31 12:15',
      color: colorSet.getIndex(0),
      text:
        '[bold]Wet Hot American Summer: First Day of Camp [normal]Episode: Auditions',
      extra: 'TV Series • 2015',
      //"episode": "",
      rating: '7.6',
    },
    {
      //Heja Sverige! - done
      category: '',
      start: '2015-10-05 12:00',
      end: '2015-10-05 12:15',
      color: colorSet.getIndex(14),
      text: '[bold]Heja Sverige!',
      extra: '[normal]TV Mini Series • Documentary • 2015 -',
      //"episode": "",
      rating: '9.6',
    },
    {
      //Jackie Robinson - done
      category: '',
      start: '2016-04-11 12:00',
      end: '2016-04-11 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]Jackie Robinson',
      extra: '[normal]TV Mini Series • Documentary • Biography • 2016',
      //"episode": "",
      rating: '8.2',
    },
    {
      //A Financial Engagement - done
      category: '',
      start: '2016-05-10 12:00',
      end: '2016-05-10 12:15',
      color: colorSet.getIndex(2),
      text: '[bold]A Financial Engagement',
      extra: '[normal]8 min • Short',
      //"episode": "",
      rating: '8.2',
    },
    {
      //UCLA Baseball Intro - done
      category: '',
      start: '2017-02-18 12:00',
      end: '2017-02-18 12:15',
      color: colorSet.getIndex(14),
      text: '[bold]UCLA Baseball Intro (2017 Video)',
      extra: '[normal]1 min • Short, Sport',
      //"episode": "",
      rating: '9.6',
    },
    {
      //Be Natural: The Untold Story of Alice Guy-Blaché - done
      category: '',
      start: '2018-05-11 12:00',
      end: '2018-05-11 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Be Natural: The Untold Story of Alice Guy-Blaché',
      extra: '[normal]Documentary • 1h 43 min',
      //"episode": "",
      rating: '7.7',
    },
    {
      //Brené Brown: The Call to Courage - done
      category: '',
      start: '2019-04-19 12:00',
      end: '2019-04-19 12:15',
      color: colorSet.getIndex(0),
      text: '[bold]Brené Brown: The Call to Courage',
      extra: '[normal]Documentary • 1h 16 min',
      //"episode": "",
      rating: '7.7',
    },
  ];

  chart.fontSize = 10;
  chart.tooltipContainer.fontSize = 13;

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'category';
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.labels.template.paddingRight = 25;
  categoryAxis.renderer.minGridDistance = 10;
  categoryAxis.renderer.innerRadius = 10;
  categoryAxis.renderer.radius = 30;

  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 60;
  dateAxis.baseInterval = { count: 1, timeUnit: 'year' };
  dateAxis.renderer.tooltipLocation = 0;
  dateAxis.renderer.line.strokeDasharray = '1,4';
  dateAxis.renderer.line.strokeOpacity = 0.6;
  dateAxis.tooltip.background.fillOpacity = 0.4;
  dateAxis.tooltip.background.cornerRadius = 5;
  dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
    'alternativeBackground'
  );
  dateAxis.tooltip.label.paddingTop = 7;
  dateAxis.endLocation = 0;
  dateAxis.startLocation = -0.5;
  dateAxis.min = new Date(1971, 0, 1, 12, 10).getTime();
  dateAxis.max = new Date(2022, 0, 1, 12, 10).getTime();

  var labelTemplate = dateAxis.renderer.labels.template;
  labelTemplate.verticalCenter = 'middle';
  labelTemplate.fillOpacity = 0.95;
  labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
    'background'
  );
  labelTemplate.fill = new am4core.InterfaceColorSet().getFor('text');
  labelTemplate.background.fillOpacity = 0.9;
  labelTemplate.padding(10, 10, 10, 10);

  var series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
  series.columns.template.height = am4core.percent(30);

  series.dataFields.openDateX = 'start';
  series.dataFields.dateX = 'end';
  series.dataFields.categoryY = 'category';
  series.baseAxis = categoryAxis;
  series.columns.template.propertyFields.fill = 'color'; // get color from data
  series.columns.template.propertyFields.stroke = 'color';
  series.columns.template.strokeOpacity = 0;
  series.columns.template.fillOpacity = 0.8;

  var imageBullet = series.bullets.push(new am4plugins_bullets.PinBullet());
  imageBullet.background.radius = 8;
  imageBullet.locationX = 1;
  imageBullet.propertyFields.stroke = 'color';
  imageBullet.background.propertyFields.fill = 'color';
  imageBullet.image = new am4core.Image();
  imageBullet.image.propertyFields.href = 'icon';
  imageBullet.image.scale = 1;
  imageBullet.circle.radius = am4core.percent(100);
  imageBullet.dy = -2;
  imageBullet.background.pointerBaseWidth = 10;
  imageBullet.background.pointerLength = 10;
  imageBullet.tooltipText = '{text}\n{extra}\nIMDb Rating = {rating} / 10';
  imageBullet.tooltipText.background = 'color';

  series.tooltip.pointerOrientation = 'up';

  imageBullet.background.adapter.add('pointerAngle', (value, target) => {
    if (target.dataItem) {
      var position = dateAxis.valueToPosition(
        target.dataItem.openDateX.getTime()
      );
      return dateAxis.renderer.positionToAngle(position);
    }
    return value;
  });

  var hs = imageBullet.states.create('hover');
  hs.properties.scale = 2;
  hs.properties.opacity = 1;

  var textBullet = series.bullets.push(new am4charts.LabelBullet());
  textBullet.label.propertyFields.text = 'text';
  textBullet.disabled = true;
  textBullet.propertyFields.disabled = 'textDisabled';
  textBullet.label.strokeOpacity = 0;
  textBullet.locationX = 1;
  textBullet.dy = -100;
  textBullet.label.textAlign = 'middle';

  //Inserting flags to show start and finish of timeline
  var eventSeries = chart.series.push(
    new am4plugins_timeline.CurveLineSeries()
  );
  eventSeries.dataFields.dateX = 'eventDate';
  eventSeries.dataFields.categoryY = 'cat';
  eventSeries.data = [
    {
      cat: '',
      eventDate: '1970-01-01',
      letter: 'Start',
      description: 'Start of Timeline!',
    },
    {
      cat: '',
      eventDate: '2021-06-14',
      letter: 'End',
      description: 'End of Timeline!',
    },
  ];
  eventSeries.strokeOpacity = 0;

  var flagBullet = eventSeries.bullets.push(
    new am4plugins_bullets.FlagBullet()
  );
  flagBullet.label.propertyFields.text = 'letter';
  flagBullet.locationX = 0;
  flagBullet.tooltipText = '{description}';

  var cursor = new am4plugins_timeline.CurveCursor();
  chart.cursor = cursor;
  cursor.xAxis = dateAxis;
  cursor.yAxis = categoryAxis;
  cursor.lineY.disabled = true;
  cursor.lineX.disables = true;
  cursor.lineX.strokeDasharray = '1,4';
  cursor.lineX.strokeOpacity = 1;

  dateAxis.renderer.tooltipLocation2 = 0;
  categoryAxis.cursorTooltipEnabled = false;

  var previousBullet;

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
    setTimeout(function() {
      hoverItem(series.dataItems.getIndex(index + 1));
    }, 1000);
  }

  var label = chart.createChild(am4core.Label);
  label.text = '[bold]50 Years of the Highest-Rated Productions Filmed at UCLA';
  label.wrap = true;
  label.isMeasured = false;
  label.y = am4core.percent(0);
  label.x = am4core.percent(51);
  label.horizontalCenter = 'middle';
  label.fontSize = 20;

  //Create custom legend
  var legend = new am4charts.Legend();

  var legendTitle = legend.createChild(am4core.Label);
  legendTitle.text = '[bold]IMDb Ratings:';
  legendTitle.fontSize = 14;

  legend.parent = chart.chartContainer;
  legend.background.fillOpacity = 0.05;
  legend.background.fill = am4core.color('white');
  legend.width = 50;
  legend.position = 'top';
  legend.padding(10, 15, 10, 15);
  legend.data = [
    {
      name: '7.5 - 7.9',
      fill: colorSet.getIndex(0),
    },
    {
      name: '8.0 - 8.4',
      fill: colorSet.getIndex(2),
    },
    {
      name: '8.5 - 8.9',
      fill: colorSet.getIndex(6),
    },
    {
      name: '9.0 - 9.4',
      fill: colorSet.getIndex(11),
    },
    {
      name: '9.5 - 10.0',
      fill: colorSet.getIndex(14),
    },
  ];

  legend.itemContainers.template.clickable = false;
  legend.itemContainers.template.focusable = false;
}); // end am4core.ready()
