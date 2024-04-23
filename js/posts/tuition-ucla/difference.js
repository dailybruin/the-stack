Chart.defaults.font.family = 'PT Sans';

const linedata_difference = {
  labels: [
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
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
  ],
  datasets: [
    {
      data: [
        6947,
        7259,
        8034,
        8430,
        8667,
        8824,
        8340,
        7258,
        5647,
        4423,
        3805,
        3563,
        2914,
        3294,
        3727,
        3194,
        3966,
        4484,
        5251,
        6302,
        4912,
      ],
      backgroundColor: '#000000',
      borderColor: '#000000',
      borderWidth: 1,
    },
  ],
};

//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE_difference = document.getElementById('difference-line');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
const chart_difference = new Chart(ctxLINE_difference, {
  type: 'line',
  data: linedata_difference,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'U.S. Dollars',
        },
        ticks: {
          callback: function(value, index, values) {
            return '$' + value;
          },
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Acoss all UCs: Out-of-pocket cost',
        font: {
          size: 20, // You can change the font size here
        },
      },
      subtitle: {
        display: true,
        text:
          'The points were calculated by taking the difference between Cost of Attendance and Financial Aid, which results in the cost that students have to cover themselves.',
        // align: 'start', // Add this line
        font: {
          size: 15,
        },
        padding: {
          bottom: 20, // Add space above the subtitle
        },
      },
      legend: {
        display: false,
      },
    },
  },
});
