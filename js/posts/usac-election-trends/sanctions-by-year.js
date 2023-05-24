Chart.defaults.font.family = 'Noto Serif, serif'; //FONT FOR CHART CHANGE IF NEEDED
const sanctions_labels = ['2020', '2021', '2022', '2023']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const sanctions_colors = ['#2774AE', '#AED6F1', '#C69214']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const sanctions_data = {
  labels: sanctions_labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [
    {
      label: 'Valid complaints',
      data: [58, 27, 8, 6], //VALUE FOR EACH BAR
      backgroundColor: sanctions_colors[0],
      borderColor: sanctions_colors[0],
      borderWidth: 1,
      stack: 'Stack 0',
    },
    {
      label: 'Partially valid complaints',
      data: [9, 9, 3, 9], //DATA HERE
      backgroundColor: sanctions_colors[1],
      borderColor: sanctions_colors[1],
      borderWidth: 1,
      stack: 'Stack 1',
    },
    {
      label: 'Invalid complaints',
      data: [13, 13, 15, 9], //DATA HERE
      backgroundColor: sanctions_colors[2],
      borderColor: sanctions_colors[2],
      borderWidth: 1,
      stack: 'Stack 2',
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const sanctions_options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Number of citations filed',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Complaints filed during USAC elections',
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const sanctionsYear = document.getElementById('yearly-sanctions');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const sanctions_chart = new Chart(sanctionsYear, {
  type: 'bar',
  data: sanctions_data,
  options: sanctions_options,
});
