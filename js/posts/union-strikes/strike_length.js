//https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.1/Chart.js
//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = ['2012','2013','2014','2015','2016', '2017', '2018', '2019', '2020', '2021', '2022']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['blue', 'yellow','pink','purple'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT

const data = {
  labels: labels,
  datasets: [{
    label: 'Private sector',
    data: [4.4, 8.0, 2.0, 52.3, 6.3, 1.0, 33.5, 6.0, 0.0, 2.3, 13.3], //VALUE FOR EACH BAR
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1,
    //backgroundColor: colors[0],
    //borderColor: colors[0],
    //borderWidth: 1
  },{
    label: 'Local or state public sector',
    data: [1.0, 2.9, 0.0, 1.5, 5.5, 3.3, 3.0, 4.8, 3.0, 0.0, 14.0], //DATA HERE
    fill: false,
    borderColor: 'rgb(75, 125, 192)',
    tension: 0.1
    //backgroundColor: colors[1],
    //borderColor: colors[1],
    //borderWidth: 1
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  scales: {
    y: {
      beginAtZero: true,
      title:{
        display: true,
        text: 'Average strike length (days)'
    	}
    },
    x: {
        title:{
            display: true,
            text: 'Year',
            padding: 15
        }
    }
  },
  plugins: {
    title: {
        display: true,
        text: 'Strike Length Across Sectors'
      },
  },
  maintainAspectRatio: false,
}
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const strike_length = document.getElementById('Strike_Length_Line');

const chart = new Chart(strike_length, {
    type: 'line',
    data: data,
    options: options
  });