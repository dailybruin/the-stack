let data = {
  labels: ['Win Percentage', 'Conference Standing', 'NCAA Rank'],
  datasets: [
    {
      label: "Men's Basketball",
      backgroundColor: '#ADE68A4D',
      borderColor: '#ADE68A',
      pointBackgroundColor: '#ADE68A',
      data: [61.3, 275 / 3, 0],
    },
    {
      label: "Women's Basketball",
      backgroundColor: '#FAC24B4D',
      borderColor: '#FAC24B',
      pointBackgroundColor: '#FAC24B',
      data: [83.9, 275 / 3, 64],
    },
    {
      label: 'Gymnastics',
      backgroundColor: '#D884394D',
      borderColor: '#D88439',
      pointBackgroundColor: '#D88439',
      data: [76.9, 250 / 3, 92],
      hidden: true,
    },
    {
      label: 'Baseball',
      backgroundColor: '#4BBCFA4D',
      borderColor: '#4BBCFA',
      pointBackgroundColor: '#4BBCFA',
      data: [86.7, 100, 84],
    },
    {
      label: 'Softball',
      backgroundColor: '#8A74A54D',
      borderColor: '#8A74A5',
      pointBackgroundColor: '#8A74A5',
      data: [96.2, 100, 100],
    },
    {
      label: "Women's Water Polo",
      backgroundColor: '#4BE2CF4D',
      borderColor: '#4BE2CF',
      pointBackgroundColor: '#4BE2CF',
      data: [90.5, 100, 96],
      hidden: true,
    },
    {
      label: "Men's Volleyball",
      backgroundColor: '#C1AC764D',
      borderColor: '#C1AC76',
      pointBackgroundColor: '#C1AC76',
      data: [52.6, 200 / 3, 72],
      hidden: true,
    },
    {
      label: 'Beach Volleyball',
      backgroundColor: '#6896764D',
      borderColor: '#689676',
      pointBackgroundColor: '##689676',
      data: [86.7, 0, 92],
      hidden: true,
    },
    {
      label: "Men's Tennis",
      backgroundColor: '#E555554D',
      borderColor: '#E55555',
      pointBackgroundColor: '#E55555',
      data: [69.2, 275 / 3, 16],
      hidden: true,
    },
    {
      label: "Women's Tennis",
      backgroundColor: '#004F7A4D',
      borderColor: '#004F7A',
      pointBackgroundColor: '#004F7A',
      data: [92.3, 100, 72],
      hidden: true,
    },
    {
      label: 'Rowing',
      backgroundColor: '#D696A44D',
      borderColor: '#D696A4',
      pointBackgroundColor: '#D696A4',
      data: [100, 0, 24],
      hidden: true,
    },
    {
      label: 'Swim and Dive',
      backgroundColor: '#82BFBF4D',
      borderColor: '#82BFBF',
      pointBackgroundColor: '#82BFBF',
      data: [70, 0, 8],
      hidden: true,
    },
  ],
};

let realdata = [
  [61.3, 2, 'Unranked'],
  [83.9, 2, 10],
  [76.9, 3, 3],
  [86.7, 1, 5],
  [96.2, 1, 1],
  [90.5, 1, 2],
  [52.6, 5, 8],
  [86.7, 'N/A', 2],
  [69.2, 2, 22],
  [92.3, 1, 8],
  [100, 'N/A', 20],
  [70, 'N/A', 24],
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
        img.style.backgroundColor = data.datasets[i].backgroundColor;
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
