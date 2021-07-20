Highcharts.chart('container', {
    chart: {
        backgroundColor: 'rgba(255,255,255, 0.0)',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Percentage of Letter Grade and Pass/No Pass for Summer and Fall Before and After Remote Learning'
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
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Letter Grade',
            y: 153028,
            sliced: true,
            selected: false
        }, {
            name: 'Pass/No Pass',
            y: 7781
        }],
        center: ['25%','50%'],
        size: "50%",
    }, 
    {
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Letter Grade',
            y: 156343,
            sliced: true,
            selected: false
        }, {
            name: 'Pass/No Pass',
            y: 12780
        }],
        center: ['75%','50%'],
        size: "50%",
    }]

});

