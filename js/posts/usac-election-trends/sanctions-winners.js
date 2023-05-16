Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = ['2020','2021','2022','2023']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['blue', 'yellow','pink','purple'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [{
    label: '2020',
    data: [6, 10], //VALUE FOR EACH BAR
    backgroundColor: colors[0],
    borderColor: colors[0],
    borderWidth: 1
  },{
    label: '2022',
    data: [4, 11], //DATA HERE
    backgroundColor: colors[1],
    borderColor: colors[1],
    borderWidth: 1
  },
{
  label: '2022',
  data: [5, 10], //DATA HERE
  backgroundColor: colors[1],
  borderColor: colors[1],
  borderWidth: 1
}, 
{
label: '2023',
data: [5, 10], //DATA HERE
backgroundColor: colors[1],
borderColor: colors[1],
borderWidth: 1
}
]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
    scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
  },
  plugins: {
    title: {
        display: true,
        text: 'CHART TITLE'
      },
  },
  maintainAspectRatio: false,
}
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const sanctionWinners = document.getElementById('usac-winners-chart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(sanctionWinners, {
    type: 'bar',
    data: data,
    options: options
  });