//Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = [
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
]; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['#98c1d9', '#27285C']; //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  datasets: [
    {
      label: 'Final',
      data: [
        268080000,
        193100000,
        111629000,
        283067000,
        412130000,
        52155000,
        62442000,
        149306000,
        82900000,
        443892000,
      ], //VALUE FOR EACH BAR
      backgroundColor: colors[0],
      borderColor: colors[0],
      borderWidth: 1,
    },
    {
      label: 'Original',
      data: [
        418080000,
        180740000,
        110270000,
        283067000,
        404241000,
        52155000,
        75000000,
        142835000,
        93100000,
        485509000,
      ], //DATA HERE
      backgroundColor: colors[1],
      borderColor: colors[1],
      borderWidth: 1,
    },
  ],
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            let val = value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            });
            return val;
          },
        },
        title: {
          display: true,
          text: 'Budget',
        },
      },
    ],
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem) {
        let val = tooltipItem.yLabel.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        });
        return val;
      },
    },
  },
  title: {
    display: true,
    text: 'Difference between budgeted and actual spending per year',
  },
  maintainAspectRatio: false,
};
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxBAR = document.getElementById('mchart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxBAR, {
  type: 'bar',
  data: data,
  options: options,
});

chart.canvas.style = 'max-height:500px';
chart.options.maintainAspectRatio = false;
chart.update();
