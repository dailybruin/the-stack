


var JSON_data;
var names_array = [], VORP_array = [];
 //var JSON_data = JSON.parse("/datasets/nba-players/tooltip_VORP.json");
$.getJSON('/datasets/nba-players/tooltip_VORP.json', function(data) {         
    JSON_data = data;
    for (var key in JSON_data['NAME']) {
        names_array.push(JSON_data['NAME'][key]);
    }

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
            title = d[i].x.getFullYear(); // SHOW X-VALUE
            text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
        }

        name = nameFormat(d[i].name); //d[i].name = "MAX_VORP"
        value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index); //value = VORP value
        bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);
        
        var bestPlayerName = JSON_data["NAME"][title];
        var bestPlayerVORP = JSON_data["MAX_VORP"][title];


        text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
        text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
        text += "<td class='value'>" + value + "</td>";
        text += "</tr>";      
        text += "<tr>";
        text += "<td>" + "Top Player: " + "</td>";
        text += "<td class='value'>"+ bestPlayerName + " (" + bestPlayerVORP + ") "+"</td> </tr>";      
    }

    return text + "</table>";    
}


var titles = ['http://c3js.org/samples/tooltip_format.html', 'b'];
var titles2 = ['vva', 'g'];

var chart = c3.generate({
    tooltip: {
        contents: tooltip_contents,
        /*
        format: {
            value: function (value, ratio, id, index) {
               // alert(chart.tooltip.title);
                return value +  " (Top Player: \n" + names_array[index] + ")";
                //return JSON_data["MAX_VORP"]["1999"];
            }
        }
        */
    },

    data: {
    	x: 'YEAR',
    	xFormat: '%Y',
        //url: 'out.csv',
        url: '/datasets/nba-players/maxVORP.csv',

        //type: 'timeseries'
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        },
        y: {
            min: 0,
            // Range includes padding, set 0 if no padding needed
             padding: {top:1, bottom:0}
        }
    },

});


$('#vorp').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: '/datasets/nba-players/maxVORP.csv',
        unload: chart.url, 
    });
});

$('#pick').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: '/datasets/nba-players/pick.csv',
        unload: chart.url, 
    });
});

$('#yrsCollege').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: '/datasets/nba-players/yrs_mean.csv',
        unload: chart.url, 
    });
});

$('#numPlayers').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: '/datasets/nba-players/numPlayers_2.csv',
        unload: chart.url, 
    });
});
