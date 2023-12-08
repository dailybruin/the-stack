document.addEventListener("DOMContentLoaded", function() {
Chart.defaults.font.family = 'Noto Serif, serif'; //FONT FOR CHART CHANGE IF NEEDED
const labels = []; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['blue', 'yellow', 'pink', 'purple']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [
    {
      label: 'Type of Industry',
      data: [
        {x: ' AI/ML ' , y:  9 },
        {x: ' Agency/Coaching ' , y:  15 },
        {x: ' B2B SAAS ' , y:  9 },
        {x: ' Community  ' , y:  4 },
        {x: ' Consumer SAAS ' , y:  5 },
        {x: ' Consumer Social ' , y:  2 },
        {x: ' Consumer Social  ' , y:  3 },
        {x: ' Ecommerce/CPG ' , y:  11 },
        {x: ' Education ' , y:  8 },
        {x: ' Entertainment ' , y:  2 },
        {x: ' Exploring ' , y:  1 },
        {x: ' Hard Tech ' , y:  8 },
        {x: ' Influencer Marketing ' , y:  1 },
        {x: ' Marketplace ' , y:  3 },
        {x: ' Non-Profit ' , y:  1 },
        {x: ' VC ' , y:  14 },
        {x: ' Web3 ' , y:  2 }
      ], //VALUE FOR EACH BAR
      backgroundColor: colors[0],
      borderColor: colors[0],
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Number of Startups',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'CHART TITLE',
    },
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxBAR_a = document.getElementById('INDUSTRY-FREQUENCY');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxBAR_a, {
  type: 'bar',
  data: data,
  options: options,
});
});