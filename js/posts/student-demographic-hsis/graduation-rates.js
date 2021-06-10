let ctx1 = document.getElementById('grad-rate-line').getContext('2d');
//let ctx = document.getElementById('myChart').getContext('2d');
isMobile = true;
//console.log(screen.width)
if (screen.width > 1000) {
  isMobile = false;
}

if (isMobile) {
  title = 'Hispanic or Latino Grad Rates by Institution';
} else {
  title =
    'UC Hispanic or Latino Graduation Rates From 2011-2019 by Institution ';
}

if (isMobile) {
  yLabel = 'Hispanic or Latino Grad. Rate (%)';
} else {
  yLabel = 'Hispanic or Latino Graduation Rate (%)';
}
let RatesChart = new Chart(ctx1, {
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
        data: [85.2, 87.6, 83.5, 85.0, 87.9, 86.5, 86.4, 85.8, 86.8],
      },
      {
        label: 'Los Angeles Avg.',
        borderColor: '#3284BF',
        backgroundColor: 'white',
        fill: false,
        lineTension: 0,
        data: [86.08, 86.08, 86.08, 86.08, 86.08, 86.08, 86.08, 86.08, 86.08],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
      },
      {
        label: 'Berkeley',
        fill: false,
        borderColor: '#041E42',
        backgroundColor: '#041E42',
        lineTension: 0,

        data: [81.2, 80.8, 84.3, 84.7, 84.8, 88.7, 87.3, 85.3, 84.0],
        hidden: true,
      },
      {
        label: 'Davis',
        fill: false,
        borderColor: '#B3A369',
        backgroundColor: '#B3A369',
        lineTension: 0,
        data: [70.9, 71.6, 71.7, 77.9, 76.9, 76.2, 77.0, 80.2, 80.3],
        hidden: true,
      },
      {
        label: 'Irvine',
        fill: false,
        borderColor: '#FFD200',
        backgroundColor: '#FFD200',
        lineTension: 0,
        data: [79.2, 78.9, 78.3, 81.9, 83.7, 79.9, 77.4, 75.8, 78.5],
        hidden: true,
      },
      {
        label: 'Merced',
        fill: false,
        borderColor: '#0091B3',
        backgroundColor: '#0091B3',
        lineTension: 0,
        data: [54.4, 58.6, 61.0, 62.2, 66.9, 63.5, 57.4, 63.4, 67.7],
        hidden: true,
      },
      {
        label: 'Riverside',
        fill: false,
        borderColor: '#add8e6',
        backgroundColor: '#add8e6',
        lineTension: 0,
        data: [65.1, 57.9, 62.4, 66.2, 69.5, 70.1, 72.8, 74.8, 74.6],
        hidden: true,
      },
      {
        label: 'San Diego',
        fill: false,
        borderColor: '#C69214',
        backgroundColor: '#C69214',
        lineTension: 0,
        data: [75.9, 78.9, 74.1, 76.8, 77.9, 81.5, 76.4, 76.4, 82.2],
        hidden: true,
      },
      {
        label: 'Santa Cruz',
        fill: false,
        borderColor: '#f29813',
        backgroundColor: '#f29813',
        lineTension: 0,
        data: [71.8, 69.8, 67.7, 71.5, 75.0, 73.4, 73.5, 70.1, 72.4],
        hidden: true,
      },
      {
        label: 'Santa Barbara',
        fill: false,
        borderColor: '#004D9F',
        backgroundColor: '#004D9F',
        lineTension: 0,
        data: [73.3, 73.5, 75.7, 78.3, 77.8, 79.6, 76.8, 78.4, 80.9],
        hidden: true,
      },
      {
        label: 'Berkeley Avg.',
        fill: false,
        borderColor: '#041E42',
        backgroundColor: 'white',
        lineTension: 0,
        data: [84.57, 84.57, 84.57, 84.57, 84.57, 84.57, 84.57, 84.57, 84.57],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
      {
        label: 'Davis Avg.',
        fill: false,
        borderColor: '#B3A369',
        backgroundColor: 'white',
        lineTension: 0,
        data: [75.86, 75.86, 75.86, 75.86, 75.86, 75.86, 75.86, 75.86, 75.86],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
      {
        label: 'Irvine Avg.',
        fill: false,
        borderColor: '#FFD200',
        backgroundColor: 'white',
        lineTension: 0,
        data: [79.29, 79.29, 79.29, 79.29, 79.29, 79.29, 79.29, 79.29, 79.29],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
      {
        label: 'Merced Avg.',
        fill: false,
        borderColor: '#0091B3',
        backgroundColor: 'white',
        lineTension: 0,
        data: [61.68, 61.68, 61.68, 61.68, 61.68, 61.68, 61.68, 61.68, 61.68],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
      {
        label: 'Riverside Avg.',
        fill: false,
        borderColor: '#add8e6',
        backgroundColor: 'white',
        lineTension: 0,
        data: [68.16, 68.16, 68.16, 68.16, 68.16, 68.16, 68.16, 68.16, 68.16],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
      {
        label: 'San Diego Avg.',
        fill: false,
        borderColor: '#C69214',
        backgroundColor: 'white',
        lineTension: 0,
        data: [77.79, 77.79, 77.79, 77.79, 77.79, 77.79, 77.79, 77.79, 77.79],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
      {
        label: 'Santa Cruz Avg.',
        fill: false,
        borderColor: '#f29813',
        backgroundColor: 'white',
        lineTension: 0,
        data: [71.68, 71.68, 71.68, 71.68, 71.68, 71.68, 71.68, 71.68, 71.68],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
      {
        label: 'Santa Barbara Avg.',
        fill: false,
        borderColor: '#004D9F',
        backgroundColor: 'white',
        lineTension: 0,
        data: [77.14, 77.14, 77.14, 77.14, 77.14, 77.14, 77.14, 77.14, 77.14],
        borderDash: [10, 5],
        borderWidth: 2.5,
        pointRadius: 1,
        hidden: true,
      },
    ],
  },
  // Configuration options go here

  options: {
    title: {
      display: true,
      text: title,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value) {
              return value + '%'; // convert it to percentage
            },
            min: 0,
            max: 100,
            stepSize: 10,
          },

          scaleLabel: {
            display: true,
            labelString: yLabel,
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
  RatesChart.canvas.style = 'min-height: 500px';
  RatesChart.options.maintainAspectRatio = false;
  RatesChart.update();
}
