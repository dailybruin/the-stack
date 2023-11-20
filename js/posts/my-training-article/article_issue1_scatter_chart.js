Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const colors = ['#02D9CA', '#D94A02','pink','purple'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [{
    label: 'UCLA',
    data:[
        {x: 2000,y: 2},
        {x: 2000,y: 5},
        {x: 3000,y: 4},
        {x: 4000,y: 1},
        {x: 5000,y: 6},
        {x: 6000,y: 4}
    ], //VALUE FOR EACH POINT
    backgroundColor: colors[0],
    borderColor: colors[2],
    borderWidth: 5
  },{
    label: 'USC',
    data: [
        {x: 2000,y: 1},
        {x: 2000,y: 3},
        {x: 3000,y: 4},
        {x: 4000,y: 5},
        {x: 5000,y: 6},
        {x: 6000,y: 10}
    ], //DATA HERE
    backgroundColor: colors[3],
    borderColor: colors[0],
    borderWidth: 3
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS SEE CHART.JS
const options = {
    scales: {
      y: {
        beginAtZero: true,
        title:{
          display: true,
          text: 'Number of points per game'
      }
      },
      x:{
        beginAtZero: false,
      }
    },
    plugins: {
      title: {
          display: true,
          text: 'Points per game for UCLA and USC'
        },
    },
    maintainAspectRatio: false,
  }
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxSCATTER = document.getElementById('BethanysChart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxSCATTER, {
    type: 'scatter',
    data: data,
    options: options
  });