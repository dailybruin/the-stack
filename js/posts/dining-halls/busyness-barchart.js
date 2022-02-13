let currentPath = '../../../../datasets/dining-halls/Monday.csv';
d3.csv(currentPath).then(makeChart);
//console.log('../../../../datasets/dining-halls/theStudy_Sunday.csv');
console.log('accessed bar chart');

//variables to make and update the chart
let realTimes = [];
let realCount = [];
let colors = [
  'rgb(149, 163, 179)',
  'rgb(130, 9, 51)',
  'rgb(132, 90, 109)',
  'rgb(28, 93, 153)',
  'rgb(113, 124, 137)',
  'rgb(255, 131, 17)',
  'rgb(255, 200, 87)',
  'rgb(152, 149, 114)',
      ];
let barChart;
const timeIntervals = ["12:00AM", "12:30AM", "6:00AM", "6:30AM", "7:00AM", "7:30AM", "8:00AM", "8:30AM", "9:00AM", "9:30AM",
  "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM",  "3:00PM", 
  "3:30PM", "4:00PM", "4:30PM", "5:00PM", "5:30PM", "6:00PM", "6:30PM", "7:00PM", "7:30PM", "8:00PM", "8:30PM", "9:00PM", 
  "9:30PM", "10:00PM", "10:30PM", "11:00PM", "11:30PM"];

// console.log('accessed bar chart')

//Suggestion: You may need to set initial values for the chart to load properly
let hallValue = 'All Options';
let dayValue = 'Monday';


// Drop down to choose a dining hall
let dining_halls = [
  "All Options",
  "Bruin Café",
  "Bruin Bowl",
  "Bruin Plate",
  "De Neve",
  "Epicuria",
  "Rendezvous",
  "The Drey",
  "The Study at Hedrick"
]
//Drop down to choose a day of the week
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

// let choice = values[0];
// console.log(choice)
// console.log("New choice after button:")

//Makes Dropdown menus
initDropdown(dining_halls, '#Dining-Hall')
//initDropdown(days, "#Day")

//Code for init found at https://www.d3-graph-gallery.com/graph/line_select.html
function initDropdown(values, id) {
  d3
    .select(id)
    .selectAll('option')
    .data(values)
    .enter()
    .append('option')
    .text(function (d) {return d; }) // text showed in the menu
    .attr('value', function (d) {
      return d;
    }) // corresponding value returned by the button
    
}

//On Change Functions
//These are currently working, I suggest using them to set the path for the data to import
// d3.select('#Day').on('change', function(){
//   dayValue = d3.select(this).property('value');
//   console.log(dayValue);
//   //My suggestion for moving forward:
//   setPath(dayValue,hallValue);
// })

d3.select('#Dining-Hall').on('change', function () {
  hallValue = d3.select(this).property('value');
  console.log(hallValue);
  setPath(hallValue);
})

//Possible starting value for the path
let path = '../../../../datasets/dining-halls/'

//I would use this function to set the path and the call a second function to update the chart
function setPath(hallValue){
  path = '../../../../datasets/dining-halls/'
  //Maybe use a switch to choose the path, since the days of the week should display the same way they are listed
    //it may be most efficient to have each case be a dining hall
  switch(hallValue){
    case 'All Options':
      path = `${path}`
      break;
    case 'The Study at Hedrick': 
      path = `${path}`
      break;
    case 'Bruin Café':
      path = `${path}bcafe_`
      break;
    case 'Bruin Plate':
      path = `${path}bplate_`
      break;
    case 'De Neve':
      path = `${path}deNeve_`
      break;
    case 'The Drey':
      path = `${path}drey_`
      break;
    case 'Bruin Bowl':
      path = `${path}HHDH-Bruin Bowl_`
      break;
    case 'Epicuria':
      path = `${path}HHDH-Covel Dining_`
      break;
    case 'Rendezvous':
      path = `${path}HHDH-Rendezvous_`
      break;
      //don't forget a default in case someone chooses a file that you don't have
    default:
      path = `${path}bplate_Monday.csv`
      break;
  }
  console.log(path)
  //Call a new function to update the chart
  updateData(path);
}
let new_datasets;
function updateData(path){
  //find a way to update realValue, and realTimes, then update data
  //realTimes = [];
  new_datasets = []
  
  let reset_path = path;
  for (let i = 0; i< days.length; ++i){
    let realCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let day = days[i];
    path = reset_path + day + '.csv';
    d3.csv(path).then(function(csvData){
    for(let i = 0; i < csvData.length; i++){
      // let time = timeIntervals[csvData[i].IntervalCategory];
      // realTimes.push(time);
      let swipeCount = csvData[i].count/4;
      if(swipeCount < 1){
        swipeCount = 1;
      }
      if (csvData[i].IntervalCategory <3){
        realCount[csvData[i].IntervalCategory] = parseInt(swipeCount);
      }
      else{
      realCount[csvData[i].IntervalCategory-11] = parseInt(swipeCount);
      }
      //console.log(realCount)
    }
    }).then(function(){
      new_datasets.push({
        data: realCount,
        label: day,
        backgroundColor: colors[i],
        borderColor: colors[i],
        borderSkipped: 'bottom',
        borderWidth: 2,
      })
      console.log(new_datasets)
    }).then(updateChart)
  }
      

  

  // let maxSwipeCount = 0;
  // for(let i = 0; i < realCount.length; i++){
  //   if(realCount[i] >= maxSwipeCount){
  //     maxSwipeCount = realCount[i];
  //   }
  // }

  // colorGradient = [];
  // for(let i = 0; i < realCount.length; i++){
  //   let alpha = realCount[i]/maxSwipeCount;
  //   colorGradient.push(`rgba(255,131,17,${alpha})`);
  // }
  // let max = 450;
  // if (hallValue == 'All Options'){
  //   max = 1600;
  // }
  
  // barChart.update()
  //console.log(hallValue);
  //console.log(dayValue);
}
function updateChart(){
  let data={
    labels: timeIntervals,
    datasets: new_datasets
  };
  //console.log(data)
  let max = 450;
  if (hallValue == 'All Options'){
    max = 1600;
  }
  //Finally this is the syntax for updating data in chartJS
  barChart.data = data
  console.log(barChart.data)
  barChart.options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Average Semi-Hourly Swipe Usage',
        },
        max: max,
      },
    },
    plugins:{
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: ("Average Semi-Hourly Traffic at " + hallValue),
        font:{
          size : 19,
        },
      },
    },
    maintainAspectRatio: false,
    animation: false
  };
barChart.update()
}
function makeChart(csvData) {
  //console.log(csvData);
  let realCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  for(let i = 0; i < csvData.length; i++){
      // let time = timeIntervals[csvData[i].IntervalCategory];
      // realTimes.push(time);
      let swipeCount = csvData[i].count/4;
      if(swipeCount < 1){
        swipeCount = 1;
      }
      if (csvData[i].IntervalCategory <3){
        realCount[csvData[i].IntervalCategory] = parseInt(swipeCount);
      }
      else{
      realCount[csvData[i].IntervalCategory-11] = parseInt(swipeCount);
      }
  }

  // let maxSwipeCount = 0;
  // for(let i = 0; i < realCount.length; i++){
  //   if(realCount[i] >= maxSwipeCount){
  //     maxSwipeCount = realCount[i];
  //   }
  // }

  // for(let i = 0; i < realCount.length; i++){
  //   let alpha = realCount[i]/maxSwipeCount;
  //   colorGradient.push(`rgba(255,131,17,${alpha})`);
  // }

  console.log(realTimes);
  console.log(realCount);

  let data = {
    labels: timeIntervals,
    datasets: [
      {data: realCount,
        label: "Average Semi-Hourly Swipe Usage",
        backgroundColor: 'rgb(255,131,17)',
        borderColor: 'rgb(255,131,17)',
        borderSkipped: 'bottom',
        borderWidth: 2,
      }
    ],
  };

  let ctx = document.getElementById('barChart');
  barChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Average Semi-Hourly Swipe Usage',
          },
        },
      },
      plugins:{
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: ("Average Semi-Hourly Traffic at " + hallValue + " on " + dayValue),
          font:{
            size : 19,
          },
        },
      },
      maintainAspectRatio: false,
      animations: false,
    },
  });
}
setPath('All Options')