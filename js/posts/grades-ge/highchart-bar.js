$(function () {
  $('#req-barchart').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Comparing median grades by GE reqs'
      },

      xAxis: {
          categories: [
              "Visual and Performance Arts",
              "Literary and Cultural",
              "Historical",
              "Social",
              "Philosophical and Linguistic",
              "Life Sciences",
              "Physical Sciences" ]
      },
      yAxis: {
          min: 0,
          title: {
              text: "Percent",
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
          layout: 'horizontal',
          align: 'right',
          verticalAlign: 'top',
          x: 0,
          y: 290,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
      },
      credits: {
          enabled: false
      },

      series: [{
          name: "% A",
          data: [59, 56, 50, 44, 43, 40, 30],
          visible: true
      }, {
          name: "% B- and above",
          data: [89, 90, 84, 85, 83, 77, 70],
          visible: false
      }]
  })
});
