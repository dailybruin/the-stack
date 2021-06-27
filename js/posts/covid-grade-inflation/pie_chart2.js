$(function() {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'pie'
        },

        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false
                }
            }
        },

        series: [{
            name: 'Percentage',
            size: 250,
            center: [400, 100],
            data: [{
                name: 'Letter Grade',
                y: 113849,
                sliced: true,
                selected: true
            }, {
                name: 'Pass/No Pass',
                y: 5527
            }],
        },{
            size: 250,
            center: [800, 100],
            data: [{
                name: 'Letter Grade',
                y: 118521,
                sliced: true,
                selected: true
            }, {
                name: 'Pass/No Pass',
                y: 10093
            }],
        }]
    });
});