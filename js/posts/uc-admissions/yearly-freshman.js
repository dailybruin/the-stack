let YearLabels = [
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
];
let schools = [
  'Los Angeles',
  'Berkeley',
  'Davis',
  'Irvine',
  'Merced',
  'Riverside',
  'San Diego',
  'Santa Barbara',
  'Santa Cruz',
];
let Berkeley = [
  50374,
  52982,
  61717,
  67706,
  73785,
  78893,
  82560,
  85045,
  87398,
  88064,
  89609,
  112835,
  128192,
];
let Davis = [
  43313,
  46215,
  49820,
  55894,
  60543,
  64602,
  68550,
  70955,
  76903,
  78024,
  78093,
  87136,
  94725,
];
let Irvine = [
  45736,
  49283,
  56515,
  60702,
  66515,
  71775,
  77810,
  85092,
  95059,
  95565,
  97938,
  107943,
  119165,
];
let LosAngeles = [
  57658,
  61556,
  72676,
  80505,
  86537,
  92690,
  97112,
  102226,
  108870,
  111321,
  113755,
  139482,
  149779,
];
let Merced = [
  14056,
  15208,
  15883,
  16268,
  18862,
  20888,
  22576,
  22902,
  25131,
  25424,
  25923,
  26043,
  27793,
];
let Riverside = [
  26480,
  28099,
  30391,
  34810,
  36097,
  38511,
  42633,
  43672,
  49079,
  49442,
  49516,
  52677,
  54365,
];
let SanDiego = [
  48098,
  53449,
  60832,
  67391,
  73448,
  78061,
  84206,
  88448,
  97898,
  99124,
  100062,
  118383,
  131226,
];
let SantaBarbara = [
  46727,
  49664,
  55258,
  62425,
  66816,
  70536,
  77107,
  81824,
  90961,
  92306,
  93446,
  105631,
  110991,
];
let SantaCruz = [
  27645,
  28230,
  33137,
  38636,
  40727,
  45532,
  49180,
  52969,
  55068,
  55865,
  56625,
  61805,
  65866,
];
let DataNames = [
  LosAngeles,
  Berkeley,
  Davis,
  Irvine,
  Merced,
  Riverside,
  SanDiego,
  SantaBarbara,
  SantaCruz,
];
let colors = [
  '#3284BF',
  '#041E42',
  '#B3A369',
  '#FFD200',
  '#0091B3',
  '#add8e6',
  '#C69214',
  '#f29813',
  '#004D9F',
];

let UCdata = [];
for (let i = 0; i < schools.length; ++i) {
chartdata = {
  label: schools[i],
  fill: false,
  data: DataNames[i],
  backgroundColor: colors[i],
  borderColor: colors[i],
  borderWidth: 1,
  hidden: DataNames[i] != LosAngeles,
  lineTension: 0,
};
UCdata.push(chartdata);
}

var ctxYEAR = document.getElementById('CAMPUS_Line_Chart');
var CAMPUS_Line_Chart = new Chart(ctxYEAR, {
type: 'line',
data: {
  labels: YearLabels,
  datasets: UCdata,
},
options: {
  title: {
    display: true,
    text: 'Number of Freshman Applications at Each UC Campus',
  },
  scales: {
    yAxes: [
      {        
        scaleLabel: {
          display: true,
          labelString: 'Number of Freshman Applicants',
        },
      },
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Year',
        },
      },
    ],
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        var value = tooltipItem.yLabel.toLocaleString('en-US');
        var label = data.datasets[tooltipItem.datasetIndex].label;
        return label + ' : ' + value;
      },
    },
  },
  animation: false,
},
});



