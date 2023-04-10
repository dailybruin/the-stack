//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = [
  'Grand Savanna/Oakwoodland',
  'Alluvial Corridor',
  'Urban Canyon',
  'Sage Hill',
  'Bioswale/Rain Garden',
  'Turf Alternative',
]; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const colors_by_garden = [
  '#5FA0CE',
  '#E5A539',
  '#68CAC4',
  '#5F9E5B',
  '#B7234A',
  '#EACE10',
]; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [
    {
      label: 'Plant Distribution at UCLA',
      data: [85, 81, 77, 39, 21, 21], //VALUE FOR EACH SEGMENT
      backgroundColor: colors_by_garden,
      borderColor: 'white',
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  title: {
    display: true,
    text: 'Distribution of plants at UCLA',
    fontSize: 14,
  },
  legend: {
    position: 'right',
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPIE = document.getElementById('PlantD').getContext('2d');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxPIE, {
  type: 'pie', //chose "pie" or "doughnut"
  data: data,
  options: options,
});

if (window.matchMedia('(max-width: 480px)').matches) {
  chart.canvas.style = 'max-height:300px';
  chart.options.legend.position = 'top';
  chart.options.maintainAspectRatio = false;
  chart.update();
}
