Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const colors = ['blue', 'yellow','pink','purple'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [{
    label: 'LABEL FOR DATASET 1',
    data:[
        {x: 1,y: 2},
        {x: 3,y:4},
        {x: 5,y: 6}
    ], //VALUE FOR EACH POINT
    backgroundColor: colors[0],
    borderColor: colors[0],
    borderWidth: 1
  },{
    label: 'LABEL FOR DATASET 2',
    data: [
        {x: 2,y: 3},
        {x: 4,y: 5},
        {x: 6,y: 7}
    ], //DATA HERE
    backgroundColor: colors[1],
    borderColor: colors[1],
    borderWidth: 1
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS SEE CHART.JS
const options = {
    scales: {
      y: {
        beginAtZero: true,
        title:{
          display: true,
          text: 'Y-AXIS TITLE'
      }
      },
      x:{
        beginAtZero: true,
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
const ctxSCATTER = document.getElementById('ID-HERE');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxSCATTER, {
    type: 'scatter',
    data: data,
    options: options
  });