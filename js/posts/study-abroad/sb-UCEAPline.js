const UCEAPdata = {
  label: 'UCEAP Destinations',
  data: [
    [85, 149, 170, 211, 293, 351, 387, 309, 298, 304, 64, 149, 148],
    [42, 48, 41, 37, 60, 57, 99, 69, 71, 69, 56, 76, 69],
    [49, 45, 31, 39, 65, 83, 78, 87, 123, 126, 59, 88, 75],
    [60, 49, 54, 68, 95, 115, 113, 72, 100, 116, 58, 107, 107],
    [52, 56, 31, 31, 34, 56, 51, 67, 67, 71, 26, 105, 89],
  ],
};

const UCEAPlabels = [
  'United Kingdom',
  'France',
  'Spain',
  'Italy',
  'South Korea',
];
const UCEAPcolors = [
  'rgb(64, 36, 131)',
  'rgb(188, 210, 88)',
  'rgb(248, 212, 93)',
  'rgb(121, 161, 228)',
  'rgb(222, 131, 99)',
];

const chartConfig = {
  type: 'line',
  data: {
    labels: [
      '2009-10',
      '2010-11',
      '2011-12',
      '2012-13',
      '2013-14',
      '2014-15',
      '2015-16',
      '2016-17',
      '2017-18',
      '2018-19',
      '2019-20',
      '2020-21',
      '2021-22',
    ],
    datasets: [
      {
        label: UCEAPlabels[0],
        borderColor: UCEAPcolors[0],
        backgroundColor: UCEAPcolors[0],
        data: UCEAPdata.data[0],
      },
      {
        label: UCEAPlabels[1],
        borderColor: UCEAPcolors[1],
        backgroundColor: UCEAPcolors[1],
        data: UCEAPdata.data[1],
      },
      {
        label: UCEAPlabels[2],
        borderColor: UCEAPcolors[2],
        backgroundColor: UCEAPcolors[2],
        data: UCEAPdata.data[2],
      },
      {
        label: UCEAPlabels[3],
        borderColor: UCEAPcolors[3],
        backgroundColor: UCEAPcolors[3],
        data: UCEAPdata.data[3],
      },
      {
        label: UCEAPlabels[4],
        borderColor: UCEAPcolors[4],
        backgroundColor: UCEAPcolors[4],
        data: UCEAPdata.data[4],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top UCEAP Destinations',
        legend: {
          display: true,
          font: {
            size: 22,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
      },
    },
  },
};

const ctm = document.getElementById('EAPchart');
const EAPchart = new Chart(ctm, chartConfig);
EAPchart.canvas.style = 'max-height:500px';
EAPchart.options.maintainAspectRatio = false;
EAPchart.update();
