//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = ['Grand Savana/Oakwoodland','Sage Hill','Urban Canyon','Alluvial Corridor', 'Turf Alternative', 'Bioswale/Rain Garden']; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const colors = ['#5FA0CE', '#E5A539','#CECC5F', '#CE665F','#A45FCE','#5FCE8E'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART 
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [{
    label: 'Plant Distribution at UCLA',
    data:[39, 77, 81, 21, 21, 85], //VALUE FOR EACH SEGMENT
    backgroundColor: colors,
    borderColor: colors,
    borderWidth: 1
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
    
    plugins: {
      title: {
          display: true,
          text: 'Distribution of Plants at UCLA'
        },
    },
    maintainAspectRatio: false,
  }
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPIE = document.getElementById('PlantD').getContext('2d');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxPIE, {
    type: 'pie', //chose "pie" or "doughnut"
    data: data,
    options: options
  });