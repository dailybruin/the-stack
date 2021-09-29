// Load and munge data, then make the visualization.
let precovidFileName =
  '../../../../datasets/online-grade-distributions/Fall_data.csv';

let dropdownValue = 'All Classes';

d3
  .csv('/datasets/online-grade-distributions/Fall_data.csv', function (d) {
    return { CLASS: d.CLASS };
  })
  .then(function (data) {
    initDropdown(data);
  });

function initDropdown(classNames) {
  d3
    .select('#dropdown-menu')
    .on('change', function () {
      dropdownValue = d3.select(this).property('value');
      let choice = $('#dropdown-menu option:selected').text();
      loadCSVData(choice, MainChart);
    })
    .selectAll('option')
    .data(classNames)
    .enter()
    .append('option')
    .attr('value', function (d) {
      return d.CLASS;
    })
    .text(function (d) {
      return d.CLASS;
    });
}

const labels = [
  'A+',
  'A',
  'A-',
  'B+',
  'B',
  'B-',
  'C+',
  'C',
  'C-',
  'D+',
  'D',
  'D-',
  'F',
];

function loadCSVData(choice, chart) {
  //return new Promise(resolve => {
  d3.csv(precovidFileName).then(function (csv) {
    csv = csv.filter(function (row) {
      return row['CLASS'] == choice;
    });
    let precovidData = [
      csv[0]['A+_x'],
      csv[0]['A_x'],
      csv[0]['A-_x'],
      csv[0]['B+_x'],
      csv[0]['B_x'],
      csv[0]['B-_x'],
      csv[0]['C+_x'],
      csv[0]['C_x'],
      csv[0]['C-_x'],
      csv[0]['D+_x'],
      csv[0]['D_x'],
      csv[0]['D-_x'],
      csv[0]['F_x'],
    ];
    let postcovidData = [
      csv[0]['A+_y'],
      csv[0]['A_y'],
      csv[0]['A-_y'],
      csv[0]['B+_y'],
      csv[0]['B_y'],
      csv[0]['B-_y'],
      csv[0]['C+_y'],
      csv[0]['C_y'],
      csv[0]['C-_y'],
      csv[0]['D+_y'],
      csv[0]['D_y'],
      csv[0]['D-_y'],
      csv[0]['F_y'],
    ];
    const NewChartdata = [
      {
        label: 'Fall 2019 (In-Person)',
        text: 'Fall 2019',
        data: precovidData,
        backgroundColor: '#B5BAF2',
      },
      {
        label: 'Fall 2020 (Remote)',
        text: 'Fall 2020',
        data: postcovidData,
        backgroundColor: '#FFE589',
      },
    ];
    chart.data.datasets = NewChartdata;
    chart.update();
  });
}

const Chartdata = {
  labels: labels,
  datasets: [
    {
      label: 'Fall 2019 (In-Person)',
      text: 'Fall 2019',
      data: [
        0.10309517,
        0.35152027,
        0.1702966,
        0.12183674,
        0.10739977,
        0.04862543,
        0.03022326,
        0.03110901,
        0.01371677,
        0.00432116,
        0.00677147,
        0.00206124,
        0.0090231,
      ],
      backgroundColor: '#B5BAF2',
    },
    {
      label: 'Fall 2020 (Remote)',
      text: 'Fall 2020',
      data: [
        0.16148227,
        0.45117517,
        0.14633401,
        0.09202175,
        0.0709398,
        0.02804866,
        0.01419788,
        0.01627219,
        0.00614856,
        0.00228092,
        0.00309081,
        0.00103302,
        0.00697498,
      ],
      backgroundColor: '#FFE589',
    },
  ],
};

var ctxMain = document.getElementById('main-chart').getContext('2d');
var MainChart = new Chart(ctxMain, {
  type: 'bar',
  data: Chartdata,
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 1,
            callback: function (value) {
              return value.toLocaleString('en-US', {
                style: 'percent',
                maximumFractionDigits: 2,
              }); // convert it to percentage
            },
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage of Grades',
          },
          beginAtZero: true,
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Letter Grade',
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Grade Distributions for In-Person vs. Remote Classes',
      fontSize: 16,
    },

    animation: false,

    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].text;
          var value = tooltipItem.yLabel.toLocaleString('en-US', {
            style: 'percent',
            maximumFractionDigits: 2,
          });
          return label + ': ' + value;
        },
      },
    },
  },
});

if (window.matchMedia('(max-width: 480px)').matches) {
  MainChart.canvas.style = 'max-height:600px';
  MainChart.options.maintainAspectRatio = false;
  MainChart.update();
}
