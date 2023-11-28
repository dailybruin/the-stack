Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED

const labels = ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'] //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS

const colors = ['#ffebd2', '#ffd6a5', '#e89c81', '#d1625c', '#de9399', '#eac4d5', '#d6eadf', '#b8e0d4', '#809bce', '#60759b', '#ffffff', '#000000'] //CHANGE THESE TO WHAT MATCHES THE SUBJECT

const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [{
    label: 'Berkeley',
    data: [20499,	21958,	23495,	24156,	23877,	23368,	23290,	24853,	25656,	25862,	25398,	24199, 23603,	24817,	26571,	26734,	26507,	26451,	26547,	26158,	24131], //DATA HERE
    backgroundColor: colors[1],
    borderColor: colors[1],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Davis',
    data: [20979,	22754,	24900,	24730,	24040,	23317,	23241,	23997,	24368,	24393,	24251,	24595,	23815,	23713,	23626,	22493,	21750,	22224,	22209,	22334,	21648], //DATA HERE
    backgroundColor: colors[2],
    borderColor: colors[2],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Irvine',
    data: [21537,	22262,	24348,	24820,	24672,	25411,	25195,	25868,	25851,	24962,	23321,	22441,	21980,	21680,	21334,	21768,	22341,	21611,	18654,	20657,	19403], //DATA HERE
    backgroundColor: colors[3],
    borderColor: colors[3],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Los Angeles',
    data: [21489,	23093,	23037,	23319,	24241,	23720,	23354,	25848,	26047,	25899,	25117,	24687,	23574,	23645,	24323,	24014,	23958,	23781,	22090,	25033,	23164], //DATA HERE
    backgroundColor: colors[4],
    borderColor: colors[4],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Merced',
    data: [null, null, null,	24405,	22556,	21108,	20838,	20923,	20944,	20248,	19339,	19191,	18641,	18447,	18073,	16512,	16278,	15668,	14120,	15820,	15938], //DATA HERE
    backgroundColor: colors[5],
    borderColor: colors[5],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Riverside',
    data: [18433,	20290,	22080,	23090,	21742,	23109,	22018,	22256,	22162,	21043,	20385,	20705,	20105,	20658,	20706,	19527,	19385,	19027,	19239,	19583,	18598], //DATA HERE
    backgroundColor: colors[6],
    borderColor: colors[6],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'San Diego',
    data: [21666,	22910,	23906,	23674,	23744,	24356,	24074,	24045,	24320,	23631,	23413,	23452,	23471,	23964,	23907,	23081,	23334,	22949,	22165,	23043,	20446], //DATA HERE
    backgroundColor: colors[7],
    borderColor: colors[7],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Santa Barbara',
    data: [22799,	25161,	27033,	27158,	26979,	27499,	27267,	28077,	27985,	26370,	26308,	27061,	25639,	25703,	26317,	25989,	25209,	25174,	25366,	25351,	23640], //DATA HERE
    backgroundColor: colors[8],
    borderColor: colors[8],
    pointBorderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Santa Cruz',
    data: [23771,	25636, 26405,	26650,	26534, 27402,	26989,	27806,	28291,	28084,	26064,	25680,	25822,	25776,	26366,	26430,	26041,	27185,	27817,	25880,	24236], //DATA HERE
    backgroundColor: colors[9],
    borderColor: colors[9],
    pointBorderColor: colors[11],
    borderWidth: 1
  }]
};

const data2 = {
  labels: labels,
  datasets: [{
    label: 'Not adjusted for inflation',
    data:[12310,	13575,	14795,	15519,	15986,	16613,	17004,	17550,	17967,	18116,	17994,	18087,	17924,	18293,	18909,	19063,	19636,	20100,	19848,	21449,	21559],
    backgroundColor: colors[10],
    borderColor: colors[11],
    borderWidth: 1
  },{
    label: 'Inflation adjusted',
    data:[21348, 22927,	24313, 24592, 24410,  24571,	24253, 25188,	25384, 24843,	24117,	23897,	23285, 23501,	23843,	23368,	23172, 23040, 22359, 23071, 21559],
    backgroundColor: colors[10],
    borderColor: colors[11],
    borderDash: [5, 5],
    borderWidth: 1
  }]
};

//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
    scales: {
      y: {
        beginAtZero: false,
        max: 29000,
        title:{
          display: true,
          text: 'Dollars ($)'
      }
      },
      x: {
        beginAtZero: false,
        title:{
          display: true,
          text: 'Year'
      }
      }
    },
    maintainAspectRatio: false
  }

  const options2 = {
    scales: {
      y: {
        beginAtZero: false,
        title:{
          display: true,
          text: 'Dollars ($)'
      }
      },
      x: {
        beginAtZero: false,
        title:{
          display: true,
          text: 'Year'
      }
      }
    },
    maintainAspectRatio: false
  }

//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE= document.getElementById('net-cost-by-campus-line-chart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxLINE, {
    type: 'line',
    data: data,
    options: options
  });

const ctxLINE2= document.getElementById('net-cost-for-all-ucs-line-chart');
const chart2 = new Chart(ctxLINE2, {
    type: 'line',
    data: data2,
    options: options2
  });