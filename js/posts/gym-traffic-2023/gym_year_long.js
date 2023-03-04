//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels_time = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors_time = ['rgb(255, 200, 87)', 'rgb(28, 93, 153)']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data_time = {
  labels: labels_time,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [
    {
      label: 'BFIT',
      data: [
        3868,
        36495,
        32054,
        41305,
        36624,
        10073,
        7928,
        8013,
        8488,
        35557,
        29626,
        9516,
      ], //VALUE FOR EACH POINT
      backgroundColor: colors_time[0],
      borderColor: colors_time[0],
      borderWidth: 1,
    },
    {
      label: 'Wooden',
      data: [
        13731,
        63633,
        61066,
        85295,
        76599,
        32322,
        33040,
        34921,
        37166,
        73931,
        58250,
        23298,
      ], //DATA HERE
      backgroundColor: colors_time[1],
      borderColor: colors_time[1],
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_time = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Total Number of Visits Per Month',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Number of Visitors Per Month',
    },
  },
  fill: false,
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE = document.getElementById('gym_month_long');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_time = new Chart(ctxLINE, {
  type: 'line',
  data: data_time,
  options: options_time,
});
