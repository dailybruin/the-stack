Chart.defaults.font.family = 'Noto Serif, serif'; //FONT FOR CHART CHANGE IF NEEDED
const punishments_labels = ['None', 'Suspension from campaigning', 'Correction', 'Other']; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const punishments_colors = ['#2774AE', '#AED6F1', '#C69214', '#FFD200']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const punishments_data = {
  labels: punishments_labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [
    {
      data: [58, 45, 45, 28], //VALUE FOR EACH SEGMENT
      backgroundColor: punishments_colors,
      borderColor: punishments_colors,
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const punishments_options = {
  scales: {
    // y: {
    //   beginAtZero: true,
    //   title:{
    //     display: true,
    //     text: 'Y-AXIS TITLE'
    // }
    // }
  },
  plugins: {
    title: {
      display: true,
      text: 'Distribution of citation punishments (2020 - 2023)',
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const sanctionsPie = document.getElementById('punishments-sanctions');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const punishments_chart = new Chart(sanctionsPie, {
  type: 'doughnut', //chose "pie" or "doughnut"
  data: punishments_data,
  options: punishments_options,
});
