Highcharts.chart('container', {
    chart: {
        backgroundColor: 'rgba(255,255,255, 0.0)',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie' 
    },
    title: {
        text: 'Percentage of Letter Grade and Pass/No Pass Before (Left) and After (Right) Remote Learning'
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
            //size: '50%',
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
    //labels: {
      //  items: [{
        //    html: 'Before',
          //  style: {
          //      left: '200%',
       //         top: '200px'
      //      }},
      //  {
       //     html: 'second',
      //      style: {
      //          left: '175%',
      //          top: '20px'
      //      }}]
  //  },
    series: [{
        name: 'percentage',
        colorByPoint: true,
        data: [{
            name: 'Letter Grade: 95.2%',
            y: 153028,
            sliced: true,
            selected: false
        }, {
            name: 'Pass/No Pass: 4.8%',
            y: 7781
        }],
        center: ['20%','50%'],
        size: "55%",
    }, 
    {
        name: 'percentage',
        colorByPoint: true,
        data: [{
            name: 'Letter Grade: 92.4%',
            y: 156343,
            sliced: true,
            selected: false
        }, {
            name: 'Pass/No Pass: 7.6%',
            y: 12780
        }],
        center: ['80%','50%'],
        size: "55%",
    }]

});

