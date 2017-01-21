/*
var chart = c3.generate({
    data: {
        x: 'x',
        xFormat: '%Y', // 'xFormat' can be used as custom format of 'x'
		url: 'out.csv', 
        columns: [
            ['x', '2010', '2011', '2012', '2013', '2014', '2015'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    }
});

*/
var titles = ['http://c3js.org/samples/tooltip_format.html', 'b'];
var titles2 = ['vva', 'g'];


var chart = c3.generate({
    data: {
    	x: 'YEAR',
    	xFormat: '%Y',
        //url: 'out.csv',
        url: 'maxVORP.csv',

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
    /*
    tooltip: {
        format: {
            //title: function (d) { return 'Data ' + d; },
            value: function (value, ratio, id, index) {
                
                return titles[index % 2];
            }
//            value: d3.format(',') // apply this format to both y and y2
        }
    }
    */
});


$('#vorp').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: 'maxVORP.csv',
        unload: chart.url, 
    });
});

$('#pick').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: 'pick.csv',
        unload: chart.url, 
    });
});

$('#yrsCollege').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: 'yrs_mean.csv',
        unload: chart.url, 
    });
});

$('#numPlayers').on('click', function () {

    chart.load({
        //url: 'pick.csv',
        url: 'numPlayers.csv',
        unload: chart.url, 
    });
});
