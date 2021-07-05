Highcharts.chart('container', {
    chart: {
        backgroundColor: 'rgba(255,255,255, 0.0)',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Percentage of Letter Grade and Pass/No Pass Before and After Spring 2020'
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
            y: 153028,
            sliced: true,
            selected: false
        }, {
            name: 'Pass/No Pass',
            y: 7781
        }],
        center: [400, 120],
        size: 250,
    }, 
    {
        name: 'Percentage',
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
        center: [900, 120],
        size: 250,
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                }
            }
        }]
    }
});

document.getElementById('small').addEventListener('click', () => {
    chart.setSize(400, 300);
});

document.getElementById('large').addEventListener('click', () => {
    chart.setSize(600, 300);
});