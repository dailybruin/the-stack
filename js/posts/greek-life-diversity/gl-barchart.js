//Load and munge data, then make the visualization.
let greeklifeFileName =
  '../../../../datasets/greek-life-diversity/Demographics.csv';

let dropdownValue = 'Year';
 

const labels = [
  'White',
  'Asian',
  'Hispanic',
  'Two or more races ',
  'Black',
  'Unknown',
  'Pacific Islander',
  'American Indian',
 // 'International',
 // 'Transfer',
 // 'First Generation',
];

const YEARS = [
  'Average',
  '2016-2017',
  '2017-2018',
  '2018-2019',
  '2019-2020',
];

function loadCSVData(choice, chart) {
  
  d3.csv(greeklifeFileName).then(function(csv) {
    csv = csv.filter(function(row) {
      return row['Year'] == choice;
    });
    let greeklifeData = [
      csv[0]['White_GL'],
      csv[0]['Asian_GL'],
      csv[0]['Hispanic_GL'],
      csv[0]['Two_GL'],
      csv[0]['Black_GL'],
      csv[0]['Unknown_GL'],
      csv[0]['PacificIslander_GL'],
      csv[0]['AmericanIndian_GL'],
    //  csv[0]['International_GL'],
    //  csv[0]['Transfer_GL'],
    // csv[0]['FirstGeneration_GL'],
    ];
    let studentbodyData = [
        csv[0]['White_SB'],
        csv[0]['Asian_SB'],
        csv[0]['Hispanic_SB'],
        csv[0]['Two_SB'],
        csv[0]['Black_SB'],
        csv[0]['Unknown_SB'],
        csv[0]['PacificIslander_SB'],
        csv[0]['AmericanIndian_SB'],
       // csv[0]['International_SB'],
       // csv[0]['Transfer_SB'],
       // csv[0]['FirstGeneration_SB'],
    ];

    const NewChartdata = [
      {
        label: 'Greek Life',
        text: 'Greek Life',
        data: greeklifeData,
        backgroundColor: 'rgb(255, 200, 87)',
      },
      {
        label: 'Student Body',
        text: 'Student Body',
        data: studentbodyData,
        backgroundColor: 'rgb(114, 150, 108)',
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
      label: 'Greek Life',
      text: 'Greek Life',
      data: [
        .623,.0986,.1305,.08075,.0095,.02225,.003,.0015,//.021,.072,.099,
      ],
      backgroundColor: 'rgb(255, 200, 87)',
    },
    {
      label: 'Student Body',
      text: 'Student Body',
      data: [
        .2731,.277125,.2201,.0549,.03325,.022825,.002625,.00205,//.1143,.231,.275225,
      ],
      backgroundColor: 'rgb(114, 150, 108)',
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
            callback: function(value) {
              return value.toLocaleString('en-US', {
                style: 'percent',
                maximumFractionDigits: 2,
              }); // convert it to percentage
            },
          },
          scaleLabel: {
            display: true,
            labelString: 'Percentage of Population',
          },
          beginAtZero: true,
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Race',
          },
        },
      ],
    },
    title: {
      display: true,
      text: 'Greek Life and Student Body Diversity at UCLA',
      fontSize: 16,
    },

    animation: false,

    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
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
