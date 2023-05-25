// Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const party_labels = ['2020', '2021', '2022', '2023']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const party_colors = ['#2774AE', '#AED6F1']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const party_data = {
  labels: party_labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [
    {
      label: 'Independent candidates',
      data: [56.25, 47.37, 73.91, 85.37], //VALUE FOR EACH BAR
      backgroundColor: party_colors[0],
      borderColor: party_colors[0],
      borderWidth: 1,
      stack: 0,
    },
    {
      label: 'Independent winners',
      data: [33.33, 40, 80, 93.33], //DATA HERE
      backgroundColor: party_colors[1],
      borderColor: party_colors[1],
      borderWidth: 1,
      stack: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const party_options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 100,
      title: {
        display: true,
        text: 'Percent of candidates',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Percentage of independent candidates and winners',
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxParty = document.getElementById('mchart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const Partychart = new Chart(ctxParty, {
  type: 'bar',
  data: party_data,
  options: party_options,
});
