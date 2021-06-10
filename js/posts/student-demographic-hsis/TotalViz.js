let TotalBerkeley = [
  6533.10302,
  12290.15397,
  15034.02075,
  15165.52833,
  17505.63043,
  16980.76499,
  16955.38212,
  16919.53482,
  17564.38678,
  16537.03714,
  16193.89056,
  20030.81283,
  16975.2556,
  18591.00817,
  18829.23795,
];
let TotalDavis = [
  10162.16773,
  14275.57188,
  15395.14767,
  16137.71437,
  18051.55177,
  17944.07685,
  20077.63721,
  19728.08239,
  18531.80706,
  20640.22483,
  20380.74396,
  20436.61203,
  22638.40125,
  23323.4978,
  27317.4188,
];
let TotalIrvine = [
  5600.26376,
  763.25496,
  9052.50894,
  8767.10513,
  9266.63395,
  9186.23442,
  8551.08936,
  8328.40815,
  8502.35534,
  8139.72865,
  10934.49301,
  10351.06324,
  9917.92628,
  12034.76452,
  14226.11396,
];
let TotalLosAngeles = [
  13790.54815,
  20694.16299,
  20107.84641,
  21775.13723,
  23149.21027,
  24111.86214,
  22808.83836,
  19699.0309,
  21823.46605,
  23285.12226,
  24178.56352,
  23889.91141,
  20627.37883,
  28539.60817,
  32227.99252,
];
let TotalMerced = [
  559.42681,
  1330.58246,
  1776.18831,
  2507.71527,
  2190.75653,
  1537.026,
  1906.92811,
  1915.98237,
  3441.94054,
  2891.35594,
  2667.70939,
  3864.75901,
  2812.39505,
  5774.05493,
  5026.20934,
];
let TotalRiverside = [
  2232.3638,
  3838.88222,
  4076.53701,
  3487.64078,
  4505.87701,
  3646.17736,
  4423.85638,
  3665.20715,
  4378.71249,
  4879.50816,
  5420.11688,
  5755.42424,
  6292.18276,
  6943.3402,
  9243.14381,
];
let TotalSanDiego = [
  12880.04159,
  18591.28748,
  21534.34312,
  22973.26776,
  27567.62781,
  25300.68918,
  26347.7452,
  25968.11666,
  28226.96303,
  26397.0134,
  28033.0119,
  28480.28999,
  29316.33976,
  33900.67144,
  31934.78947,
];
let TotalSantaCruz = [
  5520.48605,
  5782.25059,
  6946.61778,
  6390.7154,
  7583.85785,
  6525.5218,
  7449.80861,
  7365.84749,
  7106.14907,
  7091.59834,
  6343.57705,
  5319.12671,
  7767.16349,
  8507.8123,
  8116.45804,
];
let TotalSantaBarbara = [
  4737.5084,
  6540.62757,
  7393.56457,
  6637.17002,
  8525.00783,
  7008.16634,
  8282.62727,
  6290.86501,
  7897.7168,
  7079.46006,
  6996.31162,
  6985.69697,
  7964.22665,
  8192.04085,
  8928.03587,
];
let TotalDataNames = [
  TotalLosAngeles,
  TotalBerkeley,
  TotalDavis,
  TotalIrvine,
  TotalMerced,
  TotalRiverside,
  TotalSanDiego,
  TotalSantaCruz,
  TotalSantaBarbara,
];
let Totaldata = [];

for (let i = 0; i < schools.length; ++i) {
  chartdata2 = {
    label: labelList[i],
    fill: false,
    backgroundColor: colors[i],
    borderColor: colors[i],
    borderWidth: 1,
    hidden: TotalDataNames[i] != TotalLosAngeles,
    lineTension: 0,
    data: TotalDataNames[i],
  };
  Totaldata.push(chartdata2);
}
//console.log(Totaldata);

var ctxTotal = document.getElementById('TotalChart');
var TotalChart = new Chart(ctxTotal, {
  type: 'line',
  data: {
    labels: YearLabels,
    datasets: Totaldata,
  },
  options: {
    title: {
      display: true,
      text: 'Total Grant Money per Student by UC Campus',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value) {
              return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              }); // convert value to dollar format
            },
            min: 0,
            max: 35000,
            stepSize: 5000,
          },
          scaleLabel: {
            display: true,
            labelString: 'Grant Money per Student (USD)',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'UC Fiscal Year (UC Fiscal Years start July 1)',
          },
        },
      ],
    },
    tooltips: {
      intersect: true,
      displayColors: true,
      callbacks: {
        label: function(tooltipItem, data) {
          var value = tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          });
          var label = data.datasets[tooltipItem.datasetIndex].label;
          return label + ' ' + value;
        },
      },
    },
    animation: false,
  },
  lineAtIndex: [
    { index: 7, text: ['2012', 'Santa Cruz became', 'an HSI'] },
    { index: 10, text: ['2015', 'Santa Barbara became', 'an HSI'] },
    { index: 12, text: ['2017', 'Irvine became', 'an HSI'] },
    { index: 5, text: ['2010', 'Merced became', 'an HSI'] },
    { index: 3, text: ['2008', 'Riverside became', 'an HSI'] },
  ],
});

if (window.matchMedia('(max-width: 480px)').matches) {
  TotalChart.canvas.style = 'min-height: 200px, max-height:400px,';
  TotalChart.options.maintainAspectRatio = false;
  TotalChart.update();
}
