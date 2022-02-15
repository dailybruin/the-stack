//variables to make and update the chart
let realCount = [];
let colors = [
  'rgb(132, 90, 109)',
  'rgb(28, 93, 153)',
  'rgb(152, 149, 114)',
  'rgb(255, 131, 17)',
  'rgb(255, 200, 87)',
  'rgb(130, 9, 51)',
  'rgb(113, 124, 137)',
  'rgb(149, 163, 179)',
];

let barChart;
const timeIntervals = [
  '6:00AM',
  '6:30AM',
  '7:00AM',
  '7:30AM',
  '8:00AM',
  '8:30AM',
  '9:00AM',
  '9:30AM',
  '10:00AM',
  '10:30AM',
  '11:00AM',
  '11:30AM',
  '12:00PM',
  '12:30PM',
  '1:00PM',
  '1:30PM',
  '2:00PM',
  '2:30PM',
  '3:00PM',
  '3:30PM',
  '4:00PM',
  '4:30PM',
  '5:00PM',
  '5:30PM',
  '6:00PM',
  '6:30PM',
  '7:00PM',
  '7:30PM',
  '8:00PM',
  '8:30PM',
  '9:00PM',
  '9:30PM',
  '10:00PM',
  '10:30PM',
  '11:00PM',
  '11:30PM',
  '12:00AM',
  '12:30AM',
  '1:00AM',
  '1:30AM',
  '2:00AM',
];

//Suggestion: You may need to set initial values for the chart to load properly
//let hallValue = 'All Options';
let dayValue = 'Monday';

// Real names of dining halls
let dining_halls = [
  'Bruin Café',
  'Bruin Bowl',
  'Bruin Plate',
  'De Neve',
  'Epicuria',
  'Rendezvous',
  'The Drey',
  'The Study at Hedrick',
];
//names of dining halls in the datasets
let halls = [
  'bcafe_',
  'HHDH-Bruin Bowl_',
  'bplate_',
  'deNeve_',
  'HHDH-Covel Dining_',
  'HHDH-Rendezvous_',
  'drey_',
  'theStudy_',
];
//Drop down to choose a day of the week
let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

//Makes Dropdown menus
//initDropdown(dining_halls, '#Dining-Hall')
initDropdown(days, '#Day');

//Code for init found at https://www.d3-graph-gallery.com/graph/line_select.html
function initDropdown(values, id) {
  d3.select(id)
    .selectAll('option')
    .data(values)
    .enter()
    .append('option')
    .text(function(d) {
      return d;
    }) // text showed in the menu
    .attr('value', function(d) {
      return d;
    }); // corresponding value returned by the button
}

//On Change Functions
//These are currently working, I suggest using them to set the path for the data to import
d3.select('#Day').on('change', function() {
  dayValue = d3.select(this).property('value');
  //My suggestion for moving forward:
  updateData(dayValue);
});

// d3.select('#Dining-Hall').on('change', function () {
//   hallValue = d3.select(this).property('value');
//   console.log(hallValue);
//   setPath(hallValue);
// })

//Possible starting value for the path
let path = '../../../../datasets/dining-halls/';

//I would use this function to set the path and the call a second function to update the chart
// function setPath(dayValue){
//   path = '../../../../datasets/dining-halls/'
//Maybe use a switch to choose the path, since the days of the week should display the same way they are listed
//it may be most efficient to have each case be a dining hall
// switch(hallValue){
//   case 'All Options':
//     path = `${path}`
//     break;
//   case 'The Study at Hedrick':
//     path = `${path}`
//     break;
//   case 'Bruin Café':
//     path = `${path}bcafe_`
//     break;
//   case 'Bruin Plate':
//     path = `${path}bplate_`
//     break;
//   case 'De Neve':
//     path = `${path}deNeve_`
//     break;
//   case 'The Drey':
//   //     path = `${path}drey_`
//   //     break;
//   //   case 'Bruin Bowl':
//   //     path = `${path}HHDH-Bruin Bowl_`
//   //     break;
//   //   case 'Epicuria':
//   //     path = `${path}HHDH-Covel Dining_`
//   //     break;
//   //   case 'Rendezvous':
//   //     path = `${path}HHDH-Rendezvous_`
//   //     break;
//   //     //don't forget a default in case someone chooses a file that you don't have
//   //   default:
//   //     path = `${path}bplate_Monday.csv`
//   //     break;
//   // }
//   console.log(path)
//   //Call a new function to update the chart
//   updateData(path);
// }

//Store the new data for the chart
let new_datasets;
/*set new data for the chart*/
function updateData(dayValue) {
  // reset new_datasets for each time the chart is changed
  new_datasets = [];

  //set the start path for import
  let reset_path = '/datasets/dining-halls/';

  //loop through each dining hall to load data
  for (let i = 0; i < dining_halls.length; ++i) {
    //set 0s for all data, to fill in no swipe parts
    let realCount = Array(48).fill(0);
    let hall = halls[i];
    //if the hall is closed on the weekend skip it
    if (dayValue == 'Saturday' || dayValue == 'Sunday') {
      if (hall === 'bcafe_' || hall === 'drey_' || hall == 'HHDH-Bruin Bowl_') {
        continue;
      }
    }
    //set data path
    path = reset_path + hall + dayValue + '.csv';
    // load data from path and then collect the data in realCount, then add to new datasets, call updateChart
    d3.csv(path)
      .then(function(csvData) {
        for (let i = 0; i < csvData.length; i++) {
          // let time = timeIntervals[csvData[i].IntervalCategory];
          // realTimes.push(time);
          let swipeCount = csvData[i].count / 4;
          if (swipeCount < 1) {
            swipeCount = 1;
          }
          if (csvData[i].IntervalCategory < 6) {
            realCount[parseInt(csvData[i].IntervalCategory) + 36] = parseInt(
              swipeCount
            );
          } else {
            realCount[csvData[i].IntervalCategory - 12] = parseInt(swipeCount);
          }
        }
      })
      .then(function() {
        new_datasets.push({
          data: realCount,
          label: dining_halls[i],
          backgroundColor: colors[i],
          borderColor: colors[i],
          borderSkipped: 'bottom',
          borderWidth: 2,
        });
      })
      .then(updateChart);
  }
}

/*push the data into the chart*/
function updateChart() {
  //set new data values
  let data = {
    labels: timeIntervals,
    datasets: new_datasets.sort((a, b) => (a.label > b.label ? 1 : -1)),
  };
  barChart.data = data;

  //set new chart options
  barChart.options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Average Semi-Hourly Swipe Usage',
        },
        max: 450,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Average Traffic Per Half Hour on ' + dayValue,
        font: {
          size: 19,
        },
      },
      tooltip:{
        callbacks:{
          label: function(tooltipItem){
            let label = tooltipItem.dataset.label;
            let value = tooltipItem.raw
            return `${label}: ${value} swipes`
          },
        }
      }
    },
    maintainAspectRatio: false,
    animation: false,
  };
  //update the chart
  barChart.update();
}

//initial options
let options = {
  scales: {
    y: {
      title: {
        display: true,
        text: 'Average Semi-Hourly Swipe Usage',
      },
      max: 450,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Average Traffic Per Half Hour on Monday',
      font: {
        size: 19,
      },
    },
    tooltips:{
      callbacks:{
        title: function(tooltipItem){
          //console.log(tooltipItem)
          return(tooltipItem.label)
        },
        label: function(tooltipItem){
          //console.log(tooltipItem)
        }
      }
      
    }
  },
  maintainAspectRatio: false,
  animation: false,
};

/*make a chart to start from*/
function makeChart() {
  let realCount = Array(24).fill(0);

  //dummy data to make a starter chart to be updated immediately
  let data = {
    labels: timeIntervals,
    datasets: [
      {
        data: realCount,
        label: 'Average Semi-Hourly Swipe Usage',
        backgroundColor: 'rgb(255,131,17)',
        borderColor: 'rgb(255,131,17)',
        borderSkipped: 'bottom',
        borderWidth: 2,
      },
    ],
  };

  //make the original chart to be updated as we go
  let ctx = document.getElementById('barChart');
  barChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
}
/*load first data */
makeChart();
updateData('Monday');
