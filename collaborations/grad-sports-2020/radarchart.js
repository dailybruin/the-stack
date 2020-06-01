let data = {
  labels: ['NCAA Rank', 'Conference Standing', 'Win Percentage'],
  datasets: [
    {
      label: "Men's Basketball",
      backgroundColor: 'rgb(141,211,199, 0.3)',
      borderColor: 'rgb(141,211,199)',
      pointBackgroundColor: 'rgb(141,211,199)',
      data: [0, 275 / 3, 61.3],
    },
    {
      label: "Women's Basketball",
      backgroundColor: 'rgb(255,255,179, 0.3)',
      borderColor: 'rgb(255,255,179)',
      pointBackgroundColor: 'rgb(255,255,179)',
      data: [64, 275 / 3, 83.9],
    },
    {
      label: 'Gymnastics',
      backgroundColor: 'rgb(190,186,218, .3)',
      borderColor: 'rgb(190,186,218)',
      pointBackgroundColor: 'rgb(190,186,218)',
      data: [92, 250 / 3, 76.9],
      hidden: true,
    },
    {
      label: 'Baseball',
      backgroundColor: 'rgb(251,128,114, .3)',
      borderColor: 'rgb(251,128,114)',
      pointBackgroundColor: 'rgb(251,128,114)',
      data: [84, 100, 86.7],
    },
    {
      label: 'Softball',
      backgroundColor: 'rgb(128,177,211, .3)',
      borderColor: 'rgb(128,177,211)',
      pointBackgroundColor: 'rgb(128,177,211)',
      data: [100, 100, 96.2],
    },
    {
      label: "Women's Water Polo",
      backgroundColor: 'rgb(253,180,98, .3)',
      borderColor: 'rgb(253,180,98)',
      pointBackgroundColor: 'rgb(253,180,98)',
      data: [96, 100, 90.5],
      hidden: true,
    },
    {
      label: "Men's Volleyball",
      backgroundColor: 'rgb(179,222,105, .3)',
      borderColor: 'rgb(179,222,105)',
      pointBackgroundColor: 'rgb(179,222,105)',
      data: [72, 200 / 3, 52.6],
      hidden: true,
    },
    {
      label: 'Beach Volleyball',
      backgroundColor: 'rgb(252,205,229, .3)',
      borderColor: 'rgb(252,205,229)',
      pointBackgroundColor: 'rgb(252,205,229)',
      data: [96, 0, 86.7],
      hidden: true,
    },
    {
      label: "Men's Tennis",
      backgroundColor: 'rgb(217,217,217, .3)',
      borderColor: 'rgb(217,217,217)',
      pointBackgroundColor: 'rgb(217,217,217)',
      data: [16, 275 / 3, 69.2],
      hidden: true,
    },
    {
      label: "Women's Tennis",
      backgroundColor: 'rgb(188,128,189, .3)',
      borderColor: 'rgb(188,128,189)',
      pointBackgroundColor: 'rgb(188,128,189)',
      data: [72, 100, 92.3],
      hidden: true,
    },
    {
      label: 'Rowing',
      backgroundColor: 'rgb(204,235,197, .3)',
      borderColor: 'rgb(204,235,197)',
      pointBackgroundColor: 'rgb(204,235,197)',
      data: [24, 0, 100],
      hidden: true,
    },
    {
      label: 'Swim and Dive',
      backgroundColor: 'rgb(255,237,111, .3)',
      borderColor: 'rgb(255,237,111)',
      pointBackgroundColor: 'rgb(255,237,111)',
      data: [8, 0, 70],
      hidden: true,
    },
  ],
};

let realdata = [
  ['Unranked', 2, 61.3],
  [10, 2, 83.9],
  [3, 3, 76.9],
  [5, 1, 86.7],
  [1, 1, 96.2],
  [2, 1, 90.5],
  [8, 5, 52.6],
  [2, 'N/A', 86.7],
  [22, 2, 69.2],
  [8, 1, 92.3],
  [20, 'N/A', 100],
  [24, 'N/A', 70],
];

let numSeniors = [3, 2, 9, 4, 1, 4, 3, 3, 1, 1, 4, 5];
let showSeniorsBool = [
  true,
  true,
  false,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let teams = 12;

var originalOnClick = Chart.defaults.global.legend.onClick;

Chart.defaults.global.legend.onClick = function(e, legendItem) {
  let index = legendItem.datasetIndex;
  showSeniorsBool[index] = !showSeniorsBool[index];
  showSeniors();
  originalOnClick.call(this, e, legendItem);
};

var showSeniors = function() {
  let seniorsImg = document.getElementById('seniors');
  seniorsImg.innerHTML = '<div id="seniors"></div>';
  for (let i = 0; i < teams; i++) {
    if (showSeniorsBool[i]) {
      for (let j = 0; j < numSeniors[i]; j++) {
        let img = document.createElement('img');
        img.src = '../../../../collaborations/grad-sports-2020/person1.svg';
        img.className = 'senior';
        img.style.backgroundColor = data.datasets[i].pointBackgroundColor;
        seniorsImg.appendChild(img);
      }
    }
  }
};

let options = {
  scale: {
    ticks: {
      suggestedMin: 0,
      suggestedMax: 100,
      display: false,
    },
    pointLabels: {
      fontSize: 18,
    },
  },
  legend: {
    position: 'bottom',
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        let label = data.datasets[tooltipItem.datasetIndex].label;
        return (
          label + ': ' + realdata[tooltipItem.datasetIndex][tooltipItem.index]
        );
      },
    },
  },
  maintainAspectRatio: false,
};

let ctx = document.getElementById('radarchart');
var barchart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: options,
});

showSeniors();
