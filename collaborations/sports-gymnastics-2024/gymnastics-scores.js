// Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
Chart.defaults.font.family = 'PT Sans'; //FONT FOR CHART CHANGE IF NEEDED
const labels = [
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
]; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['#FF9442', '#BCEBF5', '#BF79F5', '#68BCFF']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const rankarray = [
  1,
  4,
  17,
  4,
  7,
  7,
  1,
  2,
  3,
  4,
  8,
  11,
  5,
  4,
  1,
  3,
  3,
  12,
  12,
  5,
];
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [
    {
      label: 'Floor',
      data: [
        49.354,
        48.968,
        48.82,
        48.944,
        48.823,
        49.119,
        49.158,
        49.118,
        49.254,
        49.296,
        49.304,
        49.188,
        49.372,
        49.209,
        49.463,
        49.585,
        49.54,
        49.302,
        49.354,
        49.579,
      ], //DATA HERE
      backgroundColor: colors[0],
      borderColor: colors[0],
      borderWidth: 5,
    },
    {
      label: 'Vault',
      data: [
        49.23,
        49.173,
        49.114,
        49.234,
        49.223,
        49.35,
        49.313,
        49.238,
        49.439,
        49.284,
        49.24,
        49.298,
        49.08,
        49.197,
        49.283,
        49.293,
        49.28,
        49.25,
        49.188,
        49.313,
      ], //VALUE FOR EACH POINT
      backgroundColor: colors[1],
      borderColor: colors[1],
      borderWidth: 1,
    },
    {
      label: 'Bars',
      data: [
        49.22,
        48.959,
        48.859,
        49.172,
        49.138,
        49.112,
        49.277,
        49.143,
        49.191,
        49.204,
        49.188,
        49.096,
        49.092,
        49.398,
        49.378,
        49.457,
        49.398,
        49.223,
        49.081,
        49.487,
      ], //DATA HERE
      backgroundColor: colors[2],
      borderColor: colors[2],
      borderWidth: 1,
    },
    {
      label: 'Beam',
      data: [
        49.416,
        48.948,
        48.632,
        48.769,
        48.936,
        48.896,
        48.963,
        48.818,
        49.127,
        49.116,
        49.048,
        49.213,
        49.205,
        49.354,
        49.479,
        49.436,
        49.05,
        48.982,
        49.256,
        49.396,
      ], //DATA HERE
      backgroundColor: colors[3],
      borderColor: colors[3],
      borderWidth: 1,
    },
  ],
};

//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  scales: {
    y: {
      beginAtZero: false,
      title: {
        display: true,
        text: 'Average event score',
      },
    },
    x: {
      beginAtZero: false,
      title: {
        display: true,
        text: 'Season',
      },
    },
  },
  hover: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Average Score per Event per Year',
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        afterTitle: function(context) {
          console.log(context[0].label);
          return `National Rank: ${rankarray[context[0].dataIndex]}`;
        },
      },
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE = document.getElementById('gymnastics-line-chart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxLINE, {
  type: 'line',
  data: data,
  options: options,
});
