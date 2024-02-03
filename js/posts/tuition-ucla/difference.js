Chart.defaults.font.family = 'Noto Serif, serif'

const labels = ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022']

const colors = ['#000000']

const linedata = {
  labels: labels,
  datasets: [{
    label: 'Out-of-Pocket Cost',
    data: [5363, 6316, 6761, 7089, 7319, 7789, 8664, 10292, 12320, 13693, 14189, 14524, 15010, 14999, 15182, 15869, 15670, 15616, 14597, 15147, 16647],
    backgroundColor: colors[0],
    borderColor: colors[0],
    borderWidth: 1
  }]
};

const options = {
  scales: {
    x: {
      title:{
        display: true,
        text: 'Year'
      }
    },
    y: {
      title:{
        display: true,
        text: 'Dollars($)'
      }
    }
  },
  maintainAspectRatio: false
};

//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE= document.getElementById('difference-line');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
const chart = new Chart(ctxLINE, {
    type: 'line',
    data: linedata,
    options: options
  });