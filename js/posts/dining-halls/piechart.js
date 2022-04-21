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
  'rgb(130, 9, 51)',
  'rgb(255, 131, 17)',
  'rgb(232, 107, 146)',
  'rgb(28, 93, 153)',
  'rgb(255, 200, 87)',
  'rgb(114, 150, 108)',
  'rgb(204, 147, 237)',
  'rgb(149, 163, 179)',
];

// data used in both pie charts (in same order as labels)
// let hoursOpen = [77, 40, 55, 73, 56, 56, 40, 92];

let swipesPerLocation = [
  109613,
  14390,
  34326,
  117999,
  89763,
  102823,
  11108,
  116627,
];
// let scaledSwipesPerLocation = [];

let totalSwipes = 0;
// let totalScaled = 0;

// calculate swipes scaled by hours open
for (let i = 0; i < swipesPerLocation.length; i++) {
  totalSwipes += swipesPerLocation[i];
  // let scaledPoint = swipesPerLocation[i] / hoursOpen[i];
  // totalScaled += scaledPoint;
  // scaledSwipesPerLocation.push(scaledPoint);
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
      text: 'Total Meal Swipes, Fall 2021 Weeks 0-3',
      fontSize: 19,
    },
    legend: {
      position: 'right',
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

// const scaledData = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Swipes',
//       backgroundColor: pieChartColors,
//       data: scaledSwipesPerLocation,
//     },
//   ],
// };

// const scaledOptions = {
//   maintainAspectRatio: false,
//   plugins: {
//     title: {
//       display: true,
//       text: 'Meal Swipes per Hour Open',
//       fontSize: 19,
//     },
//     tooltip: {
//       callbacks: {
//         label: function(tooltipItem, data) {
//           let swipeValue = Math.round(tooltipItem.parsed).toLocaleString(
//             'en-US',
//             {
//               style: 'decimal',
//               maximumFractionDigits: 0,
//             }
//           );
//           let tooltipLabel = `${tooltipItem.label}: ${swipeValue}`;
//           let tooltipPercentage = Math.round(
//             (tooltipItem.parsed / totalScaled) * 100
//           );
//           return `${tooltipLabel} swipes per hour (${tooltipPercentage}%)`;
//         },
//       },
//     },
//   },
// };

// let ctxScaledPie = document.getElementById('ScaledPieChart');
// let scaledPieChart = new Chart(ctxScaledPie, {
//   type: 'pie',
//   data: scaledData,
//   options: scaledOptions,
// });

if (window.matchMedia('(max-width: 480px)').matches) {
  swipesPieChart.options.plugins.legend.position = 'top';
  swipesPieChart.update();
}
