Chart.defaults.font.family = 'Noto Serif, serif'; //FONT FOR CHART CHANGE IF NEEDED
const labels_turnout = [
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
];
const colors_turnout = ['#2774AE', '#D3D3D3'];
const data_turnout = {
  labels: labels_turnout,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [
    {
      label: 'Voted',
      data: [40.3, 27.5, 26.5, 16.18, 30.06, 19.82, 15.19, 23.03], //VALUE FOR EACH BAR
      backgroundColor: colors_turnout[0],
      borderColor: colors_turnout[0],
      borderWidth: 1,
    },
    {
      label: 'Did not vote',
      data: [59.7, 72.5, 73.5, 83.82, 69.94, 80.18, 84.81, 76.97], //VALUE FOR EACH BAR
      backgroundColor: colors_turnout[1],
      borderColor: colors_turnout[1],
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_turnout = {
  scales: {
    x: {
      stacked: true,
      // title: {
      //   display: true,
      //   text: 'Years',
      // },
    },
    y: {
      grid: {
        display: false,
      },
      stacked: true,
      beginAtZero: true,
      max: 100,
      title: {
        display: true,
        text: 'Percent',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Turnout',
    },
  },
  tooltips: {
    enabled: true,
    mode: 'single',
    callbacks: {
      label: function(tooltipItems, data) {
        return tooltipItems.yLabel + ' %';
      },
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxTURNOUT = document.getElementById('turnout-bar');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const TurnoutChart = new Chart(ctxTURNOUT, {
  type: 'bar',
  data: data_turnout,
  options: options_turnout,
});
