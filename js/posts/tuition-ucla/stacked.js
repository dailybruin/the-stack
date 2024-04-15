Chart.defaults.font.family = 'PT Sans';

const labels_stacked = [
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
]; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS

const colors_stacked = [
  '#c6e0f5',
  '#74befa',
  '#229cff',
  '#016ac5',
  '#014f9b',
  '#013470',
  '#ffca3a',
  '#ffffff',
  '#000000',
]; //CHANGE THESE TO WHAT MATCHES THE SUBJECT

const bardata_stacked = {
  labels: labels_stacked,
  datasets: [
    {
      label: 'Cal Grant',
      data: [
        955,
        1325,
        1593,
        1750,
        1725,
        1878,
        2092,
        2580,
        3399,
        4185,
        4424,
        4787,
        4988,
        5120,
        5205,
        5449,
        5368,
        5419,
        5292,
        5203,
        5210,
      ], //DATA HERE
      backgroundColor: colors_stacked[0],
    },
    {
      label: 'Pell Grant',
      data: [
        941,
        973,
        964,
        929,
        932,
        1042,
        1194,
        1643,
        1924,
        2011,
        2054,
        2143,
        2181,
        2189,
        2122,
        2235,
        2243,
        2202,
        2178,
        2138,
        2187,
      ], //DATA HERE
      backgroundColor: colors_stacked[1],
    },
    {
      label: 'UC Grant',
      data: [
        853,
        1253,
        1332,
        1578,
        1698,
        1788,
        1986,
        2360,
        3200,
        3711,
        3959,
        3916,
        4090,
        4056,
        4205,
        4469,
        4367,
        4332,
        4212,
        4735,
        4796,
      ], //DATA HERE
      backgroundColor: colors_stacked[2],
    },
    {
      label: 'UC Scholarships',
      data: [
        331,
        352,
        413,
        407,
        425,
        436,
        449,
        429,
        419,
        453,
        475,
        495,
        525,
        530,
        548,
        594,
        649,
        690,
        715,
        724,
        776,
      ], //DATA HERE
      backgroundColor: colors_stacked[3],
    },
    {
      label: 'CA Middle Class Scholarship',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        87,
        62,
        104,
        142,
        157,
        187,
        206,
        173,
        818,
      ], //DATA HERE
      backgroundColor: colors_stacked[4],
    },
    {
      label: 'Other Scholarships',
      data: [
        241,
        327,
        323,
        311,
        423,
        402,
        396,
        456,
        450,
        215,
        210,
        222,
        310,
        295,
        339,
        399,
        433,
        460,
        457,
        440,
        1100,
      ], //DATA HERE
      backgroundColor: colors_stacked[5],
    },
    {
      label: 'Total Loans (excl. PLUS)',
      data: [
        2042,
        2086,
        2136,
        2114,
        2116,
        2243,
        2547,
        2824,
        2928,
        3118,
        3067,
        2961,
        2829,
        2747,
        2659,
        2581,
        2453,
        2326,
        1537,
        1734,
        1760,
      ], //DATA HERE
      backgroundColor: colors_stacked[6],
    },
    {
      label: '',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //DATA HERE
      backgroundColor: colors_stacked[7],
    },
  ],
};

const linedata_stacked = {
  labels: labels_stacked,
  datasets: [
    {
      label: 'Cost of Attendance',
      data: [
        12310,
        13575,
        14795,
        15519,
        15986,
        16613,
        17004,
        17550,
        17967,
        18116,
        17994,
        18087,
        17924,
        18293,
        18909,
        19063,
        19636,
        20100,
        19848,
        21449,
        21559,
      ],
      backgroundColor: colors_stacked[7],
      borderColor: colors_stacked[8],
      borderWidth: 1,
      type: 'line',
    },
  ],
};

const options_stacked = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Year',
      },
    },
    y: {
      stacked: true,
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
  plugins: {
    title: {
      display: true,
      text: 'Across all UCs: Net cost of attendance & financial aid received',
      font: {
        size: 20, // You can change the font size here
      },
    },
    subtitle: {
      display: true,
      text: [
        'The bars depict the total amount of financial aid received per capita.',
        'The bars are broken down by the type of financial aid with the blue sections representing gift aid and the yellow sections representing loans.',
        'The line depicts the unadjusted net cost of attendance.',
      ],
      align: 'start', // Add this line
      font: {
        size: 15,
      },
      padding: {
        bottom: 20,
      },
    },
  },
  maintainAspectRatio: false,
};

//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxBAR_stacked = document.getElementById('fin-aid-stacked-bar');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
const chart_stacked = new Chart(ctxBAR_stacked, {
  type: 'bar',
  data: bardata_stacked,
  options: options_stacked,
});

chart_stacked.data.datasets.push(...linedata_stacked.datasets);
chart_stacked.update();
