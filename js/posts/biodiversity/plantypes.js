// Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels_type = ['Shrubs', 'Trees', 'Forbs', 'Grasses and Sedges', 'Annuals','Vines', 'Succulents']; //THIS SHOULD BE A LIST OF WHAT EACH SEGMENT IN THE PIE REPRESENTS
const colors_types = ['#5FA0CE', '#E5A539','#A45FCE','#CECC5F', '#CE665F','#5FCE8E', '#9C9494'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT 
const data_type = {
  labels: labels_type,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A RING OF THE PIE CHART 
  //CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}, BUT THIS IS *NOT* RECOMMENDED
  datasets: [{
    label: 'Plant Types at UCLA',
    data:[62, 34, 30, 18, 14, 5, 3], //VALUE FOR EACH SEGMENT
    backgroundColor: colors_types,
    borderColor: 'white',
    borderWidth: 1
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options_type = {
    
    plugins: {
      title: {
          display: true,
          text: 'Plant Types at UCLA'
        },
        legend: {position: 'right',
      }
    },
    maintainAspectRatio: false,
  }
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxPT = document.getElementById('PlantTypes').getContext('2d');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart_type = new Chart(ctxPT, {
    type: 'pie', //chose "pie" or "doughnut"
    data: data_type,
    options: options_type
  });