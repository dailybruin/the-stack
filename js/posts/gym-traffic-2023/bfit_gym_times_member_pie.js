//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels_BFit = [
  'Undergraduate',
  'Student Affiliate',
  'Retiree & Emeriti',
  'Conference Guest',
]; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const member_colors_BFit = [
  'rgb(28, 93, 153)',
  'rgb(232, 107, 146)',
  'rgb(114, 150, 108)',
  'rgb(255, 200, 87)',
]; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data_BFit = {
  labels: labels_BFit,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [
    {
      label: 'Membership distribution distrbution at BFIT',
      data: [350024, 2201, 3, 6878], //VALUE FOR EACH SEGMENT
      backgroundColor: member_colors_BFit,
      borderColor: 'white',
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_BFit = {
  title: {
    display: true,
    text: 'Membership Distribution at BFIT',
    fontSize: 14,
  },
  legend: {
    position: 'right',
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPIE_BFit = document
  .getElementById('bfit_member_demo_gym_times')
  .getContext('2d');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_BFit = new Chart(ctxPIE_BFit, {
  type: 'pie', //chose "pie" or "doughnut"
  data: data_BFit,
  options: options_BFit,
});

if (window.matchMedia('(max-width: 480px)').matches) {
  chart.canvas.style = 'max-height:300px';
  chart.options.legend.position = 'top';
  chart.options.maintainAspectRatio = false;
  chart.update();
}
