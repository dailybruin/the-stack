//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels_Wooden = [
  'Undergraduate',
  'Student Affiliate',
  'Retiree & Emeriti',
  'Conference Guest',
]; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const member_colors_Wooden = [
  'rgb(28, 93, 153)',
  'rgb(232, 107, 146)',
  'rgb(114, 150, 108)',
  'rgb(255, 200, 87)',
]; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data_Wooden = {
  labels: labels_Wooden,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [
    {
      label: 'Membership distribution distrbution at Wooden',
      data: [458022, 20409, 1776, 11397], //VALUE FOR EACH SEGMENT
      backgroundColor: member_colors_Wooden,
      borderColor: 'white',
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_Wooden = {
  title: {
    display: true,
    text: 'Membership Distribution at Wooden',
    fontSize: 14,
  },
  legend: {
    position: 'right',
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPIE_Wooden = document
  .getElementById('wooden_member_demo_gym_times')
  .getContext('2d');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_Wooden = new Chart(ctxPIE_Wooden, {
  type: 'pie', //chose "pie" or "doughnut"
  data: data_Wooden,
  options: options_Wooden,
});

if (window.matchMedia('(max-width: 480px)').matches) {
  chart.canvas.style = 'max-height:300px';
  chart.options.legend.position = 'top';
  chart.options.maintainAspectRatio = false;
  chart.update();
}
