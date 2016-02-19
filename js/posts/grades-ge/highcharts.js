$(function () {
    $('#highchart1').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Median GPA'
        },

        xAxis: {
            categories: [
                "Visual and Performance Arts Analysis and Practice",
                "Literary and Cultural Analysis",
                "Historical Analysis",
                "Social Analysis",
                "Philosophical and Linguistic Analysis",
                "Life Sciences",
                "Physical Sciences" ]
        },
        yAxis: {
            min: 0,
            title: {
                text: "Median GPA",
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [3.35, 3.31, 3.16, 3.15, 3.04, 2.99, 2.86]
        }]
    })
  });


$(function () {
  $('#highchart2').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: 'A rough look at grades of each GE req'
      },

      xAxis: {
          categories: [
              "Visual and Performance Arts Analysis and Practice",
              "Literary and Cultural Analysis",
              "Historical Analysis",
              "Social Analysis",
              "Philosophical and Linguistic Analysis",
              "Life Sciences",
              "Physical Sciences" ]
      },
      yAxis: {
          min: 0,
          title: {
              text: "Median A",
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' percent'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
      },
      credits: {
          enabled: false
      },

      series: [{
          data: [59, 56, 50, 44, 43, 40, 30]
      }]
  })
});
