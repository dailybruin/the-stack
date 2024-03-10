Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = ['UCLA','USC','UCB']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['lightblue', 'gold','pink','purple'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [{
    label: 'All Sports',
    data: [6839664, 0, 6140168], //VALUE FOR EACH BAR
    backgroundColor: colors[0],
    borderColor: colors[0],
    borderWidth: 1
  },{
    label: 'Basketball (Mens)',
    data: [956526, -2254994, 954846], //DATA HERE
    backgroundColor: colors[1],
    borderColor: colors[1],
    borderWidth: 1
  },{
    label: 'Football',
    data: [5883138, 2254994, 10457740], //DATA HERE
    backgroundColor: colors[2],
    borderColor: colors[2],
    borderWidth: 1
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  indexAxis: 'y',
  scales: {
    x: {
      beginAtZero: true,
      title:{
        display: true,
        text: 'Profits'
    }
    }
  },
  plugins: {
    title: {
        display: true,
        text: 'Breakdown of Profits by Team'
      },
  },
  maintainAspectRatio: false,
}
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxBAR = document.getElementById('ID-HERE');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxBAR, {
    type: 'bar',
    data: data,
    options: options
  });