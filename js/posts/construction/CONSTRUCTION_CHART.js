// Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = [
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
]; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const colors = [
  '#0081AF',
  '#CEEAF7',
  '#14213D',
  '#3F00FF',
  '#A7C7E7',
  '#96DED1',
  '#1F51FF',
  '#87CEEB',
  '#6495ED',
  '#40E0D0',
]; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [
    {
      label: 'LABEL FOR DATA 1',
      data: [
        13.02180355,
        9.379701083,
        5.422302704,
        13.74978688,
        20.01893427,
        2.53339363,
        3.033077654,
        7.252437337,
        4.026811081,
        21.5617518,
      ],
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Y-AXIS TITLE',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'CHART TITLE',
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPIE = document.getElementById('Construction-Chart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxPIE, {
  type: 'pie', //chose "pie" or "doughnut"
  data: data,
  options: options,
});
