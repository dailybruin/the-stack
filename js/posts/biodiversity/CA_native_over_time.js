//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels_time = ['2016', '2017', '2018', '2019', '2020', '2021', '2022']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors_time = ['#5FA0CE', '#E5A539']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data_time = {
  labels: labels_time,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [
    {
      label: 'California Native',
      data: [24, 147, 194, 378, 409, 436, 653], //VALUE FOR EACH POINT
      backgroundColor: colors_time[0],
      borderColor: colors_time[0],
      borderWidth: 3,
      fill: false,
    },
    {
      label: 'Non-Native',
      data: [1, 2, 3, 12, 14, 20, 57], //DATA HERE
      backgroundColor: colors_time[1],
      borderColor: colors_time[1],
      borderWidth: 3,
      fill: false,
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
        text: 'Count of Plant Observations',
      },
    },
  },
  title: {
    display: true,
    text: 'California native vs non-native plants at UCLA (2016-2022)',
    fontSize: 14,
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE = document.getElementById('CA_native_linechart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_time = new Chart(ctxLINE, {
  type: 'line',
  data: data_time,
  options: options_time,
});
