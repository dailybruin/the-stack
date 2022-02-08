let currentPath = '../../../../datasets/dining-halls/bcafe_Monday.csv';
d3.csv(currentPath).then(makeChart);
//console.log('../../../../datasets/dining-halls/theStudy_Sunday.csv');
console.log('accessed bar chart');

//variables to make and update the chart
let realTimes = [];
let realCount = [];
let colorGradient = [];
let barChart;
const timeIntervals = ["12:00AM", "12:30AM", "1:00AM", "1:30AM", "2:00AM", "2:30AM", "3:00AM", "3:30AM", "4:00AM", 
  "4:30AM", "5:00AM", "5:30AM", "6:00AM", "6:30AM", "7:00AM", "7:30AM", "8:00AM", "8:30AM", "9:00AM", "9:30AM",
  "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM", "1:30PM", "2:00PM", "2:30PM",  "3:00PM", 
  "3:30PM", "4:00PM", "4:30PM", "5:00PM", "5:30PM", "6:00PM", "6:30PM", "7:00PM", "7:30PM", "8:00PM", "8:30PM", "9:00PM", 
  "9:30PM", "10:00PM", "10:30PM", "11:00PM", "11:30PM"];

// console.log('accessed bar chart')

//Suggestion: You may need to set initial values for the chart to load properly
let hallValue = 'Bruin Café';
let dayValue = 'Monday';


// Drop down to choose a dining hall
let dining_halls = [
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
initDropdown(days, "#Day")

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
d3.select('#Day').on('change', function(){
  dayValue = d3.select(this).property('value');
  console.log(dayValue);
  //My suggestion for moving forward:
  setPath(dayValue,hallValue);
})

d3.select('#Dining-Hall').on('change', function () {
  hallValue = d3.select(this).property('value');
  console.log(hallValue);
  setPath(dayValue, hallValue);
})

//Possible starting value for the path
let path = '../../../../datasets/dining-halls/'

//I would use this function to set the path and the call a second function to update the chart
function setPath(dayValue, hallValue){
  path = '../../../../datasets/dining-halls/'
  //Maybe use a switch to choose the path, since the days of the week should display the same way they are listed
    //it may be most efficient to have each case be a dining hall
  switch(hallValue){
    case 'The Study at Hedrick': 
      path = `${path}theStudy_${dayValue}.csv`
      break;
    case 'Bruin Café':
      path = `${path}bcafe_${dayValue}.csv`
      break;
    case 'Bruin Plate':
      path = `${path}bplate_${dayValue}.csv`
      break;
    case 'De Neve':
      path = `${path}deNeve_${dayValue}.csv`
      break;
    case 'The Drey':
      path = `${path}drey_${dayValue}.csv`
      break;
    case 'Bruin Bowl':
      path = `${path}HHDH-Bruin Bowl_${dayValue}.csv`
      break;
    case 'Epicuria':
      path = `${path}HHDH-Covel Dining_${dayValue}.csv`
      break;
    case 'Rendezvous':
      path = `${path}HHDH-Rendezvous_${dayValue}.csv`
      break;
      //don't forget a default in case someone chooses a file that you don't have
    default:
      path = `${path}bplate_Monday.csv`
      break;
  }
  console.log(path)
  //Call a new function to update the chart
  d3.csv(path).then(updateData);
}

function updateData(csvData){
  //find a way to update realValue, and realTimes, then update data
  realTimes = [];
  realCount = [];
  for(let i = 0; i < csvData.length; i++){
    let time = timeIntervals[csvData[i].IntervalCategory];
    realTimes.push(time);
    let swipeCount = csvData[i].count/4;
    if(swipeCount < 1){
      swipeCount = 1;
    }
    realCount.push(parseInt(swipeCount));
  }

  let maxSwipeCount = 0;
  for(let i = 0; i < realCount.length; i++){
    if(realCount[i] >= maxSwipeCount){
      maxSwipeCount = realCount[i];
    }
  }

  colorGradient = [];
  for(let i = 0; i < realCount.length; i++){
    let alpha = realCount[i]/maxSwipeCount;
    colorGradient.push(`rgba(42,60,106,${alpha})`);
  }

  let data = {
    labels: realTimes,
    datasets: [
      {data: realCount,
        label: "Average Semi-Hourly Swipe Usage",
        backgroundColor: colorGradient,
        borderColor: 'rgb(42,60,106)',
        borderSkipped: 'bottom',
        borderWidth: 2,
      }
    ],
  };
  //Finally this is the syntax for updating data in chartJS
  barChart.data = data
  barChart.options = {
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
    scales: {
      y: {
        title: {
          display: true,
          text: 'Average Semi-Hourly Swipe Usage',
        },
      },
    },
  };
  barChart.update()
  //console.log(hallValue);
  //console.log(dayValue);
}

function makeChart(csvData) {
  //console.log(csvData);

  for(let i = 0; i < csvData.length; i++){
      let time = timeIntervals[csvData[i].IntervalCategory];
      realTimes.push(time);
      let swipeCount = csvData[i].count/4;
      if(swipeCount < 1){
        swipeCount = 1;
      }
      realCount.push(parseInt(swipeCount));
  }

  let maxSwipeCount = 0;
  for(let i = 0; i < realCount.length; i++){
    if(realCount[i] >= maxSwipeCount){
      maxSwipeCount = realCount[i];
    }
  }

  for(let i = 0; i < realCount.length; i++){
    let alpha = realCount[i]/maxSwipeCount;
    colorGradient.push(`rgba(42,60,106,${alpha})`);
  }

  console.log(realTimes);
  console.log(realCount);

  let data = {
    labels: realTimes,
    datasets: [
      {data: realCount,
        label: "Average Semi-Hourly Swipe Usage",
        backgroundColor: colorGradient,
        borderColor: 'rgb(42,60,106)',
        borderSkipped: 'bottom',
        borderWidth: 2,
      }
    ],
  };

  let ctx = document.getElementById('barChart');
  barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
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
      scales: {
        y: {
          title: {
            display: true,
            text: 'Average Semi-Hourly Swipe Usage',
          },
        },
      },
    },
  });
}