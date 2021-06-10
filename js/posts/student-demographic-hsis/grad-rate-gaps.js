let YearLabels2 = [
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '  ',
];
let Berkeleygap = [10.8, 11.3, 5.7, 6.6, 6.6, 2.5, 3.0, 5.9, 8.1];
let Davisgap = [13.1, 11.8, 13.1, 7.9, 9.9, 10.7, 9.5, 6.7, 8.5];
let Irvinegap = [2.5, 5.1, 4.2, 3.5, 0.9, 5.7, 8.3, 4.7, 7.6];
let LosAngelesgap = [5.1, 3.4, 7.1, 6.4, 3.8, 4.6, 6.5, 4.9, 6.8];
let Mercedgap = [0.7, -8.0, -7.6, -1.8, -2.7, 0.3, 14.7, 7.4, 2.7];
let Riversidegap = [-3.9, 9.5, 5.0, 2.3, 1.7, 3.2, -0.5, -5.4, -0.5];
let SanDiegogap = [10.2, 5.3, 11.0, 8.5, 10.5, 5.7, 8.9, 8.5, 3.6];
let SantaCruzgap = [3.6, 4.9, 5.6, 7.2, 2.9, 6.0, 5.7, 6.7, 4.3];
let SantaBarbaragap = [9.5, 10.4, 6.8, 5.2, 5.4, 5.2, 7.4, 5.9, 4.0];
let DataNamesgap = [
  LosAngelesgap,
  Berkeleygap,
  Davisgap,
  Irvinegap,
  Mercedgap,
  Riversidegap,
  SanDiegogap,
  SantaCruzgap,
  SantaBarbaragap,
];

let datagap = [];
for (let i = 0; i < schools.length; ++i) {
  chartdata = {
    label: labelList[i],
    fill: false,
    data: DataNamesgap[i],
    backgroundColor: colors[i],
    borderColor: colors[i],
    borderWidth: 1,
    hidden: DataNamesgap[i] != LosAngelesgap,
    lineTension: 0,
  };
  datagap.push(chartdata);
}

if (isMobile) {
  title = '% Gap between White and Hispanic or Latino Grad. Rates';
} else {
  title =
    'Percentage Gap between White and Hispanic or Latino Graduation Rates';
}

if (isMobile) {
  yLabel = 'Difference (%)';
} else {
  yLabel = 'Difference (%)';
}

var ctx5 = document.getElementById('grad-rate-gap');

var GapChart = new Chart(ctx5, {
  type: 'line',
  data: {
    labels: YearLabels2,
    datasets: datagap,
  },
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

            min: -15,
            max: 15,
            stepSize: 3,
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
  lineAtIndex: [
    { index: 1, text: ['2012', 'Santa Cruz became', 'an HSI'] },
    { index: 4, text: ['2015', 'Santa Barbara became', 'an HSI'] },
    { index: 6, text: ['2017', 'Irvine became', 'an HSI'] },
  ],
});

if (window.matchMedia('(max-width: 480px)').matches) {
  GapChart.canvas.style = 'max-height:300px';
  GapChart.options.maintainAspectRatio = false;
  GapChart.update();
}
