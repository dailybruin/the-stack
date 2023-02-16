const xlabels = ['2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22'];
const EAPdata = {
  labels: xlabels,
  datasets: [
    {
      label: 'United Kingdom',
      data: [85, 149, 170, 211, 293, 351, 387, 309, 298, 304, 64, 149, 148],
      borderColor: 'rgba(64, 36, 131, 1)',
      backgroundColor: 'rgba(64, 36, 131, 0.5)',
    },
    {
      label: 'Italy',
      data: [60, 49, 54, 68, 95, 115, 113, 72, 100, 116, 58, 107, 107],
      borderColor: 'rgba(121, 161, 228, 1)',
      backgroundColor: 'rgba(121, 161, 228, 0.5)',
    },
    {
      label: 'Spain',
      data: [49, 45, 31, 39, 65, 83, 78, 87, 123, 126, 59, 88, 75],
      borderColor: 'rgba(188, 210, 88, 1)',
      backgroundColor: 'rgba(188, 210, 88, 0.5)',
    },
    {
      label: 'France',
      data: [42, 48, 41, 37, 60, 57, 99, 69, 71, 69, 56, 76, 69],
      borderColor: 'rgba(248, 212, 93, 1)',
      backgroundColor: 'rgba(248, 212, 93, 0.5)',
    },
    {
      label: 'South Korea',
      data: [52, 56, 31, 31, 34, 56, 51, 67, 67, 71, 26, 105, 89],
      borderColor: 'rgba(222, 131, 99, 1)',
      backgroundColor: 'rgba(222, 131, 99, 0.5)',
    },
  ]
};
const TSdata = {
  labels: xlabels,
  datasets: [
    {
      label: 'France',
      data: [289, 174, 224, 210, 184, 212, 230, 218, 197, 179, 0, 0, 129],
      borderColor: 'rgba(64, 36, 131, 1)',
      backgroundColor: 'rgba(64, 36, 131, 0.5)',
    },
    {
      label: 'United Kingdom',
      data: [199, 144, 164, 122, 136, 134, 143, 103, 107, 98, 0, 0, 0],
      borderColor: 'rgba(121, 161, 228, 1)',
      backgroundColor: 'rgba(121, 161, 228, 0.5)',
    },
    {
      label: 'Spain',
      data: [91, 109, 124, 117, 105, 0, 105, 106, 106, 135, 0, 0, 153],
      borderColor: 'rgba(188, 210, 88, 1)',
      backgroundColor: 'rgba(188, 210, 88, 0.5)',
    },
    {
      label: 'Belgium',
      data: [153, 64, 66, 90, 63, 89, 96, 60, 94, 74, 0, 0, 0],
      borderColor: 'rgba(248, 212, 93, 1)',
      backgroundColor: 'rgba(248, 212, 93, 0.5)',
    },
    {
      label: 'Netherlands',
      data: [122, 64, 66, 62, 63, 65, 70, 60, 68, 74, 0, 0, 24],
      borderColor: 'rgba(222, 131, 99, 1)',
      backgroundColor: 'rgba(222, 131, 99, 0.5)',
    },
  ]
};

const cttt = document.getElementById('topDestinations');
const topDestinations = new Chart(cttt, {
  type: 'line',
  data: EAPdata,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Top 5 UCEAP Destinations',
        font: {
          size: 22
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.formattedValue}`
          }
        }
      }
    },
    scales: {
      x: {
        title:{
          text: "Year",
          display: true
        }
      },    
      y: {
        title: {
          text: "Number of Students",
          display: true
        },
        ticks: {
          callback: function(value) {
            return value;
          },
        },
        beginAtZero: true,
        steps: 20,
        stepvalue: 2,
        max: 400,
      }
    }
  },
});

const prog = document.getElementById('prog');
prog.addEventListener('change', selectchart)
function selectchart() {
  topDestinations.data.datasets[0].label = prog.options[prog.selectedIndex].text;
  topDestinations.data.datasets[0].data = prog.value.split(',');
  topDestinations.update();
}
if (window.matchMedia('(max-width: 480px)').matches) {
  topDestinations.canvas.style = 'max-height:350px';
  topDestinations.options.maintainAspectRatio = false;
  topDestinations.update();
}
