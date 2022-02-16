// labels & colors used by both pie charts
const labels = [
  'B Plate',
  'Bruin Bowl',
  'Bruin Café',
  'De Neve',
  'Epicuria',
  'Rendezvous',
  'The Drey',
  'The Study at Hedrick',
];
const pieChartColors = [
  'rgb(132, 90, 109)',
  'rgb(28, 93, 153)',
  'rgb(152, 149, 114)',
  'rgb(255, 131, 17)',
  'rgb(255, 200, 87)',
  'rgb(130, 9, 51)',
  'rgb(88, 187, 131)',
  'rgb(149, 163, 179)',
];

// data used in both pie charts (in same order as labels)
let hoursOpen = [77, 40, 55, 73, 56, 56, 40, 92];

let swipesPerLocation = [
  111025,
  14579,
  34326,
  119835,
  91102,
  104091,
  11108,
  117463,
];
let scaledSwipesPerLocation = [];

let totalSwipes = 0;
let totalScaled = 0;

// calculate swipes scaled by hours open
for (let i = 0; i < swipesPerLocation.length; i++) {
  totalSwipes += swipesPerLocation[i];
  let scaledPoint = swipesPerLocation[i] / hoursOpen[i];
  totalScaled += scaledPoint;
  scaledSwipesPerLocation.push(scaledPoint);
}

// FIRST PIE CHART -- SWIPES PER DINING HALL

const swipesData = {
  labels: labels,
  datasets: [
    {
      label: 'Swipes',
      backgroundColor: pieChartColors,
      data: swipesPerLocation,
    },
  ],
};

const swipesOptions = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: '21-22 Total Meal Swipes',
      fontSize: 19,
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem, data) {
          let tooltipLabel = `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
          let tooltipPercentage = Math.round(
            (tooltipItem.parsed / totalSwipes) * 100
          );
          return `${tooltipLabel} swipes (${tooltipPercentage}%)`;
        },
      },
    },
  },
};

let ctxSwipesPie = document.getElementById('SwipesPieChart');
let swipesPieChart = new Chart(ctxSwipesPie, {
  type: 'pie',
  data: swipesData,
  options: swipesOptions,
});

// SECOND PIE CHART -- SWIPES PER DINING HALL SCALED BY HOURS OPEN

const scaledData = {
  labels: labels,
  datasets: [
    {
      label: 'Swipes',
      backgroundColor: pieChartColors,
      data: scaledSwipesPerLocation,
    },
  ],
};

const scaledOptions = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: '21-22 Meal Swipes per Hour',
      fontSize: 19,
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem, data) {
          let swipeValue = Math.round(tooltipItem.parsed).toLocaleString(
            'en-US',
            {
              style: 'decimal',
              maximumFractionDigits: 0,
            }
          );
          let tooltipLabel = `${tooltipItem.label}: ${swipeValue}`;
          let tooltipPercentage = Math.round(
            (tooltipItem.parsed / totalScaled) * 100
          );
          return `${tooltipLabel} swipes per hour (${tooltipPercentage}%)`;
        },
      },
    },
  },
};

let ctxScaledPie = document.getElementById('ScaledPieChart');
let scaledPieChart = new Chart(ctxScaledPie, {
  type: 'pie',
  data: scaledData,
  options: scaledOptions,
});
