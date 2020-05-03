/* 
HTML CODE NEEDED

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>

<canvas id='barchart1'></canvas>
<canvas id='barchart2'></canvas>

*/

Chart.plugins.unregister(ChartDataLabels);

let feeNames = [
  'Membership Fee',
  'ENTERTAINMENT FEES (CEC/CAC)',
  'Academic Affairs Commission',
  'Community Service Commission',
  'Student Wellness Commission',
  'External VP',
  'USAC PROG FEES',
  'USAC CSC MINI FUND FEES',
  'CRC FEES',
  'STUDENT INITIATED ACCESS',
  'UCSA CONTRIBUTION',
  'UCSA & USSA TRAVEL',
  'THE GREEN INITIATIVE FUND',
  'SREC/CPO Fee',
  'Bruin Bash Fee',
  'CAC Arts Restoring Community Fee',
  '#UCLAWellness Initiative: Contingency',
  '#UCLAWellness Initiative: SWC',
  '#UCLAWellness Initiative: CEC',
  '#UCLAWellness Initiative: CSC',
  '#UCLAWellness Initiative: CAPS',
  'Social Justice: Community Activities Committee',
  'Social Justice: CRC',
  'Social Justice: SIOC',
  'Social Justice: AAC Travel Mini Fund',
  'Social Justice: Student Justice Campus',
  'Social Justice: CPO Food Closet',
  'Social Justice: LBGT',
  'Social Justice: Cultural & Spiritual Student Prog Fund',
  'Social Justice: Students with Dependent Child Care Ser. Fd.',
  'Social Justice: AAP',
  'Social Justice: 24 hr Wooden',
];

let data = {
  labels: feeNames,
  datasets: [
    {
      label: 'Expenses',
      backgroundColor: '#587ebf',
      data: [
        862655.42,
        339244.49,
        36784.72,
        155488.02,
        73515.92,
        125393.06,
        154182.67,
        65900.25,
        943718.84,
        774541.05,
        89168.07,
        17139.8,
        195807.41,
        359595.94,
        93184.66,
        93465.01,
        238363.54,
        145726.4,
        112404.33,
        189675.04,
        442896.7,
        472512.35,
        425841.89,
        425841.89,
        24437.24,
        52770.61,
        52770.61,
        26336.59,
        26336.59,
        84190.67,
        212001.69,
        185567.66,
      ],
    },
    {
      label: 'Available',
      backgroundColor: '#f95d6a',
      data: [
        95521.96,
        11939.45,
        8320.28,
        14653.69,
        39246.58,
        138.97,
        26237.33,
        23984.0,
        24693.88,
        40830.06,
        -1664.37,
        0.1,
        129449.12,
        90884.09,
        420.0,
        18696.09,
        76351.46,
        5604.83,
        3426.9,
        110987.41,
        29634.8,
        16820.27,
        15187.51,
        15187.51,
        2864.58,
        1833.03,
        1833.03,
        965.23,
        965.23,
        2965.14,
        7462.94,
        6595.15,
      ],
    },
  ],
};

let options = {
  title: {
    display: true,
    text: 'Student Fees: Expenses & Available Money',
  },
  scales: {
    xAxes: [
      {
        ticks: {
          min: 0,
          callback: function(value) {
            return value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            });
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Amount',
        },
        stacked: true,
      },
    ],
    yAxes: [
      {
        ticks: {
          autoSkip: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Student Fee',
        },
        stacked: true,
      },
    ],
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';
        if (label) {
          label += ': ';
        }
        label += tooltipItem.xLabel.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        });
        return label;
      },
    },
  },
};

let ctx = document.getElementById('barchart1');
var barchart = new Chart(ctx, {
  type: 'horizontalBar',
  data: data,
  options: options,
});

/////   2nd bar chart

let feeNames2 = [
  'THE GREEN INITIATIVE FUND',
  '#UCLAWellness Initiative: CSC',
  'Student Wellness Commission',
  'USAC CSC MINI FUND FEES',
  '#UCLAWellness Initiative: Contingency',
  'SREC/CPO Fee',
  'Academic Affairs Commission',
  'CAC Arts Restoring Community Fee',
  'USAC PROG FEES',
];

let data2 = {
  labels: feeNames2,
  percents: ['60', '63', '65', '73', '76', '80', '82', '83', '85'],
  datasets: [
    {
      label: 'Expenses',
      backgroundColor: '#587ebf',
      data: [
        195807.41,
        189675.04,
        73515.92,
        65900.25,
        238363.54,
        359595.94,
        36784.72,
        93465.01,
        154182.67,
      ],
      datalabels: {
        labels: {
          title: null,
        },
      },
    },
    {
      label: 'Available',
      backgroundColor: '#f95d6a',
      data: [
        129449.12,
        110987.41,
        39246.58,
        23984.0,
        76351.46,
        90884.09,
        8320.28,
        18696.09,
        26237.33,
      ],
    },
  ],
};

let options2 = {
  title: {
    display: true,
    text: 'Funds using under 90% of allocated money',
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          callback: function(value) {
            return value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
            });
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Amount',
        },
        stacked: true,
      },
    ],
    xAxes: [
      {
        ticks: {
          autoSkip: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'Student Fee',
        },
        stacked: true,
      },
    ],
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';
        if (label) {
          label += ': ';
        }
        label += tooltipItem.yLabel.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        });
        return label;
      },
    },
  },
  plugins: {
    datalabels: {
      align: 'end',
      anchor: 'end',
      formatter: function(value, context) {
        return context.chart.data.percents[context.dataIndex] + '% used';
      },
    },
  },
};

let ctx2 = document.getElementById('barchart2');
var barchart2 = new Chart(ctx2, {
  type: 'bar',
  data: data2,
  plugins: [ChartDataLabels],
  options: options2,
});
