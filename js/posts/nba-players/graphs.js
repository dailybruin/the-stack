var JSON_data;

$.getJSON('/datasets/nba-players/tooltip_VORP.json', function(data) {
    JSON_data = data;
});

function tooltip_contents(d, defaultTitleFormat, defaultValueFormat, color) {
    var $$ = this, config = $$.config, CLASS = $$.CLASS,
        titleFormat = config.tooltip_format_title || defaultTitleFormat,
        nameFormat = config.tooltip_format_name || function (name) { return name; },
        valueFormat = config.tooltip_format_value || defaultValueFormat,
        text, i, title, value, name, bgcolor;

    // You can access all of data like this:
    //console.log($$.data.targets);
    //var formatTime = c3.timeFormat("%Y");
    //var year = formatTime(d[i].x);
    for (i = 0; i < d.length; i++) {
        if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

        if (! text) {
            year = d[i].x.getFullYear(); // SHOW X-VALUE
            text = "<table class='" + CLASS.tooltip + "'>" + (year || year === 0 ? "<tr><th colspan='2'>" + year + "</th></tr>" : "");
        }

        name = nameFormat(d[i].name); //d[i].name = "MAX_VORP"
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index); //value = VORP value
        bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

        var bestPlayerName = JSON_data["NAME"][year];
        var bestPlayerVORP = JSON_data["MAX_VORP"][year] == -99 ? "N/A" : JSON_data["MAX_VORP"][year] ;
        var bestPlayerText = (year in JSON_data["NAME"]) ? bestPlayerName + " (" + bestPlayerVORP + " VORP) " : "N/A";

        text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
        text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
        text += "<td class='value'>" + value + "</td>";
        text += "</tr>";
        text += "<tr>";
        text += "<td>" + "Top Player: " + "</td>";
        text += "<td class='value'>"+ bestPlayerText +"</td> </tr>";
    }

    return text + "</table>";
}


var titles = ['http://c3js.org/samples/tooltip_format.html', 'b'];
var titles2 = ['vva', 'g'];

var chart = c3.generate({
    tooltip: {
        contents: tooltip_contents,
    },

    data: {
    	x: 'YEAR',
    	xFormat: '%Y',
        url: 'https://raw.githubusercontent.com/dailybruin/the-stack/master/datasets/nba-players/maxVorp.csv',
        //url: '/datasets/nba-players/maxVORP.csv',

        //type: 'timeseries'
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            },
        },
        y: {
            min: -1,
            // Range includes padding, set 0 if no padding needed
             padding: {top:1, bottom:0},
        }
    },
    color: {
        pattern: ['#2b90d9', '#FFCC00', '#2b90d9', '#FFCC00'],
    },
    bindto: '#line-chart'

});

$('.toggleButton.1').click( function () {
    $('.toggleButton.1').removeClass('active')
    $(this).addClass('active');

    var paragraphs = document.getElementsByClassName("chart_paragraph");
    for(var i=0; i<paragraphs.length; ++i){
      var s = paragraphs[i].style;
      s.display = 'none';
   };
   var metrics = document.getElementsByClassName("metric-def");
    for(var i=0; i<metrics.length; ++i){
      var s = metrics[i].style;
      s.display = 'none';
   };
});

$('.toggleButton.2').click( function () {
    $('.toggleButton.2').removeClass('active')
    $(this).addClass('active');

    var els = document.getElementsByClassName("top-player-table");
    for(var i=0; i<els.length; ++i){
      var s = els[i].style;
      s.display = 'none';
   };

});

$('#top-VORP').on('click', function () {
    document.getElementById("VORP-table").style.display = "table";
});
$('#top-all-star').on('click', function () {
    document.getElementById("all-star-table").style.display = "table";
});
$('#top-recent').on('click', function () {
    document.getElementById("recent-table").style.display = "table";
});
$('#top-one-and-done').on('click', function () {
    document.getElementById("one-and-done-table").style.display = "table";
});

$('#vorp').on('click', function () {

    chart.load({
        bindto: '#line-chart',

        url: 'https://raw.githubusercontent.com/dailybruin/the-stack/master/datasets/nba-players/maxVorp.csv',
        //url: '/datasets/nba-players/maxVORP.csv',
        unload: chart.url,
    });
    chart.axis.min({y: -1});

    document.getElementById("VORP_paragraph").style.display = "block";
    document.getElementById("vorp-def").style.display = "block";
});

$('#pick').on('click', function () {

    chart.load({
        url: 'https://raw.githubusercontent.com/dailybruin/the-stack/master/datasets/nba-players/pick.csv',
        //url: '/datasets/nba-players/pick.csv',
        unload: chart.url,
        bindto: '#line-chart'
    });
    chart.axis.min({y: 0});

    document.getElementById("Draft_paragraph").style.display = "block";
    document.getElementById("pos-def").style.display = "block";
});


$('#yrsCollege').on('click', function () {

    chart.load({
        url: 'https://raw.githubusercontent.com/dailybruin/the-stack/master/datasets/nba-players/yrs_mean.csv',
        //url: '/datasets/nba-players/yrs_mean.csv',
        unload: chart.url,
        bindto: '#line-chart'
    });
    chart.axis.min({y: 0});

    document.getElementById("Yrs_paragraph").style.display = "block";
    document.getElementById("yrs-def").style.display = "block";
});

$('#numPlayers').on('click', function () {

    chart.load({
        url: 'https://raw.githubusercontent.com/dailybruin/the-stack/master/datasets/nba-players/numPlayers_2.csv',
        //url: '/datasets/nba-players/numPlayers_2.csv',
        unload: chart.url,
        bindto: '#line-chart'
    });
    chart.axis.min({y: 0});

    document.getElementById("Num_drafted_paragraph").style.display = "block";
    document.getElementById("num-drafted-def").style.display = "block";
});




var bar_chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', 'PPG', 'APG', 'RPG'],
            ['Ball', 14.9, 8.0, 5.8],
            ['Kidd', 14.9, 8.4, 5.9],
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },
    size: {
        height: 400
    },
     axis: {
        x: {
            type: 'category',
            tick: {
                rotate: 0,
                multiline: false
            },
            height: 130
        },
        rotated: true
     },
     bindto: '#bar-chart'
});

var vorp_bar_chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', 'Baron Davis', 'Reggie Miller', 'Jason Kidd (Lonzo Ball?)', 'Kevin Love', 'Russell Westbrook', 'Kareem Abdul-Jabbar'],
            ['VORP of Best Year', 5.2, 5.2, 6.7, 7.3, 8.3, 10.5],

        ],
        type: 'bar',
        color: function (color, d) {
            // d will be 'id' when called for legends
            return (d.index == 2 ? '#104E8B':'#87CEFA' );
           },
        legend: {
            position: 'right'
        },
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
        // or
        //width: 100 // this makes bar width 100px
    },

    size: {
        height: 400
    },
     axis: {
        x: {
            type: 'category',
            tick: {
                rotate: 0,
                multiline: true
            },
            height: 60
        },
        rotated: false
     },
    bindto: '#vorp-kidd-comparison-chart'

});
