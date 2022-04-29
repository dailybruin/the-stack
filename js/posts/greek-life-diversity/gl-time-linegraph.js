let lineChart;

const colors = [
  'rgb(130, 9, 51)',
  'rgb(255, 131, 17)',
  'rgb(232, 107, 146)',
  'rgb(28, 93, 153)',
  'rgb(255, 200, 87)',
  'rgb(114, 150, 108)',
  'rgb(204, 147, 237)',
  'rgb(149, 163, 179)',
];

const timeIntervals = [
  '2016-2017',
  '2017-2018',
  '2018-2019',
  '2019-2020',
];

// names to display in dropdown & chart title
const raceLabels = [
  'White',
  'Asian',
  'Hispanic',
  'Black',
  'Pacific Islander',
  'Indigenous',
  'Two or more races',
  'Unknown',
];
const ctx = document.getElementById('glTimeLinegraph');
//Data 
const chart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: timeIntervals,
    datasets: [{
      label: 'White',
      data: [62.9,	62.5,	61.5,	62.3],
      fill: false,
      borderColor: 'rgb(130, 9, 51)',
      tension: 0.1},
    {label: 'Asian',
      data: [10.7,9.5, 9.6,9.6],
      fill: false,
      borderColor: 'rgb(255, 131, 17)',
      tension: 0.1},
    {label: 'Hispanic',
      data: [12.8,	13.3,	12.9,	13.2],
      fill: false,
      borderColor: 'rgb(232, 107, 146)',
      tension: 0.1},
    {label: 'Black',
      data: [0.8, 1.1, 1.1,	0.8],
      fill: false,
      borderColor: 'rgb(28, 93, 153)',
      tension: 0.1},
    {label: 'Pacific Islander',
      data: [0, 0.6, 0.6, 0],
      fill: false,
      borderColor: 'rgb(255, 200, 87)',
      tension: 0.1},
    {label: 'American Indian',
      data: [0, 0, 0.6, 0],
      fill: false,
      borderColor: 'rgb(114, 150, 108)',
      tension: 0.1},
    {label: 'Two or More Races',
      data: [7.6, 8.2, 7.8, 8.7],
      fill: false,
      borderColor: 'rgb(204, 147, 237)',
      tension: 0.1},
    {label: 'Unknown',
      data: [2.2, 2.2, 2.2, 2.3],
      fill: false,
      borderColor: 'rgb(149, 163, 179)',
      tension: 0.1},
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
  });



