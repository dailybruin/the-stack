Chart.defaults.font.family = 'Noto Serif, serif'; //FONT FOR CHART CHANGE IF NEEDED
const labels = ['2020', '2021', '2022', '2023']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const acolors = ['#2774AE', '#AED6F1']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [
    {
      label: 'Sanctioned winners',
      data: [6, 4, 5, 5], //VALUE FOR EACH BAR
      backgroundColor: acolors[0],
      borderColor: acolors[0],
      borderWidth: 1,
    },
    {
      label: 'Unsanctioned winners',
      data: [9, 11, 10, 10], //DATA HERE
      backgroundColor: acolors[1],
      borderColor: acolors[1],
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Number of winners',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Distribution of USAC election winners',
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const sanctionWinners = document.getElementById('winners-sanctions');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(sanctionWinners, {
  type: 'bar',
  data: data,
  options: options,
});
