//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels_pie = ['CA Native', 'Non-Native']; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const colors_pie = ['#5FA0CE', '#E5A539', 'white']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data_pie = {
  labels: labels_pie,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [
    {
      label: 'CA Native VS Non-Native Plants at UCLA',
      data: [121, 45], //VALUE FOR EACH SEGMENT
      backgroundColor: colors_pie,
      borderColor: colors_pie[2],
      borderWidth: 2,
    },
  ],
  hoverOffset: 4,
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_pie = {
  plugins: {
    title: {
      display: true,
      text: 'California Native VS Non-Native Plants at UCLA',
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPIE2 = document.getElementById('CA_native_piechart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_pie2 = new Chart(ctxPIE2, {
  type: 'pie', //chose "pie" or "doughnut"
  data: data_pie,
  options: options_pie,
});
