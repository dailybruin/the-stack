let ctx2 = document.getElementById('grad-rate-change').getContext('2d');
//let ctx2 = document.getElementById('myChart').getContext('2d');
// if (screen.width > 1000) {
//     isMobile = false;
// };

if (isMobile) {
  title2 = 'UCLA vs. HSIs Change in Hispanic or Latino Grad Rates';
} else {
  title2 =
    "UCLA's and UC HSIs' Change in Hispanic or Latino Graduation Rates Since 2011";
}

if (isMobile) {
  yLabel2 = 'Change since 2011 (%)';
} else {
  yLabel2 = 'Change since 2011(%)';
}
let ChangeChart = new Chart(ctx2, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: [
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
    ],
    datasets: [
      {
        label: 'Los Angeles',
        fill: false,
        borderColor: '#3284BF',
        backgroundColor: '#3284BF',
        lineTension: 0,
        data: [0.0, 2.4, -1.7, -0.2, 2.7, 1.3, 1.2, 0.6, 1.6],
      },
      {
        label: 'Irvine',
        fill: false,
        borderColor: '#FFD200',
        backgroundColor: '#FFD200',
        lineTension: 0,
        data: [0.0, -0.3, -0.9, 2.7, 4.5, 0.7, -1.8, -3.4, -0.7],
        hidden: true,
      },
      {
        label: 'Merced',
        fill: false,
        borderColor: '#0091B3',
        backgroundColor: '#0091B3',
        lineTension: 0,
        data: [0.0, 4.2, 6.6, 7.8, 12.5, 9.1, 3.0, 9.0, 13.3],
        hidden: true,
      },
      {
        label: 'Riverside',
        fill: false,
        borderColor: '#add8e6',
        backgroundColor: '#add8e6',
        lineTension: 0,
        data: [0.0, -7.2, -2.7, 1.1, 4.4, 5.0, 7.7, 9.7, 9.5],
        hidden: true,
      },
      {
        label: 'Santa Cruz',
        fill: false,
        borderColor: '#f29813',
        backgroundColor: '#f29813',
        lineTension: 0,
        data: [0.0, -2.0, -4.1, -0.3, 3.2, 1.6, 1.7, -1.7, 0.6],
        hidden: true,
      },
      {
        label: 'Santa Barbara',
        fill: false,
        borderColor: '#004D9F',
        backgroundColor: '#004D9F',
        lineTension: 0,
        data: [0.0, 0.2, 2.4, 5.0, 4.5, 6.3, 3.5, 5.1, 7.6],
        hidden: true,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: title2,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value) {
              return value + '%'; // convert it to percentage
            },
            min: -15,
            max: 15,
            stepSize: 3,
          },

          scaleLabel: {
            display: true,
            labelString: yLabel2,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Year',
          },
        },
      ],
      plugins: false,
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var value = tooltipItem.yLabel;
          var label = data.datasets[tooltipItem.datasetIndex].label;
          return label + ' ' + value + '%';
        },
      },
    },
    animation: false,
  },
});
if (window.matchMedia('(max-width: 480px)').matches) {
  ChangeChart.canvas.style = 'max-height:300px';
  ChangeChart.options.maintainAspectRatio = false;
  ChangeChart.update();
}
