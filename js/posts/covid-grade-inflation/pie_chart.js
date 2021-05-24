Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Percentage of Letter Grade and Pass/No Pass Before and After COVID'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>'
            }
        }
    }, 
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'Letter Grade',
            y: 128521,
            sliced: true,
            selected: true
        }, {
            name: 'Pass/No Pass',
            y: 5527
        }]
    }]
});