Chart.defaults.font.family = 'Noto Serif, serif'  //FONT FOR CHART CHANGE IF NEEDED
const labels = ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022']; //THIS SHOULD BE A LIST OF WHAT YOU WANT ON THE X-AXIS
const colors = ['blue', 'yellow',"red", "pink", "purple","orange","cyan","green","teal"] //CHANGE THESE TO WHAT MATCHES THE SUBJECT
const data = {
  labels: labels,
  //DATA SETS IN A LIST. EACH OBJECT IN LIST IS A CATEGORY OF DATA CHANGE THESE OUT WITH YOUR DATA
  //IF YOU HAVE MORE DATA TO DISPLAY ADD ADDITIONAL {...}
  datasets: [{
    label: 'Cal Grant',
    data:[136843170,194727838,233673286,	258290579,	262206395,	292685868,	336023148,	423797092,	557320486,	683414743,	716043878,	774857166,	817868148,	838015481,	887015062,	949088953,	955170759,	977526079,	957004069,	952438383,	952947162], //VALUE FOR EACH POINT
    backgroundColor: colors[0],
    borderColor: colors[0],
    borderWidth: 1
  },{
    label: 'Pell Grant',
    data: [134854234,	142978612,	141426543,	137173785,	141579122,	162285117,	191760935,	269795220,	315436736,	328318910,	332427048,	346872310,	357609375,	358231611,	361613831,	389381889,	399011270,	397205713,	393813575,	391392977,	404162045], //DATA HERE
    backgroundColor: colors[1],
    borderColor: colors[1],
    borderWidth: 1
  },{
    label: 'UC Grant (All)',
    data: [122201410,184175412,	195409099,	232911604,	258095734,	278648986,	319028316,	387645614,	524730148,606081150,	640843343,	633924233,	670558032,	663761148,	716552281,	778396973,	777035688,	781513423,	761673259,	866678440,	886425919], //DATA HERE
    backgroundColor: colors[2],
    borderColor: colors[2],
    borderWidth: 1
  },{
    label: 'UC Grant (Need Based)',
    data: [119633650,	181243824,	192169338,	229781531,	254317694,	274587474,	314542105,	382573057,	519280609,	600790346,	631277740,	624473264,	660465247,	653057397,	709808231,	772728645,	772656655,	777064932,	759272749,	864455931,	882913122], //DATA HERE
    backgroundColor: colors[3],
    borderColor: colors[3],
    borderWidth: 1
  },{
    label: 'UC Scholarships',
    data: [47463117,	51716347,	60616020,	60141926,	64619141,	68009321,	72111176,	70468148,	68660358,	73915487,	76908711,	80084614,	86110484,	86802485,	93430764,	103417744,	115535039,	124544359,	129332584,	132584443,	143362677], //DATA HERE
    backgroundColor: colors[4],
    borderColor: colors[4],
    borderWidth: 1
  },{
    label: 'CA Middle Class Scholarships',
    data: [null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	null,	14258041,	10214146,	17645700,	24696343,	27996929,	33735243,	37265118,	31754303,	151124775,], //DATA HERE
    backgroundColor: colors[5],
    borderColor: colors[5],
    borderWidth: 1
  },{
    label: 'Other Scholarships',
    data: [34596000,	48042077,	47460598,	45920941,	64271906,	62600295,	63649169,	74822160,	73715240,	35081883,	33956255,	36012178,	50804234,	48338126,	57751372,	69438595,	77019613,	82894024,	82601412,	80595616,	203260241], //DATA HERE
    backgroundColor: colors[6],
    borderColor: colors[6],
    borderWidth: 1
  },{
    label: 'Total Gift Aid',
    data: [486980304,	633263832,	688807581,	746015669,	802556538,	876888953,	995271147,	1239659568,	1552443317,	1739889811,	1811090735,	1883384076,	1995229183,	2008303415,	2128493165,	2302640423,	2339615160,	2477684675,	2458798502,	2718127864,	2633639644], //DATA HERE
    backgroundColor: colors[7],
    borderColor: colors[7],
    borderWidth: 1
  },{
    label: 'Total Loans (excl. PLUS)',
    data: [292618859,	306650124,	313381615,	312030904,	321540348,	349474825,	409258274,	463844476,	480133372,	509089299,	496373205,	479356975,	463885438,	449580977,	453143620,	449640188,	436479922,	419583228,	277858790,	317484872,	325338768], //DATA HERE
    backgroundColor: colors[8],
    borderColor: colors[8],
    borderWidth: 1
  }]
};
//OPTIONS FOR THE DISPLAY OF THE CHART, FOR MORE OPTIONS GO TO CHART.JS
const options = {
    scales: {
      y: {
        beginAtZero: true,
        title:{
          display: true,
          text: 'Dollars($)'
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
    maintainAspectRatio: false,
  }
//THIS CODE MAKES THE CHART, MAKE SURE THE CTX VARIABLE DOES NOT MATCH ANY OTHER CTX VARIABLE
//CHANGE ID-HERE TO WHATEVER YOU MADE YOUR ID IN THE HTML FILE, CHOOSE SOMETHING DESCRIPTIVE
const ctxLINE= document.getElementById('fin_aid_line_chart');
//THE CHART VARIABLE NEEDS TO HAVE A UNIQUE NAME RENAME IT SOMETHING DESCRIPTIVE
//MAKE SURE ctxBAR MATCHES THE CONST VARIABLE YOU JUST SET
const chart = new Chart(ctxLINE, {
    type: 'line',
    data: data,
    options: options
  });