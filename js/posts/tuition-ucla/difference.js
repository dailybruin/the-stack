Chart.defaults.font.family = 'Noto Serif, serif'

const labels = ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022']

const colors = ['#000000']

const linedata = {
  labels: labels,
  datasets: [{
    label: 'Out-of-Pocket Cost',
    data: [6947, 7259,	8034,	8430,	8667,	8824,	8340,	7258,	5647,	4423,	3805,	3563,	2914,	3294,	3727,	3194,	3966,	4484,	5251,	6302,	4912],
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