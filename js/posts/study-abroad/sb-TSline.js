const TSdata = {
  label: 'Travel Study Destinations',
  data: [
    [199, 144, 164, 122, 136, 134, 143, 103, 107, 98, 0, 0, 0],
    [289, 174, 224, 210, 184, 212, 230, 218, 197, 179, 0, 0, 129],
    [91, 109, 124, 117, 105, 0, 105, 106, 106, 135, 0, 0, 153],
    [153, 64, 66, 90, 63, 89, 96, 60, 94, 74, 0, 0, 0],
    [122, 64, 66, 62, 63, 65, 70, 60, 68, 74, 0, 0, 24],
  ],
};
const TSlabels = [
  'United Kingdom',
  'France',
  'Spain',
  'Belgium',
  'Netherlands',
];
const TScolors = [
  'rgb(64, 36, 131)',
  'rgb(188, 210, 88)',
  'rgb(248, 212, 93)',
  'rgb(157, 78, 221)',
  'rgb(188, 71, 73)',
];

const TSchartConfig = {
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
        label: TSlabels[0],
        borderColor: TScolors[0],
        backgroundColor: TScolors[0],
        data: TSdata.data[0],
      },
      {
        label: TSlabels[1],
        borderColor: TScolors[1],
        backgroundColor: TScolors[1],
        data: TSdata.data[1],
      },
      {
        label: TSlabels[2],
        borderColor: TScolors[2],
        backgroundColor: TScolors[2],
        data: TSdata.data[2],
      },
      {
        label: TSlabels[3],
        borderColor: TScolors[3],
        backgroundColor: TScolors[3],
        data: TSdata.data[3],
      },
      {
        label: TSlabels[4],
        borderColor: TScolors[4],
        backgroundColor: TScolors[4],
        data: TSdata.data[4],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top Travel Study Destinations',
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
        max: 400,
      },
    },
  },
};

const cll = document.getElementById('TSchart');
const TSline = new Chart(cll, TSchartConfig);

TSline.canvas.style = 'max-height:500px';
TSline.options.maintainAspectRatio = false;
TSline.update();
